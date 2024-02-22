lexer grammar CommonLexerRules;

INT 	: [0-9]+ ;
FLOAT 	: [0-9]+[.][0-9]+;
CHAR	: [a-zA-Z];	
SEMI	: '!';
ID		: [a-zA-Z]+;
INV_ID 	: [A-Za-z0-9+\-]+;
NEWLINE : '\r'? '\n';
SPACES	: [ \t\r\n]+ -> skip;