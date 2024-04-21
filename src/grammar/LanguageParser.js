// Generated from ./grammar/Language.g4 by ANTLR 4.13.1
// jshint ignore: start
import antlr4 from 'antlr4';
import LanguageVisitor from './LanguageVisitor.js';

const serializedATN = [4,1,26,151,2,0,7,0,2,1,7,1,2,2,7,2,2,3,7,3,2,4,7,
4,2,5,7,5,2,6,7,6,2,7,7,7,2,8,7,8,2,9,7,9,2,10,7,10,2,11,7,11,1,0,4,0,26,
8,0,11,0,12,0,27,1,1,1,1,1,1,3,1,33,8,1,1,1,1,1,3,1,37,8,1,1,1,1,1,1,2,5,
2,42,8,2,10,2,12,2,45,9,2,1,3,1,3,3,3,49,8,3,1,3,1,3,3,3,53,8,3,1,3,1,3,
3,3,57,8,3,1,3,1,3,3,3,61,8,3,3,3,63,8,3,1,4,1,4,1,4,1,4,3,4,69,8,4,1,4,
1,4,1,4,1,4,3,4,75,8,4,3,4,77,8,4,1,5,1,5,1,5,1,5,1,6,1,6,1,6,1,6,1,6,1,
7,1,7,1,7,1,7,1,7,1,7,1,7,1,7,1,7,1,7,1,7,3,7,99,8,7,1,7,1,7,1,7,1,7,1,7,
1,7,1,7,1,7,1,7,5,7,110,8,7,10,7,12,7,113,9,7,1,8,1,8,5,8,117,8,8,10,8,12,
8,120,9,8,1,8,3,8,123,8,8,1,9,1,9,1,9,1,9,1,9,1,9,5,9,131,8,9,10,9,12,9,
134,9,9,1,9,1,9,1,10,1,10,1,10,1,11,1,11,1,11,5,11,144,8,11,10,11,12,11,
147,9,11,1,11,1,11,1,11,1,43,1,14,12,0,2,4,6,8,10,12,14,16,18,20,22,0,4,
2,0,20,20,24,24,1,0,16,17,2,0,11,11,13,13,1,0,9,10,165,0,25,1,0,0,0,2,29,
1,0,0,0,4,43,1,0,0,0,6,62,1,0,0,0,8,76,1,0,0,0,10,78,1,0,0,0,12,82,1,0,0,
0,14,98,1,0,0,0,16,114,1,0,0,0,18,124,1,0,0,0,20,137,1,0,0,0,22,140,1,0,
0,0,24,26,3,2,1,0,25,24,1,0,0,0,26,27,1,0,0,0,27,25,1,0,0,0,27,28,1,0,0,
0,28,1,1,0,0,0,29,30,5,2,0,0,30,32,5,6,0,0,31,33,5,1,0,0,32,31,1,0,0,0,32,
33,1,0,0,0,33,34,1,0,0,0,34,36,3,4,2,0,35,37,5,1,0,0,36,35,1,0,0,0,36,37,
1,0,0,0,37,38,1,0,0,0,38,39,5,7,0,0,39,3,1,0,0,0,40,42,3,6,3,0,41,40,1,0,
0,0,42,45,1,0,0,0,43,44,1,0,0,0,43,41,1,0,0,0,44,5,1,0,0,0,45,43,1,0,0,0,
46,48,3,8,4,0,47,49,5,23,0,0,48,47,1,0,0,0,48,49,1,0,0,0,49,63,1,0,0,0,50,
52,3,10,5,0,51,53,5,23,0,0,52,51,1,0,0,0,52,53,1,0,0,0,53,63,1,0,0,0,54,
56,3,16,8,0,55,57,5,23,0,0,56,55,1,0,0,0,56,57,1,0,0,0,57,63,1,0,0,0,58,
60,3,12,6,0,59,61,5,23,0,0,60,59,1,0,0,0,60,61,1,0,0,0,61,63,1,0,0,0,62,
46,1,0,0,0,62,50,1,0,0,0,62,54,1,0,0,0,62,58,1,0,0,0,63,7,1,0,0,0,64,65,
5,3,0,0,65,68,5,22,0,0,66,67,5,8,0,0,67,69,3,14,7,0,68,66,1,0,0,0,68,69,
1,0,0,0,69,77,1,0,0,0,70,71,5,3,0,0,71,74,7,0,0,0,72,73,5,8,0,0,73,75,3,
14,7,0,74,72,1,0,0,0,74,75,1,0,0,0,75,77,1,0,0,0,76,64,1,0,0,0,76,70,1,0,
0,0,77,9,1,0,0,0,78,79,5,22,0,0,79,80,5,8,0,0,80,81,3,14,7,0,81,11,1,0,0,
0,82,83,5,12,0,0,83,84,5,4,0,0,84,85,3,14,7,0,85,86,5,5,0,0,86,13,1,0,0,
0,87,88,6,7,-1,0,88,89,5,4,0,0,89,90,3,14,7,0,90,91,5,5,0,0,91,99,1,0,0,
0,92,99,7,1,0,0,93,99,5,18,0,0,94,99,5,19,0,0,95,99,5,22,0,0,96,99,5,21,
0,0,97,99,5,20,0,0,98,87,1,0,0,0,98,92,1,0,0,0,98,93,1,0,0,0,98,94,1,0,0,
0,98,95,1,0,0,0,98,96,1,0,0,0,98,97,1,0,0,0,99,111,1,0,0,0,100,101,10,9,
0,0,101,102,7,2,0,0,102,110,3,14,7,10,103,104,10,8,0,0,104,105,7,3,0,0,105,
110,3,14,7,9,106,107,10,6,0,0,107,108,7,1,0,0,108,110,3,14,7,7,109,100,1,
0,0,0,109,103,1,0,0,0,109,106,1,0,0,0,110,113,1,0,0,0,111,109,1,0,0,0,111,
112,1,0,0,0,112,15,1,0,0,0,113,111,1,0,0,0,114,118,3,18,9,0,115,117,3,20,
10,0,116,115,1,0,0,0,117,120,1,0,0,0,118,116,1,0,0,0,118,119,1,0,0,0,119,
122,1,0,0,0,120,118,1,0,0,0,121,123,3,22,11,0,122,121,1,0,0,0,122,123,1,
0,0,0,123,17,1,0,0,0,124,125,5,14,0,0,125,126,5,4,0,0,126,127,3,14,7,0,127,
128,5,5,0,0,128,132,5,6,0,0,129,131,3,6,3,0,130,129,1,0,0,0,131,134,1,0,
0,0,132,130,1,0,0,0,132,133,1,0,0,0,133,135,1,0,0,0,134,132,1,0,0,0,135,
136,5,7,0,0,136,19,1,0,0,0,137,138,5,15,0,0,138,139,3,18,9,0,139,21,1,0,
0,0,140,141,5,15,0,0,141,145,5,6,0,0,142,144,3,6,3,0,143,142,1,0,0,0,144,
147,1,0,0,0,145,143,1,0,0,0,145,146,1,0,0,0,146,148,1,0,0,0,147,145,1,0,
0,0,148,149,5,7,0,0,149,23,1,0,0,0,19,27,32,36,43,48,52,56,60,62,68,74,76,
98,109,111,118,122,132,145];


const atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

const decisionsToDFA = atn.decisionToState.map( (ds, index) => new antlr4.dfa.DFA(ds, index) );

const sharedContextCache = new antlr4.atn.PredictionContextCache();

export default class LanguageParser extends antlr4.Parser {

    static grammarFileName = "Language.g4";
    static literalNames = [ null, "'\\n'", "'start -->'", null, "'('", "')'", 
                            "'{'", "'}'", "'='", "'+'", "'-'", "'*'", "'ptr'", 
                            "'/'", "'if'", "'else'" ];
    static symbolicNames = [ null, null, "MAIN", "TYPE", "OPEN_PARENTH", 
                             "CLOSE_PARENTH", "OPEN_CURL", "CLOSE_CURL", 
                             "EQUALS", "PLUS", "MINUS", "MULT", "PRINT", 
                             "DIV", "IF_PR", "ELSE_PR", "COND_MAT", "COND_LOG", 
                             "STRING", "CHAR", "INT", "FLOAT", "ID", "SEMI", 
                             "INV_ID", "NEWLINE", "WS" ];
    static ruleNames = [ "file", "init", "logic", "expression", "declaration", 
                         "assign", "log", "value", "chained_conditional", 
                         "conditional", "conditional__elif", "conditional__else" ];

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
    			return this.precpred(this._ctx, 9);
    		case 1:
    			return this.precpred(this._ctx, 8);
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
	        this.state = 25; 
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        do {
	            this.state = 24;
	            this.init();
	            this.state = 27; 
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
	        this.state = 29;
	        this.match(LanguageParser.MAIN);
	        this.state = 30;
	        this.match(LanguageParser.OPEN_CURL);
	        this.state = 32;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,1,this._ctx);
	        if(la_===1) {
	            this.state = 31;
	            this.match(LanguageParser.T__0);

	        }
	        this.state = 34;
	        this.logic();
	        this.state = 36;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===1) {
	            this.state = 35;
	            this.match(LanguageParser.T__0);
	        }

	        this.state = 38;
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
	        this.state = 43;
	        this._errHandler.sync(this);
	        var _alt = this._interp.adaptivePredict(this._input,3,this._ctx)
	        while(_alt!=1 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
	            if(_alt===1+1) {
	                this.state = 40;
	                this.expression(); 
	            }
	            this.state = 45;
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
	        this.state = 62;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 3:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 46;
	            this.declaration();
	            this.state = 48;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(_la===23) {
	                this.state = 47;
	                this.match(LanguageParser.SEMI);
	            }

	            break;
	        case 22:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 50;
	            this.assign();
	            this.state = 52;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(_la===23) {
	                this.state = 51;
	                this.match(LanguageParser.SEMI);
	            }

	            break;
	        case 14:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 54;
	            this.chained_conditional();
	            this.state = 56;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(_la===23) {
	                this.state = 55;
	                this.match(LanguageParser.SEMI);
	            }

	            break;
	        case 12:
	            this.enterOuterAlt(localctx, 4);
	            this.state = 58;
	            this.log();
	            this.state = 60;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(_la===23) {
	                this.state = 59;
	                this.match(LanguageParser.SEMI);
	            }

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



	declaration() {
	    let localctx = new DeclarationContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 8, LanguageParser.RULE_declaration);
	    var _la = 0;
	    try {
	        this.state = 76;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,11,this._ctx);
	        switch(la_) {
	        case 1:
	            localctx = new ValidDeclarationContext(this, localctx);
	            this.enterOuterAlt(localctx, 1);
	            this.state = 64;
	            this.match(LanguageParser.TYPE);
	            this.state = 65;
	            this.match(LanguageParser.ID);
	            this.state = 68;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(_la===8) {
	                this.state = 66;
	                this.match(LanguageParser.EQUALS);
	                this.state = 67;
	                this.value(0);
	            }

	            break;

	        case 2:
	            localctx = new InvalidDeclarationContext(this, localctx);
	            this.enterOuterAlt(localctx, 2);
	            this.state = 70;
	            this.match(LanguageParser.TYPE);
	            this.state = 71;
	            localctx.id = this._input.LT(1);
	            _la = this._input.LA(1);
	            if(!(_la===20 || _la===24)) {
	                localctx.id = this._errHandler.recoverInline(this);
	            }
	            else {
	            	this._errHandler.reportMatch(this);
	                this.consume();
	            }
	            this.state = 74;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(_la===8) {
	                this.state = 72;
	                this.match(LanguageParser.EQUALS);
	                this.state = 73;
	                this.value(0);
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



	assign() {
	    let localctx = new AssignContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 10, LanguageParser.RULE_assign);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 78;
	        this.match(LanguageParser.ID);
	        this.state = 79;
	        this.match(LanguageParser.EQUALS);
	        this.state = 80;
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
	        this.state = 82;
	        this.match(LanguageParser.PRINT);
	        this.state = 83;
	        this.match(LanguageParser.OPEN_PARENTH);
	        this.state = 84;
	        this.value(0);
	        this.state = 85;
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
	        this.state = 98;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 4:
	            localctx = new ParenthesesContext(this, localctx);
	            this._ctx = localctx;
	            _prevctx = localctx;

	            this.state = 88;
	            this.match(LanguageParser.OPEN_PARENTH);
	            this.state = 89;
	            this.value(0);
	            this.state = 90;
	            this.match(LanguageParser.CLOSE_PARENTH);
	            break;
	        case 16:
	        case 17:
	            localctx = new NormalConditionContext(this, localctx);
	            this._ctx = localctx;
	            _prevctx = localctx;
	            this.state = 92;
	            localctx.cond_sym = this._input.LT(1);
	            _la = this._input.LA(1);
	            if(!(_la===16 || _la===17)) {
	                localctx.cond_sym = this._errHandler.recoverInline(this);
	            }
	            else {
	            	this._errHandler.reportMatch(this);
	                this.consume();
	            }
	            break;
	        case 18:
	            localctx = new ValueAsCharContext(this, localctx);
	            this._ctx = localctx;
	            _prevctx = localctx;
	            this.state = 93;
	            this.match(LanguageParser.STRING);
	            break;
	        case 19:
	            localctx = new ValueAsCharContext(this, localctx);
	            this._ctx = localctx;
	            _prevctx = localctx;
	            this.state = 94;
	            this.match(LanguageParser.CHAR);
	            break;
	        case 22:
	            localctx = new ValueAsIDContext(this, localctx);
	            this._ctx = localctx;
	            _prevctx = localctx;
	            this.state = 95;
	            this.match(LanguageParser.ID);
	            break;
	        case 21:
	            localctx = new ValueAsNumberContext(this, localctx);
	            this._ctx = localctx;
	            _prevctx = localctx;
	            this.state = 96;
	            this.match(LanguageParser.FLOAT);
	            break;
	        case 20:
	            localctx = new ValueAsNumberContext(this, localctx);
	            this._ctx = localctx;
	            _prevctx = localctx;
	            this.state = 97;
	            this.match(LanguageParser.INT);
	            break;
	        default:
	            throw new antlr4.error.NoViableAltException(this);
	        }
	        this._ctx.stop = this._input.LT(-1);
	        this.state = 111;
	        this._errHandler.sync(this);
	        var _alt = this._interp.adaptivePredict(this._input,14,this._ctx)
	        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
	            if(_alt===1) {
	                if(this._parseListeners!==null) {
	                    this.triggerExitRuleEvent();
	                }
	                _prevctx = localctx;
	                this.state = 109;
	                this._errHandler.sync(this);
	                var la_ = this._interp.adaptivePredict(this._input,13,this._ctx);
	                switch(la_) {
	                case 1:
	                    localctx = new MultdivContext(this, new ValueContext(this, _parentctx, _parentState));
	                    this.pushNewRecursionContext(localctx, _startState, LanguageParser.RULE_value);
	                    this.state = 100;
	                    if (!( this.precpred(this._ctx, 9))) {
	                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 9)");
	                    }
	                    this.state = 101;
	                    localctx.operation = this._input.LT(1);
	                    _la = this._input.LA(1);
	                    if(!(_la===11 || _la===13)) {
	                        localctx.operation = this._errHandler.recoverInline(this);
	                    }
	                    else {
	                    	this._errHandler.reportMatch(this);
	                        this.consume();
	                    }
	                    this.state = 102;
	                    this.value(10);
	                    break;

	                case 2:
	                    localctx = new PlusMinusContext(this, new ValueContext(this, _parentctx, _parentState));
	                    this.pushNewRecursionContext(localctx, _startState, LanguageParser.RULE_value);
	                    this.state = 103;
	                    if (!( this.precpred(this._ctx, 8))) {
	                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 8)");
	                    }
	                    this.state = 104;
	                    localctx.operation = this._input.LT(1);
	                    _la = this._input.LA(1);
	                    if(!(_la===9 || _la===10)) {
	                        localctx.operation = this._errHandler.recoverInline(this);
	                    }
	                    else {
	                    	this._errHandler.reportMatch(this);
	                        this.consume();
	                    }
	                    this.state = 105;
	                    this.value(9);
	                    break;

	                case 3:
	                    localctx = new NormalConditionContext(this, new ValueContext(this, _parentctx, _parentState));
	                    this.pushNewRecursionContext(localctx, _startState, LanguageParser.RULE_value);
	                    this.state = 106;
	                    if (!( this.precpred(this._ctx, 6))) {
	                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 6)");
	                    }
	                    this.state = 107;
	                    localctx.cond_sym = this._input.LT(1);
	                    _la = this._input.LA(1);
	                    if(!(_la===16 || _la===17)) {
	                        localctx.cond_sym = this._errHandler.recoverInline(this);
	                    }
	                    else {
	                    	this._errHandler.reportMatch(this);
	                        this.consume();
	                    }
	                    this.state = 108;
	                    this.value(7);
	                    break;

	                } 
	            }
	            this.state = 113;
	            this._errHandler.sync(this);
	            _alt = this._interp.adaptivePredict(this._input,14,this._ctx);
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



	chained_conditional() {
	    let localctx = new Chained_conditionalContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 16, LanguageParser.RULE_chained_conditional);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 114;
	        this.conditional();
	        this.state = 118;
	        this._errHandler.sync(this);
	        var _alt = this._interp.adaptivePredict(this._input,15,this._ctx)
	        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
	            if(_alt===1) {
	                this.state = 115;
	                this.conditional__elif(); 
	            }
	            this.state = 120;
	            this._errHandler.sync(this);
	            _alt = this._interp.adaptivePredict(this._input,15,this._ctx);
	        }

	        this.state = 122;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===15) {
	            this.state = 121;
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
	    this.enterRule(localctx, 18, LanguageParser.RULE_conditional);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 124;
	        this.match(LanguageParser.IF_PR);
	        this.state = 125;
	        this.match(LanguageParser.OPEN_PARENTH);
	        this.state = 126;
	        this.value(0);
	        this.state = 127;
	        this.match(LanguageParser.CLOSE_PARENTH);
	        this.state = 128;
	        this.match(LanguageParser.OPEN_CURL);
	        this.state = 132;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while((((_la) & ~0x1f) === 0 && ((1 << _la) & 4214792) !== 0)) {
	            this.state = 129;
	            this.expression();
	            this.state = 134;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	        this.state = 135;
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
	    this.enterRule(localctx, 20, LanguageParser.RULE_conditional__elif);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 137;
	        this.match(LanguageParser.ELSE_PR);
	        this.state = 138;
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
	    this.enterRule(localctx, 22, LanguageParser.RULE_conditional__else);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 140;
	        this.match(LanguageParser.ELSE_PR);
	        this.state = 141;
	        this.match(LanguageParser.OPEN_CURL);
	        this.state = 145;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while((((_la) & ~0x1f) === 0 && ((1 << _la) & 4214792) !== 0)) {
	            this.state = 142;
	            this.expression();
	            this.state = 147;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	        this.state = 148;
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
LanguageParser.PRINT = 12;
LanguageParser.DIV = 13;
LanguageParser.IF_PR = 14;
LanguageParser.ELSE_PR = 15;
LanguageParser.COND_MAT = 16;
LanguageParser.COND_LOG = 17;
LanguageParser.STRING = 18;
LanguageParser.CHAR = 19;
LanguageParser.INT = 20;
LanguageParser.FLOAT = 21;
LanguageParser.ID = 22;
LanguageParser.SEMI = 23;
LanguageParser.INV_ID = 24;
LanguageParser.NEWLINE = 25;
LanguageParser.WS = 26;

LanguageParser.RULE_file = 0;
LanguageParser.RULE_init = 1;
LanguageParser.RULE_logic = 2;
LanguageParser.RULE_expression = 3;
LanguageParser.RULE_declaration = 4;
LanguageParser.RULE_assign = 5;
LanguageParser.RULE_log = 6;
LanguageParser.RULE_value = 7;
LanguageParser.RULE_chained_conditional = 8;
LanguageParser.RULE_conditional = 9;
LanguageParser.RULE_conditional__elif = 10;
LanguageParser.RULE_conditional__else = 11;

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

	log() {
	    return this.getTypedRuleContext(LogContext,0);
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


	 
		copyFrom(ctx) {
			super.copyFrom(ctx);
		}

}


class InvalidDeclarationContext extends DeclarationContext {

    constructor(parser, ctx) {
        super(parser);
        this.id = null;;
        super.copyFrom(ctx);
    }

	TYPE() {
	    return this.getToken(LanguageParser.TYPE, 0);
	};

	INV_ID() {
	    return this.getToken(LanguageParser.INV_ID, 0);
	};

	INT() {
	    return this.getToken(LanguageParser.INT, 0);
	};

	EQUALS() {
	    return this.getToken(LanguageParser.EQUALS, 0);
	};

	value() {
	    return this.getTypedRuleContext(ValueContext,0);
	};

	accept(visitor) {
	    if ( visitor instanceof LanguageVisitor ) {
	        return visitor.visitInvalidDeclaration(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

LanguageParser.InvalidDeclarationContext = InvalidDeclarationContext;

class ValidDeclarationContext extends DeclarationContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
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
	        return visitor.visitValidDeclaration(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

LanguageParser.ValidDeclarationContext = ValidDeclarationContext;

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


class PlusMinusContext extends ValueContext {

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
	        return visitor.visitPlusMinus(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

LanguageParser.PlusMinusContext = PlusMinusContext;

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

class MultdivContext extends ValueContext {

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

	accept(visitor) {
	    if ( visitor instanceof LanguageVisitor ) {
	        return visitor.visitMultdiv(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

LanguageParser.MultdivContext = MultdivContext;

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




LanguageParser.FileContext = FileContext; 
LanguageParser.InitContext = InitContext; 
LanguageParser.LogicContext = LogicContext; 
LanguageParser.ExpressionContext = ExpressionContext; 
LanguageParser.DeclarationContext = DeclarationContext; 
LanguageParser.AssignContext = AssignContext; 
LanguageParser.LogContext = LogContext; 
LanguageParser.ValueContext = ValueContext; 
LanguageParser.Chained_conditionalContext = Chained_conditionalContext; 
LanguageParser.ConditionalContext = ConditionalContext; 
LanguageParser.Conditional__elifContext = Conditional__elifContext; 
LanguageParser.Conditional__elseContext = Conditional__elseContext; 
