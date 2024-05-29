// Generated from ./grammar/Language.g4 by ANTLR 4.13.1
// jshint ignore: start
import antlr4 from 'antlr4';
import LanguageVisitor from './LanguageVisitor.js';

const serializedATN = [4,1,31,225,2,0,7,0,2,1,7,1,2,2,7,2,2,3,7,3,2,4,7,
4,2,5,7,5,2,6,7,6,2,7,7,7,2,8,7,8,2,9,7,9,2,10,7,10,2,11,7,11,2,12,7,12,
2,13,7,13,2,14,7,14,2,15,7,15,1,0,4,0,34,8,0,11,0,12,0,35,1,1,1,1,1,1,3,
1,41,8,1,1,1,1,1,3,1,45,8,1,1,1,1,1,1,2,5,2,50,8,2,10,2,12,2,53,9,2,1,3,
1,3,3,3,57,8,3,1,3,1,3,3,3,61,8,3,1,3,1,3,3,3,65,8,3,1,3,1,3,3,3,69,8,3,
1,3,1,3,3,3,73,8,3,1,3,1,3,3,3,77,8,3,1,3,1,3,3,3,81,8,3,1,3,1,3,3,3,85,
8,3,3,3,87,8,3,1,4,1,4,1,4,1,4,3,4,93,8,4,1,5,1,5,1,5,1,5,1,5,1,5,3,5,101,
8,5,1,6,1,6,1,6,1,6,1,6,1,7,1,7,1,7,1,7,1,7,1,7,1,7,1,7,1,7,1,7,1,7,1,7,
1,7,3,7,121,8,7,1,7,1,7,1,7,1,7,1,7,1,7,1,7,1,7,1,7,5,7,132,8,7,10,7,12,
7,135,9,7,1,8,1,8,1,8,1,8,1,8,3,8,142,8,8,1,9,1,9,5,9,146,8,9,10,9,12,9,
149,9,9,1,9,3,9,152,8,9,1,10,1,10,1,10,1,10,1,10,1,10,5,10,160,8,10,10,10,
12,10,163,9,10,1,10,1,10,1,11,1,11,1,11,1,12,1,12,1,12,5,12,173,8,12,10,
12,12,12,176,9,12,1,12,1,12,1,13,1,13,1,13,1,13,1,13,1,13,5,13,186,8,13,
10,13,12,13,189,9,13,1,13,1,13,1,14,1,14,1,14,1,14,1,14,1,14,1,14,1,14,1,
14,1,14,1,14,5,14,204,8,14,10,14,12,14,207,9,14,1,14,1,14,1,15,1,15,1,15,
5,15,214,8,15,10,15,12,15,217,9,15,1,15,1,15,1,15,1,15,1,15,1,15,1,15,1,
51,1,14,16,0,2,4,6,8,10,12,14,16,18,20,22,24,26,28,30,0,3,1,0,8,9,1,0,22,
23,2,0,10,11,16,16,247,0,33,1,0,0,0,2,37,1,0,0,0,4,51,1,0,0,0,6,86,1,0,0,
0,8,88,1,0,0,0,10,100,1,0,0,0,12,102,1,0,0,0,14,120,1,0,0,0,16,136,1,0,0,
0,18,143,1,0,0,0,20,153,1,0,0,0,22,166,1,0,0,0,24,169,1,0,0,0,26,179,1,0,
0,0,28,192,1,0,0,0,30,210,1,0,0,0,32,34,3,2,1,0,33,32,1,0,0,0,34,35,1,0,
0,0,35,33,1,0,0,0,35,36,1,0,0,0,36,1,1,0,0,0,37,38,5,2,0,0,38,40,5,6,0,0,
39,41,5,1,0,0,40,39,1,0,0,0,40,41,1,0,0,0,41,42,1,0,0,0,42,44,3,4,2,0,43,
45,5,1,0,0,44,43,1,0,0,0,44,45,1,0,0,0,45,46,1,0,0,0,46,47,5,7,0,0,47,3,
1,0,0,0,48,50,3,6,3,0,49,48,1,0,0,0,50,53,1,0,0,0,51,52,1,0,0,0,51,49,1,
0,0,0,52,5,1,0,0,0,53,51,1,0,0,0,54,56,3,8,4,0,55,57,5,28,0,0,56,55,1,0,
0,0,56,57,1,0,0,0,57,87,1,0,0,0,58,60,3,10,5,0,59,61,5,28,0,0,60,59,1,0,
0,0,60,61,1,0,0,0,61,87,1,0,0,0,62,64,3,18,9,0,63,65,5,28,0,0,64,63,1,0,
0,0,64,65,1,0,0,0,65,87,1,0,0,0,66,68,3,26,13,0,67,69,5,28,0,0,68,67,1,0,
0,0,68,69,1,0,0,0,69,87,1,0,0,0,70,72,3,30,15,0,71,73,5,28,0,0,72,71,1,0,
0,0,72,73,1,0,0,0,73,87,1,0,0,0,74,76,3,28,14,0,75,77,5,28,0,0,76,75,1,0,
0,0,76,77,1,0,0,0,77,87,1,0,0,0,78,80,3,12,6,0,79,81,5,28,0,0,80,79,1,0,
0,0,80,81,1,0,0,0,81,87,1,0,0,0,82,84,3,16,8,0,83,85,5,28,0,0,84,83,1,0,
0,0,84,85,1,0,0,0,85,87,1,0,0,0,86,54,1,0,0,0,86,58,1,0,0,0,86,62,1,0,0,
0,86,66,1,0,0,0,86,70,1,0,0,0,86,74,1,0,0,0,86,78,1,0,0,0,86,82,1,0,0,0,
87,7,1,0,0,0,88,89,5,3,0,0,89,92,5,30,0,0,90,91,5,12,0,0,91,93,3,14,7,0,
92,90,1,0,0,0,92,93,1,0,0,0,93,9,1,0,0,0,94,95,5,30,0,0,95,96,5,12,0,0,96,
101,3,14,7,0,97,98,5,30,0,0,98,99,5,13,0,0,99,101,3,14,7,0,100,94,1,0,0,
0,100,97,1,0,0,0,101,11,1,0,0,0,102,103,5,15,0,0,103,104,5,4,0,0,104,105,
3,14,7,0,105,106,5,5,0,0,106,13,1,0,0,0,107,108,6,7,-1,0,108,109,5,4,0,0,
109,110,3,14,7,0,110,111,5,5,0,0,111,121,1,0,0,0,112,113,7,0,0,0,113,121,
3,14,7,8,114,121,7,1,0,0,115,121,5,24,0,0,116,121,5,25,0,0,117,121,5,27,
0,0,118,121,5,26,0,0,119,121,5,30,0,0,120,107,1,0,0,0,120,112,1,0,0,0,120,
114,1,0,0,0,120,115,1,0,0,0,120,116,1,0,0,0,120,117,1,0,0,0,120,118,1,0,
0,0,120,119,1,0,0,0,121,133,1,0,0,0,122,123,10,10,0,0,123,124,7,2,0,0,124,
132,3,14,7,11,125,126,10,9,0,0,126,127,7,0,0,0,127,132,3,14,7,10,128,129,
10,6,0,0,129,130,7,1,0,0,130,132,3,14,7,7,131,122,1,0,0,0,131,125,1,0,0,
0,131,128,1,0,0,0,132,135,1,0,0,0,133,131,1,0,0,0,133,134,1,0,0,0,134,15,
1,0,0,0,135,133,1,0,0,0,136,141,5,30,0,0,137,138,5,8,0,0,138,142,5,8,0,0,
139,140,5,9,0,0,140,142,5,9,0,0,141,137,1,0,0,0,141,139,1,0,0,0,142,17,1,
0,0,0,143,147,3,20,10,0,144,146,3,22,11,0,145,144,1,0,0,0,146,149,1,0,0,
0,147,145,1,0,0,0,147,148,1,0,0,0,148,151,1,0,0,0,149,147,1,0,0,0,150,152,
3,24,12,0,151,150,1,0,0,0,151,152,1,0,0,0,152,19,1,0,0,0,153,154,5,17,0,
0,154,155,5,4,0,0,155,156,3,14,7,0,156,157,5,5,0,0,157,161,5,6,0,0,158,160,
3,6,3,0,159,158,1,0,0,0,160,163,1,0,0,0,161,159,1,0,0,0,161,162,1,0,0,0,
162,164,1,0,0,0,163,161,1,0,0,0,164,165,5,7,0,0,165,21,1,0,0,0,166,167,5,
18,0,0,167,168,3,20,10,0,168,23,1,0,0,0,169,170,5,18,0,0,170,174,5,6,0,0,
171,173,3,6,3,0,172,171,1,0,0,0,173,176,1,0,0,0,174,172,1,0,0,0,174,175,
1,0,0,0,175,177,1,0,0,0,176,174,1,0,0,0,177,178,5,7,0,0,178,25,1,0,0,0,179,
180,5,19,0,0,180,181,5,4,0,0,181,182,3,14,7,0,182,183,5,5,0,0,183,187,5,
6,0,0,184,186,3,6,3,0,185,184,1,0,0,0,186,189,1,0,0,0,187,185,1,0,0,0,187,
188,1,0,0,0,188,190,1,0,0,0,189,187,1,0,0,0,190,191,5,7,0,0,191,27,1,0,0,
0,192,193,5,20,0,0,193,194,5,4,0,0,194,195,3,8,4,0,195,196,5,28,0,0,196,
197,3,14,7,0,197,198,5,28,0,0,198,199,3,16,8,0,199,200,5,28,0,0,200,201,
5,5,0,0,201,205,5,6,0,0,202,204,3,6,3,0,203,202,1,0,0,0,204,207,1,0,0,0,
205,203,1,0,0,0,205,206,1,0,0,0,206,208,1,0,0,0,207,205,1,0,0,0,208,209,
5,7,0,0,209,29,1,0,0,0,210,211,5,21,0,0,211,215,5,6,0,0,212,214,3,6,3,0,
213,212,1,0,0,0,214,217,1,0,0,0,215,213,1,0,0,0,215,216,1,0,0,0,216,218,
1,0,0,0,217,215,1,0,0,0,218,219,5,7,0,0,219,220,5,19,0,0,220,221,5,4,0,0,
221,222,3,14,7,0,222,223,5,5,0,0,223,31,1,0,0,0,26,35,40,44,51,56,60,64,
68,72,76,80,84,86,92,100,120,131,133,141,147,151,161,174,187,205,215];


const atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

const decisionsToDFA = atn.decisionToState.map( (ds, index) => new antlr4.dfa.DFA(ds, index) );

const sharedContextCache = new antlr4.atn.PredictionContextCache();

export default class LanguageParser extends antlr4.Parser {

    static grammarFileName = "Language.g4";
    static literalNames = [ null, "'\\n'", "'start -->'", null, "'('", "')'", 
                            "'{'", "'}'", "'+'", "'-'", "'*'", "'%'", "'='", 
                            null, "','", "'ptr'", "'/'", "'if'", "'else'", 
                            "'while'", "'for'", "'do'" ];
    static symbolicNames = [ null, null, "MAIN", "TYPE", "OPEN_PARENTH", 
                             "CLOSE_PARENTH", "OPEN_CURL", "CLOSE_CURL", 
                             "PLUS", "SUB", "MULT", "MOD", "EQUALS", "MATH_EQUALS", 
                             "COMMA", "PRINT", "DIV", "IF_PR", "ELSE_PR", 
                             "WHILE_PR", "FOR_PR", "DO_PR", "COND_MAT", 
                             "COND_LOG", "STRING", "CHAR", "INT", "FLOAT", 
                             "SEMI", "NEWLINE", "ID", "WS" ];
    static ruleNames = [ "file", "init", "logic", "expression", "declaration", 
                         "assign", "log", "value", "increment", "chained_conditional", 
                         "conditional", "conditional__elif", "conditional__else", 
                         "loop__while", "loop__for", "loop__do_while" ];

    constructor(input) {
        super(input);
        this._interp = new antlr4.atn.ParserATNSimulator(this, atn, decisionsToDFA, sharedContextCache);
        this.ruleNames = LanguageParser.ruleNames;
        this.literalNames = LanguageParser.literalNames;
        this.symbolicNames = LanguageParser.symbolicNames;
    }

    sempred(localctx, ruleIndex, predIndex) {
    	switch(ruleIndex) {
    	case 7:
    	    		return this.value_sempred(localctx, predIndex);
        default:
            throw "No predicate with index:" + ruleIndex;
       }
    }

    value_sempred(localctx, predIndex) {
    	switch(predIndex) {
    		case 0:
    			return this.precpred(this._ctx, 10);
    		case 1:
    			return this.precpred(this._ctx, 9);
    		case 2:
    			return this.precpred(this._ctx, 6);
    		default:
    			throw "No predicate with index:" + predIndex;
    	}
    };




	file() {
	    let localctx = new FileContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 0, LanguageParser.RULE_file);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 33; 
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        do {
	            this.state = 32;
	            this.init();
	            this.state = 35; 
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        } while(_la===2);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	init() {
	    let localctx = new InitContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 2, LanguageParser.RULE_init);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 37;
	        this.match(LanguageParser.MAIN);
	        this.state = 38;
	        this.match(LanguageParser.OPEN_CURL);
	        this.state = 40;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,1,this._ctx);
	        if(la_===1) {
	            this.state = 39;
	            this.match(LanguageParser.T__0);

	        }
	        this.state = 42;
	        this.logic();
	        this.state = 44;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===1) {
	            this.state = 43;
	            this.match(LanguageParser.T__0);
	        }

	        this.state = 46;
	        this.match(LanguageParser.CLOSE_CURL);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	logic() {
	    let localctx = new LogicContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 4, LanguageParser.RULE_logic);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 51;
	        this._errHandler.sync(this);
	        var _alt = this._interp.adaptivePredict(this._input,3,this._ctx)
	        while(_alt!=1 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
	            if(_alt===1+1) {
	                this.state = 48;
	                this.expression(); 
	            }
	            this.state = 53;
	            this._errHandler.sync(this);
	            _alt = this._interp.adaptivePredict(this._input,3,this._ctx);
	        }

	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	expression() {
	    let localctx = new ExpressionContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 6, LanguageParser.RULE_expression);
	    var _la = 0;
	    try {
	        this.state = 86;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,12,this._ctx);
	        switch(la_) {
	        case 1:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 54;
	            this.declaration();
	            this.state = 56;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(_la===28) {
	                this.state = 55;
	                this.match(LanguageParser.SEMI);
	            }

	            break;

	        case 2:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 58;
	            this.assign();
	            this.state = 60;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(_la===28) {
	                this.state = 59;
	                this.match(LanguageParser.SEMI);
	            }

	            break;

	        case 3:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 62;
	            this.chained_conditional();
	            this.state = 64;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(_la===28) {
	                this.state = 63;
	                this.match(LanguageParser.SEMI);
	            }

	            break;

	        case 4:
	            this.enterOuterAlt(localctx, 4);
	            this.state = 66;
	            this.loop__while();
	            this.state = 68;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(_la===28) {
	                this.state = 67;
	                this.match(LanguageParser.SEMI);
	            }

	            break;

	        case 5:
	            this.enterOuterAlt(localctx, 5);
	            this.state = 70;
	            this.loop__do_while();
	            this.state = 72;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(_la===28) {
	                this.state = 71;
	                this.match(LanguageParser.SEMI);
	            }

	            break;

	        case 6:
	            this.enterOuterAlt(localctx, 6);
	            this.state = 74;
	            this.loop__for();
	            this.state = 76;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(_la===28) {
	                this.state = 75;
	                this.match(LanguageParser.SEMI);
	            }

	            break;

	        case 7:
	            this.enterOuterAlt(localctx, 7);
	            this.state = 78;
	            this.log();
	            this.state = 80;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(_la===28) {
	                this.state = 79;
	                this.match(LanguageParser.SEMI);
	            }

	            break;

	        case 8:
	            this.enterOuterAlt(localctx, 8);
	            this.state = 82;
	            this.increment();
	            this.state = 84;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(_la===28) {
	                this.state = 83;
	                this.match(LanguageParser.SEMI);
	            }

	            break;

	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	declaration() {
	    let localctx = new DeclarationContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 8, LanguageParser.RULE_declaration);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 88;
	        this.match(LanguageParser.TYPE);
	        this.state = 89;
	        this.match(LanguageParser.ID);
	        this.state = 92;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===12) {
	            this.state = 90;
	            this.match(LanguageParser.EQUALS);
	            this.state = 91;
	            this.value(0);
	        }

	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	assign() {
	    let localctx = new AssignContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 10, LanguageParser.RULE_assign);
	    try {
	        this.state = 100;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,14,this._ctx);
	        switch(la_) {
	        case 1:
	            localctx = new NormalAssignContext(this, localctx);
	            this.enterOuterAlt(localctx, 1);
	            this.state = 94;
	            this.match(LanguageParser.ID);
	            this.state = 95;
	            this.match(LanguageParser.EQUALS);
	            this.state = 96;
	            this.value(0);
	            break;

	        case 2:
	            localctx = new MathAssignContext(this, localctx);
	            this.enterOuterAlt(localctx, 2);
	            this.state = 97;
	            this.match(LanguageParser.ID);
	            this.state = 98;
	            this.match(LanguageParser.MATH_EQUALS);
	            this.state = 99;
	            this.value(0);
	            break;

	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	log() {
	    let localctx = new LogContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 12, LanguageParser.RULE_log);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 102;
	        this.match(LanguageParser.PRINT);
	        this.state = 103;
	        this.match(LanguageParser.OPEN_PARENTH);
	        this.state = 104;
	        this.value(0);
	        this.state = 105;
	        this.match(LanguageParser.CLOSE_PARENTH);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}


	value(_p) {
		if(_p===undefined) {
		    _p = 0;
		}
	    const _parentctx = this._ctx;
	    const _parentState = this.state;
	    let localctx = new ValueContext(this, this._ctx, _parentState);
	    let _prevctx = localctx;
	    const _startState = 14;
	    this.enterRecursionRule(localctx, 14, LanguageParser.RULE_value, _p);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 120;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 4:
	            localctx = new ParenthesesContext(this, localctx);
	            this._ctx = localctx;
	            _prevctx = localctx;

	            this.state = 108;
	            this.match(LanguageParser.OPEN_PARENTH);
	            this.state = 109;
	            this.value(0);
	            this.state = 110;
	            this.match(LanguageParser.CLOSE_PARENTH);
	            break;
	        case 8:
	        case 9:
	            localctx = new SignNumbersContext(this, localctx);
	            this._ctx = localctx;
	            _prevctx = localctx;
	            this.state = 112;
	            localctx.operation = this._input.LT(1);
	            _la = this._input.LA(1);
	            if(!(_la===8 || _la===9)) {
	                localctx.operation = this._errHandler.recoverInline(this);
	            }
	            else {
	            	this._errHandler.reportMatch(this);
	                this.consume();
	            }
	            this.state = 113;
	            this.value(8);
	            break;
	        case 22:
	        case 23:
	            localctx = new NormalConditionContext(this, localctx);
	            this._ctx = localctx;
	            _prevctx = localctx;
	            this.state = 114;
	            localctx.cond_sym = this._input.LT(1);
	            _la = this._input.LA(1);
	            if(!(_la===22 || _la===23)) {
	                localctx.cond_sym = this._errHandler.recoverInline(this);
	            }
	            else {
	            	this._errHandler.reportMatch(this);
	                this.consume();
	            }
	            break;
	        case 24:
	            localctx = new ValueAsCharContext(this, localctx);
	            this._ctx = localctx;
	            _prevctx = localctx;
	            this.state = 115;
	            this.match(LanguageParser.STRING);
	            break;
	        case 25:
	            localctx = new ValueAsCharContext(this, localctx);
	            this._ctx = localctx;
	            _prevctx = localctx;
	            this.state = 116;
	            this.match(LanguageParser.CHAR);
	            break;
	        case 27:
	            localctx = new ValueAsNumberContext(this, localctx);
	            this._ctx = localctx;
	            _prevctx = localctx;
	            this.state = 117;
	            this.match(LanguageParser.FLOAT);
	            break;
	        case 26:
	            localctx = new ValueAsNumberContext(this, localctx);
	            this._ctx = localctx;
	            _prevctx = localctx;
	            this.state = 118;
	            this.match(LanguageParser.INT);
	            break;
	        case 30:
	            localctx = new ValueAsIDContext(this, localctx);
	            this._ctx = localctx;
	            _prevctx = localctx;
	            this.state = 119;
	            this.match(LanguageParser.ID);
	            break;
	        default:
	            throw new antlr4.error.NoViableAltException(this);
	        }
	        this._ctx.stop = this._input.LT(-1);
	        this.state = 133;
	        this._errHandler.sync(this);
	        var _alt = this._interp.adaptivePredict(this._input,17,this._ctx)
	        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
	            if(_alt===1) {
	                if(this._parseListeners!==null) {
	                    this.triggerExitRuleEvent();
	                }
	                _prevctx = localctx;
	                this.state = 131;
	                this._errHandler.sync(this);
	                var la_ = this._interp.adaptivePredict(this._input,16,this._ctx);
	                switch(la_) {
	                case 1:
	                    localctx = new MultDivContext(this, new ValueContext(this, _parentctx, _parentState));
	                    this.pushNewRecursionContext(localctx, _startState, LanguageParser.RULE_value);
	                    this.state = 122;
	                    if (!( this.precpred(this._ctx, 10))) {
	                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 10)");
	                    }
	                    this.state = 123;
	                    localctx.operation = this._input.LT(1);
	                    _la = this._input.LA(1);
	                    if(!((((_la) & ~0x1f) === 0 && ((1 << _la) & 68608) !== 0))) {
	                        localctx.operation = this._errHandler.recoverInline(this);
	                    }
	                    else {
	                    	this._errHandler.reportMatch(this);
	                        this.consume();
	                    }
	                    this.state = 124;
	                    this.value(11);
	                    break;

	                case 2:
	                    localctx = new AddSubContext(this, new ValueContext(this, _parentctx, _parentState));
	                    this.pushNewRecursionContext(localctx, _startState, LanguageParser.RULE_value);
	                    this.state = 125;
	                    if (!( this.precpred(this._ctx, 9))) {
	                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 9)");
	                    }
	                    this.state = 126;
	                    localctx.operation = this._input.LT(1);
	                    _la = this._input.LA(1);
	                    if(!(_la===8 || _la===9)) {
	                        localctx.operation = this._errHandler.recoverInline(this);
	                    }
	                    else {
	                    	this._errHandler.reportMatch(this);
	                        this.consume();
	                    }
	                    this.state = 127;
	                    this.value(10);
	                    break;

	                case 3:
	                    localctx = new NormalConditionContext(this, new ValueContext(this, _parentctx, _parentState));
	                    this.pushNewRecursionContext(localctx, _startState, LanguageParser.RULE_value);
	                    this.state = 128;
	                    if (!( this.precpred(this._ctx, 6))) {
	                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 6)");
	                    }
	                    this.state = 129;
	                    localctx.cond_sym = this._input.LT(1);
	                    _la = this._input.LA(1);
	                    if(!(_la===22 || _la===23)) {
	                        localctx.cond_sym = this._errHandler.recoverInline(this);
	                    }
	                    else {
	                    	this._errHandler.reportMatch(this);
	                        this.consume();
	                    }
	                    this.state = 130;
	                    this.value(7);
	                    break;

	                } 
	            }
	            this.state = 135;
	            this._errHandler.sync(this);
	            _alt = this._interp.adaptivePredict(this._input,17,this._ctx);
	        }

	    } catch( error) {
	        if(error instanceof antlr4.error.RecognitionException) {
		        localctx.exception = error;
		        this._errHandler.reportError(this, error);
		        this._errHandler.recover(this, error);
		    } else {
		    	throw error;
		    }
	    } finally {
	        this.unrollRecursionContexts(_parentctx)
	    }
	    return localctx;
	}



	increment() {
	    let localctx = new IncrementContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 16, LanguageParser.RULE_increment);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 136;
	        this.match(LanguageParser.ID);
	        this.state = 141;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 8:
	            this.state = 137;
	            this.match(LanguageParser.PLUS);
	            this.state = 138;
	            this.match(LanguageParser.PLUS);
	            break;
	        case 9:
	            this.state = 139;
	            this.match(LanguageParser.SUB);
	            this.state = 140;
	            this.match(LanguageParser.SUB);
	            break;
	        default:
	            throw new antlr4.error.NoViableAltException(this);
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	chained_conditional() {
	    let localctx = new Chained_conditionalContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 18, LanguageParser.RULE_chained_conditional);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 143;
	        this.conditional();
	        this.state = 147;
	        this._errHandler.sync(this);
	        var _alt = this._interp.adaptivePredict(this._input,19,this._ctx)
	        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
	            if(_alt===1) {
	                this.state = 144;
	                this.conditional__elif(); 
	            }
	            this.state = 149;
	            this._errHandler.sync(this);
	            _alt = this._interp.adaptivePredict(this._input,19,this._ctx);
	        }

	        this.state = 151;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===18) {
	            this.state = 150;
	            this.conditional__else();
	        }

	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	conditional() {
	    let localctx = new ConditionalContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 20, LanguageParser.RULE_conditional);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 153;
	        this.match(LanguageParser.IF_PR);
	        this.state = 154;
	        this.match(LanguageParser.OPEN_PARENTH);
	        this.state = 155;
	        this.value(0);
	        this.state = 156;
	        this.match(LanguageParser.CLOSE_PARENTH);
	        this.state = 157;
	        this.match(LanguageParser.OPEN_CURL);
	        this.state = 161;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while((((_la) & ~0x1f) === 0 && ((1 << _la) & 1077575688) !== 0)) {
	            this.state = 158;
	            this.expression();
	            this.state = 163;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	        this.state = 164;
	        this.match(LanguageParser.CLOSE_CURL);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	conditional__elif() {
	    let localctx = new Conditional__elifContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 22, LanguageParser.RULE_conditional__elif);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 166;
	        this.match(LanguageParser.ELSE_PR);
	        this.state = 167;
	        this.conditional();
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	conditional__else() {
	    let localctx = new Conditional__elseContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 24, LanguageParser.RULE_conditional__else);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 169;
	        this.match(LanguageParser.ELSE_PR);
	        this.state = 170;
	        this.match(LanguageParser.OPEN_CURL);
	        this.state = 174;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while((((_la) & ~0x1f) === 0 && ((1 << _la) & 1077575688) !== 0)) {
	            this.state = 171;
	            this.expression();
	            this.state = 176;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	        this.state = 177;
	        this.match(LanguageParser.CLOSE_CURL);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	loop__while() {
	    let localctx = new Loop__whileContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 26, LanguageParser.RULE_loop__while);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 179;
	        this.match(LanguageParser.WHILE_PR);
	        this.state = 180;
	        this.match(LanguageParser.OPEN_PARENTH);
	        this.state = 181;
	        this.value(0);
	        this.state = 182;
	        this.match(LanguageParser.CLOSE_PARENTH);
	        this.state = 183;
	        this.match(LanguageParser.OPEN_CURL);
	        this.state = 187;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while((((_la) & ~0x1f) === 0 && ((1 << _la) & 1077575688) !== 0)) {
	            this.state = 184;
	            this.expression();
	            this.state = 189;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	        this.state = 190;
	        this.match(LanguageParser.CLOSE_CURL);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	loop__for() {
	    let localctx = new Loop__forContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 28, LanguageParser.RULE_loop__for);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 192;
	        this.match(LanguageParser.FOR_PR);
	        this.state = 193;
	        this.match(LanguageParser.OPEN_PARENTH);
	        this.state = 194;
	        this.declaration();
	        this.state = 195;
	        this.match(LanguageParser.SEMI);
	        this.state = 196;
	        this.value(0);
	        this.state = 197;
	        this.match(LanguageParser.SEMI);
	        this.state = 198;
	        this.increment();
	        this.state = 199;
	        this.match(LanguageParser.SEMI);
	        this.state = 200;
	        this.match(LanguageParser.CLOSE_PARENTH);
	        this.state = 201;
	        this.match(LanguageParser.OPEN_CURL);
	        this.state = 205;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while((((_la) & ~0x1f) === 0 && ((1 << _la) & 1077575688) !== 0)) {
	            this.state = 202;
	            this.expression();
	            this.state = 207;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	        this.state = 208;
	        this.match(LanguageParser.CLOSE_CURL);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	loop__do_while() {
	    let localctx = new Loop__do_whileContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 30, LanguageParser.RULE_loop__do_while);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 210;
	        this.match(LanguageParser.DO_PR);
	        this.state = 211;
	        this.match(LanguageParser.OPEN_CURL);
	        this.state = 215;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while((((_la) & ~0x1f) === 0 && ((1 << _la) & 1077575688) !== 0)) {
	            this.state = 212;
	            this.expression();
	            this.state = 217;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	        this.state = 218;
	        this.match(LanguageParser.CLOSE_CURL);
	        this.state = 219;
	        this.match(LanguageParser.WHILE_PR);
	        this.state = 220;
	        this.match(LanguageParser.OPEN_PARENTH);
	        this.state = 221;
	        this.value(0);
	        this.state = 222;
	        this.match(LanguageParser.CLOSE_PARENTH);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}


}

LanguageParser.EOF = antlr4.Token.EOF;
LanguageParser.T__0 = 1;
LanguageParser.MAIN = 2;
LanguageParser.TYPE = 3;
LanguageParser.OPEN_PARENTH = 4;
LanguageParser.CLOSE_PARENTH = 5;
LanguageParser.OPEN_CURL = 6;
LanguageParser.CLOSE_CURL = 7;
LanguageParser.PLUS = 8;
LanguageParser.SUB = 9;
LanguageParser.MULT = 10;
LanguageParser.MOD = 11;
LanguageParser.EQUALS = 12;
LanguageParser.MATH_EQUALS = 13;
LanguageParser.COMMA = 14;
LanguageParser.PRINT = 15;
LanguageParser.DIV = 16;
LanguageParser.IF_PR = 17;
LanguageParser.ELSE_PR = 18;
LanguageParser.WHILE_PR = 19;
LanguageParser.FOR_PR = 20;
LanguageParser.DO_PR = 21;
LanguageParser.COND_MAT = 22;
LanguageParser.COND_LOG = 23;
LanguageParser.STRING = 24;
LanguageParser.CHAR = 25;
LanguageParser.INT = 26;
LanguageParser.FLOAT = 27;
LanguageParser.SEMI = 28;
LanguageParser.NEWLINE = 29;
LanguageParser.ID = 30;
LanguageParser.WS = 31;

LanguageParser.RULE_file = 0;
LanguageParser.RULE_init = 1;
LanguageParser.RULE_logic = 2;
LanguageParser.RULE_expression = 3;
LanguageParser.RULE_declaration = 4;
LanguageParser.RULE_assign = 5;
LanguageParser.RULE_log = 6;
LanguageParser.RULE_value = 7;
LanguageParser.RULE_increment = 8;
LanguageParser.RULE_chained_conditional = 9;
LanguageParser.RULE_conditional = 10;
LanguageParser.RULE_conditional__elif = 11;
LanguageParser.RULE_conditional__else = 12;
LanguageParser.RULE_loop__while = 13;
LanguageParser.RULE_loop__for = 14;
LanguageParser.RULE_loop__do_while = 15;

class FileContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = LanguageParser.RULE_file;
    }

	init = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(InitContext);
	    } else {
	        return this.getTypedRuleContext(InitContext,i);
	    }
	};

	accept(visitor) {
	    if ( visitor instanceof LanguageVisitor ) {
	        return visitor.visitFile(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class InitContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = LanguageParser.RULE_init;
    }

	MAIN() {
	    return this.getToken(LanguageParser.MAIN, 0);
	};

	OPEN_CURL() {
	    return this.getToken(LanguageParser.OPEN_CURL, 0);
	};

	logic() {
	    return this.getTypedRuleContext(LogicContext,0);
	};

	CLOSE_CURL() {
	    return this.getToken(LanguageParser.CLOSE_CURL, 0);
	};

	accept(visitor) {
	    if ( visitor instanceof LanguageVisitor ) {
	        return visitor.visitInit(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class LogicContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = LanguageParser.RULE_logic;
    }

	expression = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(ExpressionContext);
	    } else {
	        return this.getTypedRuleContext(ExpressionContext,i);
	    }
	};

	accept(visitor) {
	    if ( visitor instanceof LanguageVisitor ) {
	        return visitor.visitLogic(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class ExpressionContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = LanguageParser.RULE_expression;
    }

	declaration() {
	    return this.getTypedRuleContext(DeclarationContext,0);
	};

	SEMI() {
	    return this.getToken(LanguageParser.SEMI, 0);
	};

	assign() {
	    return this.getTypedRuleContext(AssignContext,0);
	};

	chained_conditional() {
	    return this.getTypedRuleContext(Chained_conditionalContext,0);
	};

	loop__while() {
	    return this.getTypedRuleContext(Loop__whileContext,0);
	};

	loop__do_while() {
	    return this.getTypedRuleContext(Loop__do_whileContext,0);
	};

	loop__for() {
	    return this.getTypedRuleContext(Loop__forContext,0);
	};

	log() {
	    return this.getTypedRuleContext(LogContext,0);
	};

	increment() {
	    return this.getTypedRuleContext(IncrementContext,0);
	};

	accept(visitor) {
	    if ( visitor instanceof LanguageVisitor ) {
	        return visitor.visitExpression(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class DeclarationContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = LanguageParser.RULE_declaration;
    }

	TYPE() {
	    return this.getToken(LanguageParser.TYPE, 0);
	};

	ID() {
	    return this.getToken(LanguageParser.ID, 0);
	};

	EQUALS() {
	    return this.getToken(LanguageParser.EQUALS, 0);
	};

	value() {
	    return this.getTypedRuleContext(ValueContext,0);
	};

	accept(visitor) {
	    if ( visitor instanceof LanguageVisitor ) {
	        return visitor.visitDeclaration(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class AssignContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = LanguageParser.RULE_assign;
    }


	 
		copyFrom(ctx) {
			super.copyFrom(ctx);
		}

}


class NormalAssignContext extends AssignContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	ID() {
	    return this.getToken(LanguageParser.ID, 0);
	};

	EQUALS() {
	    return this.getToken(LanguageParser.EQUALS, 0);
	};

	value() {
	    return this.getTypedRuleContext(ValueContext,0);
	};

	accept(visitor) {
	    if ( visitor instanceof LanguageVisitor ) {
	        return visitor.visitNormalAssign(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

LanguageParser.NormalAssignContext = NormalAssignContext;

class MathAssignContext extends AssignContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	ID() {
	    return this.getToken(LanguageParser.ID, 0);
	};

	MATH_EQUALS() {
	    return this.getToken(LanguageParser.MATH_EQUALS, 0);
	};

	value() {
	    return this.getTypedRuleContext(ValueContext,0);
	};

	accept(visitor) {
	    if ( visitor instanceof LanguageVisitor ) {
	        return visitor.visitMathAssign(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

LanguageParser.MathAssignContext = MathAssignContext;

class LogContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = LanguageParser.RULE_log;
    }

	PRINT() {
	    return this.getToken(LanguageParser.PRINT, 0);
	};

	OPEN_PARENTH() {
	    return this.getToken(LanguageParser.OPEN_PARENTH, 0);
	};

	value() {
	    return this.getTypedRuleContext(ValueContext,0);
	};

	CLOSE_PARENTH() {
	    return this.getToken(LanguageParser.CLOSE_PARENTH, 0);
	};

	accept(visitor) {
	    if ( visitor instanceof LanguageVisitor ) {
	        return visitor.visitLog(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class ValueContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = LanguageParser.RULE_value;
    }


	 
		copyFrom(ctx) {
			super.copyFrom(ctx);
		}

}


class ParenthesesContext extends ValueContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	OPEN_PARENTH() {
	    return this.getToken(LanguageParser.OPEN_PARENTH, 0);
	};

	value() {
	    return this.getTypedRuleContext(ValueContext,0);
	};

	CLOSE_PARENTH() {
	    return this.getToken(LanguageParser.CLOSE_PARENTH, 0);
	};

	accept(visitor) {
	    if ( visitor instanceof LanguageVisitor ) {
	        return visitor.visitParentheses(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

LanguageParser.ParenthesesContext = ParenthesesContext;

class ValueAsCharContext extends ValueContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	STRING() {
	    return this.getToken(LanguageParser.STRING, 0);
	};

	CHAR() {
	    return this.getToken(LanguageParser.CHAR, 0);
	};

	accept(visitor) {
	    if ( visitor instanceof LanguageVisitor ) {
	        return visitor.visitValueAsChar(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

LanguageParser.ValueAsCharContext = ValueAsCharContext;

class MultDivContext extends ValueContext {

    constructor(parser, ctx) {
        super(parser);
        this.operation = null;;
        super.copyFrom(ctx);
    }

	value = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(ValueContext);
	    } else {
	        return this.getTypedRuleContext(ValueContext,i);
	    }
	};

	MULT() {
	    return this.getToken(LanguageParser.MULT, 0);
	};

	DIV() {
	    return this.getToken(LanguageParser.DIV, 0);
	};

	MOD() {
	    return this.getToken(LanguageParser.MOD, 0);
	};

	accept(visitor) {
	    if ( visitor instanceof LanguageVisitor ) {
	        return visitor.visitMultDiv(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

LanguageParser.MultDivContext = MultDivContext;

class NormalConditionContext extends ValueContext {

    constructor(parser, ctx) {
        super(parser);
        this.cond_sym = null;;
        super.copyFrom(ctx);
    }

	COND_LOG() {
	    return this.getToken(LanguageParser.COND_LOG, 0);
	};

	COND_MAT() {
	    return this.getToken(LanguageParser.COND_MAT, 0);
	};

	value = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(ValueContext);
	    } else {
	        return this.getTypedRuleContext(ValueContext,i);
	    }
	};

	accept(visitor) {
	    if ( visitor instanceof LanguageVisitor ) {
	        return visitor.visitNormalCondition(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

LanguageParser.NormalConditionContext = NormalConditionContext;

class AddSubContext extends ValueContext {

    constructor(parser, ctx) {
        super(parser);
        this.operation = null;;
        super.copyFrom(ctx);
    }

	value = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(ValueContext);
	    } else {
	        return this.getTypedRuleContext(ValueContext,i);
	    }
	};

	PLUS() {
	    return this.getToken(LanguageParser.PLUS, 0);
	};

	SUB() {
	    return this.getToken(LanguageParser.SUB, 0);
	};

	accept(visitor) {
	    if ( visitor instanceof LanguageVisitor ) {
	        return visitor.visitAddSub(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

LanguageParser.AddSubContext = AddSubContext;

class ValueAsNumberContext extends ValueContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	FLOAT() {
	    return this.getToken(LanguageParser.FLOAT, 0);
	};

	INT() {
	    return this.getToken(LanguageParser.INT, 0);
	};

	accept(visitor) {
	    if ( visitor instanceof LanguageVisitor ) {
	        return visitor.visitValueAsNumber(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

LanguageParser.ValueAsNumberContext = ValueAsNumberContext;

class SignNumbersContext extends ValueContext {

    constructor(parser, ctx) {
        super(parser);
        this.operation = null;;
        super.copyFrom(ctx);
    }

	value() {
	    return this.getTypedRuleContext(ValueContext,0);
	};

	PLUS() {
	    return this.getToken(LanguageParser.PLUS, 0);
	};

	SUB() {
	    return this.getToken(LanguageParser.SUB, 0);
	};

	accept(visitor) {
	    if ( visitor instanceof LanguageVisitor ) {
	        return visitor.visitSignNumbers(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

LanguageParser.SignNumbersContext = SignNumbersContext;

class ValueAsIDContext extends ValueContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	ID() {
	    return this.getToken(LanguageParser.ID, 0);
	};

	accept(visitor) {
	    if ( visitor instanceof LanguageVisitor ) {
	        return visitor.visitValueAsID(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

LanguageParser.ValueAsIDContext = ValueAsIDContext;

class IncrementContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = LanguageParser.RULE_increment;
    }

	ID() {
	    return this.getToken(LanguageParser.ID, 0);
	};

	PLUS = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(LanguageParser.PLUS);
	    } else {
	        return this.getToken(LanguageParser.PLUS, i);
	    }
	};


	SUB = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(LanguageParser.SUB);
	    } else {
	        return this.getToken(LanguageParser.SUB, i);
	    }
	};


	accept(visitor) {
	    if ( visitor instanceof LanguageVisitor ) {
	        return visitor.visitIncrement(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class Chained_conditionalContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = LanguageParser.RULE_chained_conditional;
    }

	conditional() {
	    return this.getTypedRuleContext(ConditionalContext,0);
	};

	conditional__elif = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(Conditional__elifContext);
	    } else {
	        return this.getTypedRuleContext(Conditional__elifContext,i);
	    }
	};

	conditional__else() {
	    return this.getTypedRuleContext(Conditional__elseContext,0);
	};

	accept(visitor) {
	    if ( visitor instanceof LanguageVisitor ) {
	        return visitor.visitChained_conditional(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class ConditionalContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = LanguageParser.RULE_conditional;
    }

	IF_PR() {
	    return this.getToken(LanguageParser.IF_PR, 0);
	};

	OPEN_PARENTH() {
	    return this.getToken(LanguageParser.OPEN_PARENTH, 0);
	};

	value() {
	    return this.getTypedRuleContext(ValueContext,0);
	};

	CLOSE_PARENTH() {
	    return this.getToken(LanguageParser.CLOSE_PARENTH, 0);
	};

	OPEN_CURL() {
	    return this.getToken(LanguageParser.OPEN_CURL, 0);
	};

	CLOSE_CURL() {
	    return this.getToken(LanguageParser.CLOSE_CURL, 0);
	};

	expression = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(ExpressionContext);
	    } else {
	        return this.getTypedRuleContext(ExpressionContext,i);
	    }
	};

	accept(visitor) {
	    if ( visitor instanceof LanguageVisitor ) {
	        return visitor.visitConditional(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class Conditional__elifContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = LanguageParser.RULE_conditional__elif;
    }

	ELSE_PR() {
	    return this.getToken(LanguageParser.ELSE_PR, 0);
	};

	conditional() {
	    return this.getTypedRuleContext(ConditionalContext,0);
	};

	accept(visitor) {
	    if ( visitor instanceof LanguageVisitor ) {
	        return visitor.visitConditional__elif(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class Conditional__elseContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = LanguageParser.RULE_conditional__else;
    }

	ELSE_PR() {
	    return this.getToken(LanguageParser.ELSE_PR, 0);
	};

	OPEN_CURL() {
	    return this.getToken(LanguageParser.OPEN_CURL, 0);
	};

	CLOSE_CURL() {
	    return this.getToken(LanguageParser.CLOSE_CURL, 0);
	};

	expression = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(ExpressionContext);
	    } else {
	        return this.getTypedRuleContext(ExpressionContext,i);
	    }
	};

	accept(visitor) {
	    if ( visitor instanceof LanguageVisitor ) {
	        return visitor.visitConditional__else(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class Loop__whileContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = LanguageParser.RULE_loop__while;
    }

	WHILE_PR() {
	    return this.getToken(LanguageParser.WHILE_PR, 0);
	};

	OPEN_PARENTH() {
	    return this.getToken(LanguageParser.OPEN_PARENTH, 0);
	};

	value() {
	    return this.getTypedRuleContext(ValueContext,0);
	};

	CLOSE_PARENTH() {
	    return this.getToken(LanguageParser.CLOSE_PARENTH, 0);
	};

	OPEN_CURL() {
	    return this.getToken(LanguageParser.OPEN_CURL, 0);
	};

	CLOSE_CURL() {
	    return this.getToken(LanguageParser.CLOSE_CURL, 0);
	};

	expression = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(ExpressionContext);
	    } else {
	        return this.getTypedRuleContext(ExpressionContext,i);
	    }
	};

	accept(visitor) {
	    if ( visitor instanceof LanguageVisitor ) {
	        return visitor.visitLoop__while(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class Loop__forContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = LanguageParser.RULE_loop__for;
    }

	FOR_PR() {
	    return this.getToken(LanguageParser.FOR_PR, 0);
	};

	OPEN_PARENTH() {
	    return this.getToken(LanguageParser.OPEN_PARENTH, 0);
	};

	declaration() {
	    return this.getTypedRuleContext(DeclarationContext,0);
	};

	SEMI = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(LanguageParser.SEMI);
	    } else {
	        return this.getToken(LanguageParser.SEMI, i);
	    }
	};


	value() {
	    return this.getTypedRuleContext(ValueContext,0);
	};

	increment() {
	    return this.getTypedRuleContext(IncrementContext,0);
	};

	CLOSE_PARENTH() {
	    return this.getToken(LanguageParser.CLOSE_PARENTH, 0);
	};

	OPEN_CURL() {
	    return this.getToken(LanguageParser.OPEN_CURL, 0);
	};

	CLOSE_CURL() {
	    return this.getToken(LanguageParser.CLOSE_CURL, 0);
	};

	expression = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(ExpressionContext);
	    } else {
	        return this.getTypedRuleContext(ExpressionContext,i);
	    }
	};

	accept(visitor) {
	    if ( visitor instanceof LanguageVisitor ) {
	        return visitor.visitLoop__for(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class Loop__do_whileContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = LanguageParser.RULE_loop__do_while;
    }

	DO_PR() {
	    return this.getToken(LanguageParser.DO_PR, 0);
	};

	OPEN_CURL() {
	    return this.getToken(LanguageParser.OPEN_CURL, 0);
	};

	CLOSE_CURL() {
	    return this.getToken(LanguageParser.CLOSE_CURL, 0);
	};

	WHILE_PR() {
	    return this.getToken(LanguageParser.WHILE_PR, 0);
	};

	OPEN_PARENTH() {
	    return this.getToken(LanguageParser.OPEN_PARENTH, 0);
	};

	value() {
	    return this.getTypedRuleContext(ValueContext,0);
	};

	CLOSE_PARENTH() {
	    return this.getToken(LanguageParser.CLOSE_PARENTH, 0);
	};

	expression = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(ExpressionContext);
	    } else {
	        return this.getTypedRuleContext(ExpressionContext,i);
	    }
	};

	accept(visitor) {
	    if ( visitor instanceof LanguageVisitor ) {
	        return visitor.visitLoop__do_while(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}




LanguageParser.FileContext = FileContext; 
LanguageParser.InitContext = InitContext; 
LanguageParser.LogicContext = LogicContext; 
LanguageParser.ExpressionContext = ExpressionContext; 
LanguageParser.DeclarationContext = DeclarationContext; 
LanguageParser.AssignContext = AssignContext; 
LanguageParser.LogContext = LogContext; 
LanguageParser.ValueContext = ValueContext; 
LanguageParser.IncrementContext = IncrementContext; 
LanguageParser.Chained_conditionalContext = Chained_conditionalContext; 
LanguageParser.ConditionalContext = ConditionalContext; 
LanguageParser.Conditional__elifContext = Conditional__elifContext; 
LanguageParser.Conditional__elseContext = Conditional__elseContext; 
LanguageParser.Loop__whileContext = Loop__whileContext; 
LanguageParser.Loop__forContext = Loop__forContext; 
LanguageParser.Loop__do_whileContext = Loop__do_whileContext; 
