grammar Language;
import CommonLexerRules;

file: init+;         

init: MAIN '{' logic '\n'? '}';

logic:	expression*;

expression: 
		declaration
	|	assign
	;

declaration:	type ID SEMI+								# validDeclaration
			|	type ID '=' value=(INT|CHAR|FLOAT) SEMI+	# validDeclarationWithAssign
			|	type id=(INV_ID|INT) SEMI+ 					# invalidDeclaration
			;

assign: ID '=' value=(INT|CHAR|FLOAT) SEMI+;

type: 
				'ent'
			|	'pdec'
			|	'ctr'
			;	

MAIN: 'start -->';