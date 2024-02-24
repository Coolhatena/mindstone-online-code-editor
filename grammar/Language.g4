grammar Language;
import CommonLexerRules;

file: init+;         

init: MAIN '{' logic '\n'? '}';

logic:	expression*;

expression: 
		declaration
	|	assign
	|	log
	;

declaration:	TYPE ID (EQUALS value)? SEMI+?					# validDeclaration
			|	TYPE id=(INV_ID|INT) (EQUALS value)? SEMI+? 	# invalidDeclaration
			;

assign: ID '=' value SEMI+;

log: PRINT '('value')' SEMI+;

value:
		value operation=(PLUS|MINUS) value	#PlusMinus
	|	ID									#valueAsID	
	|	FLOAT								#valueAsNumber
    |	INT									#valueAsNumber
	|	CHAR								#valueAsChar
    ;


MAIN: 'start -->';
TYPE: ('ent'|'pdec'|'ctr');	