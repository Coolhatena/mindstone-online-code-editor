import CtoMSParser from "@/grammar/translator/CtoMS/grammar/translator/CtoMSParser";
import CtoMSVisitor from "@/grammar/translator/CtoMS/grammar/translator/CtoMSVisitor";

export default class CtoMSCustomVisitor extends CtoMSVisitor {
	constructor() {
		super();
		this.translatedCode = "";
	}

	translateType(type) {
		switch (type) {
			case "int":
				return "ent";
			case "float":
				return "pdec";
			case "char":
				return "ctr";
			default:
				return "";
		}
	}

	isElif(){
		let state = this.translatedCode
		let len = this.translatedCode.length
		console.log(state[len-4] + state[len-3] + state[len-2] + state[len-1])
		return "else" ==  state[len-4] + state[len-3] + state[len-2] + state[len-1]
	}

	visitFile(ctx) {
		this.visitChildren(ctx);
		return this.translatedCode;
	}

	visitInit(ctx) {
		this.translatedCode += "start --> {";
		this.visit(ctx.logic());
		this.translatedCode += "\n}";
		return;
	}

	visitLogic(ctx) {
		return this.visitChildren(ctx);
	}

	visitExpression(ctx) {
		console.log(this.visitChildren(ctx));
		return;
	}

	visitDeclaration(ctx) {
		const TYPE = ctx.TYPE().getText();
		let ID = ctx.ID() ? ctx.ID().getText() : ctx.id.text;

		if (ctx.EQUALS()) {
			let VALUE = this.visit(ctx.value());
			this.translatedCode += `\n${this.translateType(
				TYPE
			)} ${ID} = ${VALUE}!`;
		} else {
			this.translatedCode += `\n${this.translateType(TYPE)} ${ID}!`;
		}

		return;
	}

	visitAssign(ctx) {
		let ID = ctx.ID().getText();
		let VALUE = this.visit(ctx.value());
		this.translatedCode += `\n${ID} = ${VALUE}!`;

		return;
	}

	visitLog(ctx) {
		let content = this.visit(ctx.value());
		this.translatedCode += `\nptr(${content})!`;
		return ctx.getText();
	}

	// Visit a parse tree produced by CtoMSParser#chained_conditional.
	visitChained_conditional(ctx) {
		return this.visitChildren(ctx);
	}

	// Visit a parse tree produced by CtoMSParser#conditional.
	visitConditional(ctx) {
		let CONDITION = this.visit(ctx.condition());
		console.log(CONDITION)
		this.translatedCode += `${this.isElif() ? " if" : "\nif"}(${CONDITION}){`;	
		this.visit(ctx.expression())
		this.translatedCode += `\n}`;	
		return
	}

	// Visit a parse tree produced by CtoMSParser#conditional__elif.
	visitConditional__elif(ctx) {
		this.translatedCode += `\nelse`;	
		this.visit(ctx.conditional());
		return
	}

	// Visit a parse tree produced by CtoMSParser#conditional__else.
	visitConditional__else(ctx) {
		this.translatedCode += `\nelse {`;
		this.visit(ctx.expression())
		this.translatedCode += `\n}`;
		return
	}

	// Visit a parse tree produced by CtoMSParser#condition.
	visitCondition(ctx) {
		return ctx.getText();
	}

	visitValue(ctx) {
		return ctx.getText();
	}
}
