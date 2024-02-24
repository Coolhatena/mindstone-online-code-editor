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


	// Visit a parse tree produced by LanguageParser#validDeclaration.
	visitValidDeclaration(ctx) {
	  return this.visitChildren(ctx);
	}


	// Visit a parse tree produced by LanguageParser#invalidDeclaration.
	visitInvalidDeclaration(ctx) {
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


	// Visit a parse tree produced by LanguageParser#PlusMinus.
	visitPlusMinus(ctx) {
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


	// Visit a parse tree produced by LanguageParser#valueAsNumber.
	visitValueAsNumber(ctx) {
	  return this.visitChildren(ctx);
	}


	// Visit a parse tree produced by LanguageParser#valueAsID.
	visitValueAsID(ctx) {
	  return this.visitChildren(ctx);
	}


	// Visit a parse tree produced by LanguageParser#Multdiv.
	visitMultdiv(ctx) {
	  return this.visitChildren(ctx);
	}


	// Visit a parse tree produced by LanguageParser#error.
	visitError(ctx) {
	  return this.visitChildren(ctx);
	}



}