// Generated from ./grammar/translator/CtoMS.g4 by ANTLR 4.13.1
// jshint ignore: start
import antlr4 from 'antlr4';
import CtoMSVisitor from './CtoMSVisitor.js';

const serializedATN = [4,1,20,67,2,0,7,0,2,1,7,1,2,2,7,2,2,3,7,3,2,4,7,4,
2,5,7,5,1,0,4,0,14,8,0,11,0,12,0,15,1,1,1,1,1,1,3,1,21,8,1,1,1,1,1,3,1,25,
8,1,1,1,1,1,1,2,5,2,30,8,2,10,2,12,2,33,9,2,1,3,1,3,3,3,37,8,3,1,4,1,4,1,
4,1,4,1,4,1,5,1,5,1,5,1,5,1,5,1,5,1,5,1,5,1,5,1,5,3,5,54,8,5,1,5,1,5,1,5,
1,5,1,5,1,5,5,5,62,8,5,10,5,12,5,65,9,5,1,5,1,31,1,10,6,0,2,4,6,8,10,0,2,
1,0,9,10,1,0,7,8,72,0,13,1,0,0,0,2,17,1,0,0,0,4,31,1,0,0,0,6,34,1,0,0,0,
8,38,1,0,0,0,10,53,1,0,0,0,12,14,3,2,1,0,13,12,1,0,0,0,14,15,1,0,0,0,15,
13,1,0,0,0,15,16,1,0,0,0,16,1,1,0,0,0,17,18,5,14,0,0,18,20,5,4,0,0,19,21,
5,1,0,0,20,19,1,0,0,0,20,21,1,0,0,0,21,22,1,0,0,0,22,24,3,4,2,0,23,25,5,
1,0,0,24,23,1,0,0,0,24,25,1,0,0,0,25,26,1,0,0,0,26,27,5,5,0,0,27,3,1,0,0,
0,28,30,3,6,3,0,29,28,1,0,0,0,30,33,1,0,0,0,31,32,1,0,0,0,31,29,1,0,0,0,
32,5,1,0,0,0,33,31,1,0,0,0,34,36,3,8,4,0,35,37,5,12,0,0,36,35,1,0,0,0,36,
37,1,0,0,0,37,7,1,0,0,0,38,39,5,13,0,0,39,40,5,2,0,0,40,41,3,10,5,0,41,42,
5,3,0,0,42,9,1,0,0,0,43,44,6,5,-1,0,44,45,5,2,0,0,45,46,3,10,5,0,46,47,5,
3,0,0,47,54,1,0,0,0,48,54,5,18,0,0,49,54,5,15,0,0,50,54,5,19,0,0,51,54,5,
17,0,0,52,54,5,16,0,0,53,43,1,0,0,0,53,48,1,0,0,0,53,49,1,0,0,0,53,50,1,
0,0,0,53,51,1,0,0,0,53,52,1,0,0,0,54,63,1,0,0,0,55,56,10,7,0,0,56,57,7,0,
0,0,57,62,3,10,5,8,58,59,10,6,0,0,59,60,7,1,0,0,60,62,3,10,5,7,61,55,1,0,
0,0,61,58,1,0,0,0,62,65,1,0,0,0,63,61,1,0,0,0,63,64,1,0,0,0,64,11,1,0,0,
0,65,63,1,0,0,0,8,15,20,24,31,36,53,61,63];


const atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

const decisionsToDFA = atn.decisionToState.map( (ds, index) => new antlr4.dfa.DFA(ds, index) );

const sharedContextCache = new antlr4.atn.PredictionContextCache();

export default class CtoMSParser extends antlr4.Parser {

    static grammarFileName = "CtoMS.g4";
    static literalNames = [ null, "'\\n'", "'('", "')'", "'{'", "'}'", "'='", 
                            "'+'", "'-'", "'*'", "'/'", "'\"'", "';'", "'printf'", 
                            "'void main()'" ];
    static symbolicNames = [ null, null, "OPEN_PARENTH", "CLOSE_PARENTH", 
                             "OPEN_CURL", "CLOSE_CURL", "EQUALS", "PLUS", 
                             "MINUS", "MULT", "DIV", "DOUBLE_QUOTE", "SEMI", 
                             "PRINT", "MAIN", "CHAR", "INT", "FLOAT", "STRING", 
                             "ID", "WS" ];
    static ruleNames = [ "file", "init", "logic", "expression", "log", "value" ];

    constructor(input) {
        super(input);
        this._interp = new antlr4.atn.ParserATNSimulator(this, atn, decisionsToDFA, sharedContextCache);
        this.ruleNames = CtoMSParser.ruleNames;
        this.literalNames = CtoMSParser.literalNames;
        this.symbolicNames = CtoMSParser.symbolicNames;
    }

    sempred(localctx, ruleIndex, predIndex) {
    	switch(ruleIndex) {
    	case 5:
    	    		return this.value_sempred(localctx, predIndex);
        default:
            throw "No predicate with index:" + ruleIndex;
       }
    }

    value_sempred(localctx, predIndex) {
    	switch(predIndex) {
    		case 0:
    			return this.precpred(this._ctx, 7);
    		case 1:
    			return this.precpred(this._ctx, 6);
    		default:
    			throw "No predicate with index:" + predIndex;
    	}
    };




	file() {
	    let localctx = new FileContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 0, CtoMSParser.RULE_file);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 13; 
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        do {
	            this.state = 12;
	            this.init();
	            this.state = 15; 
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        } while(_la===14);
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
	    this.enterRule(localctx, 2, CtoMSParser.RULE_init);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 17;
	        this.match(CtoMSParser.MAIN);
	        this.state = 18;
	        this.match(CtoMSParser.OPEN_CURL);
	        this.state = 20;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,1,this._ctx);
	        if(la_===1) {
	            this.state = 19;
	            this.match(CtoMSParser.T__0);

	        }
	        this.state = 22;
	        this.logic();
	        this.state = 24;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===1) {
	            this.state = 23;
	            this.match(CtoMSParser.T__0);
	        }

	        this.state = 26;
	        this.match(CtoMSParser.CLOSE_CURL);
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
	    this.enterRule(localctx, 4, CtoMSParser.RULE_logic);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 31;
	        this._errHandler.sync(this);
	        var _alt = this._interp.adaptivePredict(this._input,3,this._ctx)
	        while(_alt!=1 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
	            if(_alt===1+1) {
	                this.state = 28;
	                this.expression(); 
	            }
	            this.state = 33;
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
	    this.enterRule(localctx, 6, CtoMSParser.RULE_expression);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 34;
	        this.log();
	        this.state = 36;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===12) {
	            this.state = 35;
	            this.match(CtoMSParser.SEMI);
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
	    this.enterRule(localctx, 8, CtoMSParser.RULE_log);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 38;
	        this.match(CtoMSParser.PRINT);
	        this.state = 39;
	        this.match(CtoMSParser.OPEN_PARENTH);
	        this.state = 40;
	        this.value(0);
	        this.state = 41;
	        this.match(CtoMSParser.CLOSE_PARENTH);
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
	    const _startState = 10;
	    this.enterRecursionRule(localctx, 10, CtoMSParser.RULE_value, _p);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 53;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 2:
	            this.state = 44;
	            this.match(CtoMSParser.OPEN_PARENTH);
	            this.state = 45;
	            this.value(0);
	            this.state = 46;
	            this.match(CtoMSParser.CLOSE_PARENTH);
	            break;
	        case 18:
	            this.state = 48;
	            this.match(CtoMSParser.STRING);
	            break;
	        case 15:
	            this.state = 49;
	            this.match(CtoMSParser.CHAR);
	            break;
	        case 19:
	            this.state = 50;
	            this.match(CtoMSParser.ID);
	            break;
	        case 17:
	            this.state = 51;
	            this.match(CtoMSParser.FLOAT);
	            break;
	        case 16:
	            this.state = 52;
	            this.match(CtoMSParser.INT);
	            break;
	        default:
	            throw new antlr4.error.NoViableAltException(this);
	        }
	        this._ctx.stop = this._input.LT(-1);
	        this.state = 63;
	        this._errHandler.sync(this);
	        var _alt = this._interp.adaptivePredict(this._input,7,this._ctx)
	        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
	            if(_alt===1) {
	                if(this._parseListeners!==null) {
	                    this.triggerExitRuleEvent();
	                }
	                _prevctx = localctx;
	                this.state = 61;
	                this._errHandler.sync(this);
	                var la_ = this._interp.adaptivePredict(this._input,6,this._ctx);
	                switch(la_) {
	                case 1:
	                    localctx = new ValueContext(this, _parentctx, _parentState);
	                    this.pushNewRecursionContext(localctx, _startState, CtoMSParser.RULE_value);
	                    this.state = 55;
	                    if (!( this.precpred(this._ctx, 7))) {
	                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 7)");
	                    }
	                    this.state = 56;
	                    localctx.operation = this._input.LT(1);
	                    _la = this._input.LA(1);
	                    if(!(_la===9 || _la===10)) {
	                        localctx.operation = this._errHandler.recoverInline(this);
	                    }
	                    else {
	                    	this._errHandler.reportMatch(this);
	                        this.consume();
	                    }
	                    this.state = 57;
	                    this.value(8);
	                    break;

	                case 2:
	                    localctx = new ValueContext(this, _parentctx, _parentState);
	                    this.pushNewRecursionContext(localctx, _startState, CtoMSParser.RULE_value);
	                    this.state = 58;
	                    if (!( this.precpred(this._ctx, 6))) {
	                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 6)");
	                    }
	                    this.state = 59;
	                    localctx.operation = this._input.LT(1);
	                    _la = this._input.LA(1);
	                    if(!(_la===7 || _la===8)) {
	                        localctx.operation = this._errHandler.recoverInline(this);
	                    }
	                    else {
	                    	this._errHandler.reportMatch(this);
	                        this.consume();
	                    }
	                    this.state = 60;
	                    this.value(7);
	                    break;

	                } 
	            }
	            this.state = 65;
	            this._errHandler.sync(this);
	            _alt = this._interp.adaptivePredict(this._input,7,this._ctx);
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

CtoMSParser.EOF = antlr4.Token.EOF;
CtoMSParser.T__0 = 1;
CtoMSParser.OPEN_PARENTH = 2;
CtoMSParser.CLOSE_PARENTH = 3;
CtoMSParser.OPEN_CURL = 4;
CtoMSParser.CLOSE_CURL = 5;
CtoMSParser.EQUALS = 6;
CtoMSParser.PLUS = 7;
CtoMSParser.MINUS = 8;
CtoMSParser.MULT = 9;
CtoMSParser.DIV = 10;
CtoMSParser.DOUBLE_QUOTE = 11;
CtoMSParser.SEMI = 12;
CtoMSParser.PRINT = 13;
CtoMSParser.MAIN = 14;
CtoMSParser.CHAR = 15;
CtoMSParser.INT = 16;
CtoMSParser.FLOAT = 17;
CtoMSParser.STRING = 18;
CtoMSParser.ID = 19;
CtoMSParser.WS = 20;

CtoMSParser.RULE_file = 0;
CtoMSParser.RULE_init = 1;
CtoMSParser.RULE_logic = 2;
CtoMSParser.RULE_expression = 3;
CtoMSParser.RULE_log = 4;
CtoMSParser.RULE_value = 5;

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
        this.ruleIndex = CtoMSParser.RULE_file;
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
	    if ( visitor instanceof CtoMSVisitor ) {
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
        this.ruleIndex = CtoMSParser.RULE_init;
    }

	MAIN() {
	    return this.getToken(CtoMSParser.MAIN, 0);
	};

	OPEN_CURL() {
	    return this.getToken(CtoMSParser.OPEN_CURL, 0);
	};

	logic() {
	    return this.getTypedRuleContext(LogicContext,0);
	};

	CLOSE_CURL() {
	    return this.getToken(CtoMSParser.CLOSE_CURL, 0);
	};

	accept(visitor) {
	    if ( visitor instanceof CtoMSVisitor ) {
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
        this.ruleIndex = CtoMSParser.RULE_logic;
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
	    if ( visitor instanceof CtoMSVisitor ) {
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
        this.ruleIndex = CtoMSParser.RULE_expression;
    }

	log() {
	    return this.getTypedRuleContext(LogContext,0);
	};

	SEMI() {
	    return this.getToken(CtoMSParser.SEMI, 0);
	};

	accept(visitor) {
	    if ( visitor instanceof CtoMSVisitor ) {
	        return visitor.visitExpression(this);
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
        this.ruleIndex = CtoMSParser.RULE_log;
    }

	PRINT() {
	    return this.getToken(CtoMSParser.PRINT, 0);
	};

	OPEN_PARENTH() {
	    return this.getToken(CtoMSParser.OPEN_PARENTH, 0);
	};

	value() {
	    return this.getTypedRuleContext(ValueContext,0);
	};

	CLOSE_PARENTH() {
	    return this.getToken(CtoMSParser.CLOSE_PARENTH, 0);
	};

	accept(visitor) {
	    if ( visitor instanceof CtoMSVisitor ) {
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
        this.ruleIndex = CtoMSParser.RULE_value;
        this.operation = null;
    }

	OPEN_PARENTH() {
	    return this.getToken(CtoMSParser.OPEN_PARENTH, 0);
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

	CLOSE_PARENTH() {
	    return this.getToken(CtoMSParser.CLOSE_PARENTH, 0);
	};

	STRING() {
	    return this.getToken(CtoMSParser.STRING, 0);
	};

	CHAR() {
	    return this.getToken(CtoMSParser.CHAR, 0);
	};

	ID() {
	    return this.getToken(CtoMSParser.ID, 0);
	};

	FLOAT() {
	    return this.getToken(CtoMSParser.FLOAT, 0);
	};

	INT() {
	    return this.getToken(CtoMSParser.INT, 0);
	};

	MULT() {
	    return this.getToken(CtoMSParser.MULT, 0);
	};

	DIV() {
	    return this.getToken(CtoMSParser.DIV, 0);
	};

	PLUS() {
	    return this.getToken(CtoMSParser.PLUS, 0);
	};

	MINUS() {
	    return this.getToken(CtoMSParser.MINUS, 0);
	};

	accept(visitor) {
	    if ( visitor instanceof CtoMSVisitor ) {
	        return visitor.visitValue(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}




CtoMSParser.FileContext = FileContext; 
CtoMSParser.InitContext = InitContext; 
CtoMSParser.LogicContext = LogicContext; 
CtoMSParser.ExpressionContext = ExpressionContext; 
CtoMSParser.LogContext = LogContext; 
CtoMSParser.ValueContext = ValueContext; 
