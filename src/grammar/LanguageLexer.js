// Generated from ./grammar/Language.g4 by ANTLR 4.13.1
// jshint ignore: start
import antlr4 from 'antlr4';


const serializedATN = [4,0,24,160,6,-1,2,0,7,0,2,1,7,1,2,2,7,2,2,3,7,3,2,
4,7,4,2,5,7,5,2,6,7,6,2,7,7,7,2,8,7,8,2,9,7,9,2,10,7,10,2,11,7,11,2,12,7,
12,2,13,7,13,2,14,7,14,2,15,7,15,2,16,7,16,2,17,7,17,2,18,7,18,2,19,7,19,
2,20,7,20,2,21,7,21,2,22,7,22,2,23,7,23,1,0,1,0,1,1,1,1,1,1,1,1,1,1,1,1,
1,1,1,1,1,1,1,1,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,3,2,72,8,2,1,3,1,
3,1,4,1,4,1,5,1,5,1,6,1,6,1,7,1,7,1,8,1,8,1,9,1,9,1,10,1,10,1,11,1,11,1,
11,1,11,1,12,1,12,1,13,1,13,1,13,1,14,4,14,100,8,14,11,14,12,14,101,1,15,
4,15,105,8,15,11,15,12,15,106,1,15,1,15,4,15,111,8,15,11,15,12,15,112,1,
16,1,16,4,16,117,8,16,11,16,12,16,118,3,16,121,8,16,1,17,1,17,1,18,1,18,
3,18,127,8,18,1,19,1,19,1,19,1,19,1,19,3,19,134,8,19,1,20,1,20,1,20,1,20,
1,20,1,20,3,20,142,8,20,1,21,4,21,145,8,21,11,21,12,21,146,1,22,3,22,150,
8,22,1,22,1,22,1,23,4,23,155,8,23,11,23,12,23,156,1,23,1,23,0,0,24,1,1,3,
2,5,3,7,4,9,5,11,6,13,7,15,8,17,9,19,10,21,11,23,12,25,13,27,14,29,15,31,
16,33,17,35,18,37,19,39,20,41,21,43,22,45,23,47,24,1,0,7,1,0,48,57,1,0,46,
46,2,0,65,90,97,122,4,0,48,57,65,90,95,95,97,122,2,0,60,60,62,62,5,0,43,
43,45,45,48,57,65,90,97,122,3,0,9,10,13,13,32,32,174,0,1,1,0,0,0,0,3,1,0,
0,0,0,5,1,0,0,0,0,7,1,0,0,0,0,9,1,0,0,0,0,11,1,0,0,0,0,13,1,0,0,0,0,15,1,
0,0,0,0,17,1,0,0,0,0,19,1,0,0,0,0,21,1,0,0,0,0,23,1,0,0,0,0,25,1,0,0,0,0,
27,1,0,0,0,0,29,1,0,0,0,0,31,1,0,0,0,0,33,1,0,0,0,0,35,1,0,0,0,0,37,1,0,
0,0,0,39,1,0,0,0,0,41,1,0,0,0,0,43,1,0,0,0,0,45,1,0,0,0,0,47,1,0,0,0,1,49,
1,0,0,0,3,51,1,0,0,0,5,71,1,0,0,0,7,73,1,0,0,0,9,75,1,0,0,0,11,77,1,0,0,
0,13,79,1,0,0,0,15,81,1,0,0,0,17,83,1,0,0,0,19,85,1,0,0,0,21,87,1,0,0,0,
23,89,1,0,0,0,25,93,1,0,0,0,27,95,1,0,0,0,29,99,1,0,0,0,31,104,1,0,0,0,33,
114,1,0,0,0,35,122,1,0,0,0,37,124,1,0,0,0,39,133,1,0,0,0,41,141,1,0,0,0,
43,144,1,0,0,0,45,149,1,0,0,0,47,154,1,0,0,0,49,50,5,10,0,0,50,2,1,0,0,0,
51,52,5,115,0,0,52,53,5,116,0,0,53,54,5,97,0,0,54,55,5,114,0,0,55,56,5,116,
0,0,56,57,5,32,0,0,57,58,5,45,0,0,58,59,5,45,0,0,59,60,5,62,0,0,60,4,1,0,
0,0,61,62,5,101,0,0,62,63,5,110,0,0,63,72,5,116,0,0,64,65,5,112,0,0,65,66,
5,100,0,0,66,67,5,101,0,0,67,72,5,99,0,0,68,69,5,99,0,0,69,70,5,116,0,0,
70,72,5,114,0,0,71,61,1,0,0,0,71,64,1,0,0,0,71,68,1,0,0,0,72,6,1,0,0,0,73,
74,5,40,0,0,74,8,1,0,0,0,75,76,5,41,0,0,76,10,1,0,0,0,77,78,5,123,0,0,78,
12,1,0,0,0,79,80,5,125,0,0,80,14,1,0,0,0,81,82,5,61,0,0,82,16,1,0,0,0,83,
84,5,43,0,0,84,18,1,0,0,0,85,86,5,45,0,0,86,20,1,0,0,0,87,88,5,42,0,0,88,
22,1,0,0,0,89,90,5,112,0,0,90,91,5,116,0,0,91,92,5,114,0,0,92,24,1,0,0,0,
93,94,5,47,0,0,94,26,1,0,0,0,95,96,5,105,0,0,96,97,5,102,0,0,97,28,1,0,0,
0,98,100,7,0,0,0,99,98,1,0,0,0,100,101,1,0,0,0,101,99,1,0,0,0,101,102,1,
0,0,0,102,30,1,0,0,0,103,105,7,0,0,0,104,103,1,0,0,0,105,106,1,0,0,0,106,
104,1,0,0,0,106,107,1,0,0,0,107,108,1,0,0,0,108,110,7,1,0,0,109,111,7,0,
0,0,110,109,1,0,0,0,111,112,1,0,0,0,112,110,1,0,0,0,112,113,1,0,0,0,113,
32,1,0,0,0,114,120,7,2,0,0,115,117,7,3,0,0,116,115,1,0,0,0,117,118,1,0,0,
0,118,116,1,0,0,0,118,119,1,0,0,0,119,121,1,0,0,0,120,116,1,0,0,0,120,121,
1,0,0,0,121,34,1,0,0,0,122,123,7,2,0,0,123,36,1,0,0,0,124,126,5,33,0,0,125,
127,5,10,0,0,126,125,1,0,0,0,126,127,1,0,0,0,127,38,1,0,0,0,128,134,7,4,
0,0,129,130,5,60,0,0,130,134,5,61,0,0,131,132,5,62,0,0,132,134,5,61,0,0,
133,128,1,0,0,0,133,129,1,0,0,0,133,131,1,0,0,0,134,40,1,0,0,0,135,136,5,
124,0,0,136,142,5,124,0,0,137,138,5,38,0,0,138,142,5,38,0,0,139,140,5,61,
0,0,140,142,5,61,0,0,141,135,1,0,0,0,141,137,1,0,0,0,141,139,1,0,0,0,142,
42,1,0,0,0,143,145,7,5,0,0,144,143,1,0,0,0,145,146,1,0,0,0,146,144,1,0,0,
0,146,147,1,0,0,0,147,44,1,0,0,0,148,150,5,13,0,0,149,148,1,0,0,0,149,150,
1,0,0,0,150,151,1,0,0,0,151,152,5,10,0,0,152,46,1,0,0,0,153,155,7,6,0,0,
154,153,1,0,0,0,155,156,1,0,0,0,156,154,1,0,0,0,156,157,1,0,0,0,157,158,
1,0,0,0,158,159,6,23,0,0,159,48,1,0,0,0,13,0,71,101,106,112,118,120,126,
133,141,146,149,156,1,6,0,0];


const atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

const decisionsToDFA = atn.decisionToState.map( (ds, index) => new antlr4.dfa.DFA(ds, index) );

export default class LanguageLexer extends antlr4.Lexer {

    static grammarFileName = "Language.g4";
    static channelNames = [ "DEFAULT_TOKEN_CHANNEL", "HIDDEN" ];
	static modeNames = [ "DEFAULT_MODE" ];
	static literalNames = [ null, "'\\n'", "'start -->'", null, "'('", "')'", 
                         "'{'", "'}'", "'='", "'+'", "'-'", "'*'", "'ptr'", 
                         "'/'", "'if'" ];
	static symbolicNames = [ null, null, "MAIN", "TYPE", "OPEN_PARENTH", "CLOSE_PARENTH", 
                          "OPEN_CURL", "CLOSE_CURL", "EQUALS", "PLUS", "MINUS", 
                          "MULT", "PRINT", "DIV", "IF_PR", "INT", "FLOAT", 
                          "ID", "CHAR", "SEMI", "COND_MAT", "COND_LOG", 
                          "INV_ID", "NEWLINE", "WS" ];
	static ruleNames = [ "T__0", "MAIN", "TYPE", "OPEN_PARENTH", "CLOSE_PARENTH", 
                      "OPEN_CURL", "CLOSE_CURL", "EQUALS", "PLUS", "MINUS", 
                      "MULT", "PRINT", "DIV", "IF_PR", "INT", "FLOAT", "ID", 
                      "CHAR", "SEMI", "COND_MAT", "COND_LOG", "INV_ID", 
                      "NEWLINE", "WS" ];

    constructor(input) {
        super(input)
        this._interp = new antlr4.atn.LexerATNSimulator(this, atn, decisionsToDFA, new antlr4.atn.PredictionContextCache());
    }
}

LanguageLexer.EOF = antlr4.Token.EOF;
LanguageLexer.T__0 = 1;
LanguageLexer.MAIN = 2;
LanguageLexer.TYPE = 3;
LanguageLexer.OPEN_PARENTH = 4;
LanguageLexer.CLOSE_PARENTH = 5;
LanguageLexer.OPEN_CURL = 6;
LanguageLexer.CLOSE_CURL = 7;
LanguageLexer.EQUALS = 8;
LanguageLexer.PLUS = 9;
LanguageLexer.MINUS = 10;
LanguageLexer.MULT = 11;
LanguageLexer.PRINT = 12;
LanguageLexer.DIV = 13;
LanguageLexer.IF_PR = 14;
LanguageLexer.INT = 15;
LanguageLexer.FLOAT = 16;
LanguageLexer.ID = 17;
LanguageLexer.CHAR = 18;
LanguageLexer.SEMI = 19;
LanguageLexer.COND_MAT = 20;
LanguageLexer.COND_LOG = 21;
LanguageLexer.INV_ID = 22;
LanguageLexer.NEWLINE = 23;
LanguageLexer.WS = 24;



