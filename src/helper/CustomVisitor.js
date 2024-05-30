import LanguageParser from "@/grammar/LanguageParser";
import LanguageVisitor from "@/grammar/LanguageVisitor";

export default class CustomVisitor extends LanguageVisitor {
	constructor() {
		super();
		this.variables = {
			ent: [],
			pdec: [],
			ctr: [],
			bool: [],
		};
		this.logs = [];
		this.max_loop_time = 500;
	}

	
	// HELPER METHODS
	variableExist(variable_name) {
		let isVariableDefined = false;
		for (let key in this.variables) {
			if (isVariableDefined) {
				break;
			} else {
				isVariableDefined = !!this.variables[key].find(
					(variable) => variable.id === variable_name
				);
			}
		}

		return isVariableDefined;
	}


	getVariableType(variable_name) {
		let variable_type = undefined;

		for (let key in this.variables) {
			for (let variable of this.variables[key]) {
				if (variable.id == variable_name) {
					variable_type = key;
					break;
				}
			}

			if (variable_type) {
				break;
			}
		}

		return variable_type;
	}


	getVariableValue(variable_name, variable_type) {
		for (let variable of this.variables[variable_type]) {
			if (variable.id == variable_name) {
				return variable.value;
			}
		}

		return undefined;
	}


	assertTypeWithValue(type, value) {
		let isValid = false;
		switch (type) {
			case "ent":
				isValid = /(^[0-9]+$)|(^-[0-9]+$)/.test(value);
				break;

			case "pdec":
				isValid = /[0-9]+\.[0-9]+/.test(value);
				break;

			case "ctr":
				isValid = /^[a-zA-Z]$/.test(value);
				break;

			case "bool":
				isValid = /true|false/.test(value);
				break;

			default:
				this.logs.push({
					type: "error",
					header: "ERROR",
					text: `El tipo de dato "${type}" no existe`,
				});
				break;
		}

		return isValid;
	}


	declare(ctx) {
		const TYPE = ctx.TYPE().getText();
		const ID = ctx.ID().getText();

		let is_variable_defined = this.variableExist(ID);
		if (!is_variable_defined) {
			this.variables[TYPE].push({ id: ID, value: undefined });
		} else {
			this.logs.push({
				type: "error",
				header: "ERROR",
				text: `La declaracion de "${ID}" está repetida`,
			});
		}

		return [TYPE, ID];
	}


	declareAndAssign(ctx) {
		const TYPE = ctx.TYPE().getText();
		const ID = ctx.ID().getText();

		let is_variable_defined = this.variableExist(ID);
		if (!is_variable_defined) {
			const VALUE = this.visit(ctx.value());
			if (this.assertTypeWithValue(TYPE, VALUE)) {
				this.variables[TYPE].push({ id: ID, value: VALUE });
			} else {
				this.logs.push({
					type: "error",
					header: "ERROR",
					text: `No se puede asignar el valor "${VALUE}" al tipo de dato "${TYPE}"`,
				});
			}
		} else {
			this.logs.push({
				type: "error",
				header: "ERROR",
				text: `La declaracion de "${ID}" está repetida`,
			});
		}

		return [TYPE, ID];
	}


	assign(ID, VALUE, OPERATOR = '=') {
		console.log("Assign");
		const TYPE = this.getVariableType(ID);

		if (TYPE) {
			if (this.assertTypeWithValue(TYPE, VALUE)) {
				let variable = this.variables[TYPE].find(
					(variable) => variable.id === ID
				);

				switch (OPERATOR) {
					case '=':
						variable.value = VALUE;
						break;

					case '+=':
						variable.value = variable.value + VALUE;
						break;
					
					case '-=':
						variable.value = variable.value - VALUE;
						break;

					case '*=':
						variable.value = variable.value * VALUE;
						break;

					case '/=':
						variable.value = variable.value / VALUE;
						break;

					case '%=':
						variable.value = variable.value % VALUE;
						break;
				}
				
			} else {
				this.logs.push({
					type: "error",
					header: "ERROR",
					text: `Cant assign "${VALUE}" to type "${TYPE}"`,
				});
			}
		} else {
			this.logs.push({
				type: "error",
				header: "ERROR",
				text: `Variable "${ID}" is not defined`,
			});
		}

		return true;
	}

	// VISIT METHODS
	visitFile(ctx) {
		console.log(ctx.getText());
		this.visitChildren(ctx);
		return [this.variables, this.logs];
	}

	
	visitExpression(ctx) {
		console.log("Expresion");
		console.log(ctx.getText());
		if (ctx.loop__for()) return this.visitChildren(ctx);
		if (ctx.loop__while()) return this.visitChildren(ctx);
		if (ctx.loop__do_while()) return this.visitChildren(ctx);
		if (ctx.chained_conditional()) return this.visitChildren(ctx);

		const SEMI = ctx.SEMI();
		if (!SEMI) {
			this.logs.push({
				type: "error",
				header: "ERROR",
				text: `Missing EOL "!" on line ${ctx.start.line}.`,
			});
		}

		return this.visitChildren(ctx);
	}

	visitDeclaration(ctx) {
		console.log("Declaration");
		let ID = ctx.ID().getText();
		let VARIABLE_PATTERN = /^[A-Za-z]([A-Za-z0-9-_]+)?/;

		if (VARIABLE_PATTERN.test(ID)) {
			let result;
			if (ctx.EQUALS()) {
				result = this.declareAndAssign(ctx);
			} else {
				result = this.declare(ctx);
			}

			return result;
		} else {
			const TYPE = ctx.TYPE().getText();
			this.logs.push({
				type: "error",
				header: "ERROR",
				text: `ID "${ID}" is not a valid identifier`,
			});

			return [TYPE, ID];
		}
	}

	// Visit a parse tree produced by LanguageParser#normalAssign.
	visitNormalAssign(ctx) {
		console.log("Assign");
		const ID = ctx.ID().getText();
		const VALUE = this.visit(ctx.value());
		
		return this.assign(ID, VALUE);
	}
	
	
	// Visit a parse tree produced by LanguageParser#mathAssign.
	visitMathAssign(ctx) {
		console.log("Assign");
		const ID = ctx.ID().getText();
		const VALUE = this.visit(ctx.value());
		const OPERATOR = ctx.MATH_EQUALS().getText();
		
		return this.assign(ID, VALUE, OPERATOR);
	}
	

	visitMultDiv(ctx) {
		const operation_data = this.visitChildren(ctx);
		let SYMBOL = ctx.operation.type;
		if (SYMBOL == LanguageParser.MULT) {
			return operation_data[0] * operation_data[2];
		}
		
		if(SYMBOL == LanguageParser.DIV){
			return operation_data[0] / operation_data[2];
		}

		if(SYMBOL == LanguageParser.MOD){
			return operation_data[0] % operation_data[2];
		}
	}

	
	visitAddSub(ctx) {
		const operation_data = this.visitChildren(ctx);
		let SYMBOL = ctx.operation.type;
		if (SYMBOL == LanguageParser.PLUS) {
			return operation_data[0] + operation_data[2];
		} else {
			return operation_data[0] - operation_data[2];
		}
	}


	visitSignNumbers(ctx) {
		let sign = ctx.operation.text;
		let number = this.visit(ctx.value());
		return Number(`${sign}${number}`);
	}


	visitIncrement(ctx) {
		console.log("Visitando incremento");
		const ID = ctx.ID().getText();
		const TYPE = this.getVariableType(ID);

		console.log(ctx.PLUS().length > 0);
		if (TYPE) {
			let variable = this.variables[TYPE].find(
				(variable) => variable.id === ID
			);
			if (ctx.PLUS().length > 0) {
				variable.value = variable.value + 1;
			} else {
				variable.value = variable.value - 1;
			}
		} else {
			this.logs.push({
				type: "error",
				header: "ERROR",
				text: `Variable "${ID}" is not defined`,
			});
		}

		return this.visitChildren(ctx);
	}

	
	visitValueAsID(ctx) {
		console.log("ValueasID");
		const ID = ctx.ID().getText();
		if (this.variableExist(ID)) {
			const TYPE = this.getVariableType(ID);
			return this.getVariableValue(ID, TYPE);
		}

		this.logs.push({
			type: "error",
			header: "ERROR",
			text: `Variable "${ID}" is not defined`,
		});

		return undefined;
	}

	
	visitValueAsChar(ctx) {
		console.log("Valueaschar");
		return ctx.getText();
	}

	
	visitValueAsNumber(ctx) {
		console.log("ValueAsnumber");
		if (ctx.getText().includes(".")) {
			if (/\.0$/.test(ctx.getText())) {
				this.logs.push({
					type: "warning",
					header: "WARNING",
					text: "The decimal values with '.0' are integers, use the correct data type",
				});
			}

			return parseFloat(ctx.getText());
		}

		return Number(ctx.getText());
	}

	
	visitLog(ctx) {
		console.log("log");
		const VALUE_HEADER = ctx.value().getText();
		const VALUE = this.visit(ctx.value());
		this.logs.push({
			type: "log",
			header: `Line ${ctx.start.line}`,
			text: `${VALUE}`,
		});

		return undefined;
	}

	
	visitParentheses(ctx) {
		console.log("parenteses");
		let visit = this.visitChildren(ctx);
		return visit[1];
	}

	
	visitChained_conditional(ctx) {
		console.log("Chained conditional");
		let isIfTrue = this.visit(ctx.conditional());

		if (!isIfTrue) {
			const elifs = ctx.conditional__elif();
			let isElifTrue = false;
			for (let i = 0; i < elifs.length; i++) {
				isElifTrue = this.visit(elifs[i]);
				if (isElifTrue) break;
			}

			if (!isElifTrue && ctx.conditional__else()) {
				this.visit(ctx.conditional__else());
			}
		}

		return null;
	}

	
	visitConditional__elif(ctx) {
		console.log("Conditional__elif");
		return this.visit(ctx.conditional());
	}

	
	visitConditional__else(ctx) {
		console.log("Conditional__else");
		this.visit(ctx.expression());
		return null;
	}

	
	visitConditional(ctx) {
		console.log("Conditional");
		if (!ctx.value()) return false;

		let condition_result = this.visit(ctx.value());
		if (condition_result) {
			this.visit(ctx.expression());
		}
		return condition_result;
	}

	
	visitNormalCondition(ctx) {
		console.log("Condition");
		let [first_val, second_val] = this.visit(ctx.value());
		let symbol = ctx.cond_sym.text;

		switch (symbol) {
			case ">":
				return first_val > second_val;

			case "<":
				return first_val < second_val;

			case ">=":
				return first_val >= second_val;

			case "<=":
				return first_val <= second_val;

			case "||":
				return first_val || second_val;

			case "&&":
				return first_val && second_val;

			case "==":
				return first_val == second_val;

			case "!=":
				return first_val != second_val;

			case "true":
				return true;

			case "false":
				return false;

			default:
				return false;
		}
	}

	// Visit a parse tree produced by LanguageParser#compCondition.
	visitCompCondition(ctx) {
		console.log("comp Condition");
		let [first_val, second_val] = this.visit(ctx.value());
		let symbol = ctx.cond_sym.text;

		switch (symbol) {
			case "||":
				return first_val || second_val;

			case "&&":
				return first_val && second_val;
		}
	}

	
	visitParenthesesCondition(ctx) {
		console.log("PARENTHESES CONDITION");
		let result = this.visit(ctx.condition());
		return result;
	}

	
	visitLoop__while(ctx) {
		console.log("Visitando While");
		if (!ctx.value()) return false;
		let condition = this.visit(ctx.value());
		let time = performance.now();
		while (condition) {
			this.visit(ctx.expression());
			condition = this.visit(ctx.value());
			if (performance.now() - time > this.max_loop_time) {
				this.logs.push({
					type: "warning",
					header: "WARNING",
					text: "Posible infinite loop detected, stopping loop...",
				});
				break;
			}
		}
		return condition;
	}


	visitLoop__do_while(ctx) {
		console.log("Visitando do while");
		this.visit(ctx.expression());
		if (!ctx.value()) return false;
		let condition = this.visit(ctx.value());
		let time = performance.now();
		while (condition) {
			this.visit(ctx.expression());
			condition = this.visit(ctx.value());
			if (performance.now() - time > this.max_loop_time) {
				this.logs.push({
					type: "warning",
					header: "WARNING",
					text: "Posible infinite loop detected, stopping loop...",
				});
				break;
			}
		}
		return condition;
	}

	visitLoop__for(ctx) {
		console.log("Visitando For");
		if (!ctx.declaration()) return false;
		if (!ctx.value()) return false;
		if (!ctx.increment()) return false;

		this.visit(ctx.declaration());
		let condition = this.visit(ctx.value());
		let time = performance.now();
		while (condition) {
			this.visit(ctx.expression());
			this.visit(ctx.increment());
			condition = this.visit(ctx.value());

			if (performance.now() - time > this.max_loop_time) {
				this.logs.push({
					type: "warning",
					header: "WARNING",
					text: "Posible infinite loop detected, stopping loop...",
				});
				break;
			}
		}
		return condition;
	}
}
