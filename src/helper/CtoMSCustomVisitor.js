import CtoMSParser from '@/grammar/translator/CtoMS/grammar/translator/CtoMSParser';
import CtoMSVisitor from '@/grammar/translator/CtoMS/grammar/translator/CtoMSVisitor';


export default class CtoMSCustomVisitor extends CtoMSVisitor {
	constructor() {
		super();
		this.translatedCode = ""
	}

	visitFile(ctx) {
		this.visitChildren(ctx);
		return this.translatedCode
	}

	visitInit(ctx) {
		this.translatedCode += "start --> {"
		this.visit(ctx.logic());
		this.translatedCode += "\n}"
		return
	}

	visitLogic(ctx) {
		return this.visitChildren(ctx);
	}

	// Visit a parse tree produced by CtoMSParser#expression.
	visitExpression(ctx) {
		return this.visitChildren(ctx);
	  }
  
  
	  // Visit a parse tree produced by CtoMSParser#log.
	  visitLog(ctx) {
		let content = this.visit(ctx.value()) 
		this.translatedCode += `\nptr(${content})!`
		return
	  }

	  visitValue(ctx) {
		return ctx.getText();
	  }
  
  }