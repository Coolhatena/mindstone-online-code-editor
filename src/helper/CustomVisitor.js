import LanguageVisitor from '@/grammar/LanguageVisitor';
import { rw_types } from './ReservedWords';
// This class defines a complete generic visitor for a parse tree produced by CalculadoraParser.

export default class CustomVisitor extends LanguageVisitor {
	constructor() {
		super();
		this.variables = {
			"ent": [],
			"pdec": [],
			"ctr": []
		};
		this.errors = [];
	}

	variableExist(variable_name){
		let isVariableDefined = false;
		for(let key in this.variables){
			if (isVariableDefined){
				break;
			} else {
				isVariableDefined = !!(this.variables[key].find(variable => variable.id === variable_name));
			}
		}

		return isVariableDefined;
	}

	getVariableType(variable_name){
		let variable_type = undefined;

		for(let key in this.variables){
			for(let variable of this.variables[key]){
				if (variable.id == variable_name){
					variable_type = key;
					break;
				}
			}

			if(variable_type){
				break;
			} 
		}

		return variable_type;
	}

	assertTypeWithValue(type, value){
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
				this.errors.push(`El tipo de dato "${type}" no existe`);
				break;
		}
		
		return isValid;
	}

	// Visit a parse tree produced by LanguageParser#file.
	visitFile(ctx) {
		this.visitChildren(ctx);
		return [this.variables, this.errors];
	}
  
  
	  // Visit a parse tree produced by LanguageParser#init.
	visitInit(ctx) {
		return this.visitChildren(ctx);
	}
  
  
	  // Visit a parse tree produced by LanguageParser#logic.
	visitLogic(ctx) {
		return this.visitChildren(ctx);
	}
	  
	  // Visit a parse tree produced by LanguageParser#validDeclaration.
	visitValidDeclaration(ctx) {
		const TYPE = ctx.type().getText();
		const ID = ctx.ID().getText();
		
		let is_variable_defined = this.variableExist(ID);
		if (!is_variable_defined){
			this.variables[TYPE].push({"id":ID, "value": undefined});
		} else {
			this.errors.push(`La declaracion de "${ID}" está repetida`);
		}

		return [TYPE, ID];
	}
  
	// Visit a parse tree produced by LanguageParser#validDeclarationWithAssign.
	visitValidDeclarationWithAssign(ctx) {
		console.log("Declare and assign")
		const TYPE = ctx.type().getText();
		const ID = ctx.ID().getText();
		const VALUE = ctx.value.text;
		// console.log(`Tipo: ${TYPE}, ID: ${ID}, Valor: ${VALUE}`)
		if(this.assertTypeWithValue(TYPE, VALUE)){
			this.variables[TYPE].push({"id":ID, value: VALUE});
		} else {
			this.errors.push(`No se puede asignar el valor "${VALUE}" al tipo de dato "${TYPE}"`);
		}

		return this.visitChildren(ctx);
	}

	// Visit a parse tree produced by LanguageParser#invalidDeclaration.
	visitInvalidDeclaration(ctx) {
		const TYPE = ctx.type().getText();
		const ID = ctx.id.text;
		this.errors.push(`El ID "${ID}" no es valido`);

		return [TYPE, ID];
	}

	// Visit a parse tree produced by LanguageParser#assign.
	visitAssign(ctx) {
		console.log("Assign")
		const ID = ctx.ID().getText();
		const VALUE = ctx.value.text;
		const TYPE = this.getVariableType(ID);

		if(TYPE){
			if(this.assertTypeWithValue(TYPE, VALUE)){
				let variable = this.variables[TYPE].find(variable => variable.id === ID);
				variable.value = VALUE;
			} else {
				this.errors.push(`No se puede asignar el valor "${VALUE}" al tipo de dato "${TYPE}"`);
			}
		} else {
			this.errors.push(`La variable "${ID}" no esta definida`);
		}

		return this.visitChildren(ctx);
	  }

}
