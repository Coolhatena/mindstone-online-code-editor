lexer grammar CreservedWords;

OPEN_PARENTH	: '(';
CLOSE_PARENTH	: ')';
OPEN_CURL		: '{';
CLOSE_CURL		: '}';
EQUALS			: '=';
PLUS			: '+';
MINUS			: '-'; 
MULT			: '*';
DOUBLE_QUOTE	: '"';
SEMI			: ';';
PRINT			: 'printf';
MAIN			: 'void main()';
ID				: [a-zA-Z]([a-zA-Z0-9_]+)?;
WS				: [ \t\r\n]+ -> skip;