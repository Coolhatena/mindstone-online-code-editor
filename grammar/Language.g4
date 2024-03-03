grammar Language;
import CommonLexerRules;

file: init+;         

init: MAIN '{' logic '\n'? '}';

logic:	expression*;

expression: 
		declaration SEMI?
	|	assign SEMI?
	|	log SEMI?
	// |	error SEMI+?
	;

declaration:	TYPE ID (EQUALS value)? 				# validDeclaration
			|	TYPE id=(INV_ID|INT) (EQUALS value)? 	# invalidDeclaration
			;

assign: ID '=' value;

log: PRINT '('value')';

value:	'('value')' 						#parentheses
	|	value operation=(MULT|DIV) value	#Multdiv
	|	value operation=(PLUS|MINUS) value	#PlusMinus
	|	ID									#valueAsID	
	|	FLOAT								#valueAsNumber
    |	INT									#valueAsNumber
	|	CHAR								#valueAsChar
    ;

// error: .+?;

MAIN: 'start -->';
TYPE: ('ent'|'pdec'|'ctr');	