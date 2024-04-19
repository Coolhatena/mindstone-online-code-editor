grammar CtoMS;
import CreservedWords;

file: init+;         

init: MAIN OPEN_CURL '\n'? logic '\n'? CLOSE_CURL;

logic:	expression*?;

expression: log SEMI?;

log: PRINT OPEN_PARENTH value CLOSE_PARENTH;

value:	OPEN_PARENTH value CLOSE_PARENTH
	|	value operation=(MULT|DIV) value	
	|	value operation=(PLUS|MINUS) value	
	|	STRING								
	|	CHAR								
	|	ID										
	|	FLOAT								
    |	INT									
    ;
