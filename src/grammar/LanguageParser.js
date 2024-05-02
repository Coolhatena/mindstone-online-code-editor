// Generated from ./grammar/Language.g4 by ANTLR 4.13.1
// jshint ignore: start
import antlr4 from 'antlr4';
import LanguageVisitor from './LanguageVisitor.js';

const serializedATN = [4,1,28,197,2,0,7,0,2,1,7,1,2,2,7,2,2,3,7,3,2,4,7,
4,2,5,7,5,2,6,7,6,2,7,7,7,2,8,7,8,2,9,7,9,2,10,7,10,2,11,7,11,2,12,7,12,
2,13,7,13,2,14,7,14,1,0,4,0,32,8,0,11,0,12,0,33,1,1,1,1,1,1,3,1,39,8,1,1,
1,1,1,3,1,43,8,1,1,1,1,1,1,2,5,2,48,8,2,10,2,12,2,51,9,2,1,3,1,3,3,3,55,
8,3,1,3,1,3,3,3,59,8,3,1,3,1,3,3,3,63,8,3,1,3,1,3,3,3,67,8,3,1,3,1,3,3,3,
71,8,3,1,3,1,3,3,3,75,8,3,1,3,1,3,3,3,79,8,3,3,3,81,8,3,1,4,1,4,1,4,1,4,
3,4,87,8,4,1,5,1,5,1,5,1,5,1,6,1,6,1,6,1,6,1,6,1,7,1,7,1,7,1,7,1,7,1,7,1,
7,1,7,1,7,1,7,1,7,1,7,1,7,3,7,111,8,7,1,7,1,7,1,7,1,7,1,7,1,7,1,7,1,7,1,
7,5,7,122,8,7,10,7,12,7,125,9,7,1,8,1,8,1,8,1,8,1,8,3,8,132,8,8,1,9,1,9,
5,9,136,8,9,10,9,12,9,139,9,9,1,9,3,9,142,8,9,1,10,1,10,1,10,1,10,1,10,1,
10,5,10,150,8,10,10,10,12,10,153,9,10,1,10,1,10,1,11,1,11,1,11,1,12,1,12,
1,12,5,12,163,8,12,10,12,12,12,166,9,12,1,12,1,12,1,13,1,13,1,13,1,13,1,
13,1,13,5,13,176,8,13,10,13,12,13,179,9,13,1,13,1,13,1,14,1,14,1,14,5,14,
186,8,14,10,14,12,14,189,9,14,1,14,1,14,1,14,1,14,1,14,1,14,1,14,1,49,1,
14,15,0,2,4,6,8,10,12,14,16,18,20,22,24,26,28,0,3,1,0,9,10,1,0,19,20,2,0,
11,12,14,14,216,0,31,1,0,0,0,2,35,1,0,0,0,4,49,1,0,0,0,6,80,1,0,0,0,8,82,
1,0,0,0,10,88,1,0,0,0,12,92,1,0,0,0,14,110,1,0,0,0,16,126,1,0,0,0,18,133,
1,0,0,0,20,143,1,0,0,0,22,156,1,0,0,0,24,159,1,0,0,0,26,169,1,0,0,0,28,182,
1,0,0,0,30,32,3,2,1,0,31,30,1,0,0,0,32,33,1,0,0,0,33,31,1,0,0,0,33,34,1,
0,0,0,34,1,1,0,0,0,35,36,5,2,0,0,36,38,5,6,0,0,37,39,5,1,0,0,38,37,1,0,0,
0,38,39,1,0,0,0,39,40,1,0,0,0,40,42,3,4,2,0,41,43,5,1,0,0,42,41,1,0,0,0,
42,43,1,0,0,0,43,44,1,0,0,0,44,45,5,7,0,0,45,3,1,0,0,0,46,48,3,6,3,0,47,
46,1,0,0,0,48,51,1,0,0,0,49,50,1,0,0,0,49,47,1,0,0,0,50,5,1,0,0,0,51,49,
1,0,0,0,52,54,3,8,4,0,53,55,5,25,0,0,54,53,1,0,0,0,54,55,1,0,0,0,55,81,1,
0,0,0,56,58,3,10,5,0,57,59,5,25,0,0,58,57,1,0,0,0,58,59,1,0,0,0,59,81,1,
0,0,0,60,62,3,18,9,0,61,63,5,25,0,0,62,61,1,0,0,0,62,63,1,0,0,0,63,81,1,
0,0,0,64,66,3,26,13,0,65,67,5,25,0,0,66,65,1,0,0,0,66,67,1,0,0,0,67,81,1,
0,0,0,68,70,3,28,14,0,69,71,5,25,0,0,70,69,1,0,0,0,70,71,1,0,0,0,71,81,1,
0,0,0,72,74,3,12,6,0,73,75,5,25,0,0,74,73,1,0,0,0,74,75,1,0,0,0,75,81,1,
0,0,0,76,78,3,16,8,0,77,79,5,25,0,0,78,77,1,0,0,0,78,79,1,0,0,0,79,81,1,
0,0,0,80,52,1,0,0,0,80,56,1,0,0,0,80,60,1,0,0,0,80,64,1,0,0,0,80,68,1,0,
0,0,80,72,1,0,0,0,80,76,1,0,0,0,81,7,1,0,0,0,82,83,5,3,0,0,83,86,5,27,0,
0,84,85,5,8,0,0,85,87,3,14,7,0,86,84,1,0,0,0,86,87,1,0,0,0,87,9,1,0,0,0,
88,89,5,27,0,0,89,90,5,8,0,0,90,91,3,14,7,0,91,11,1,0,0,0,92,93,5,13,0,0,
93,94,5,4,0,0,94,95,3,14,7,0,95,96,5,5,0,0,96,13,1,0,0,0,97,98,6,7,-1,0,
98,99,5,4,0,0,99,100,3,14,7,0,100,101,5,5,0,0,101,111,1,0,0,0,102,103,7,
0,0,0,103,111,3,14,7,8,104,111,7,1,0,0,105,111,5,21,0,0,106,111,5,22,0,0,
107,111,5,24,0,0,108,111,5,23,0,0,109,111,5,27,0,0,110,97,1,0,0,0,110,102,
1,0,0,0,110,104,1,0,0,0,110,105,1,0,0,0,110,106,1,0,0,0,110,107,1,0,0,0,
110,108,1,0,0,0,110,109,1,0,0,0,111,123,1,0,0,0,112,113,10,10,0,0,113,114,
7,2,0,0,114,122,3,14,7,11,115,116,10,9,0,0,116,117,7,0,0,0,117,122,3,14,
7,10,118,119,10,6,0,0,119,120,7,1,0,0,120,122,3,14,7,7,121,112,1,0,0,0,121,
115,1,0,0,0,121,118,1,0,0,0,122,125,1,0,0,0,123,121,1,0,0,0,123,124,1,0,
0,0,124,15,1,0,0,0,125,123,1,0,0,0,126,131,5,27,0,0,127,128,5,9,0,0,128,
132,5,9,0,0,129,130,5,10,0,0,130,132,5,10,0,0,131,127,1,0,0,0,131,129,1,
0,0,0,132,17,1,0,0,0,133,137,3,20,10,0,134,136,3,22,11,0,135,134,1,0,0,0,
136,139,1,0,0,0,137,135,1,0,0,0,137,138,1,0,0,0,138,141,1,0,0,0,139,137,
1,0,0,0,140,142,3,24,12,0,141,140,1,0,0,0,141,142,1,0,0,0,142,19,1,0,0,0,
143,144,5,15,0,0,144,145,5,4,0,0,145,146,3,14,7,0,146,147,5,5,0,0,147,151,
5,6,0,0,148,150,3,6,3,0,149,148,1,0,0,0,150,153,1,0,0,0,151,149,1,0,0,0,
151,152,1,0,0,0,152,154,1,0,0,0,153,151,1,0,0,0,154,155,5,7,0,0,155,21,1,
0,0,0,156,157,5,16,0,0,157,158,3,20,10,0,158,23,1,0,0,0,159,160,5,16,0,0,
160,164,5,6,0,0,161,163,3,6,3,0,162,161,1,0,0,0,163,166,1,0,0,0,164,162,
1,0,0,0,164,165,1,0,0,0,165,167,1,0,0,0,166,164,1,0,0,0,167,168,5,7,0,0,
168,25,1,0,0,0,169,170,5,17,0,0,170,171,5,4,0,0,171,172,3,14,7,0,172,173,
5,5,0,0,173,177,5,6,0,0,174,176,3,6,3,0,175,174,1,0,0,0,176,179,1,0,0,0,
177,175,1,0,0,0,177,178,1,0,0,0,178,180,1,0,0,0,179,177,1,0,0,0,180,181,
5,7,0,0,181,27,1,0,0,0,182,183,5,18,0,0,183,187,5,6,0,0,184,186,3,6,3,0,
185,184,1,0,0,0,186,189,1,0,0,0,187,185,1,0,0,0,187,188,1,0,0,0,188,190,
1,0,0,0,189,187,1,0,0,0,190,191,5,7,0,0,191,192,5,17,0,0,192,193,5,4,0,0,
193,194,3,14,7,0,194,195,5,5,0,0,195,29,1,0,0,0,23,33,38,42,49,54,58,62,
66,70,74,78,80,86,110,121,123,131,137,141,151,164,177,187];


const atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

const decisionsToDFA = atn.decisionToState.map( (ds, index) => new antlr4.dfa.DFA(ds, index) );

const sharedContextCache = new antlr4.atn.PredictionContextCache();

export default class LanguageParser extends antlr4.Parser {

    static grammarFileName = "Language.g4";
    static literalNames = [ null, "'\\n'", "'start -->'", null, "'('", "')'", 
                            "'{'", "'}'", "'='", "'+'", "'-'", "'*'", "'%'", 
                            "'ptr'", "'/'", "'if'", "'else'", "'while'", 
                            "'do'" ];
    static symbolicNames = [ null, null, "MAIN", "TYPE", "OPEN_PARENTH", 
                             "CLOSE_PARENTH", "OPEN_CURL", "CLOSE_CURL", 
                             "EQUALS", "PLUS", "MINUS", "MULT", "MOD", "PRINT", 
                             "DIV", "IF_PR", "ELSE_PR", "WHILE_PR", "DO_PR", 
                             "COND_MAT", "COND_LOG", "STRING", "CHAR", "INT", 
                             "FLOAT", "SEMI", "NEWLINE", "ID", "WS" ];
    static ruleNames = [ "file", "init", "logic", "expression", "declaration", 
                         "assign", "log", "value", "increment", "chained_conditional", 
                         "conditional", "conditional__elif", "conditional__else", 
                         "loop__while", "loop__do_while" ];

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
	        this.state = 31; 
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        do {
	            this.state = 30;
	            this.init();
	            this.state = 33; 
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
	        this.state = 35;
	        this.match(LanguageParser.MAIN);
	        this.state = 36;
	        this.match(LanguageParser.OPEN_CURL);
	        this.state = 38;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,1,this._ctx);
	        if(la_===1) {
	            this.state = 37;
	            this.match(LanguageParser.T__0);

	        }
	        this.state = 40;
	        this.logic();
	        this.state = 42;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===1) {
	            this.state = 41;
	            this.match(LanguageParser.T__0);
	        }

	        this.state = 44;
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
	        this.state = 49;
	        this._errHandler.sync(this);
	        var _alt = this._interp.adaptivePredict(this._input,3,this._ctx)
	        while(_alt!=1 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
	            if(_alt===1+1) {
	                this.state = 46;
	                this.expression(); 
	            }
	            this.state = 51;
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
	        this.state = 80;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,11,this._ctx);
	        switch(la_) {
	        case 1:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 52;
	            this.declaration();
	            this.state = 54;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(_la===25) {
	                this.state = 53;
	                this.match(LanguageParser.SEMI);
	            }

	            break;

	        case 2:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 56;
	            this.assign();
	            this.state = 58;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(_la===25) {
	                this.state = 57;
	                this.match(LanguageParser.SEMI);
	            }

	            break;

	        case 3:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 60;
	            this.chained_conditional();
	            this.state = 62;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(_la===25) {
	                this.state = 61;
	                this.match(LanguageParser.SEMI);
	            }

	            break;

	        case 4:
	            this.enterOuterAlt(localctx, 4);
	            this.state = 64;
	            this.loop__while();
	            this.state = 66;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(_la===25) {
	                this.state = 65;
	                this.match(LanguageParser.SEMI);
	            }

	            break;

	        case 5:
	            this.enterOuterAlt(localctx, 5);
	            this.state = 68;
	            this.loop__do_while();
	            this.state = 70;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(_la===25) {
	                this.state = 69;
	                this.match(LanguageParser.SEMI);
	            }

	            break;

	        case 6:
	            this.enterOuterAlt(localctx, 6);
	            this.state = 72;
	            this.log();
	            this.state = 74;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(_la===25) {
	                this.state = 73;
	                this.match(LanguageParser.SEMI);
	            }

	            break;

	        case 7:
	            this.enterOuterAlt(localctx, 7);
	            this.state = 76;
	            this.increment();
	            this.state = 78;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(_la===25) {
	                this.state = 77;
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
	        this.state = 82;
	        this.match(LanguageParser.TYPE);
	        this.state = 83;
	        this.match(LanguageParser.ID);
	        this.state = 86;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===8) {
	            this.state = 84;
	            this.match(LanguageParser.EQUALS);
	            this.state = 85;
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
	        this.state = 88;
	        this.match(LanguageParser.ID);
	        this.state = 89;
	        this.match(LanguageParser.EQUALS);
	        this.state = 90;
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
	        this.state = 92;
	        this.match(LanguageParser.PRINT);
	        this.state = 93;
	        this.match(LanguageParser.OPEN_PARENTH);
	        this.state = 94;
	        this.value(0);
	        this.state = 95;
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
	        this.state = 110;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 4:
	            localctx = new ParenthesesContext(this, localctx);
	            this._ctx = localctx;
	            _prevctx = localctx;

	            this.state = 98;
	            this.match(LanguageParser.OPEN_PARENTH);
	            this.state = 99;
	            this.value(0);
	            this.state = 100;
	            this.match(LanguageParser.CLOSE_PARENTH);
	            break;
	        case 9:
	        case 10:
	            localctx = new SignNumbersContext(this, localctx);
	            this._ctx = localctx;
	            _prevctx = localctx;
	            this.state = 102;
	            localctx.operation = this._input.LT(1);
	            _la = this._input.LA(1);
	            if(!(_la===9 || _la===10)) {
	                localctx.operation = this._errHandler.recoverInline(this);
	            }
	            else {
	            	this._errHandler.reportMatch(this);
	                this.consume();
	            }
	            this.state = 103;
	            this.value(8);
	            break;
	        case 19:
	        case 20:
	            localctx = new NormalConditionContext(this, localctx);
	            this._ctx = localctx;
	            _prevctx = localctx;
	            this.state = 104;
	            localctx.cond_sym = this._input.LT(1);
	            _la = this._input.LA(1);
	            if(!(_la===19 || _la===20)) {
	                localctx.cond_sym = this._errHandler.recoverInline(this);
	            }
	            else {
	            	this._errHandler.reportMatch(this);
	                this.consume();
	            }
	            break;
	        case 21:
	            localctx = new ValueAsCharContext(this, localctx);
	            this._ctx = localctx;
	            _prevctx = localctx;
	            this.state = 105;
	            this.match(LanguageParser.STRING);
	            break;
	        case 22:
	            localctx = new ValueAsCharContext(this, localctx);
	            this._ctx = localctx;
	            _prevctx = localctx;
	            this.state = 106;
	            this.match(LanguageParser.CHAR);
	            break;
	        case 24:
	            localctx = new ValueAsNumberContext(this, localctx);
	            this._ctx = localctx;
	            _prevctx = localctx;
	            this.state = 107;
	            this.match(LanguageParser.FLOAT);
	            break;
	        case 23:
	            localctx = new ValueAsNumberContext(this, localctx);
	            this._ctx = localctx;
	            _prevctx = localctx;
	            this.state = 108;
	            this.match(LanguageParser.INT);
	            break;
	        case 27:
	            localctx = new ValueAsIDContext(this, localctx);
	            this._ctx = localctx;
	            _prevctx = localctx;
	            this.state = 109;
	            this.match(LanguageParser.ID);
	            break;
	        default:
	            throw new antlr4.error.NoViableAltException(this);
	        }
	        this._ctx.stop = this._input.LT(-1);
	        this.state = 123;
	        this._errHandler.sync(this);
	        var _alt = this._interp.adaptivePredict(this._input,15,this._ctx)
	        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
	            if(_alt===1) {
	                if(this._parseListeners!==null) {
	                    this.triggerExitRuleEvent();
	                }
	                _prevctx = localctx;
	                this.state = 121;
	                this._errHandler.sync(this);
	                var la_ = this._interp.adaptivePredict(this._input,14,this._ctx);
	                switch(la_) {
	                case 1:
	                    localctx = new MultDivContext(this, new ValueContext(this, _parentctx, _parentState));
	                    this.pushNewRecursionContext(localctx, _startState, LanguageParser.RULE_value);
	                    this.state = 112;
	                    if (!( this.precpred(this._ctx, 10))) {
	                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 10)");
	                    }
	                    this.state = 113;
	                    localctx.operation = this._input.LT(1);
	                    _la = this._input.LA(1);
	                    if(!((((_la) & ~0x1f) === 0 && ((1 << _la) & 22528) !== 0))) {
	                        localctx.operation = this._errHandler.recoverInline(this);
	                    }
	                    else {
	                    	this._errHandler.reportMatch(this);
	                        this.consume();
	                    }
	                    this.state = 114;
	                    this.value(11);
	                    break;

	                case 2:
	                    localctx = new SumResContext(this, new ValueContext(this, _parentctx, _parentState));
	                    this.pushNewRecursionContext(localctx, _startState, LanguageParser.RULE_value);
	                    this.state = 115;
	                    if (!( this.precpred(this._ctx, 9))) {
	                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 9)");
	                    }
	                    this.state = 116;
	                    localctx.operation = this._input.LT(1);
	                    _la = this._input.LA(1);
	                    if(!(_la===9 || _la===10)) {
	                        localctx.operation = this._errHandler.recoverInline(this);
	                    }
	                    else {
	                    	this._errHandler.reportMatch(this);
	                        this.consume();
	                    }
	                    this.state = 117;
	                    this.value(10);
	                    break;

	                case 3:
	                    localctx = new NormalConditionContext(this, new ValueContext(this, _parentctx, _parentState));
	                    this.pushNewRecursionContext(localctx, _startState, LanguageParser.RULE_value);
	                    this.state = 118;
	                    if (!( this.precpred(this._ctx, 6))) {
	                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 6)");
	                    }
	                    this.state = 119;
	                    localctx.cond_sym = this._input.LT(1);
	                    _la = this._input.LA(1);
	                    if(!(_la===19 || _la===20)) {
	                        localctx.cond_sym = this._errHandler.recoverInline(this);
	                    }
	                    else {
	                    	this._errHandler.reportMatch(this);
	                        this.consume();
	                    }
	                    this.state = 120;
	                    this.value(7);
	                    break;

	                } 
	            }
	            this.state = 125;
	            this._errHandler.sync(this);
	            _alt = this._interp.adaptivePredict(this._input,15,this._ctx);
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
	        this.state = 126;
	        this.match(LanguageParser.ID);
	        this.state = 131;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 9:
	            this.state = 127;
	            this.match(LanguageParser.PLUS);
	            this.state = 128;
	            this.match(LanguageParser.PLUS);
	            break;
	        case 10:
	            this.state = 129;
	            this.match(LanguageParser.MINUS);
	            this.state = 130;
	            this.match(LanguageParser.MINUS);
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
	        this.state = 133;
	        this.conditional();
	        this.state = 137;
	        this._errHandler.sync(this);
	        var _alt = this._interp.adaptivePredict(this._input,17,this._ctx)
	        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
	            if(_alt===1) {
	                this.state = 134;
	                this.conditional__elif(); 
	            }
	            this.state = 139;
	            this._errHandler.sync(this);
	            _alt = this._interp.adaptivePredict(this._input,17,this._ctx);
	        }

	        this.state = 141;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===16) {
	            this.state = 140;
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
	        this.state = 143;
	        this.match(LanguageParser.IF_PR);
	        this.state = 144;
	        this.match(LanguageParser.OPEN_PARENTH);
	        this.state = 145;
	        this.value(0);
	        this.state = 146;
	        this.match(LanguageParser.CLOSE_PARENTH);
	        this.state = 147;
	        this.match(LanguageParser.OPEN_CURL);
	        this.state = 151;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while((((_la) & ~0x1f) === 0 && ((1 << _la) & 134651912) !== 0)) {
	            this.state = 148;
	            this.expression();
	            this.state = 153;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	        this.state = 154;
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
	        this.state = 156;
	        this.match(LanguageParser.ELSE_PR);
	        this.state = 157;
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
	        this.state = 159;
	        this.match(LanguageParser.ELSE_PR);
	        this.state = 160;
	        this.match(LanguageParser.OPEN_CURL);
	        this.state = 164;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while((((_la) & ~0x1f) === 0 && ((1 << _la) & 134651912) !== 0)) {
	            this.state = 161;
	            this.expression();
	            this.state = 166;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	        this.state = 167;
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
	        this.state = 169;
	        this.match(LanguageParser.WHILE_PR);
	        this.state = 170;
	        this.match(LanguageParser.OPEN_PARENTH);
	        this.state = 171;
	        this.value(0);
	        this.state = 172;
	        this.match(LanguageParser.CLOSE_PARENTH);
	        this.state = 173;
	        this.match(LanguageParser.OPEN_CURL);
	        this.state = 177;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while((((_la) & ~0x1f) === 0 && ((1 << _la) & 134651912) !== 0)) {
	            this.state = 174;
	            this.expression();
	            this.state = 179;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	        this.state = 180;
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
	    this.enterRule(localctx, 28, LanguageParser.RULE_loop__do_while);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 182;
	        this.match(LanguageParser.DO_PR);
	        this.state = 183;
	        this.match(LanguageParser.OPEN_CURL);
	        this.state = 187;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while((((_la) & ~0x1f) === 0 && ((1 << _la) & 134651912) !== 0)) {
	            this.state = 184;
	            this.expression();
	            this.state = 189;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	        this.state = 190;
	        this.match(LanguageParser.CLOSE_CURL);
	        this.state = 191;
	        this.match(LanguageParser.WHILE_PR);
	        this.state = 192;
	        this.match(LanguageParser.OPEN_PARENTH);
	        this.state = 193;
	        this.value(0);
	        this.state = 194;
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
LanguageParser.MINUS = 10;
LanguageParser.MULT = 11;
LanguageParser.MOD = 12;
LanguageParser.PRINT = 13;
LanguageParser.DIV = 14;
LanguageParser.IF_PR = 15;
LanguageParser.ELSE_PR = 16;
LanguageParser.WHILE_PR = 17;
LanguageParser.DO_PR = 18;
LanguageParser.COND_MAT = 19;
LanguageParser.COND_LOG = 20;
LanguageParser.STRING = 21;
LanguageParser.CHAR = 22;
LanguageParser.INT = 23;
LanguageParser.FLOAT = 24;
LanguageParser.SEMI = 25;
LanguageParser.NEWLINE = 26;
LanguageParser.ID = 27;
LanguageParser.WS = 28;

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
LanguageParser.RULE_loop__do_while = 14;

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

class SumResContext extends ValueContext {

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

	MINUS() {
	    return this.getToken(LanguageParser.MINUS, 0);
	};

	accept(visitor) {
	    if ( visitor instanceof LanguageVisitor ) {
	        return visitor.visitSumRes(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

LanguageParser.SumResContext = SumResContext;

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

	MINUS() {
	    return this.getToken(LanguageParser.MINUS, 0);
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


	MINUS = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(LanguageParser.MINUS);
	    } else {
	        return this.getToken(LanguageParser.MINUS, i);
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
LanguageParser.Loop__do_whileContext = Loop__do_whileContext; 
