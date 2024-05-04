// Generated from ./grammar/Language.g4 by ANTLR 4.13.1
// jshint ignore: start
import antlr4 from 'antlr4';

// This class defines a complete generic visitor for a parse tree produced by LanguageParser.

export default class LanguageVisitor extends antlr4.tree.ParseTreeVisitor {

	// Visit a parse tree produced by LanguageParser#file.
	visitFile(ctx) {
	  return this.visitChildren(ctx);
	}


	// Visit a parse tree produced by LanguageParser#init.
	visitInit(ctx) {
	  return this.visitChildren(ctx);
	}


	// Visit a parse tree produced by LanguageParser#logic.
	visitLogic(ctx) {
	  return this.visitChildren(ctx);
	}


	// Visit a parse tree produced by LanguageParser#expression.
	visitExpression(ctx) {
	  return this.visitChildren(ctx);
	}


	// Visit a parse tree produced by LanguageParser#declaration.
	visitDeclaration(ctx) {
	  return this.visitChildren(ctx);
	}


	// Visit a parse tree produced by LanguageParser#assign.
	visitAssign(ctx) {
	  return this.visitChildren(ctx);
	}


	// Visit a parse tree produced by LanguageParser#log.
	visitLog(ctx) {
	  return this.visitChildren(ctx);
	}


	// Visit a parse tree produced by LanguageParser#parentheses.
	visitParentheses(ctx) {
	  return this.visitChildren(ctx);
	}


	// Visit a parse tree produced by LanguageParser#valueAsChar.
	visitValueAsChar(ctx) {
	  return this.visitChildren(ctx);
	}


	// Visit a parse tree produced by LanguageParser#multDiv.
	visitMultDiv(ctx) {
	  return this.visitChildren(ctx);
	}


	// Visit a parse tree produced by LanguageParser#normalCondition.
	visitNormalCondition(ctx) {
	  return this.visitChildren(ctx);
	}


	// Visit a parse tree produced by LanguageParser#addSub.
	visitAddSub(ctx) {
	  return this.visitChildren(ctx);
	}


	// Visit a parse tree produced by LanguageParser#valueAsNumber.
	visitValueAsNumber(ctx) {
	  return this.visitChildren(ctx);
	}


	// Visit a parse tree produced by LanguageParser#signNumbers.
	visitSignNumbers(ctx) {
	  return this.visitChildren(ctx);
	}


	// Visit a parse tree produced by LanguageParser#valueAsID.
	visitValueAsID(ctx) {
	  return this.visitChildren(ctx);
	}


	// Visit a parse tree produced by LanguageParser#increment.
	visitIncrement(ctx) {
	  return this.visitChildren(ctx);
	}


	// Visit a parse tree produced by LanguageParser#chained_conditional.
	visitChained_conditional(ctx) {
	  return this.visitChildren(ctx);
	}


	// Visit a parse tree produced by LanguageParser#conditional.
	visitConditional(ctx) {
	  return this.visitChildren(ctx);
	}


	// Visit a parse tree produced by LanguageParser#conditional__elif.
	visitConditional__elif(ctx) {
	  return this.visitChildren(ctx);
	}


	// Visit a parse tree produced by LanguageParser#conditional__else.
	visitConditional__else(ctx) {
	  return this.visitChildren(ctx);
	}


	// Visit a parse tree produced by LanguageParser#loop__while.
	visitLoop__while(ctx) {
	  return this.visitChildren(ctx);
	}


	// Visit a parse tree produced by LanguageParser#loop__for.
	visitLoop__for(ctx) {
	  return this.visitChildren(ctx);
	}


	// Visit a parse tree produced by LanguageParser#loop__do_while.
	visitLoop__do_while(ctx) {
	  return this.visitChildren(ctx);
	}



}