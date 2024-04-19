// Generated from ./grammar/translator/CtoMS.g4 by ANTLR 4.13.1
// jshint ignore: start
import antlr4 from 'antlr4';


const serializedATN = [4,0,15,87,6,-1,2,0,7,0,2,1,7,1,2,2,7,2,2,3,7,3,2,
4,7,4,2,5,7,5,2,6,7,6,2,7,7,7,2,8,7,8,2,9,7,9,2,10,7,10,2,11,7,11,2,12,7,
12,2,13,7,13,2,14,7,14,1,0,1,0,1,1,1,1,1,2,1,2,1,3,1,3,1,4,1,4,1,5,1,5,1,
6,1,6,1,7,1,7,1,8,1,8,1,9,1,9,1,10,1,10,1,11,1,11,1,11,1,11,1,11,1,11,1,
11,1,12,1,12,1,12,1,12,1,12,1,12,1,12,1,12,1,12,1,12,1,12,1,12,1,13,1,13,
4,13,75,8,13,11,13,12,13,76,3,13,79,8,13,1,14,4,14,82,8,14,11,14,12,14,83,
1,14,1,14,0,0,15,1,1,3,2,5,3,7,4,9,5,11,6,13,7,15,8,17,9,19,10,21,11,23,
12,25,13,27,14,29,15,1,0,3,2,0,65,90,97,122,4,0,48,57,65,90,95,95,97,122,
3,0,9,10,13,13,32,32,89,0,1,1,0,0,0,0,3,1,0,0,0,0,5,1,0,0,0,0,7,1,0,0,0,
0,9,1,0,0,0,0,11,1,0,0,0,0,13,1,0,0,0,0,15,1,0,0,0,0,17,1,0,0,0,0,19,1,0,
0,0,0,21,1,0,0,0,0,23,1,0,0,0,0,25,1,0,0,0,0,27,1,0,0,0,0,29,1,0,0,0,1,31,
1,0,0,0,3,33,1,0,0,0,5,35,1,0,0,0,7,37,1,0,0,0,9,39,1,0,0,0,11,41,1,0,0,
0,13,43,1,0,0,0,15,45,1,0,0,0,17,47,1,0,0,0,19,49,1,0,0,0,21,51,1,0,0,0,
23,53,1,0,0,0,25,60,1,0,0,0,27,72,1,0,0,0,29,81,1,0,0,0,31,32,5,10,0,0,32,
2,1,0,0,0,33,34,5,40,0,0,34,4,1,0,0,0,35,36,5,41,0,0,36,6,1,0,0,0,37,38,
5,123,0,0,38,8,1,0,0,0,39,40,5,125,0,0,40,10,1,0,0,0,41,42,5,61,0,0,42,12,
1,0,0,0,43,44,5,43,0,0,44,14,1,0,0,0,45,46,5,45,0,0,46,16,1,0,0,0,47,48,
5,42,0,0,48,18,1,0,0,0,49,50,5,34,0,0,50,20,1,0,0,0,51,52,5,59,0,0,52,22,
1,0,0,0,53,54,5,112,0,0,54,55,5,114,0,0,55,56,5,105,0,0,56,57,5,110,0,0,
57,58,5,116,0,0,58,59,5,102,0,0,59,24,1,0,0,0,60,61,5,118,0,0,61,62,5,111,
0,0,62,63,5,105,0,0,63,64,5,100,0,0,64,65,5,32,0,0,65,66,5,109,0,0,66,67,
5,97,0,0,67,68,5,105,0,0,68,69,5,110,0,0,69,70,5,40,0,0,70,71,5,41,0,0,71,
26,1,0,0,0,72,78,7,0,0,0,73,75,7,1,0,0,74,73,1,0,0,0,75,76,1,0,0,0,76,74,
1,0,0,0,76,77,1,0,0,0,77,79,1,0,0,0,78,74,1,0,0,0,78,79,1,0,0,0,79,28,1,
0,0,0,80,82,7,2,0,0,81,80,1,0,0,0,82,83,1,0,0,0,83,81,1,0,0,0,83,84,1,0,
0,0,84,85,1,0,0,0,85,86,6,14,0,0,86,30,1,0,0,0,4,0,76,78,83,1,6,0,0];


const atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

const decisionsToDFA = atn.decisionToState.map( (ds, index) => new antlr4.dfa.DFA(ds, index) );

export default class CtoMSLexer extends antlr4.Lexer {

    static grammarFileName = "CtoMS.g4";
    static channelNames = [ "DEFAULT_TOKEN_CHANNEL", "HIDDEN" ];
	static modeNames = [ "DEFAULT_MODE" ];
	static literalNames = [ null, "'\\n'", "'('", "')'", "'{'", "'}'", "'='", 
                         "'+'", "'-'", "'*'", "'\"'", "';'", "'printf'", 
                         "'void main()'" ];
	static symbolicNames = [ null, null, "OPEN_PARENTH", "CLOSE_PARENTH", "OPEN_CURL", 
                          "CLOSE_CURL", "EQUALS", "PLUS", "MINUS", "MULT", 
                          "DOUBLE_QUOTE", "SEMI", "PRINT", "MAIN", "ID", 
                          "WS" ];
	static ruleNames = [ "T__0", "OPEN_PARENTH", "CLOSE_PARENTH", "OPEN_CURL", 
                      "CLOSE_CURL", "EQUALS", "PLUS", "MINUS", "MULT", "DOUBLE_QUOTE", 
                      "SEMI", "PRINT", "MAIN", "ID", "WS" ];

    constructor(input) {
        super(input)
        this._interp = new antlr4.atn.LexerATNSimulator(this, atn, decisionsToDFA, new antlr4.atn.PredictionContextCache());
    }
}

CtoMSLexer.EOF = antlr4.Token.EOF;
CtoMSLexer.T__0 = 1;
CtoMSLexer.OPEN_PARENTH = 2;
CtoMSLexer.CLOSE_PARENTH = 3;
CtoMSLexer.OPEN_CURL = 4;
CtoMSLexer.CLOSE_CURL = 5;
CtoMSLexer.EQUALS = 6;
CtoMSLexer.PLUS = 7;
CtoMSLexer.MINUS = 8;
CtoMSLexer.MULT = 9;
CtoMSLexer.DOUBLE_QUOTE = 10;
CtoMSLexer.SEMI = 11;
CtoMSLexer.PRINT = 12;
CtoMSLexer.MAIN = 13;
CtoMSLexer.ID = 14;
CtoMSLexer.WS = 15;



