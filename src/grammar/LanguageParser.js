// Generated from ./grammar/Language.g4 by ANTLR 4.13.1
// jshint ignore: start
import antlr4 from 'antlr4';
import LanguageVisitor from './LanguageVisitor.js';

const serializedATN = [4,1,30,221,2,0,7,0,2,1,7,1,2,2,7,2,2,3,7,3,2,4,7,
4,2,5,7,5,2,6,7,6,2,7,7,7,2,8,7,8,2,9,7,9,2,10,7,10,2,11,7,11,2,12,7,12,
2,13,7,13,2,14,7,14,2,15,7,15,1,0,4,0,34,8,0,11,0,12,0,35,1,1,1,1,1,1,3,
1,41,8,1,1,1,1,1,3,1,45,8,1,1,1,1,1,1,2,5,2,50,8,2,10,2,12,2,53,9,2,1,3,
1,3,3,3,57,8,3,1,3,1,3,3,3,61,8,3,1,3,1,3,3,3,65,8,3,1,3,1,3,3,3,69,8,3,
1,3,1,3,3,3,73,8,3,1,3,1,3,3,3,77,8,3,1,3,1,3,3,3,81,8,3,1,3,1,3,3,3,85,
8,3,3,3,87,8,3,1,4,1,4,1,4,1,4,3,4,93,8,4,1,5,1,5,1,5,1,5,1,6,1,6,1,6,1,
6,1,6,1,7,1,7,1,7,1,7,1,7,1,7,1,7,1,7,1,7,1,7,1,7,1,7,1,7,3,7,117,8,7,1,
7,1,7,1,7,1,7,1,7,1,7,1,7,1,7,1,7,5,7,128,8,7,10,7,12,7,131,9,7,1,8,1,8,
1,8,1,8,1,8,3,8,138,8,8,1,9,1,9,5,9,142,8,9,10,9,12,9,145,9,9,1,9,3,9,148,
8,9,1,10,1,10,1,10,1,10,1,10,1,10,5,10,156,8,10,10,10,12,10,159,9,10,1,10,
1,10,1,11,1,11,1,11,1,12,1,12,1,12,5,12,169,8,12,10,12,12,12,172,9,12,1,
12,1,12,1,13,1,13,1,13,1,13,1,13,1,13,5,13,182,8,13,10,13,12,13,185,9,13,
1,13,1,13,1,14,1,14,1,14,1,14,1,14,1,14,1,14,1,14,1,14,1,14,1,14,5,14,200,
8,14,10,14,12,14,203,9,14,1,14,1,14,1,15,1,15,1,15,5,15,210,8,15,10,15,12,
15,213,9,15,1,15,1,15,1,15,1,15,1,15,1,15,1,15,1,51,1,14,16,0,2,4,6,8,10,
12,14,16,18,20,22,24,26,28,30,0,3,1,0,9,10,1,0,21,22,2,0,11,12,15,15,242,
0,33,1,0,0,0,2,37,1,0,0,0,4,51,1,0,0,0,6,86,1,0,0,0,8,88,1,0,0,0,10,94,1,
0,0,0,12,98,1,0,0,0,14,116,1,0,0,0,16,132,1,0,0,0,18,139,1,0,0,0,20,149,
1,0,0,0,22,162,1,0,0,0,24,165,1,0,0,0,26,175,1,0,0,0,28,188,1,0,0,0,30,206,
1,0,0,0,32,34,3,2,1,0,33,32,1,0,0,0,34,35,1,0,0,0,35,33,1,0,0,0,35,36,1,
0,0,0,36,1,1,0,0,0,37,38,5,2,0,0,38,40,5,6,0,0,39,41,5,1,0,0,40,39,1,0,0,
0,40,41,1,0,0,0,41,42,1,0,0,0,42,44,3,4,2,0,43,45,5,1,0,0,44,43,1,0,0,0,
44,45,1,0,0,0,45,46,1,0,0,0,46,47,5,7,0,0,47,3,1,0,0,0,48,50,3,6,3,0,49,
48,1,0,0,0,50,53,1,0,0,0,51,52,1,0,0,0,51,49,1,0,0,0,52,5,1,0,0,0,53,51,
1,0,0,0,54,56,3,8,4,0,55,57,5,27,0,0,56,55,1,0,0,0,56,57,1,0,0,0,57,87,1,
0,0,0,58,60,3,10,5,0,59,61,5,27,0,0,60,59,1,0,0,0,60,61,1,0,0,0,61,87,1,
0,0,0,62,64,3,18,9,0,63,65,5,27,0,0,64,63,1,0,0,0,64,65,1,0,0,0,65,87,1,
0,0,0,66,68,3,26,13,0,67,69,5,27,0,0,68,67,1,0,0,0,68,69,1,0,0,0,69,87,1,
0,0,0,70,72,3,30,15,0,71,73,5,27,0,0,72,71,1,0,0,0,72,73,1,0,0,0,73,87,1,
0,0,0,74,76,3,28,14,0,75,77,5,27,0,0,76,75,1,0,0,0,76,77,1,0,0,0,77,87,1,
0,0,0,78,80,3,12,6,0,79,81,5,27,0,0,80,79,1,0,0,0,80,81,1,0,0,0,81,87,1,
0,0,0,82,84,3,16,8,0,83,85,5,27,0,0,84,83,1,0,0,0,84,85,1,0,0,0,85,87,1,
0,0,0,86,54,1,0,0,0,86,58,1,0,0,0,86,62,1,0,0,0,86,66,1,0,0,0,86,70,1,0,
0,0,86,74,1,0,0,0,86,78,1,0,0,0,86,82,1,0,0,0,87,7,1,0,0,0,88,89,5,3,0,0,
89,92,5,29,0,0,90,91,5,8,0,0,91,93,3,14,7,0,92,90,1,0,0,0,92,93,1,0,0,0,
93,9,1,0,0,0,94,95,5,29,0,0,95,96,5,8,0,0,96,97,3,14,7,0,97,11,1,0,0,0,98,
99,5,14,0,0,99,100,5,4,0,0,100,101,3,14,7,0,101,102,5,5,0,0,102,13,1,0,0,
0,103,104,6,7,-1,0,104,105,5,4,0,0,105,106,3,14,7,0,106,107,5,5,0,0,107,
117,1,0,0,0,108,109,7,0,0,0,109,117,3,14,7,8,110,117,7,1,0,0,111,117,5,23,
0,0,112,117,5,24,0,0,113,117,5,26,0,0,114,117,5,25,0,0,115,117,5,29,0,0,
116,103,1,0,0,0,116,108,1,0,0,0,116,110,1,0,0,0,116,111,1,0,0,0,116,112,
1,0,0,0,116,113,1,0,0,0,116,114,1,0,0,0,116,115,1,0,0,0,117,129,1,0,0,0,
118,119,10,10,0,0,119,120,7,2,0,0,120,128,3,14,7,11,121,122,10,9,0,0,122,
123,7,0,0,0,123,128,3,14,7,10,124,125,10,6,0,0,125,126,7,1,0,0,126,128,3,
14,7,7,127,118,1,0,0,0,127,121,1,0,0,0,127,124,1,0,0,0,128,131,1,0,0,0,129,
127,1,0,0,0,129,130,1,0,0,0,130,15,1,0,0,0,131,129,1,0,0,0,132,137,5,29,
0,0,133,134,5,9,0,0,134,138,5,9,0,0,135,136,5,10,0,0,136,138,5,10,0,0,137,
133,1,0,0,0,137,135,1,0,0,0,138,17,1,0,0,0,139,143,3,20,10,0,140,142,3,22,
11,0,141,140,1,0,0,0,142,145,1,0,0,0,143,141,1,0,0,0,143,144,1,0,0,0,144,
147,1,0,0,0,145,143,1,0,0,0,146,148,3,24,12,0,147,146,1,0,0,0,147,148,1,
0,0,0,148,19,1,0,0,0,149,150,5,16,0,0,150,151,5,4,0,0,151,152,3,14,7,0,152,
153,5,5,0,0,153,157,5,6,0,0,154,156,3,6,3,0,155,154,1,0,0,0,156,159,1,0,
0,0,157,155,1,0,0,0,157,158,1,0,0,0,158,160,1,0,0,0,159,157,1,0,0,0,160,
161,5,7,0,0,161,21,1,0,0,0,162,163,5,17,0,0,163,164,3,20,10,0,164,23,1,0,
0,0,165,166,5,17,0,0,166,170,5,6,0,0,167,169,3,6,3,0,168,167,1,0,0,0,169,
172,1,0,0,0,170,168,1,0,0,0,170,171,1,0,0,0,171,173,1,0,0,0,172,170,1,0,
0,0,173,174,5,7,0,0,174,25,1,0,0,0,175,176,5,18,0,0,176,177,5,4,0,0,177,
178,3,14,7,0,178,179,5,5,0,0,179,183,5,6,0,0,180,182,3,6,3,0,181,180,1,0,
0,0,182,185,1,0,0,0,183,181,1,0,0,0,183,184,1,0,0,0,184,186,1,0,0,0,185,
183,1,0,0,0,186,187,5,7,0,0,187,27,1,0,0,0,188,189,5,19,0,0,189,190,5,4,
0,0,190,191,3,8,4,0,191,192,5,27,0,0,192,193,3,14,7,0,193,194,5,27,0,0,194,
195,3,16,8,0,195,196,5,27,0,0,196,197,5,5,0,0,197,201,5,6,0,0,198,200,3,
6,3,0,199,198,1,0,0,0,200,203,1,0,0,0,201,199,1,0,0,0,201,202,1,0,0,0,202,
204,1,0,0,0,203,201,1,0,0,0,204,205,5,7,0,0,205,29,1,0,0,0,206,207,5,20,
0,0,207,211,5,6,0,0,208,210,3,6,3,0,209,208,1,0,0,0,210,213,1,0,0,0,211,
209,1,0,0,0,211,212,1,0,0,0,212,214,1,0,0,0,213,211,1,0,0,0,214,215,5,7,
0,0,215,216,5,18,0,0,216,217,5,4,0,0,217,218,3,14,7,0,218,219,5,5,0,0,219,
31,1,0,0,0,25,35,40,44,51,56,60,64,68,72,76,80,84,86,92,116,127,129,137,
143,147,157,170,183,201,211];


const atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

const decisionsToDFA = atn.decisionToState.map( (ds, index) => new antlr4.dfa.DFA(ds, index) );

const sharedContextCache = new antlr4.atn.PredictionContextCache();

export default class LanguageParser extends antlr4.Parser {

    static grammarFileName = "Language.g4";
    static literalNames = [ null, "'\\n'", "'start -->'", null, "'('", "')'", 
                            "'{'", "'}'", "'='", "'+'", "'-'", "'*'", "'%'", 
                            "','", "'ptr'", "'/'", "'if'", "'else'", "'while'", 
                            "'for'", "'do'" ];
    static symbolicNames = [ null, null, "MAIN", "TYPE", "OPEN_PARENTH", 
                             "CLOSE_PARENTH", "OPEN_CURL", "CLOSE_CURL", 
                             "EQUALS", "PLUS", "SUB", "MULT", "MOD", "COMMA", 
                             "PRINT", "DIV", "IF_PR", "ELSE_PR", "WHILE_PR", 
                             "FOR_PR", "DO_PR", "COND_MAT", "COND_LOG", 
                             "STRING", "CHAR", "INT", "FLOAT", "SEMI", "NEWLINE", 
                             "ID", "WS" ];
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
	            if(_la===27) {
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
	            if(_la===27) {
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
	            if(_la===27) {
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
	            if(_la===27) {
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
	            if(_la===27) {
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
	            if(_la===27) {
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
	            if(_la===27) {
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
	            if(_la===27) {
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
	        if(_la===8) {
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
	        this.enterOuterAlt(localctx, 1);
	        this.state = 94;
	        this.match(LanguageParser.ID);
	        this.state = 95;
	        this.match(LanguageParser.EQUALS);
	        this.state = 96;
	        this.value(0);
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
	        this.state = 98;
	        this.match(LanguageParser.PRINT);
	        this.state = 99;
	        this.match(LanguageParser.OPEN_PARENTH);
	        this.state = 100;
	        this.value(0);
	        this.state = 101;
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
	        this.state = 116;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 4:
	            localctx = new ParenthesesContext(this, localctx);
	            this._ctx = localctx;
	            _prevctx = localctx;

	            this.state = 104;
	            this.match(LanguageParser.OPEN_PARENTH);
	            this.state = 105;
	            this.value(0);
	            this.state = 106;
	            this.match(LanguageParser.CLOSE_PARENTH);
	            break;
	        case 9:
	        case 10:
	            localctx = new SignNumbersContext(this, localctx);
	            this._ctx = localctx;
	            _prevctx = localctx;
	            this.state = 108;
	            localctx.operation = this._input.LT(1);
	            _la = this._input.LA(1);
	            if(!(_la===9 || _la===10)) {
	                localctx.operation = this._errHandler.recoverInline(this);
	            }
	            else {
	            	this._errHandler.reportMatch(this);
	                this.consume();
	            }
	            this.state = 109;
	            this.value(8);
	            break;
	        case 21:
	        case 22:
	            localctx = new NormalConditionContext(this, localctx);
	            this._ctx = localctx;
	            _prevctx = localctx;
	            this.state = 110;
	            localctx.cond_sym = this._input.LT(1);
	            _la = this._input.LA(1);
	            if(!(_la===21 || _la===22)) {
	                localctx.cond_sym = this._errHandler.recoverInline(this);
	            }
	            else {
	            	this._errHandler.reportMatch(this);
	                this.consume();
	            }
	            break;
	        case 23:
	            localctx = new ValueAsCharContext(this, localctx);
	            this._ctx = localctx;
	            _prevctx = localctx;
	            this.state = 111;
	            this.match(LanguageParser.STRING);
	            break;
	        case 24:
	            localctx = new ValueAsCharContext(this, localctx);
	            this._ctx = localctx;
	            _prevctx = localctx;
	            this.state = 112;
	            this.match(LanguageParser.CHAR);
	            break;
	        case 26:
	            localctx = new ValueAsNumberContext(this, localctx);
	            this._ctx = localctx;
	            _prevctx = localctx;
	            this.state = 113;
	            this.match(LanguageParser.FLOAT);
	            break;
	        case 25:
	            localctx = new ValueAsNumberContext(this, localctx);
	            this._ctx = localctx;
	            _prevctx = localctx;
	            this.state = 114;
	            this.match(LanguageParser.INT);
	            break;
	        case 29:
	            localctx = new ValueAsIDContext(this, localctx);
	            this._ctx = localctx;
	            _prevctx = localctx;
	            this.state = 115;
	            this.match(LanguageParser.ID);
	            break;
	        default:
	            throw new antlr4.error.NoViableAltException(this);
	        }
	        this._ctx.stop = this._input.LT(-1);
	        this.state = 129;
	        this._errHandler.sync(this);
	        var _alt = this._interp.adaptivePredict(this._input,16,this._ctx)
	        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
	            if(_alt===1) {
	                if(this._parseListeners!==null) {
	                    this.triggerExitRuleEvent();
	                }
	                _prevctx = localctx;
	                this.state = 127;
	                this._errHandler.sync(this);
	                var la_ = this._interp.adaptivePredict(this._input,15,this._ctx);
	                switch(la_) {
	                case 1:
	                    localctx = new MultDivContext(this, new ValueContext(this, _parentctx, _parentState));
	                    this.pushNewRecursionContext(localctx, _startState, LanguageParser.RULE_value);
	                    this.state = 118;
	                    if (!( this.precpred(this._ctx, 10))) {
	                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 10)");
	                    }
	                    this.state = 119;
	                    localctx.operation = this._input.LT(1);
	                    _la = this._input.LA(1);
	                    if(!((((_la) & ~0x1f) === 0 && ((1 << _la) & 38912) !== 0))) {
	                        localctx.operation = this._errHandler.recoverInline(this);
	                    }
	                    else {
	                    	this._errHandler.reportMatch(this);
	                        this.consume();
	                    }
	                    this.state = 120;
	                    this.value(11);
	                    break;

	                case 2:
	                    localctx = new AddSubContext(this, new ValueContext(this, _parentctx, _parentState));
	                    this.pushNewRecursionContext(localctx, _startState, LanguageParser.RULE_value);
	                    this.state = 121;
	                    if (!( this.precpred(this._ctx, 9))) {
	                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 9)");
	                    }
	                    this.state = 122;
	                    localctx.operation = this._input.LT(1);
	                    _la = this._input.LA(1);
	                    if(!(_la===9 || _la===10)) {
	                        localctx.operation = this._errHandler.recoverInline(this);
	                    }
	                    else {
	                    	this._errHandler.reportMatch(this);
	                        this.consume();
	                    }
	                    this.state = 123;
	                    this.value(10);
	                    break;

	                case 3:
	                    localctx = new NormalConditionContext(this, new ValueContext(this, _parentctx, _parentState));
	                    this.pushNewRecursionContext(localctx, _startState, LanguageParser.RULE_value);
	                    this.state = 124;
	                    if (!( this.precpred(this._ctx, 6))) {
	                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 6)");
	                    }
	                    this.state = 125;
	                    localctx.cond_sym = this._input.LT(1);
	                    _la = this._input.LA(1);
	                    if(!(_la===21 || _la===22)) {
	                        localctx.cond_sym = this._errHandler.recoverInline(this);
	                    }
	                    else {
	                    	this._errHandler.reportMatch(this);
	                        this.consume();
	                    }
	                    this.state = 126;
	                    this.value(7);
	                    break;

	                } 
	            }
	            this.state = 131;
	            this._errHandler.sync(this);
	            _alt = this._interp.adaptivePredict(this._input,16,this._ctx);
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
	        this.state = 132;
	        this.match(LanguageParser.ID);
	        this.state = 137;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 9:
	            this.state = 133;
	            this.match(LanguageParser.PLUS);
	            this.state = 134;
	            this.match(LanguageParser.PLUS);
	            break;
	        case 10:
	            this.state = 135;
	            this.match(LanguageParser.SUB);
	            this.state = 136;
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
	        this.state = 139;
	        this.conditional();
	        this.state = 143;
	        this._errHandler.sync(this);
	        var _alt = this._interp.adaptivePredict(this._input,18,this._ctx)
	        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
	            if(_alt===1) {
	                this.state = 140;
	                this.conditional__elif(); 
	            }
	            this.state = 145;
	            this._errHandler.sync(this);
	            _alt = this._interp.adaptivePredict(this._input,18,this._ctx);
	        }

	        this.state = 147;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===17) {
	            this.state = 146;
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
	        this.state = 149;
	        this.match(LanguageParser.IF_PR);
	        this.state = 150;
	        this.match(LanguageParser.OPEN_PARENTH);
	        this.state = 151;
	        this.value(0);
	        this.state = 152;
	        this.match(LanguageParser.CLOSE_PARENTH);
	        this.state = 153;
	        this.match(LanguageParser.OPEN_CURL);
	        this.state = 157;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while((((_la) & ~0x1f) === 0 && ((1 << _la) & 538787848) !== 0)) {
	            this.state = 154;
	            this.expression();
	            this.state = 159;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	        this.state = 160;
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
	        this.state = 162;
	        this.match(LanguageParser.ELSE_PR);
	        this.state = 163;
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
	        this.state = 165;
	        this.match(LanguageParser.ELSE_PR);
	        this.state = 166;
	        this.match(LanguageParser.OPEN_CURL);
	        this.state = 170;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while((((_la) & ~0x1f) === 0 && ((1 << _la) & 538787848) !== 0)) {
	            this.state = 167;
	            this.expression();
	            this.state = 172;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	        this.state = 173;
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
	        this.state = 175;
	        this.match(LanguageParser.WHILE_PR);
	        this.state = 176;
	        this.match(LanguageParser.OPEN_PARENTH);
	        this.state = 177;
	        this.value(0);
	        this.state = 178;
	        this.match(LanguageParser.CLOSE_PARENTH);
	        this.state = 179;
	        this.match(LanguageParser.OPEN_CURL);
	        this.state = 183;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while((((_la) & ~0x1f) === 0 && ((1 << _la) & 538787848) !== 0)) {
	            this.state = 180;
	            this.expression();
	            this.state = 185;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	        this.state = 186;
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
	        this.state = 188;
	        this.match(LanguageParser.FOR_PR);
	        this.state = 189;
	        this.match(LanguageParser.OPEN_PARENTH);
	        this.state = 190;
	        this.declaration();
	        this.state = 191;
	        this.match(LanguageParser.SEMI);
	        this.state = 192;
	        this.value(0);
	        this.state = 193;
	        this.match(LanguageParser.SEMI);
	        this.state = 194;
	        this.increment();
	        this.state = 195;
	        this.match(LanguageParser.SEMI);
	        this.state = 196;
	        this.match(LanguageParser.CLOSE_PARENTH);
	        this.state = 197;
	        this.match(LanguageParser.OPEN_CURL);
	        this.state = 201;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while((((_la) & ~0x1f) === 0 && ((1 << _la) & 538787848) !== 0)) {
	            this.state = 198;
	            this.expression();
	            this.state = 203;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	        this.state = 204;
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
	        this.state = 206;
	        this.match(LanguageParser.DO_PR);
	        this.state = 207;
	        this.match(LanguageParser.OPEN_CURL);
	        this.state = 211;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while((((_la) & ~0x1f) === 0 && ((1 << _la) & 538787848) !== 0)) {
	            this.state = 208;
	            this.expression();
	            this.state = 213;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	        this.state = 214;
	        this.match(LanguageParser.CLOSE_CURL);
	        this.state = 215;
	        this.match(LanguageParser.WHILE_PR);
	        this.state = 216;
	        this.match(LanguageParser.OPEN_PARENTH);
	        this.state = 217;
	        this.value(0);
	        this.state = 218;
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
LanguageParser.EQUALS = 8;
LanguageParser.PLUS = 9;
LanguageParser.SUB = 10;
LanguageParser.MULT = 11;
LanguageParser.MOD = 12;
LanguageParser.COMMA = 13;
LanguageParser.PRINT = 14;
LanguageParser.DIV = 15;
LanguageParser.IF_PR = 16;
LanguageParser.ELSE_PR = 17;
LanguageParser.WHILE_PR = 18;
LanguageParser.FOR_PR = 19;
LanguageParser.DO_PR = 20;
LanguageParser.COND_MAT = 21;
LanguageParser.COND_LOG = 22;
LanguageParser.STRING = 23;
LanguageParser.CHAR = 24;
LanguageParser.INT = 25;
LanguageParser.FLOAT = 26;
LanguageParser.SEMI = 27;
LanguageParser.NEWLINE = 28;
LanguageParser.ID = 29;
LanguageParser.WS = 30;

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
	        return visitor.visitAssign(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



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
