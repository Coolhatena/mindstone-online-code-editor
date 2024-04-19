// Generated from ./grammar/translator/CtoMS.g4 by ANTLR 4.13.1
// jshint ignore: start
import antlr4 from 'antlr4';
import CtoMSVisitor from './CtoMSVisitor.js';

const serializedATN = [4,1,15,46,2,0,7,0,2,1,7,1,2,2,7,2,2,3,7,3,2,4,7,4,
1,0,4,0,12,8,0,11,0,12,0,13,1,1,1,1,1,1,3,1,19,8,1,1,1,1,1,3,1,23,8,1,1,
1,1,1,1,2,5,2,28,8,2,10,2,12,2,31,9,2,1,3,1,3,3,3,35,8,3,1,4,1,4,1,4,4,4,
40,8,4,11,4,12,4,41,1,4,1,4,1,4,2,29,41,0,5,0,2,4,6,8,0,0,46,0,11,1,0,0,
0,2,15,1,0,0,0,4,29,1,0,0,0,6,32,1,0,0,0,8,36,1,0,0,0,10,12,3,2,1,0,11,10,
1,0,0,0,12,13,1,0,0,0,13,11,1,0,0,0,13,14,1,0,0,0,14,1,1,0,0,0,15,16,5,13,
0,0,16,18,5,4,0,0,17,19,5,1,0,0,18,17,1,0,0,0,18,19,1,0,0,0,19,20,1,0,0,
0,20,22,3,4,2,0,21,23,5,1,0,0,22,21,1,0,0,0,22,23,1,0,0,0,23,24,1,0,0,0,
24,25,5,5,0,0,25,3,1,0,0,0,26,28,3,6,3,0,27,26,1,0,0,0,28,31,1,0,0,0,29,
30,1,0,0,0,29,27,1,0,0,0,30,5,1,0,0,0,31,29,1,0,0,0,32,34,3,8,4,0,33,35,
5,11,0,0,34,33,1,0,0,0,34,35,1,0,0,0,35,7,1,0,0,0,36,37,5,12,0,0,37,39,5,
2,0,0,38,40,9,0,0,0,39,38,1,0,0,0,40,41,1,0,0,0,41,42,1,0,0,0,41,39,1,0,
0,0,42,43,1,0,0,0,43,44,5,3,0,0,44,9,1,0,0,0,6,13,18,22,29,34,41];


const atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

const decisionsToDFA = atn.decisionToState.map( (ds, index) => new antlr4.dfa.DFA(ds, index) );

const sharedContextCache = new antlr4.atn.PredictionContextCache();

export default class CtoMSParser extends antlr4.Parser {

    static grammarFileName = "CtoMS.g4";
    static literalNames = [ null, "'\\n'", "'('", "')'", "'{'", "'}'", "'='", 
                            "'+'", "'-'", "'*'", "'\"'", "';'", "'printf'", 
                            "'void main()'" ];
    static symbolicNames = [ null, null, "OPEN_PARENTH", "CLOSE_PARENTH", 
                             "OPEN_CURL", "CLOSE_CURL", "EQUALS", "PLUS", 
                             "MINUS", "MULT", "DOUBLE_QUOTE", "SEMI", "PRINT", 
                             "MAIN", "ID", "WS" ];
    static ruleNames = [ "file", "init", "logic", "expression", "log" ];

    constructor(input) {
        super(input);
        this._interp = new antlr4.atn.ParserATNSimulator(this, atn, decisionsToDFA, sharedContextCache);
        this.ruleNames = CtoMSParser.ruleNames;
        this.literalNames = CtoMSParser.literalNames;
        this.symbolicNames = CtoMSParser.symbolicNames;
    }



	file() {
	    let localctx = new FileContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 0, CtoMSParser.RULE_file);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 11; 
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        do {
	            this.state = 10;
	            this.init();
	            this.state = 13; 
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        } while(_la===13);
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
	        this.state = 15;
	        this.match(CtoMSParser.MAIN);
	        this.state = 16;
	        this.match(CtoMSParser.OPEN_CURL);
	        this.state = 18;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,1,this._ctx);
	        if(la_===1) {
	            this.state = 17;
	            this.match(CtoMSParser.T__0);

	        }
	        this.state = 20;
	        this.logic();
	        this.state = 22;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===1) {
	            this.state = 21;
	            this.match(CtoMSParser.T__0);
	        }

	        this.state = 24;
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
	        this.state = 29;
	        this._errHandler.sync(this);
	        var _alt = this._interp.adaptivePredict(this._input,3,this._ctx)
	        while(_alt!=1 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
	            if(_alt===1+1) {
	                this.state = 26;
	                this.expression(); 
	            }
	            this.state = 31;
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
	        this.state = 32;
	        this.log();
	        this.state = 34;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===11) {
	            this.state = 33;
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
	        this.state = 36;
	        this.match(CtoMSParser.PRINT);
	        this.state = 37;
	        this.match(CtoMSParser.OPEN_PARENTH);
	        this.state = 39; 
	        this._errHandler.sync(this);
	        var _alt = 1+1;
	        do {
	        	switch (_alt) {
	        	case 1+1:
	        		this.state = 38;
	        		this.matchWildcard();
	        		break;
	        	default:
	        		throw new antlr4.error.NoViableAltException(this);
	        	}
	        	this.state = 41; 
	        	this._errHandler.sync(this);
	        	_alt = this._interp.adaptivePredict(this._input,5, this._ctx);
	        } while ( _alt!=1 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER );
	        this.state = 43;
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
CtoMSParser.DOUBLE_QUOTE = 10;
CtoMSParser.SEMI = 11;
CtoMSParser.PRINT = 12;
CtoMSParser.MAIN = 13;
CtoMSParser.ID = 14;
CtoMSParser.WS = 15;

CtoMSParser.RULE_file = 0;
CtoMSParser.RULE_init = 1;
CtoMSParser.RULE_logic = 2;
CtoMSParser.RULE_expression = 3;
CtoMSParser.RULE_log = 4;

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




CtoMSParser.FileContext = FileContext; 
CtoMSParser.InitContext = InitContext; 
CtoMSParser.LogicContext = LogicContext; 
CtoMSParser.ExpressionContext = ExpressionContext; 
CtoMSParser.LogContext = LogContext; 
