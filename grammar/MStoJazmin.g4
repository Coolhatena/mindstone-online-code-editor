grammar MStoJazmin;
import CommonLexerRules;

file: init+;         

init: MAIN OPEN_CURL '\n'? logic '\n'? CLOSE_CURL;

logic:	expression*?;

expression: declaration SEMI?
	|	assign SEMI?
	|	chained_conditional SEMI?
	|	loop__while SEMI?
	|	loop__do_while SEMI?
	|	loop__for SEMI?
	|	log SEMI?
	|	increment SEMI?
	;

declaration: TYPE ID (EQUALS value)?;

assign: ID EQUALS value;

log: PRINT OPEN_PARENTH value CLOSE_PARENTH;

value:	OPEN_PARENTH value CLOSE_PARENTH 			#parentheses
	|	value operation=(MULT|DIV|MOD) value		#multDiv
	|	value operation=(PLUS|SUB) value			#addSub
	|	operation=(PLUS|SUB) value					#signNumbers
	|	cond_sym=(COND_LOG|COND_MAT)				#normalCondition
	|	value cond_sym=(COND_LOG|COND_MAT) value	#normalCondition
	|	STRING										#valueAsChar
	|	CHAR										#valueAsChar
	|	FLOAT										#valueAsNumber
    |	INT											#valueAsNumber
	|	ID											#valueAsID	
    ;

increment: ID (PLUS PLUS | SUB SUB);

chained_conditional: conditional conditional__elif* conditional__else?;

conditional: IF_PR OPEN_PARENTH value CLOSE_PARENTH OPEN_CURL expression* CLOSE_CURL;

conditional__elif: ELSE_PR conditional;

conditional__else: ELSE_PR OPEN_CURL expression* CLOSE_CURL;

loop__while: WHILE_PR OPEN_PARENTH value CLOSE_PARENTH OPEN_CURL expression* CLOSE_CURL;

loop__for: FOR_PR OPEN_PARENTH declaration SEMI value SEMI increment SEMI CLOSE_PARENTH OPEN_CURL expression* CLOSE_CURL;

loop__do_while: DO_PR OPEN_CURL expression* CLOSE_CURL WHILE_PR OPEN_PARENTH value CLOSE_PARENTH;

MAIN: 'start -->';
TYPE: ('ent'|'pdec'|'ctr'|'bool');	