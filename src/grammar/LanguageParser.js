// Generated from ./grammar/Language.g4 by ANTLR 4.13.1
// jshint ignore: start
import antlr4 from 'antlr4';
import LanguageVisitor from './LanguageVisitor.js';

const serializedATN = [4,1,24,132,2,0,7,0,2,1,7,1,2,2,7,2,2,3,7,3,2,4,7,
4,2,5,7,5,2,6,7,6,2,7,7,7,2,8,7,8,2,9,7,9,1,0,4,0,22,8,0,11,0,12,0,23,1,
1,1,1,1,1,3,1,29,8,1,1,1,1,1,3,1,33,8,1,1,1,1,1,1,2,5,2,38,8,2,10,2,12,2,
41,9,2,1,3,1,3,3,3,45,8,3,1,3,1,3,3,3,49,8,3,1,3,1,3,3,3,53,8,3,1,3,1,3,
3,3,57,8,3,3,3,59,8,3,1,4,1,4,1,4,1,4,3,4,65,8,4,1,4,1,4,1,4,1,4,3,4,71,
8,4,3,4,73,8,4,1,5,1,5,1,5,1,5,1,6,1,6,1,6,1,6,1,6,1,7,1,7,1,7,1,7,1,7,1,
7,1,7,1,7,1,7,3,7,93,8,7,1,7,1,7,1,7,1,7,1,7,1,7,5,7,101,8,7,10,7,12,7,104,
9,7,1,8,1,8,1,8,1,8,1,8,1,8,5,8,112,8,8,10,8,12,8,115,9,8,1,8,1,8,1,9,1,
9,1,9,1,9,1,9,1,9,1,9,1,9,5,9,127,8,9,10,9,12,9,130,9,9,1,9,1,39,2,14,18,
10,0,2,4,6,8,10,12,14,16,18,0,4,2,0,15,15,22,22,2,0,11,11,13,13,1,0,9,10,
1,0,20,21,143,0,21,1,0,0,0,2,25,1,0,0,0,4,39,1,0,0,0,6,58,1,0,0,0,8,72,1,
0,0,0,10,74,1,0,0,0,12,78,1,0,0,0,14,92,1,0,0,0,16,105,1,0,0,0,18,118,1,
0,0,0,20,22,3,2,1,0,21,20,1,0,0,0,22,23,1,0,0,0,23,21,1,0,0,0,23,24,1,0,
0,0,24,1,1,0,0,0,25,26,5,2,0,0,26,28,5,6,0,0,27,29,5,1,0,0,28,27,1,0,0,0,
28,29,1,0,0,0,29,30,1,0,0,0,30,32,3,4,2,0,31,33,5,1,0,0,32,31,1,0,0,0,32,
33,1,0,0,0,33,34,1,0,0,0,34,35,5,7,0,0,35,3,1,0,0,0,36,38,3,6,3,0,37,36,
1,0,0,0,38,41,1,0,0,0,39,40,1,0,0,0,39,37,1,0,0,0,40,5,1,0,0,0,41,39,1,0,
0,0,42,44,3,8,4,0,43,45,5,19,0,0,44,43,1,0,0,0,44,45,1,0,0,0,45,59,1,0,0,
0,46,48,3,10,5,0,47,49,5,19,0,0,48,47,1,0,0,0,48,49,1,0,0,0,49,59,1,0,0,
0,50,52,3,16,8,0,51,53,5,19,0,0,52,51,1,0,0,0,52,53,1,0,0,0,53,59,1,0,0,
0,54,56,3,12,6,0,55,57,5,19,0,0,56,55,1,0,0,0,56,57,1,0,0,0,57,59,1,0,0,
0,58,42,1,0,0,0,58,46,1,0,0,0,58,50,1,0,0,0,58,54,1,0,0,0,59,7,1,0,0,0,60,
61,5,3,0,0,61,64,5,17,0,0,62,63,5,8,0,0,63,65,3,14,7,0,64,62,1,0,0,0,64,
65,1,0,0,0,65,73,1,0,0,0,66,67,5,3,0,0,67,70,7,0,0,0,68,69,5,8,0,0,69,71,
3,14,7,0,70,68,1,0,0,0,70,71,1,0,0,0,71,73,1,0,0,0,72,60,1,0,0,0,72,66,1,
0,0,0,73,9,1,0,0,0,74,75,5,17,0,0,75,76,5,8,0,0,76,77,3,14,7,0,77,11,1,0,
0,0,78,79,5,12,0,0,79,80,5,4,0,0,80,81,3,14,7,0,81,82,5,5,0,0,82,13,1,0,
0,0,83,84,6,7,-1,0,84,85,5,4,0,0,85,86,3,14,7,0,86,87,5,5,0,0,87,93,1,0,
0,0,88,93,5,17,0,0,89,93,5,16,0,0,90,93,5,15,0,0,91,93,5,18,0,0,92,83,1,
0,0,0,92,88,1,0,0,0,92,89,1,0,0,0,92,90,1,0,0,0,92,91,1,0,0,0,93,102,1,0,
0,0,94,95,10,6,0,0,95,96,7,1,0,0,96,101,3,14,7,7,97,98,10,5,0,0,98,99,7,
2,0,0,99,101,3,14,7,6,100,94,1,0,0,0,100,97,1,0,0,0,101,104,1,0,0,0,102,
100,1,0,0,0,102,103,1,0,0,0,103,15,1,0,0,0,104,102,1,0,0,0,105,106,5,14,
0,0,106,107,5,4,0,0,107,108,3,18,9,0,108,109,5,5,0,0,109,113,5,6,0,0,110,
112,3,6,3,0,111,110,1,0,0,0,112,115,1,0,0,0,113,111,1,0,0,0,113,114,1,0,
0,0,114,116,1,0,0,0,115,113,1,0,0,0,116,117,5,7,0,0,117,17,1,0,0,0,118,119,
6,9,-1,0,119,120,3,14,7,0,120,121,7,3,0,0,121,122,3,14,7,0,122,128,1,0,0,
0,123,124,10,1,0,0,124,125,7,3,0,0,125,127,3,18,9,2,126,123,1,0,0,0,127,
130,1,0,0,0,128,126,1,0,0,0,128,129,1,0,0,0,129,19,1,0,0,0,130,128,1,0,0,
0,17,23,28,32,39,44,48,52,56,58,64,70,72,92,100,102,113,128];


const atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

const decisionsToDFA = atn.decisionToState.map( (ds, index) => new antlr4.dfa.DFA(ds, index) );

const sharedContextCache = new antlr4.atn.PredictionContextCache();

export default class LanguageParser extends antlr4.Parser {

    static grammarFileName = "Language.g4";
    static literalNames = [ null, "'\\n'", "'start -->'", null, "'('", "')'", 
                            "'{'", "'}'", "'='", "'+'", "'-'", "'*'", "'ptr'", 
                            "'/'", "'if'" ];
    static symbolicNames = [ null, null, "MAIN", "TYPE", "OPEN_PARENTH", 
                             "CLOSE_PARENTH", "OPEN_CURL", "CLOSE_CURL", 
                             "EQUALS", "PLUS", "MINUS", "MULT", "PRINT", 
                             "DIV", "IF_PR", "INT", "FLOAT", "ID", "CHAR", 
                             "SEMI", "COND_MAT", "COND_LOG", "INV_ID", "NEWLINE", 
                             "WS" ];
    static ruleNames = [ "file", "init", "logic", "expression", "declaration", 
                         "assign", "log", "value", "conditional", "condition" ];

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
    	case 9:
    	    		return this.condition_sempred(localctx, predIndex);
        default:
            throw "No predicate with index:" + ruleIndex;
       }
    }

    value_sempred(localctx, predIndex) {
    	switch(predIndex) {
    		case 0:
    			return this.precpred(this._ctx, 6);
    		case 1:
    			return this.precpred(this._ctx, 5);
    		default:
    			throw "No predicate with index:" + predIndex;
    	}
    };

    condition_sempred(localctx, predIndex) {
    	switch(predIndex) {
    		case 2:
    			return this.precpred(this._ctx, 1);
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
	        this.state = 21; 
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        do {
	            this.state = 20;
	            this.init();
	            this.state = 23; 
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
	        this.state = 25;
	        this.match(LanguageParser.MAIN);
	        this.state = 26;
	        this.match(LanguageParser.OPEN_CURL);
	        this.state = 28;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,1,this._ctx);
	        if(la_===1) {
	            this.state = 27;
	            this.match(LanguageParser.T__0);

	        }
	        this.state = 30;
	        this.logic();
	        this.state = 32;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===1) {
	            this.state = 31;
	            this.match(LanguageParser.T__0);
	        }

	        this.state = 34;
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
	        this.state = 39;
	        this._errHandler.sync(this);
	        var _alt = this._interp.adaptivePredict(this._input,3,this._ctx)
	        while(_alt!=1 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
	            if(_alt===1+1) {
	                this.state = 36;
	                this.expression(); 
	            }
	            this.state = 41;
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
	        this.state = 58;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 3:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 42;
	            this.declaration();
	            this.state = 44;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(_la===19) {
	                this.state = 43;
	                this.match(LanguageParser.SEMI);
	            }

	            break;
	        case 17:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 46;
	            this.assign();
	            this.state = 48;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(_la===19) {
	                this.state = 47;
	                this.match(LanguageParser.SEMI);
	            }

	            break;
	        case 14:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 50;
	            this.conditional();
	            this.state = 52;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(_la===19) {
	                this.state = 51;
	                this.match(LanguageParser.SEMI);
	            }

	            break;
	        case 12:
	            this.enterOuterAlt(localctx, 4);
	            this.state = 54;
	            this.log();
	            this.state = 56;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(_la===19) {
	                this.state = 55;
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
	        this.state = 72;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,11,this._ctx);
	        switch(la_) {
	        case 1:
	            localctx = new ValidDeclarationContext(this, localctx);
	            this.enterOuterAlt(localctx, 1);
	            this.state = 60;
	            this.match(LanguageParser.TYPE);
	            this.state = 61;
	            this.match(LanguageParser.ID);
	            this.state = 64;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(_la===8) {
	                this.state = 62;
	                this.match(LanguageParser.EQUALS);
	                this.state = 63;
	                this.value(0);
	            }

	            break;

	        case 2:
	            localctx = new InvalidDeclarationContext(this, localctx);
	            this.enterOuterAlt(localctx, 2);
	            this.state = 66;
	            this.match(LanguageParser.TYPE);
	            this.state = 67;
	            localctx.id = this._input.LT(1);
	            _la = this._input.LA(1);
	            if(!(_la===15 || _la===22)) {
	                localctx.id = this._errHandler.recoverInline(this);
	            }
	            else {
	            	this._errHandler.reportMatch(this);
	                this.consume();
	            }
	            this.state = 70;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(_la===8) {
	                this.state = 68;
	                this.match(LanguageParser.EQUALS);
	                this.state = 69;
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
	        this.state = 74;
	        this.match(LanguageParser.ID);
	        this.state = 75;
	        this.match(LanguageParser.EQUALS);
	        this.state = 76;
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
	        this.state = 78;
	        this.match(LanguageParser.PRINT);
	        this.state = 79;
	        this.match(LanguageParser.OPEN_PARENTH);
	        this.state = 80;
	        this.value(0);
	        this.state = 81;
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
	        this.state = 92;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 4:
	            localctx = new ParenthesesContext(this, localctx);
	            this._ctx = localctx;
	            _prevctx = localctx;

	            this.state = 84;
	            this.match(LanguageParser.OPEN_PARENTH);
	            this.state = 85;
	            this.value(0);
	            this.state = 86;
	            this.match(LanguageParser.CLOSE_PARENTH);
	            break;
	        case 17:
	            localctx = new ValueAsIDContext(this, localctx);
	            this._ctx = localctx;
	            _prevctx = localctx;
	            this.state = 88;
	            this.match(LanguageParser.ID);
	            break;
	        case 16:
	            localctx = new ValueAsNumberContext(this, localctx);
	            this._ctx = localctx;
	            _prevctx = localctx;
	            this.state = 89;
	            this.match(LanguageParser.FLOAT);
	            break;
	        case 15:
	            localctx = new ValueAsNumberContext(this, localctx);
	            this._ctx = localctx;
	            _prevctx = localctx;
	            this.state = 90;
	            this.match(LanguageParser.INT);
	            break;
	        case 18:
	            localctx = new ValueAsCharContext(this, localctx);
	            this._ctx = localctx;
	            _prevctx = localctx;
	            this.state = 91;
	            this.match(LanguageParser.CHAR);
	            break;
	        default:
	            throw new antlr4.error.NoViableAltException(this);
	        }
	        this._ctx.stop = this._input.LT(-1);
	        this.state = 102;
	        this._errHandler.sync(this);
	        var _alt = this._interp.adaptivePredict(this._input,14,this._ctx)
	        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
	            if(_alt===1) {
	                if(this._parseListeners!==null) {
	                    this.triggerExitRuleEvent();
	                }
	                _prevctx = localctx;
	                this.state = 100;
	                this._errHandler.sync(this);
	                var la_ = this._interp.adaptivePredict(this._input,13,this._ctx);
	                switch(la_) {
	                case 1:
	                    localctx = new MultdivContext(this, new ValueContext(this, _parentctx, _parentState));
	                    this.pushNewRecursionContext(localctx, _startState, LanguageParser.RULE_value);
	                    this.state = 94;
	                    if (!( this.precpred(this._ctx, 6))) {
	                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 6)");
	                    }
	                    this.state = 95;
	                    localctx.operation = this._input.LT(1);
	                    _la = this._input.LA(1);
	                    if(!(_la===11 || _la===13)) {
	                        localctx.operation = this._errHandler.recoverInline(this);
	                    }
	                    else {
	                    	this._errHandler.reportMatch(this);
	                        this.consume();
	                    }
	                    this.state = 96;
	                    this.value(7);
	                    break;

	                case 2:
	                    localctx = new PlusMinusContext(this, new ValueContext(this, _parentctx, _parentState));
	                    this.pushNewRecursionContext(localctx, _startState, LanguageParser.RULE_value);
	                    this.state = 97;
	                    if (!( this.precpred(this._ctx, 5))) {
	                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 5)");
	                    }
	                    this.state = 98;
	                    localctx.operation = this._input.LT(1);
	                    _la = this._input.LA(1);
	                    if(!(_la===9 || _la===10)) {
	                        localctx.operation = this._errHandler.recoverInline(this);
	                    }
	                    else {
	                    	this._errHandler.reportMatch(this);
	                        this.consume();
	                    }
	                    this.state = 99;
	                    this.value(6);
	                    break;

	                } 
	            }
	            this.state = 104;
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



	conditional() {
	    let localctx = new ConditionalContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 16, LanguageParser.RULE_conditional);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 105;
	        this.match(LanguageParser.IF_PR);
	        this.state = 106;
	        this.match(LanguageParser.OPEN_PARENTH);
	        this.state = 107;
	        this.condition(0);
	        this.state = 108;
	        this.match(LanguageParser.CLOSE_PARENTH);
	        this.state = 109;
	        this.match(LanguageParser.OPEN_CURL);
	        this.state = 113;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while((((_la) & ~0x1f) === 0 && ((1 << _la) & 151560) !== 0)) {
	            this.state = 110;
	            this.expression();
	            this.state = 115;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	        this.state = 116;
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


	condition(_p) {
		if(_p===undefined) {
		    _p = 0;
		}
	    const _parentctx = this._ctx;
	    const _parentState = this.state;
	    let localctx = new ConditionContext(this, this._ctx, _parentState);
	    let _prevctx = localctx;
	    const _startState = 18;
	    this.enterRecursionRule(localctx, 18, LanguageParser.RULE_condition, _p);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 119;
	        this.value(0);
	        this.state = 120;
	        localctx.cond_sym = this._input.LT(1);
	        _la = this._input.LA(1);
	        if(!(_la===20 || _la===21)) {
	            localctx.cond_sym = this._errHandler.recoverInline(this);
	        }
	        else {
	        	this._errHandler.reportMatch(this);
	            this.consume();
	        }
	        this.state = 121;
	        this.value(0);
	        this._ctx.stop = this._input.LT(-1);
	        this.state = 128;
	        this._errHandler.sync(this);
	        var _alt = this._interp.adaptivePredict(this._input,16,this._ctx)
	        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
	            if(_alt===1) {
	                if(this._parseListeners!==null) {
	                    this.triggerExitRuleEvent();
	                }
	                _prevctx = localctx;
	                localctx = new ConditionContext(this, _parentctx, _parentState);
	                this.pushNewRecursionContext(localctx, _startState, LanguageParser.RULE_condition);
	                this.state = 123;
	                if (!( this.precpred(this._ctx, 1))) {
	                    throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 1)");
	                }
	                this.state = 124;
	                localctx.cond_sym = this._input.LT(1);
	                _la = this._input.LA(1);
	                if(!(_la===20 || _la===21)) {
	                    localctx.cond_sym = this._errHandler.recoverInline(this);
	                }
	                else {
	                	this._errHandler.reportMatch(this);
	                    this.consume();
	                }
	                this.state = 125;
	                this.condition(2); 
	            }
	            this.state = 130;
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
LanguageParser.INT = 15;
LanguageParser.FLOAT = 16;
LanguageParser.ID = 17;
LanguageParser.CHAR = 18;
LanguageParser.SEMI = 19;
LanguageParser.COND_MAT = 20;
LanguageParser.COND_LOG = 21;
LanguageParser.INV_ID = 22;
LanguageParser.NEWLINE = 23;
LanguageParser.WS = 24;

LanguageParser.RULE_file = 0;
LanguageParser.RULE_init = 1;
LanguageParser.RULE_logic = 2;
LanguageParser.RULE_expression = 3;
LanguageParser.RULE_declaration = 4;
LanguageParser.RULE_assign = 5;
LanguageParser.RULE_log = 6;
LanguageParser.RULE_value = 7;
LanguageParser.RULE_conditional = 8;
LanguageParser.RULE_condition = 9;

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

	conditional() {
	    return this.getTypedRuleContext(ConditionalContext,0);
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

	condition() {
	    return this.getTypedRuleContext(ConditionContext,0);
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



class ConditionContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = LanguageParser.RULE_condition;
        this.cond_sym = null;
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

	COND_LOG() {
	    return this.getToken(LanguageParser.COND_LOG, 0);
	};

	COND_MAT() {
	    return this.getToken(LanguageParser.COND_MAT, 0);
	};

	condition = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(ConditionContext);
	    } else {
	        return this.getTypedRuleContext(ConditionContext,i);
	    }
	};

	accept(visitor) {
	    if ( visitor instanceof LanguageVisitor ) {
	        return visitor.visitCondition(this);
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
LanguageParser.ConditionalContext = ConditionalContext; 
LanguageParser.ConditionContext = ConditionContext; 
