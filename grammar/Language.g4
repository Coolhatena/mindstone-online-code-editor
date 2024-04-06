grammar Language;
import CommonLexerRules;

file: init+;         

init: MAIN OPEN_CURL '\n'? logic '\n'? CLOSE_CURL;

logic:	expression*?;

expression: declaration SEMI?
	|	assign SEMI?
	| chained_conditional SEMI?
	//|	conditional SEMI?
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
	|	STRING								#valueAsChar
	|	CHAR								#valueAsChar
	|	ID									#valueAsID	
	|	FLOAT								#valueAsNumber
    |	INT									#valueAsNumber
    ;

chained_conditional: conditional conditional__elif* conditional__else?;

conditional: IF_PR OPEN_PARENTH condition CLOSE_PARENTH OPEN_CURL expression* CLOSE_CURL;

conditional__elif: ELSE_PR conditional;

conditional__else: ELSE_PR OPEN_CURL expression* CLOSE_CURL;

condition:	cond_sym=(COND_LOG|COND_MAT)
		|	value cond_sym=(COND_LOG|COND_MAT) value
		|	condition cond_sym=(COND_LOG|COND_MAT) condition
		;

MAIN: 'start -->';
TYPE: ('ent'|'pdec'|'ctr');	