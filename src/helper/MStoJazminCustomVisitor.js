import MStoJazminParser from "@/grammar/translator/MStoJazmin/grammar/MStoJazminParser";
import LanguageVisitor from '@/grammar/LanguageVisitor';

export default class MStoJazminCustomVisitor extends LanguageVisitor {
	constructor() {
		super();
		this.stackLimit = 1;
		this.localsLimit = 0;
		this.labelCounter = 0;
		this.logs = [];
		this.variables = {};
		this.jazminCode = "";
	}

	// HELPER METHODS
	variableExist(variable_name) {
		return !!this.variables[variable_name];
	}

	getVariableIndex(ID) {
		return this.variables[ID] ? this.variables[ID].index : -1;
	}

	getVariableValue(ID) {
		return this.variables[ID].value;
	}

	declare(ID, VALUE) {
		let is_variable_defined = this.variableExist(ID);
		if (!is_variable_defined) {
			if (VALUE != undefined) {
				this.variables[ID] = { index: this.localsLimit, value: VALUE };
				this.jazminCode += `\nistore_${this.localsLimit}\n`;
			} else {
				this.variables[ID] = {
					index: this.localsLimit,
					value: undefined,
				};
			}
			this.localsLimit++;
		} else {
			this.logs.push({
				type: "error",
				header: "ERROR",
				text: `La declaracion de "${ID}" está repetida`,
			});
		}

		return ID;
	}

	generateLabel(label) {
		return label + this.labelCounter++;
	}

	// VISIT METHODS
	visitFile(ctx) {
		console.log(ctx.getText());
		this.visitChildren(ctx);
		console.log(this.variables);
		return this.jazminCode;
	}

	visitInit(ctx) {
		this.visit(ctx.logic());
		this.jazminCode += "\nreturn";
		this.jazminCode += "\n.end method";

		let header = `.class public JasminCode
.super java/lang/Object
.method public static main([Ljava/lang/String;)V
.limit stack ${this.stackLimit}
${this.localsLimit ? `.limit locals ${this.localsLimit}\n` : ""}`;

		this.jazminCode = header + this.jazminCode;
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
		const TYPE = ctx.TYPE().getText();
		const ID = ctx.ID().getText();
		const VARIABLE_PATTERN = /^[A-Za-z]([A-Za-z0-9-_]+)?/;
		const VALUE = ctx.value() ? this.visit(ctx.value()) : undefined;

		if (VARIABLE_PATTERN.test(ID)) {
			return this.declare(ID, VALUE);
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
		let VALUE = this.visit(ctx.value());
		const ID = ctx.ID().getText();
		const INDEX = this.getVariableIndex(ID);
		if (INDEX > -1) {
			this.variables[ID].value = VALUE;
			this.jazminCode += `\nistore_${INDEX}\n`;
		}
	}
	
	// Visit a parse tree produced by LanguageParser#mathAssign.
	visitMathAssign(ctx) {
		console.log("Assign");
		let VALUE = this.visit(ctx.value());
		const ID = ctx.ID().getText();
		const INDEX = this.getVariableIndex(ID);
		const OPERATOR = ctx.MATH_EQUALS().getText();

		if (INDEX > -1) {
			// this.variables[ID].value = VALUE;
			this.jazminCode += `\niload_${INDEX}`;
			switch (OPERATOR) {
				case '+=':
					this.jazminCode += '\niadd';
					break;
				
				case '-=':
					this.jazminCode += '\nisub';
					break;

				case '*=':
					this.jazminCode += '\nimul';
					break;

				case '/=':
					this.jazminCode += '\nidiv';
					break;

				case '%=':
					this.jazminCode += '\nirem';
					break;
			}
			this.jazminCode += `\nistore_${INDEX}\n`;
		}
	}


	visitMultDiv(ctx) {
		const operation_data = this.visitChildren(ctx);
		let SYMBOL = ctx.operation.type;
		this.stackLimit += 2;
		if (SYMBOL == MStoJazminParser.MULT) {
			this.jazminCode += `\nimul\n`;
			return "swap";
		}

		if (SYMBOL == MStoJazminParser.DIV) {
			this.jazminCode += `\nidiv\n`;
			return "swap";
		}

		if (SYMBOL == MStoJazminParser.MOD) {
			this.jazminCode += `\nirem\n`;
			return "swap";
		}
	}

	visitAddSub(ctx) {
		const operation_data = this.visitChildren(ctx);
		let SYMBOL = ctx.operation.type;
		this.stackLimit += 2;
		if (SYMBOL == MStoJazminParser.PLUS) {
			this.jazminCode += `\niadd\n`;
			return "swap";
		} else {
			this.jazminCode += `\nisub\n`;
			return "swap";
		}
	}

	visitIncrement(ctx) {
		console.log("Visitando incremento");
		const ID = ctx.ID().getText();

		console.log(ctx.PLUS().length > 0);
		if (this.getVariableIndex(ID) > -1) {
			let variable = this.variables[ID];
			if (ctx.PLUS().length > 0) {
				this.jazminCode += `\niinc ${variable.index} 1`;
				variable.value = variable.value + 1;
			} else {
				this.jazminCode += `\niinc ${variable.index} -1`;
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
			this.jazminCode += `\niload_${this.variables[ID].index}`;
			return this.variables[ID].value;
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
		let value;
		this.stackLimit++;
		if (ctx.getText().includes(".")) {
			value = parseFloat(ctx.getText());
			this.jazminCode += `\nldc ${value}`;
			return value;
		} else {
			value = Number(ctx.getText());
			this.jazminCode += `\nldc ${value}`;
			return value;
		}
	}

	visitLog(ctx) {
		console.log("log");
		const VALUE_HEADER = ctx.value().getText();
		const VALUE = this.visit(ctx.value());
		if (VALUE == "swap" || !isNaN(VALUE)) {
			this.jazminCode +=
				"\ninvokestatic java/lang/Integer/toString(I)Ljava/lang/String;";
			this.jazminCode +=
				"\ngetstatic java/lang/System/out Ljava/io/PrintStream;";
			this.jazminCode += `\nswap`;
		} else {
			this.stackLimit++;
			this.jazminCode +=
				"\ngetstatic java/lang/System/out Ljava/io/PrintStream;";
			this.jazminCode += `\nldc ${VALUE}`;
		}
		this.jazminCode +=
			"\ninvokevirtual java/io/PrintStream/println(Ljava/lang/String;)V\n";
	}

	visitParentheses(ctx) {
		console.log("parenteses");
		let visit = this.visitChildren(ctx);
		return visit[1];
	}

	visitChained_conditional(ctx) {
		console.log("Chained conditional");
		const endIfLabel = this.generateLabel("endIfLabel");
		// How many elements of conditions array will be skipped
		let skipThreshold = 1;

		// conditions array contains the metadata of every condition
		const conditions = [];

		// add if metadata at the start of the conditions array
		const [ifCondition, ifContent] = this.visit(ctx.conditional());
		conditions.push({
			instruction: ifCondition,
			content: ifContent,
		});

		// add elif metadata if exists
		if (ctx.conditional__elif()) {
			for (let elif of this.visit(ctx.conditional__elif())) {
				conditions.push({
					instruction: elif[0],
					content: elif[1],
					label: this.generateLabel("elifLabel"),
				});
			}
		}

		// add else metadata if exists
		let elseData = null;
		if (ctx.conditional__else()) {
			skipThreshold++;
			let elseLabel = this.generateLabel("elseLabel");
			const elseContent = this.visit(ctx.conditional__else());
			conditions.push({
				label: elseLabel,
			});

			elseData = {
				label: elseLabel,
				content: elseContent,
			};
		}

		// Set the end of the If as the last element of the condition array
		conditions.push({
			label: endIfLabel,
		});

		// Generate translated code
		for (let i = 0; i < conditions.length - skipThreshold; i++) {
			const condition = conditions[i];
			if (condition.label) {
				this.jazminCode += `\n${condition.label}:`;
			}
			const instruction = this.visit(condition.instruction);
			this.jazminCode += `\n${instruction} ${conditions[i + 1].label}`;
			this.visit(condition.content);
			this.jazminCode += `\ngoto ${endIfLabel}\n`;
		}

		if (elseData) {
			this.jazminCode += `\n${elseData.label}:`;
			this.visit(elseData.content);
		}

		this.jazminCode += `\n${endIfLabel}:`;
	}

	visitConditional__elif(ctx) {
		console.log("Conditional__elif");
		return this.visit(ctx.conditional());
	}

	visitConditional__else(ctx) {
		console.log("Conditional__else");
		return ctx.expression();
	}

	visitConditional(ctx) {
		console.log("Conditional");
		return [ctx.value(), ctx.expression()];
	}

	visitNormalCondition(ctx) {
		console.log("Condition");
		this.visit(ctx.value());
		let symbol = ctx.cond_sym.text;

		switch (symbol) {
			case ">":
				return "if_icmple";

			case "<":
				//2
				return "if_icmpge";

			case ">=":
				return "if_icmplt";

			case "<=":
				// 1
				return "if_icmpgt";

			case "||":
				return first_val || second_val;

			case "&&":
				return first_val && second_val;

			case "==":
				return "if_icmpne";

			case "!=":
				return "if_icmpeq";

			case "true":
				return true;

			case "false":
				return false;

			default:
				return false;
		}
	}

	visitParenthesesCondition(ctx) {
		console.log("PARENTHESES CONDITION");
		let result = this.visit(ctx.condition());
		return result;
	}

	visitLoop__while(ctx) {
		console.log("Visitando While");
		console.log("YES");
		const whileStartLabel = this.generateLabel("whileStartLabel");
		const whileEndLabel = this.generateLabel("whileEndLabel");
		this.jazminCode += `\n${whileStartLabel}:`;
		const instruction = this.visit(ctx.value());
		this.jazminCode += `\n${instruction} ${whileEndLabel}`;
		this.visit(ctx.expression());
		this.jazminCode += `\ngoto ${whileStartLabel}`;
		this.jazminCode += `\n${whileEndLabel}:`;
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
