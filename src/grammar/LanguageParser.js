// Generated from ./grammar/Language.g4 by ANTLR 4.13.1
// jshint ignore: start
import antlr4 from 'antlr4';
import LanguageVisitor from './LanguageVisitor.js';

const serializedATN = [4,1,21,114,2,0,7,0,2,1,7,1,2,2,7,2,2,3,7,3,2,4,7,
4,2,5,7,5,2,6,7,6,2,7,7,7,2,8,7,8,1,0,4,0,20,8,0,11,0,12,0,21,1,1,1,1,1,
1,1,1,3,1,28,8,1,1,1,1,1,1,2,5,2,33,8,2,10,2,12,2,36,9,2,1,3,1,3,4,3,40,
8,3,11,3,12,3,41,1,3,1,3,4,3,46,8,3,11,3,12,3,47,1,3,1,3,4,3,52,8,3,11,3,
12,3,53,1,3,1,3,4,3,58,8,3,11,3,12,3,59,3,3,62,8,3,1,4,1,4,1,4,1,4,3,4,68,
8,4,1,4,1,4,1,4,1,4,3,4,74,8,4,3,4,76,8,4,1,5,1,5,1,5,1,5,1,6,1,6,1,6,1,
6,1,6,1,7,1,7,1,7,1,7,1,7,1,7,1,7,1,7,1,7,3,7,96,8,7,1,7,1,7,1,7,1,7,1,7,
1,7,5,7,104,8,7,10,7,12,7,107,9,7,1,8,4,8,110,8,8,11,8,12,8,111,1,8,5,41,
47,53,59,111,1,14,9,0,2,4,6,8,10,12,14,16,0,3,2,0,14,14,19,19,1,0,11,12,
1,0,9,10,124,0,19,1,0,0,0,2,23,1,0,0,0,4,34,1,0,0,0,6,61,1,0,0,0,8,75,1,
0,0,0,10,77,1,0,0,0,12,81,1,0,0,0,14,95,1,0,0,0,16,109,1,0,0,0,18,20,3,2,
1,0,19,18,1,0,0,0,20,21,1,0,0,0,21,19,1,0,0,0,21,22,1,0,0,0,22,1,1,0,0,0,
23,24,5,6,0,0,24,25,5,1,0,0,25,27,3,4,2,0,26,28,5,2,0,0,27,26,1,0,0,0,27,
28,1,0,0,0,28,29,1,0,0,0,29,30,5,3,0,0,30,3,1,0,0,0,31,33,3,6,3,0,32,31,
1,0,0,0,33,36,1,0,0,0,34,32,1,0,0,0,34,35,1,0,0,0,35,5,1,0,0,0,36,34,1,0,
0,0,37,39,3,8,4,0,38,40,5,18,0,0,39,38,1,0,0,0,40,41,1,0,0,0,41,42,1,0,0,
0,41,39,1,0,0,0,42,62,1,0,0,0,43,45,3,10,5,0,44,46,5,18,0,0,45,44,1,0,0,
0,46,47,1,0,0,0,47,48,1,0,0,0,47,45,1,0,0,0,48,62,1,0,0,0,49,51,3,12,6,0,
50,52,5,18,0,0,51,50,1,0,0,0,52,53,1,0,0,0,53,54,1,0,0,0,53,51,1,0,0,0,54,
62,1,0,0,0,55,57,3,16,8,0,56,58,5,18,0,0,57,56,1,0,0,0,58,59,1,0,0,0,59,
60,1,0,0,0,59,57,1,0,0,0,60,62,1,0,0,0,61,37,1,0,0,0,61,43,1,0,0,0,61,49,
1,0,0,0,61,55,1,0,0,0,62,7,1,0,0,0,63,64,5,7,0,0,64,67,5,16,0,0,65,66,5,
8,0,0,66,68,3,14,7,0,67,65,1,0,0,0,67,68,1,0,0,0,68,76,1,0,0,0,69,70,5,7,
0,0,70,73,7,0,0,0,71,72,5,8,0,0,72,74,3,14,7,0,73,71,1,0,0,0,73,74,1,0,0,
0,74,76,1,0,0,0,75,63,1,0,0,0,75,69,1,0,0,0,76,9,1,0,0,0,77,78,5,16,0,0,
78,79,5,8,0,0,79,80,3,14,7,0,80,11,1,0,0,0,81,82,5,13,0,0,82,83,5,4,0,0,
83,84,3,14,7,0,84,85,5,5,0,0,85,13,1,0,0,0,86,87,6,7,-1,0,87,88,5,4,0,0,
88,89,3,14,7,0,89,90,5,5,0,0,90,96,1,0,0,0,91,96,5,16,0,0,92,96,5,15,0,0,
93,96,5,14,0,0,94,96,5,17,0,0,95,86,1,0,0,0,95,91,1,0,0,0,95,92,1,0,0,0,
95,93,1,0,0,0,95,94,1,0,0,0,96,105,1,0,0,0,97,98,10,6,0,0,98,99,7,1,0,0,
99,104,3,14,7,7,100,101,10,5,0,0,101,102,7,2,0,0,102,104,3,14,7,6,103,97,
1,0,0,0,103,100,1,0,0,0,104,107,1,0,0,0,105,103,1,0,0,0,105,106,1,0,0,0,
106,15,1,0,0,0,107,105,1,0,0,0,108,110,9,0,0,0,109,108,1,0,0,0,110,111,1,
0,0,0,111,112,1,0,0,0,111,109,1,0,0,0,112,17,1,0,0,0,15,21,27,34,41,47,53,
59,61,67,73,75,95,103,105,111];


const atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

const decisionsToDFA = atn.decisionToState.map( (ds, index) => new antlr4.dfa.DFA(ds, index) );

const sharedContextCache = new antlr4.atn.PredictionContextCache();

export default class LanguageParser extends antlr4.Parser {

    static grammarFileName = "Language.g4";
    static literalNames = [ null, "'{'", "'\\n'", "'}'", "'('", "')'", "'start -->'", 
                            null, "'='", "'+'", "'-'", "'*'", "'/'", "'ptr'", 
                            null, null, null, null, "'!'" ];
    static symbolicNames = [ null, null, null, null, null, null, "MAIN", 
                             "TYPE", "EQUALS", "PLUS", "MINUS", "MULT", 
                             "DIV", "PRINT", "INT", "FLOAT", "ID", "CHAR", 
                             "SEMI", "INV_ID", "NEWLINE", "WS" ];
    static ruleNames = [ "file", "init", "logic", "expression", "declaration", 
                         "assign", "log", "value", "error" ];

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
    			return this.precpred(this._ctx, 6);
    		case 1:
    			return this.precpred(this._ctx, 5);
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
	        this.state = 19; 
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        do {
	            this.state = 18;
	            this.init();
	            this.state = 21; 
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        } while(_la===6);
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
	        this.state = 23;
	        this.match(LanguageParser.MAIN);
	        this.state = 24;
	        this.match(LanguageParser.T__0);
	        this.state = 25;
	        this.logic();
	        this.state = 27;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===2) {
	            this.state = 26;
	            this.match(LanguageParser.T__1);
	        }

	        this.state = 29;
	        this.match(LanguageParser.T__2);
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
	        this.state = 34;
	        this._errHandler.sync(this);
	        var _alt = this._interp.adaptivePredict(this._input,2,this._ctx)
	        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
	            if(_alt===1) {
	                this.state = 31;
	                this.expression(); 
	            }
	            this.state = 36;
	            this._errHandler.sync(this);
	            _alt = this._interp.adaptivePredict(this._input,2,this._ctx);
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
	    try {
	        this.state = 61;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,7,this._ctx);
	        switch(la_) {
	        case 1:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 37;
	            this.declaration();
	            this.state = 39; 
	            this._errHandler.sync(this);
	            var _alt = 1+1;
	            do {
	            	switch (_alt) {
	            	case 1+1:
	            		this.state = 38;
	            		this.match(LanguageParser.SEMI);
	            		break;
	            	default:
	            		throw new antlr4.error.NoViableAltException(this);
	            	}
	            	this.state = 41; 
	            	this._errHandler.sync(this);
	            	_alt = this._interp.adaptivePredict(this._input,3, this._ctx);
	            } while ( _alt!=1 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER );
	            break;

	        case 2:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 43;
	            this.assign();
	            this.state = 45; 
	            this._errHandler.sync(this);
	            var _alt = 1+1;
	            do {
	            	switch (_alt) {
	            	case 1+1:
	            		this.state = 44;
	            		this.match(LanguageParser.SEMI);
	            		break;
	            	default:
	            		throw new antlr4.error.NoViableAltException(this);
	            	}
	            	this.state = 47; 
	            	this._errHandler.sync(this);
	            	_alt = this._interp.adaptivePredict(this._input,4, this._ctx);
	            } while ( _alt!=1 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER );
	            break;

	        case 3:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 49;
	            this.log();
	            this.state = 51; 
	            this._errHandler.sync(this);
	            var _alt = 1+1;
	            do {
	            	switch (_alt) {
	            	case 1+1:
	            		this.state = 50;
	            		this.match(LanguageParser.SEMI);
	            		break;
	            	default:
	            		throw new antlr4.error.NoViableAltException(this);
	            	}
	            	this.state = 53; 
	            	this._errHandler.sync(this);
	            	_alt = this._interp.adaptivePredict(this._input,5, this._ctx);
	            } while ( _alt!=1 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER );
	            break;

	        case 4:
	            this.enterOuterAlt(localctx, 4);
	            this.state = 55;
	            this.error();
	            this.state = 57; 
	            this._errHandler.sync(this);
	            var _alt = 1+1;
	            do {
	            	switch (_alt) {
	            	case 1+1:
	            		this.state = 56;
	            		this.match(LanguageParser.SEMI);
	            		break;
	            	default:
	            		throw new antlr4.error.NoViableAltException(this);
	            	}
	            	this.state = 59; 
	            	this._errHandler.sync(this);
	            	_alt = this._interp.adaptivePredict(this._input,6, this._ctx);
	            } while ( _alt!=1 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER );
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
	        this.state = 75;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,10,this._ctx);
	        switch(la_) {
	        case 1:
	            localctx = new ValidDeclarationContext(this, localctx);
	            this.enterOuterAlt(localctx, 1);
	            this.state = 63;
	            this.match(LanguageParser.TYPE);
	            this.state = 64;
	            this.match(LanguageParser.ID);
	            this.state = 67;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(_la===8) {
	                this.state = 65;
	                this.match(LanguageParser.EQUALS);
	                this.state = 66;
	                this.value(0);
	            }

	            break;

	        case 2:
	            localctx = new InvalidDeclarationContext(this, localctx);
	            this.enterOuterAlt(localctx, 2);
	            this.state = 69;
	            this.match(LanguageParser.TYPE);
	            this.state = 70;
	            localctx.id = this._input.LT(1);
	            _la = this._input.LA(1);
	            if(!(_la===14 || _la===19)) {
	                localctx.id = this._errHandler.recoverInline(this);
	            }
	            else {
	            	this._errHandler.reportMatch(this);
	                this.consume();
	            }
	            this.state = 73;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(_la===8) {
	                this.state = 71;
	                this.match(LanguageParser.EQUALS);
	                this.state = 72;
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
	        this.state = 77;
	        this.match(LanguageParser.ID);
	        this.state = 78;
	        this.match(LanguageParser.EQUALS);
	        this.state = 79;
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
	        this.state = 81;
	        this.match(LanguageParser.PRINT);
	        this.state = 82;
	        this.match(LanguageParser.T__3);
	        this.state = 83;
	        this.value(0);
	        this.state = 84;
	        this.match(LanguageParser.T__4);
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
	        this.state = 95;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 4:
	            localctx = new ParenthesesContext(this, localctx);
	            this._ctx = localctx;
	            _prevctx = localctx;

	            this.state = 87;
	            this.match(LanguageParser.T__3);
	            this.state = 88;
	            this.value(0);
	            this.state = 89;
	            this.match(LanguageParser.T__4);
	            break;
	        case 16:
	            localctx = new ValueAsIDContext(this, localctx);
	            this._ctx = localctx;
	            _prevctx = localctx;
	            this.state = 91;
	            this.match(LanguageParser.ID);
	            break;
	        case 15:
	            localctx = new ValueAsNumberContext(this, localctx);
	            this._ctx = localctx;
	            _prevctx = localctx;
	            this.state = 92;
	            this.match(LanguageParser.FLOAT);
	            break;
	        case 14:
	            localctx = new ValueAsNumberContext(this, localctx);
	            this._ctx = localctx;
	            _prevctx = localctx;
	            this.state = 93;
	            this.match(LanguageParser.INT);
	            break;
	        case 17:
	            localctx = new ValueAsCharContext(this, localctx);
	            this._ctx = localctx;
	            _prevctx = localctx;
	            this.state = 94;
	            this.match(LanguageParser.CHAR);
	            break;
	        default:
	            throw new antlr4.error.NoViableAltException(this);
	        }
	        this._ctx.stop = this._input.LT(-1);
	        this.state = 105;
	        this._errHandler.sync(this);
	        var _alt = this._interp.adaptivePredict(this._input,13,this._ctx)
	        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
	            if(_alt===1) {
	                if(this._parseListeners!==null) {
	                    this.triggerExitRuleEvent();
	                }
	                _prevctx = localctx;
	                this.state = 103;
	                this._errHandler.sync(this);
	                var la_ = this._interp.adaptivePredict(this._input,12,this._ctx);
	                switch(la_) {
	                case 1:
	                    localctx = new MultdivContext(this, new ValueContext(this, _parentctx, _parentState));
	                    this.pushNewRecursionContext(localctx, _startState, LanguageParser.RULE_value);
	                    this.state = 97;
	                    if (!( this.precpred(this._ctx, 6))) {
	                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 6)");
	                    }
	                    this.state = 98;
	                    localctx.operation = this._input.LT(1);
	                    _la = this._input.LA(1);
	                    if(!(_la===11 || _la===12)) {
	                        localctx.operation = this._errHandler.recoverInline(this);
	                    }
	                    else {
	                    	this._errHandler.reportMatch(this);
	                        this.consume();
	                    }
	                    this.state = 99;
	                    this.value(7);
	                    break;

	                case 2:
	                    localctx = new PlusMinusContext(this, new ValueContext(this, _parentctx, _parentState));
	                    this.pushNewRecursionContext(localctx, _startState, LanguageParser.RULE_value);
	                    this.state = 100;
	                    if (!( this.precpred(this._ctx, 5))) {
	                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 5)");
	                    }
	                    this.state = 101;
	                    localctx.operation = this._input.LT(1);
	                    _la = this._input.LA(1);
	                    if(!(_la===9 || _la===10)) {
	                        localctx.operation = this._errHandler.recoverInline(this);
	                    }
	                    else {
	                    	this._errHandler.reportMatch(this);
	                        this.consume();
	                    }
	                    this.state = 102;
	                    this.value(6);
	                    break;

	                } 
	            }
	            this.state = 107;
	            this._errHandler.sync(this);
	            _alt = this._interp.adaptivePredict(this._input,13,this._ctx);
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



	error() {
	    let localctx = new ErrorContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 16, LanguageParser.RULE_error);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 109; 
	        this._errHandler.sync(this);
	        var _alt = 1+1;
	        do {
	        	switch (_alt) {
	        	case 1+1:
	        		this.state = 108;
	        		this.matchWildcard();
	        		break;
	        	default:
	        		throw new antlr4.error.NoViableAltException(this);
	        	}
	        	this.state = 111; 
	        	this._errHandler.sync(this);
	        	_alt = this._interp.adaptivePredict(this._input,14, this._ctx);
	        } while ( _alt!=1 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER );
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
LanguageParser.T__1 = 2;
LanguageParser.T__2 = 3;
LanguageParser.T__3 = 4;
LanguageParser.T__4 = 5;
LanguageParser.MAIN = 6;
LanguageParser.TYPE = 7;
LanguageParser.EQUALS = 8;
LanguageParser.PLUS = 9;
LanguageParser.MINUS = 10;
LanguageParser.MULT = 11;
LanguageParser.DIV = 12;
LanguageParser.PRINT = 13;
LanguageParser.INT = 14;
LanguageParser.FLOAT = 15;
LanguageParser.ID = 16;
LanguageParser.CHAR = 17;
LanguageParser.SEMI = 18;
LanguageParser.INV_ID = 19;
LanguageParser.NEWLINE = 20;
LanguageParser.WS = 21;

LanguageParser.RULE_file = 0;
LanguageParser.RULE_init = 1;
LanguageParser.RULE_logic = 2;
LanguageParser.RULE_expression = 3;
LanguageParser.RULE_declaration = 4;
LanguageParser.RULE_assign = 5;
LanguageParser.RULE_log = 6;
LanguageParser.RULE_value = 7;
LanguageParser.RULE_error = 8;

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

	logic() {
	    return this.getTypedRuleContext(LogicContext,0);
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


	assign() {
	    return this.getTypedRuleContext(AssignContext,0);
	};

	log() {
	    return this.getTypedRuleContext(LogContext,0);
	};

	error() {
	    return this.getTypedRuleContext(ErrorContext,0);
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

	value() {
	    return this.getTypedRuleContext(ValueContext,0);
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

	value() {
	    return this.getTypedRuleContext(ValueContext,0);
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

class ErrorContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = LanguageParser.RULE_error;
    }


	accept(visitor) {
	    if ( visitor instanceof LanguageVisitor ) {
	        return visitor.visitError(this);
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
LanguageParser.ErrorContext = ErrorContext; 
