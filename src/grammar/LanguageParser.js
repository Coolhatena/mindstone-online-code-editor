// Generated from ./grammar/Language.g4 by ANTLR 4.13.1
// jshint ignore: start
import antlr4 from 'antlr4';
import LanguageVisitor from './LanguageVisitor.js';

const serializedATN = [4,1,19,97,2,0,7,0,2,1,7,1,2,2,7,2,2,3,7,3,2,4,7,4,
2,5,7,5,2,6,7,6,2,7,7,7,1,0,4,0,18,8,0,11,0,12,0,19,1,1,1,1,1,1,1,1,3,1,
26,8,1,1,1,1,1,1,2,5,2,31,8,2,10,2,12,2,34,9,2,1,3,1,3,1,3,3,3,39,8,3,1,
4,1,4,1,4,1,4,3,4,45,8,4,1,4,4,4,48,8,4,11,4,12,4,49,1,4,1,4,1,4,1,4,3,4,
56,8,4,1,4,4,4,59,8,4,11,4,12,4,60,3,4,63,8,4,1,5,1,5,1,5,1,5,4,5,69,8,5,
11,5,12,5,70,1,6,1,6,1,6,1,6,1,6,4,6,78,8,6,11,6,12,6,79,1,7,1,7,1,7,1,7,
1,7,3,7,87,8,7,1,7,1,7,1,7,5,7,92,8,7,10,7,12,7,95,9,7,1,7,2,49,60,1,14,
8,0,2,4,6,8,10,12,14,0,2,2,0,12,12,17,17,1,0,9,10,104,0,17,1,0,0,0,2,21,
1,0,0,0,4,32,1,0,0,0,6,38,1,0,0,0,8,62,1,0,0,0,10,64,1,0,0,0,12,72,1,0,0,
0,14,86,1,0,0,0,16,18,3,2,1,0,17,16,1,0,0,0,18,19,1,0,0,0,19,17,1,0,0,0,
19,20,1,0,0,0,20,1,1,0,0,0,21,22,5,6,0,0,22,23,5,1,0,0,23,25,3,4,2,0,24,
26,5,2,0,0,25,24,1,0,0,0,25,26,1,0,0,0,26,27,1,0,0,0,27,28,5,3,0,0,28,3,
1,0,0,0,29,31,3,6,3,0,30,29,1,0,0,0,31,34,1,0,0,0,32,30,1,0,0,0,32,33,1,
0,0,0,33,5,1,0,0,0,34,32,1,0,0,0,35,39,3,8,4,0,36,39,3,10,5,0,37,39,3,12,
6,0,38,35,1,0,0,0,38,36,1,0,0,0,38,37,1,0,0,0,39,7,1,0,0,0,40,41,5,7,0,0,
41,44,5,16,0,0,42,43,5,8,0,0,43,45,3,14,7,0,44,42,1,0,0,0,44,45,1,0,0,0,
45,47,1,0,0,0,46,48,5,15,0,0,47,46,1,0,0,0,48,49,1,0,0,0,49,50,1,0,0,0,49,
47,1,0,0,0,50,63,1,0,0,0,51,52,5,7,0,0,52,55,7,0,0,0,53,54,5,8,0,0,54,56,
3,14,7,0,55,53,1,0,0,0,55,56,1,0,0,0,56,58,1,0,0,0,57,59,5,15,0,0,58,57,
1,0,0,0,59,60,1,0,0,0,60,61,1,0,0,0,60,58,1,0,0,0,61,63,1,0,0,0,62,40,1,
0,0,0,62,51,1,0,0,0,63,9,1,0,0,0,64,65,5,16,0,0,65,66,5,8,0,0,66,68,3,14,
7,0,67,69,5,15,0,0,68,67,1,0,0,0,69,70,1,0,0,0,70,68,1,0,0,0,70,71,1,0,0,
0,71,11,1,0,0,0,72,73,5,11,0,0,73,74,5,4,0,0,74,75,3,14,7,0,75,77,5,5,0,
0,76,78,5,15,0,0,77,76,1,0,0,0,78,79,1,0,0,0,79,77,1,0,0,0,79,80,1,0,0,0,
80,13,1,0,0,0,81,82,6,7,-1,0,82,87,5,16,0,0,83,87,5,13,0,0,84,87,5,12,0,
0,85,87,5,14,0,0,86,81,1,0,0,0,86,83,1,0,0,0,86,84,1,0,0,0,86,85,1,0,0,0,
87,93,1,0,0,0,88,89,10,5,0,0,89,90,7,1,0,0,90,92,3,14,7,6,91,88,1,0,0,0,
92,95,1,0,0,0,93,91,1,0,0,0,93,94,1,0,0,0,94,15,1,0,0,0,95,93,1,0,0,0,13,
19,25,32,38,44,49,55,60,62,70,79,86,93];


const atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

const decisionsToDFA = atn.decisionToState.map( (ds, index) => new antlr4.dfa.DFA(ds, index) );

const sharedContextCache = new antlr4.atn.PredictionContextCache();

export default class LanguageParser extends antlr4.Parser {

    static grammarFileName = "Language.g4";
    static literalNames = [ null, "'{'", "'\\n'", "'}'", "'('", "')'", "'start -->'", 
                            null, "'='", "'+'", "'-'", "'ptr'", null, null, 
                            null, "'!'" ];
    static symbolicNames = [ null, null, null, null, null, null, "MAIN", 
                             "TYPE", "EQUALS", "PLUS", "MINUS", "PRINT", 
                             "INT", "FLOAT", "CHAR", "SEMI", "ID", "INV_ID", 
                             "NEWLINE", "WS" ];
    static ruleNames = [ "file", "init", "logic", "expression", "declaration", 
                         "assign", "log", "value" ];

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
	        this.state = 17; 
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        do {
	            this.state = 16;
	            this.init();
	            this.state = 19; 
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
	        this.state = 21;
	        this.match(LanguageParser.MAIN);
	        this.state = 22;
	        this.match(LanguageParser.T__0);
	        this.state = 23;
	        this.logic();
	        this.state = 25;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===2) {
	            this.state = 24;
	            this.match(LanguageParser.T__1);
	        }

	        this.state = 27;
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
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 32;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while((((_la) & ~0x1f) === 0 && ((1 << _la) & 67712) !== 0)) {
	            this.state = 29;
	            this.expression();
	            this.state = 34;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
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
	        this.state = 38;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 7:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 35;
	            this.declaration();
	            break;
	        case 16:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 36;
	            this.assign();
	            break;
	        case 11:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 37;
	            this.log();
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
	        this.state = 62;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,8,this._ctx);
	        switch(la_) {
	        case 1:
	            localctx = new ValidDeclarationContext(this, localctx);
	            this.enterOuterAlt(localctx, 1);
	            this.state = 40;
	            this.match(LanguageParser.TYPE);
	            this.state = 41;
	            this.match(LanguageParser.ID);
	            this.state = 44;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(_la===8) {
	                this.state = 42;
	                this.match(LanguageParser.EQUALS);
	                this.state = 43;
	                this.value(0);
	            }

	            this.state = 47; 
	            this._errHandler.sync(this);
	            var _alt = 1+1;
	            do {
	            	switch (_alt) {
	            	case 1+1:
	            		this.state = 46;
	            		this.match(LanguageParser.SEMI);
	            		break;
	            	default:
	            		throw new antlr4.error.NoViableAltException(this);
	            	}
	            	this.state = 49; 
	            	this._errHandler.sync(this);
	            	_alt = this._interp.adaptivePredict(this._input,5, this._ctx);
	            } while ( _alt!=1 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER );
	            break;

	        case 2:
	            localctx = new InvalidDeclarationContext(this, localctx);
	            this.enterOuterAlt(localctx, 2);
	            this.state = 51;
	            this.match(LanguageParser.TYPE);
	            this.state = 52;
	            localctx.id = this._input.LT(1);
	            _la = this._input.LA(1);
	            if(!(_la===12 || _la===17)) {
	                localctx.id = this._errHandler.recoverInline(this);
	            }
	            else {
	            	this._errHandler.reportMatch(this);
	                this.consume();
	            }
	            this.state = 55;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(_la===8) {
	                this.state = 53;
	                this.match(LanguageParser.EQUALS);
	                this.state = 54;
	                this.value(0);
	            }

	            this.state = 58; 
	            this._errHandler.sync(this);
	            var _alt = 1+1;
	            do {
	            	switch (_alt) {
	            	case 1+1:
	            		this.state = 57;
	            		this.match(LanguageParser.SEMI);
	            		break;
	            	default:
	            		throw new antlr4.error.NoViableAltException(this);
	            	}
	            	this.state = 60; 
	            	this._errHandler.sync(this);
	            	_alt = this._interp.adaptivePredict(this._input,7, this._ctx);
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



	assign() {
	    let localctx = new AssignContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 10, LanguageParser.RULE_assign);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 64;
	        this.match(LanguageParser.ID);
	        this.state = 65;
	        this.match(LanguageParser.EQUALS);
	        this.state = 66;
	        this.value(0);
	        this.state = 68; 
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        do {
	            this.state = 67;
	            this.match(LanguageParser.SEMI);
	            this.state = 70; 
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        } while(_la===15);
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
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 72;
	        this.match(LanguageParser.PRINT);
	        this.state = 73;
	        this.match(LanguageParser.T__3);
	        this.state = 74;
	        this.value(0);
	        this.state = 75;
	        this.match(LanguageParser.T__4);
	        this.state = 77; 
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        do {
	            this.state = 76;
	            this.match(LanguageParser.SEMI);
	            this.state = 79; 
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        } while(_la===15);
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
	        this.state = 86;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 16:
	            localctx = new ValueAsIDContext(this, localctx);
	            this._ctx = localctx;
	            _prevctx = localctx;

	            this.state = 82;
	            this.match(LanguageParser.ID);
	            break;
	        case 13:
	            localctx = new ValueAsNumberContext(this, localctx);
	            this._ctx = localctx;
	            _prevctx = localctx;
	            this.state = 83;
	            this.match(LanguageParser.FLOAT);
	            break;
	        case 12:
	            localctx = new ValueAsNumberContext(this, localctx);
	            this._ctx = localctx;
	            _prevctx = localctx;
	            this.state = 84;
	            this.match(LanguageParser.INT);
	            break;
	        case 14:
	            localctx = new ValueAsCharContext(this, localctx);
	            this._ctx = localctx;
	            _prevctx = localctx;
	            this.state = 85;
	            this.match(LanguageParser.CHAR);
	            break;
	        default:
	            throw new antlr4.error.NoViableAltException(this);
	        }
	        this._ctx.stop = this._input.LT(-1);
	        this.state = 93;
	        this._errHandler.sync(this);
	        var _alt = this._interp.adaptivePredict(this._input,12,this._ctx)
	        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
	            if(_alt===1) {
	                if(this._parseListeners!==null) {
	                    this.triggerExitRuleEvent();
	                }
	                _prevctx = localctx;
	                localctx = new PlusMinusContext(this, new ValueContext(this, _parentctx, _parentState));
	                this.pushNewRecursionContext(localctx, _startState, LanguageParser.RULE_value);
	                this.state = 88;
	                if (!( this.precpred(this._ctx, 5))) {
	                    throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 5)");
	                }
	                this.state = 89;
	                localctx.operation = this._input.LT(1);
	                _la = this._input.LA(1);
	                if(!(_la===9 || _la===10)) {
	                    localctx.operation = this._errHandler.recoverInline(this);
	                }
	                else {
	                	this._errHandler.reportMatch(this);
	                    this.consume();
	                }
	                this.state = 90;
	                this.value(6); 
	            }
	            this.state = 95;
	            this._errHandler.sync(this);
	            _alt = this._interp.adaptivePredict(this._input,12,this._ctx);
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
LanguageParser.T__1 = 2;
LanguageParser.T__2 = 3;
LanguageParser.T__3 = 4;
LanguageParser.T__4 = 5;
LanguageParser.MAIN = 6;
LanguageParser.TYPE = 7;
LanguageParser.EQUALS = 8;
LanguageParser.PLUS = 9;
LanguageParser.MINUS = 10;
LanguageParser.PRINT = 11;
LanguageParser.INT = 12;
LanguageParser.FLOAT = 13;
LanguageParser.CHAR = 14;
LanguageParser.SEMI = 15;
LanguageParser.ID = 16;
LanguageParser.INV_ID = 17;
LanguageParser.NEWLINE = 18;
LanguageParser.WS = 19;

LanguageParser.RULE_file = 0;
LanguageParser.RULE_init = 1;
LanguageParser.RULE_logic = 2;
LanguageParser.RULE_expression = 3;
LanguageParser.RULE_declaration = 4;
LanguageParser.RULE_assign = 5;
LanguageParser.RULE_log = 6;
LanguageParser.RULE_value = 7;

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

	assign() {
	    return this.getTypedRuleContext(AssignContext,0);
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


LanguageParser.FileContext = FileContext; 
LanguageParser.InitContext = InitContext; 
LanguageParser.LogicContext = LogicContext; 
LanguageParser.ExpressionContext = ExpressionContext; 
LanguageParser.DeclarationContext = DeclarationContext; 
LanguageParser.AssignContext = AssignContext; 
LanguageParser.LogContext = LogContext; 
LanguageParser.ValueContext = ValueContext; 
