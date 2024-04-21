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
		console.log("Expression");
		return this.visitChildren(ctx);
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
		this.visit(ctx.conditional())
		if(ctx.conditional__elif()) this.visit(ctx.conditional__elif())
		if(ctx.conditional__else()) this.visit(ctx.conditional__else())
		this.translatedCode += `!`;
	}

	// Visit a parse tree produced by CtoMSParser#conditional.
	visitConditional(ctx) {
		let CONDITION = this.visit(ctx.value());
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

	visitValue(ctx) {
		return ctx.getText();
	}
}
