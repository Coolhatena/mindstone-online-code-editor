lexer grammar CommonLexerRules;

EQUALS  : '=';
PLUS	: '+';
MINUS	: '-'; 
PRINT	: 'ptr';
INT 	: [0-9]+ ;
FLOAT 	: [0-9]+[.][0-9]+;
CHAR	: [a-zA-Z];	
SEMI	: '!';
ID		: [a-zA-Z][a-zA-Z0-9]+;
INV_ID 	: [A-Za-z0-9+\-]+;
NEWLINE : '\r'? '\n';
WS	: [ \t\r\n]+ -> skip;