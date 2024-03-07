import LanguageParser from "@/grammar/LanguageParser";
import LanguageVisitor from "@/grammar/LanguageVisitor";
// This class defines a complete generic visitor for a parse tree produced by CalculadoraParser.

export default class CustomVisitor extends LanguageVisitor {
	constructor() {
		super();
		this.variables = {
			ent: [],
			pdec: [],
			ctr: [],
		};
		this.logs = [];
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
				isValid = /^[0-9]+$/.test(value);
				break;

			case "pdec":
				isValid = /[0-9]+\.[0-9]+/.test(value);
				break;

			case "ctr":
				isValid = /^[a-zA-Z]$/.test(value);
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

	// VISIT METHODS
	// Visit a parse tree produced by LanguageParser#file.
	visitFile(ctx) {
		this.visitChildren(ctx);
		return [this.variables, this.logs];
	}

	// Visit a parse tree produced by LanguageParser#expression.
	visitExpression(ctx) {
		console.log("Expresion");
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

	// Visit a parse tree produced by LanguageParser#validDeclaration.
	visitValidDeclaration(ctx) {
		console.log("ValidDec");
		let result;
		if (ctx.EQUALS()) {
			result = this.declareAndAssign(ctx);
		} else {
			result = this.declare(ctx);
		}

		return result;
	}

	// Visit a parse tree produced by LanguageParser#invalidDeclaration.
	visitInvalidDeclaration(ctx) {
		console.log("InvalidDec");
		const TYPE = ctx.TYPE().getText();
		const ID = ctx.id.text;
		this.logs.push({
			type: "error",
			header: "ERROR",
			text: `ID "${ID}" is not a valid identifier`,
		});

		return [TYPE, ID];
	}

	// Visit a parse tree produced by LanguageParser#assign.
	visitAssign(ctx) {
		console.log("Assign");
		const ID = ctx.ID().getText();
		const VALUE = this.visit(ctx.value());
		const TYPE = this.getVariableType(ID);

		if (TYPE) {
			if (this.assertTypeWithValue(TYPE, VALUE)) {
				let variable = this.variables[TYPE].find(
					(variable) => variable.id === ID
				);
				variable.value = VALUE;
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

		return this.visitChildren(ctx);
	}

	// Visit a parse tree produced by LanguageParser#Multdiv.
	visitMultdiv(ctx) {
		console.log("Multdiv");
		const operation_data = this.visitChildren(ctx);
		return ctx.operation.type == LanguageParser.MULT
			? operation_data[0] * operation_data[2]
			: operation_data[0] / operation_data[2];
	}

	// Visit a parse tree produced by LanguageParser#PlusMinus.
	visitPlusMinus(ctx) {
		console.log("plusminus");
		const operation_data = this.visitChildren(ctx);
		return ctx.operation.type == LanguageParser.PLUS
			? operation_data[0] + operation_data[2]
			: operation_data[0] - operation_data[2];
	}

	// Visit a parse tree produced by LanguageParser#valueAsID.
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

	// Visit a parse tree produced by LanguageParser#valueAsChar.
	visitValueAsChar(ctx) {
		console.log("Valueaschar");
		return ctx.getText();
	}

	// Visit a parse tree produced by LanguageParser#valueAsNumber.
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

	// Visit a parse tree produced by LanguageParser#log.
	visitLog(ctx) {
		console.log("log");
		const VALUE_HEADER = ctx.value().getText();
		const VALUE = this.visit(ctx.value());
		this.logs.push({
			type: "log",
			header: `${VALUE_HEADER}`,
			text: `${VALUE}`,
		});

		return undefined;
	}

	// Visit a parse tree produced by CalculadoraParser#parentheses.
	visitParentheses(ctx) {
		console.log("parenteses");
		let visit = this.visitChildren(ctx);
		return visit[1];
	}

	// Visit a parse tree produced by LanguageParser#anything_else.
	visitAnything_else(ctx) {
		this.logs.push({
			type: "error",
			header: "ERROR",
			text: `Syntax error on line ${ctx.start.line}.`,
		});
	  }
}
