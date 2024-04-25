// Generated from ./grammar/translator/CtoMS.g4 by ANTLR 4.13.1
// jshint ignore: start
import antlr4 from 'antlr4';

// This class defines a complete generic visitor for a parse tree produced by CtoMSParser.

export default class CtoMSVisitor extends antlr4.tree.ParseTreeVisitor {

	// Visit a parse tree produced by CtoMSParser#file.
	visitFile(ctx) {
	  return this.visitChildren(ctx);
	}


	// Visit a parse tree produced by CtoMSParser#init.
	visitInit(ctx) {
	  return this.visitChildren(ctx);
	}


	// Visit a parse tree produced by CtoMSParser#logic.
	visitLogic(ctx) {
	  return this.visitChildren(ctx);
	}


	// Visit a parse tree produced by CtoMSParser#expression.
	visitExpression(ctx) {
	  return this.visitChildren(ctx);
	}


	// Visit a parse tree produced by CtoMSParser#declaration.
	visitDeclaration(ctx) {
	  return this.visitChildren(ctx);
	}


	// Visit a parse tree produced by CtoMSParser#assign.
	visitAssign(ctx) {
	  return this.visitChildren(ctx);
	}


	// Visit a parse tree produced by CtoMSParser#log.
	visitLog(ctx) {
	  return this.visitChildren(ctx);
	}


	// Visit a parse tree produced by CtoMSParser#chained_conditional.
	visitChained_conditional(ctx) {
	  return this.visitChildren(ctx);
	}


	// Visit a parse tree produced by CtoMSParser#conditional.
	visitConditional(ctx) {
	  return this.visitChildren(ctx);
	}


	// Visit a parse tree produced by CtoMSParser#conditional__elif.
	visitConditional__elif(ctx) {
	  return this.visitChildren(ctx);
	}


	// Visit a parse tree produced by CtoMSParser#conditional__else.
	visitConditional__else(ctx) {
	  return this.visitChildren(ctx);
	}


	// Visit a parse tree produced by CtoMSParser#loop__while.
	visitLoop__while(ctx) {
	  return this.visitChildren(ctx);
	}


	// Visit a parse tree produced by CtoMSParser#loop__do_while.
	visitLoop__do_while(ctx) {
	  return this.visitChildren(ctx);
	}


	// Visit a parse tree produced by CtoMSParser#value.
	visitValue(ctx) {
	  return this.visitChildren(ctx);
	}



}