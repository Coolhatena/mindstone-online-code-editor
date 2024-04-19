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
		let content = this.visit(ctx.logic());
		console.log(content);
		this.translatedCode += `\n${content}`
		this.translatedCode += "\n}"
		return
	}

	visitLogic(ctx) {
		return ctx.getText();
	}

}