// Generated from ./grammar/translator/CtoMS.g4 by ANTLR 4.13.1
// jshint ignore: start
import antlr4 from 'antlr4';
import CtoMSVisitor from './CtoMSVisitor.js';

const serializedATN = [4,1,26,145,2,0,7,0,2,1,7,1,2,2,7,2,2,3,7,3,2,4,7,
4,2,5,7,5,2,6,7,6,2,7,7,7,2,8,7,8,2,9,7,9,2,10,7,10,2,11,7,11,1,0,4,0,26,
8,0,11,0,12,0,27,1,1,1,1,1,1,3,1,33,8,1,1,1,1,1,3,1,37,8,1,1,1,1,1,1,2,5,
2,42,8,2,10,2,12,2,45,9,2,1,3,1,3,1,3,1,3,1,3,1,3,1,3,1,3,1,3,1,3,3,3,57,
8,3,1,4,1,4,1,4,1,4,3,4,63,8,4,1,4,1,4,1,4,1,4,3,4,69,8,4,3,4,71,8,4,1,5,
1,5,1,5,1,5,1,6,1,6,1,6,1,6,1,6,1,7,1,7,5,7,84,8,7,10,7,12,7,87,9,7,1,7,
3,7,90,8,7,1,8,1,8,1,8,1,8,1,8,1,8,5,8,98,8,8,10,8,12,8,101,9,8,1,8,1,8,
1,9,1,9,1,9,1,10,1,10,1,10,5,10,111,8,10,10,10,12,10,114,9,10,1,10,1,10,
1,11,1,11,1,11,1,11,1,11,1,11,1,11,1,11,1,11,1,11,1,11,3,11,129,8,11,1,11,
1,11,1,11,1,11,1,11,1,11,1,11,1,11,1,11,5,11,140,8,11,10,11,12,11,143,9,
11,1,11,1,43,1,22,12,0,2,4,6,8,10,12,14,16,18,20,22,0,4,2,0,21,21,25,25,
1,0,16,17,1,0,10,11,1,0,8,9,155,0,25,1,0,0,0,2,29,1,0,0,0,4,43,1,0,0,0,6,
56,1,0,0,0,8,70,1,0,0,0,10,72,1,0,0,0,12,76,1,0,0,0,14,81,1,0,0,0,16,91,
1,0,0,0,18,104,1,0,0,0,20,107,1,0,0,0,22,128,1,0,0,0,24,26,3,2,1,0,25,24,
1,0,0,0,26,27,1,0,0,0,27,25,1,0,0,0,27,28,1,0,0,0,28,1,1,0,0,0,29,30,5,19,
0,0,30,32,5,5,0,0,31,33,5,1,0,0,32,31,1,0,0,0,32,33,1,0,0,0,33,34,1,0,0,
0,34,36,3,4,2,0,35,37,5,1,0,0,36,35,1,0,0,0,36,37,1,0,0,0,37,38,1,0,0,0,
38,39,5,6,0,0,39,3,1,0,0,0,40,42,3,6,3,0,41,40,1,0,0,0,42,45,1,0,0,0,43,
44,1,0,0,0,43,41,1,0,0,0,44,5,1,0,0,0,45,43,1,0,0,0,46,47,3,12,6,0,47,48,
5,13,0,0,48,57,1,0,0,0,49,50,3,8,4,0,50,51,5,13,0,0,51,57,1,0,0,0,52,53,
3,10,5,0,53,54,5,13,0,0,54,57,1,0,0,0,55,57,3,14,7,0,56,46,1,0,0,0,56,49,
1,0,0,0,56,52,1,0,0,0,56,55,1,0,0,0,57,7,1,0,0,0,58,59,5,2,0,0,59,62,5,24,
0,0,60,61,5,7,0,0,61,63,3,22,11,0,62,60,1,0,0,0,62,63,1,0,0,0,63,71,1,0,
0,0,64,65,5,2,0,0,65,68,7,0,0,0,66,67,5,7,0,0,67,69,3,22,11,0,68,66,1,0,
0,0,68,69,1,0,0,0,69,71,1,0,0,0,70,58,1,0,0,0,70,64,1,0,0,0,71,9,1,0,0,0,
72,73,5,24,0,0,73,74,5,7,0,0,74,75,3,22,11,0,75,11,1,0,0,0,76,77,5,18,0,
0,77,78,5,3,0,0,78,79,3,22,11,0,79,80,5,4,0,0,80,13,1,0,0,0,81,85,3,16,8,
0,82,84,3,18,9,0,83,82,1,0,0,0,84,87,1,0,0,0,85,83,1,0,0,0,85,86,1,0,0,0,
86,89,1,0,0,0,87,85,1,0,0,0,88,90,3,20,10,0,89,88,1,0,0,0,89,90,1,0,0,0,
90,15,1,0,0,0,91,92,5,14,0,0,92,93,5,3,0,0,93,94,3,22,11,0,94,95,5,4,0,0,
95,99,5,5,0,0,96,98,3,6,3,0,97,96,1,0,0,0,98,101,1,0,0,0,99,97,1,0,0,0,99,
100,1,0,0,0,100,102,1,0,0,0,101,99,1,0,0,0,102,103,5,6,0,0,103,17,1,0,0,
0,104,105,5,15,0,0,105,106,3,16,8,0,106,19,1,0,0,0,107,108,5,15,0,0,108,
112,5,5,0,0,109,111,3,6,3,0,110,109,1,0,0,0,111,114,1,0,0,0,112,110,1,0,
0,0,112,113,1,0,0,0,113,115,1,0,0,0,114,112,1,0,0,0,115,116,5,6,0,0,116,
21,1,0,0,0,117,118,6,11,-1,0,118,119,5,3,0,0,119,120,3,22,11,0,120,121,5,
4,0,0,121,129,1,0,0,0,122,129,7,1,0,0,123,129,5,23,0,0,124,129,5,20,0,0,
125,129,5,24,0,0,126,129,5,22,0,0,127,129,5,21,0,0,128,117,1,0,0,0,128,122,
1,0,0,0,128,123,1,0,0,0,128,124,1,0,0,0,128,125,1,0,0,0,128,126,1,0,0,0,
128,127,1,0,0,0,129,141,1,0,0,0,130,131,10,9,0,0,131,132,7,2,0,0,132,140,
3,22,11,10,133,134,10,8,0,0,134,135,7,3,0,0,135,140,3,22,11,9,136,137,10,
7,0,0,137,138,7,1,0,0,138,140,3,22,11,8,139,130,1,0,0,0,139,133,1,0,0,0,
139,136,1,0,0,0,140,143,1,0,0,0,141,139,1,0,0,0,141,142,1,0,0,0,142,23,1,
0,0,0,143,141,1,0,0,0,15,27,32,36,43,56,62,68,70,85,89,99,112,128,139,141];


const atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

const decisionsToDFA = atn.decisionToState.map( (ds, index) => new antlr4.dfa.DFA(ds, index) );

const sharedContextCache = new antlr4.atn.PredictionContextCache();

export default class CtoMSParser extends antlr4.Parser {

    static grammarFileName = "CtoMS.g4";
    static literalNames = [ null, "'\\n'", null, "'('", "')'", "'{'", "'}'", 
                            "'='", "'+'", "'-'", "'*'", "'/'", "'\"'", "';'", 
                            "'if'", "'else'", null, null, "'printf'", "'void main()'" ];
    static symbolicNames = [ null, null, "TYPE", "OPEN_PARENTH", "CLOSE_PARENTH", 
                             "OPEN_CURL", "CLOSE_CURL", "EQUALS", "PLUS", 
                             "MINUS", "MULT", "DIV", "DOUBLE_QUOTE", "SEMI", 
                             "IF_PR", "ELSE_PR", "COND_MAT", "COND_LOG", 
                             "PRINT", "MAIN", "CHAR", "INT", "FLOAT", "STRING", 
                             "ID", "INV_ID", "WS" ];
    static ruleNames = [ "file", "init", "logic", "expression", "declaration", 
                         "assign", "log", "chained_conditional", "conditional", 
                         "conditional__elif", "conditional__else", "value" ];

    constructor(input) {
        super(input);
        this._interp = new antlr4.atn.ParserATNSimulator(this, atn, decisionsToDFA, sharedContextCache);
        this.ruleNames = CtoMSParser.ruleNames;
        this.literalNames = CtoMSParser.literalNames;
        this.symbolicNames = CtoMSParser.symbolicNames;
    }

    sempred(localctx, ruleIndex, predIndex) {
    	switch(ruleIndex) {
    	case 11:
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
    			return this.precpred(this._ctx, 7);
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
	        this.state = 25; 
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        do {
	            this.state = 24;
	            this.init();
	            this.state = 27; 
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        } while(_la===19);
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
	        this.state = 29;
	        this.match(CtoMSParser.MAIN);
	        this.state = 30;
	        this.match(CtoMSParser.OPEN_CURL);
	        this.state = 32;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,1,this._ctx);
	        if(la_===1) {
	            this.state = 31;
	            this.match(CtoMSParser.T__0);

	        }
	        this.state = 34;
	        this.logic();
	        this.state = 36;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===1) {
	            this.state = 35;
	            this.match(CtoMSParser.T__0);
	        }

	        this.state = 38;
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
	    this.enterRule(localctx, 6, CtoMSParser.RULE_expression);
	    try {
	        this.state = 56;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 18:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 46;
	            this.log();
	            this.state = 47;
	            this.match(CtoMSParser.SEMI);
	            break;
	        case 2:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 49;
	            this.declaration();
	            this.state = 50;
	            this.match(CtoMSParser.SEMI);
	            break;
	        case 24:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 52;
	            this.assign();
	            this.state = 53;
	            this.match(CtoMSParser.SEMI);
	            break;
	        case 14:
	            this.enterOuterAlt(localctx, 4);
	            this.state = 55;
	            this.chained_conditional();
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
	    this.enterRule(localctx, 8, CtoMSParser.RULE_declaration);
	    var _la = 0;
	    try {
	        this.state = 70;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,7,this._ctx);
	        switch(la_) {
	        case 1:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 58;
	            this.match(CtoMSParser.TYPE);
	            this.state = 59;
	            this.match(CtoMSParser.ID);
	            this.state = 62;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(_la===7) {
	                this.state = 60;
	                this.match(CtoMSParser.EQUALS);
	                this.state = 61;
	                this.value(0);
	            }

	            break;

	        case 2:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 64;
	            this.match(CtoMSParser.TYPE);
	            this.state = 65;
	            localctx.id = this._input.LT(1);
	            _la = this._input.LA(1);
	            if(!(_la===21 || _la===25)) {
	                localctx.id = this._errHandler.recoverInline(this);
	            }
	            else {
	            	this._errHandler.reportMatch(this);
	                this.consume();
	            }
	            this.state = 68;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(_la===7) {
	                this.state = 66;
	                this.match(CtoMSParser.EQUALS);
	                this.state = 67;
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
	    this.enterRule(localctx, 10, CtoMSParser.RULE_assign);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 72;
	        this.match(CtoMSParser.ID);
	        this.state = 73;
	        this.match(CtoMSParser.EQUALS);
	        this.state = 74;
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
	    this.enterRule(localctx, 12, CtoMSParser.RULE_log);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 76;
	        this.match(CtoMSParser.PRINT);
	        this.state = 77;
	        this.match(CtoMSParser.OPEN_PARENTH);
	        this.state = 78;
	        this.value(0);
	        this.state = 79;
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



	chained_conditional() {
	    let localctx = new Chained_conditionalContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 14, CtoMSParser.RULE_chained_conditional);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 81;
	        this.conditional();
	        this.state = 85;
	        this._errHandler.sync(this);
	        var _alt = this._interp.adaptivePredict(this._input,8,this._ctx)
	        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
	            if(_alt===1) {
	                this.state = 82;
	                this.conditional__elif(); 
	            }
	            this.state = 87;
	            this._errHandler.sync(this);
	            _alt = this._interp.adaptivePredict(this._input,8,this._ctx);
	        }

	        this.state = 89;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===15) {
	            this.state = 88;
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
	    this.enterRule(localctx, 16, CtoMSParser.RULE_conditional);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 91;
	        this.match(CtoMSParser.IF_PR);
	        this.state = 92;
	        this.match(CtoMSParser.OPEN_PARENTH);
	        this.state = 93;
	        this.value(0);
	        this.state = 94;
	        this.match(CtoMSParser.CLOSE_PARENTH);
	        this.state = 95;
	        this.match(CtoMSParser.OPEN_CURL);
	        this.state = 99;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while((((_la) & ~0x1f) === 0 && ((1 << _la) & 17055748) !== 0)) {
	            this.state = 96;
	            this.expression();
	            this.state = 101;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	        this.state = 102;
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



	conditional__elif() {
	    let localctx = new Conditional__elifContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 18, CtoMSParser.RULE_conditional__elif);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 104;
	        this.match(CtoMSParser.ELSE_PR);
	        this.state = 105;
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
	    this.enterRule(localctx, 20, CtoMSParser.RULE_conditional__else);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 107;
	        this.match(CtoMSParser.ELSE_PR);
	        this.state = 108;
	        this.match(CtoMSParser.OPEN_CURL);
	        this.state = 112;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while((((_la) & ~0x1f) === 0 && ((1 << _la) & 17055748) !== 0)) {
	            this.state = 109;
	            this.expression();
	            this.state = 114;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	        this.state = 115;
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


	value(_p) {
		if(_p===undefined) {
		    _p = 0;
		}
	    const _parentctx = this._ctx;
	    const _parentState = this.state;
	    let localctx = new ValueContext(this, this._ctx, _parentState);
	    let _prevctx = localctx;
	    const _startState = 22;
	    this.enterRecursionRule(localctx, 22, CtoMSParser.RULE_value, _p);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 128;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 3:
	            this.state = 118;
	            this.match(CtoMSParser.OPEN_PARENTH);
	            this.state = 119;
	            this.value(0);
	            this.state = 120;
	            this.match(CtoMSParser.CLOSE_PARENTH);
	            break;
	        case 16:
	        case 17:
	            this.state = 122;
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
	        case 23:
	            this.state = 123;
	            this.match(CtoMSParser.STRING);
	            break;
	        case 20:
	            this.state = 124;
	            this.match(CtoMSParser.CHAR);
	            break;
	        case 24:
	            this.state = 125;
	            this.match(CtoMSParser.ID);
	            break;
	        case 22:
	            this.state = 126;
	            this.match(CtoMSParser.FLOAT);
	            break;
	        case 21:
	            this.state = 127;
	            this.match(CtoMSParser.INT);
	            break;
	        default:
	            throw new antlr4.error.NoViableAltException(this);
	        }
	        this._ctx.stop = this._input.LT(-1);
	        this.state = 141;
	        this._errHandler.sync(this);
	        var _alt = this._interp.adaptivePredict(this._input,14,this._ctx)
	        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
	            if(_alt===1) {
	                if(this._parseListeners!==null) {
	                    this.triggerExitRuleEvent();
	                }
	                _prevctx = localctx;
	                this.state = 139;
	                this._errHandler.sync(this);
	                var la_ = this._interp.adaptivePredict(this._input,13,this._ctx);
	                switch(la_) {
	                case 1:
	                    localctx = new ValueContext(this, _parentctx, _parentState);
	                    this.pushNewRecursionContext(localctx, _startState, CtoMSParser.RULE_value);
	                    this.state = 130;
	                    if (!( this.precpred(this._ctx, 9))) {
	                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 9)");
	                    }
	                    this.state = 131;
	                    localctx.operation = this._input.LT(1);
	                    _la = this._input.LA(1);
	                    if(!(_la===10 || _la===11)) {
	                        localctx.operation = this._errHandler.recoverInline(this);
	                    }
	                    else {
	                    	this._errHandler.reportMatch(this);
	                        this.consume();
	                    }
	                    this.state = 132;
	                    this.value(10);
	                    break;

	                case 2:
	                    localctx = new ValueContext(this, _parentctx, _parentState);
	                    this.pushNewRecursionContext(localctx, _startState, CtoMSParser.RULE_value);
	                    this.state = 133;
	                    if (!( this.precpred(this._ctx, 8))) {
	                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 8)");
	                    }
	                    this.state = 134;
	                    localctx.operation = this._input.LT(1);
	                    _la = this._input.LA(1);
	                    if(!(_la===8 || _la===9)) {
	                        localctx.operation = this._errHandler.recoverInline(this);
	                    }
	                    else {
	                    	this._errHandler.reportMatch(this);
	                        this.consume();
	                    }
	                    this.state = 135;
	                    this.value(9);
	                    break;

	                case 3:
	                    localctx = new ValueContext(this, _parentctx, _parentState);
	                    this.pushNewRecursionContext(localctx, _startState, CtoMSParser.RULE_value);
	                    this.state = 136;
	                    if (!( this.precpred(this._ctx, 7))) {
	                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 7)");
	                    }
	                    this.state = 137;
	                    localctx.cond_sym = this._input.LT(1);
	                    _la = this._input.LA(1);
	                    if(!(_la===16 || _la===17)) {
	                        localctx.cond_sym = this._errHandler.recoverInline(this);
	                    }
	                    else {
	                    	this._errHandler.reportMatch(this);
	                        this.consume();
	                    }
	                    this.state = 138;
	                    this.value(8);
	                    break;

	                } 
	            }
	            this.state = 143;
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


}

CtoMSParser.EOF = antlr4.Token.EOF;
CtoMSParser.T__0 = 1;
CtoMSParser.TYPE = 2;
CtoMSParser.OPEN_PARENTH = 3;
CtoMSParser.CLOSE_PARENTH = 4;
CtoMSParser.OPEN_CURL = 5;
CtoMSParser.CLOSE_CURL = 6;
CtoMSParser.EQUALS = 7;
CtoMSParser.PLUS = 8;
CtoMSParser.MINUS = 9;
CtoMSParser.MULT = 10;
CtoMSParser.DIV = 11;
CtoMSParser.DOUBLE_QUOTE = 12;
CtoMSParser.SEMI = 13;
CtoMSParser.IF_PR = 14;
CtoMSParser.ELSE_PR = 15;
CtoMSParser.COND_MAT = 16;
CtoMSParser.COND_LOG = 17;
CtoMSParser.PRINT = 18;
CtoMSParser.MAIN = 19;
CtoMSParser.CHAR = 20;
CtoMSParser.INT = 21;
CtoMSParser.FLOAT = 22;
CtoMSParser.STRING = 23;
CtoMSParser.ID = 24;
CtoMSParser.INV_ID = 25;
CtoMSParser.WS = 26;

CtoMSParser.RULE_file = 0;
CtoMSParser.RULE_init = 1;
CtoMSParser.RULE_logic = 2;
CtoMSParser.RULE_expression = 3;
CtoMSParser.RULE_declaration = 4;
CtoMSParser.RULE_assign = 5;
CtoMSParser.RULE_log = 6;
CtoMSParser.RULE_chained_conditional = 7;
CtoMSParser.RULE_conditional = 8;
CtoMSParser.RULE_conditional__elif = 9;
CtoMSParser.RULE_conditional__else = 10;
CtoMSParser.RULE_value = 11;

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

	declaration() {
	    return this.getTypedRuleContext(DeclarationContext,0);
	};

	assign() {
	    return this.getTypedRuleContext(AssignContext,0);
	};

	chained_conditional() {
	    return this.getTypedRuleContext(Chained_conditionalContext,0);
	};

	accept(visitor) {
	    if ( visitor instanceof CtoMSVisitor ) {
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
        this.ruleIndex = CtoMSParser.RULE_declaration;
        this.id = null;
    }

	TYPE() {
	    return this.getToken(CtoMSParser.TYPE, 0);
	};

	ID() {
	    return this.getToken(CtoMSParser.ID, 0);
	};

	EQUALS() {
	    return this.getToken(CtoMSParser.EQUALS, 0);
	};

	value() {
	    return this.getTypedRuleContext(ValueContext,0);
	};

	INV_ID() {
	    return this.getToken(CtoMSParser.INV_ID, 0);
	};

	INT() {
	    return this.getToken(CtoMSParser.INT, 0);
	};

	accept(visitor) {
	    if ( visitor instanceof CtoMSVisitor ) {
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
        this.ruleIndex = CtoMSParser.RULE_assign;
    }

	ID() {
	    return this.getToken(CtoMSParser.ID, 0);
	};

	EQUALS() {
	    return this.getToken(CtoMSParser.EQUALS, 0);
	};

	value() {
	    return this.getTypedRuleContext(ValueContext,0);
	};

	accept(visitor) {
	    if ( visitor instanceof CtoMSVisitor ) {
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
        this.ruleIndex = CtoMSParser.RULE_chained_conditional;
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
	    if ( visitor instanceof CtoMSVisitor ) {
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
        this.ruleIndex = CtoMSParser.RULE_conditional;
    }

	IF_PR() {
	    return this.getToken(CtoMSParser.IF_PR, 0);
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

	OPEN_CURL() {
	    return this.getToken(CtoMSParser.OPEN_CURL, 0);
	};

	CLOSE_CURL() {
	    return this.getToken(CtoMSParser.CLOSE_CURL, 0);
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
	    if ( visitor instanceof CtoMSVisitor ) {
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
        this.ruleIndex = CtoMSParser.RULE_conditional__elif;
    }

	ELSE_PR() {
	    return this.getToken(CtoMSParser.ELSE_PR, 0);
	};

	conditional() {
	    return this.getTypedRuleContext(ConditionalContext,0);
	};

	accept(visitor) {
	    if ( visitor instanceof CtoMSVisitor ) {
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
        this.ruleIndex = CtoMSParser.RULE_conditional__else;
    }

	ELSE_PR() {
	    return this.getToken(CtoMSParser.ELSE_PR, 0);
	};

	OPEN_CURL() {
	    return this.getToken(CtoMSParser.OPEN_CURL, 0);
	};

	CLOSE_CURL() {
	    return this.getToken(CtoMSParser.CLOSE_CURL, 0);
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
	    if ( visitor instanceof CtoMSVisitor ) {
	        return visitor.visitConditional__else(this);
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
        this.cond_sym = null;
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

	COND_LOG() {
	    return this.getToken(CtoMSParser.COND_LOG, 0);
	};

	COND_MAT() {
	    return this.getToken(CtoMSParser.COND_MAT, 0);
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
CtoMSParser.DeclarationContext = DeclarationContext; 
CtoMSParser.AssignContext = AssignContext; 
CtoMSParser.LogContext = LogContext; 
CtoMSParser.Chained_conditionalContext = Chained_conditionalContext; 
CtoMSParser.ConditionalContext = ConditionalContext; 
CtoMSParser.Conditional__elifContext = Conditional__elifContext; 
CtoMSParser.Conditional__elseContext = Conditional__elseContext; 
CtoMSParser.ValueContext = ValueContext; 
