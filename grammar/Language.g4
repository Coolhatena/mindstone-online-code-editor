grammar Language;
import CommonLexerRules;

file: init+;         

init: MAIN OPEN_CURL '\n'? logic '\n'? CLOSE_CURL;

logic:	expression*'\n'?;

expression: declaration SEMI?
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

MAIN: 'start -->';
TYPE: ('ent'|'pdec'|'ctr');	