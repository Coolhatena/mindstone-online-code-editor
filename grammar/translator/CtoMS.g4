grammar CtoMS;
import CreservedWords;

file: init+;         

init: MAIN OPEN_CURL '\n'? logic '\n'? CLOSE_CURL;

logic:	expression*?;

expression: 
			log SEMI
		|	declaration SEMI
		|	assign SEMI
		|	increment SEMI
		|	chained_conditional
		|	loop__while
		|	loop__do_while
		;

declaration:	TYPE ID (EQUALS value)? 
			|	TYPE id=(INV_ID|INT) (EQUALS value)?
			;

assign: ID EQUALS value;

increment: ID (PLUS PLUS | SUB SUB);

log: PRINT OPEN_PARENTH value CLOSE_PARENTH;

chained_conditional: conditional conditional__elif* conditional__else?;

conditional: IF_PR OPEN_PARENTH value CLOSE_PARENTH OPEN_CURL expression* CLOSE_CURL;

conditional__elif: ELSE_PR conditional;

conditional__else: ELSE_PR OPEN_CURL expression* CLOSE_CURL;

loop__while: WHILE_PR OPEN_PARENTH value CLOSE_PARENTH OPEN_CURL expression* CLOSE_CURL;

loop__do_while: DO_PR OPEN_CURL expression* CLOSE_CURL WHILE_PR OPEN_PARENTH value CLOSE_PARENTH;

value:	OPEN_PARENTH value CLOSE_PARENTH
	|	value operation=(MULT|DIV|PLUS|SUB|MOD) value	
	|	value cond_sym=(COND_LOG|COND_MAT) value
	|	cond_sym=(COND_LOG|COND_MAT)
	|	STRING								
	|	CHAR								
	|	ID										
	|	FLOAT								
    |	INT									
    ;

TYPE: ('int'|'float'|'char');	