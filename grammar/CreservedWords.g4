lexer grammar CreservedWords;

OPEN_PARENTH	: '(';
CLOSE_PARENTH	: ')';
OPEN_CURL		: '{';
CLOSE_CURL		: '}';
EQUALS			: '=';
MATH_EQUALS		: ('+='|'-='|'*='|'/='|'%=');
PLUS			: '+';
SUB				: '-';
MULT			: '*';
DIV				: '/'; 
MOD				: '%';
DOUBLE_QUOTE	: '"';
SEMI			: ';';
IF_PR			: 'if';
ELSE_PR			: 'else';
WHILE_PR		: 'while';
DO_PR			: 'do';
COND_MAT		: ('<'|'>'|'<='|'>=');
COND_LOG		: ('||'|'&&'|'=='|'!='|'true'|'false');
PRINT			: 'printf';
MAIN			: 'void main()';
CHAR			: '"'[a-zA-Z ]'"';
INT 			: [0-9]+ ;
FLOAT 			: [0-9]+[.][0-9]+;
STRING			: '"'.+?'"';
ID				: [A-Za-z0-9_]+;
// ID				: [a-zA-Z]([a-zA-Z0-9_]+)?;
// INV_ID 			: [A-Za-z0-9]+;
WS				: [ \t\r\n]+ -> skip;