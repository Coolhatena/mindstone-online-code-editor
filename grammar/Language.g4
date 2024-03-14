grammar Language;
import CommonLexerRules;

file: init+;         

init: MAIN OPEN_CURL '\n'? logic '\n'? CLOSE_CURL;

logic:	expression*?;

expression: declaration SEMI?
	|	assign SEMI?
	|	conditional SEMI?
	|	log SEMI?
	;

declaration:	TYPE ID (EQUALS value)? 				# validDeclaration
			|	TYPE id=(INV_ID|INT) (EQUALS value)? 	# invalidDeclaration
			;

assign: ID EQUALS value;

log: PRINT OPEN_PARENTH value CLOSE_PARENTH;

value:	OPEN_PARENTH value CLOSE_PARENTH 	#parentheses
	|	value operation=(MULT|DIV) value	#Multdiv
	|	value operation=(PLUS|MINUS) value	#PlusMinus
	|	ID									#valueAsID	
	|	FLOAT								#valueAsNumber
    |	INT									#valueAsNumber
	|	CHAR								#valueAsChar
    ;

conditional: IF_PR OPEN_PARENTH condition CLOSE_PARENTH OPEN_CURL expression* CLOSE_CURL;

condition: value cond_sym=(COND_LOG|COND_MAT) value;

MAIN: 'start -->';
TYPE: ('ent'|'pdec'|'ctr');	