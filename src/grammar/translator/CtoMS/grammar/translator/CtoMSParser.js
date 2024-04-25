// Generated from ./grammar/translator/CtoMS.g4 by ANTLR 4.13.1
// jshint ignore: start
import antlr4 from 'antlr4';
import CtoMSVisitor from './CtoMSVisitor.js';

const serializedATN = [4,1,28,175,2,0,7,0,2,1,7,1,2,2,7,2,2,3,7,3,2,4,7,
4,2,5,7,5,2,6,7,6,2,7,7,7,2,8,7,8,2,9,7,9,2,10,7,10,2,11,7,11,2,12,7,12,
2,13,7,13,1,0,4,0,30,8,0,11,0,12,0,31,1,1,1,1,1,1,3,1,37,8,1,1,1,1,1,3,1,
41,8,1,1,1,1,1,1,2,5,2,46,8,2,10,2,12,2,49,9,2,1,3,1,3,1,3,1,3,1,3,1,3,1,
3,1,3,1,3,1,3,1,3,1,3,3,3,63,8,3,1,4,1,4,1,4,1,4,3,4,69,8,4,1,4,1,4,1,4,
1,4,3,4,75,8,4,3,4,77,8,4,1,5,1,5,1,5,1,5,1,6,1,6,1,6,1,6,1,6,1,7,1,7,5,
7,90,8,7,10,7,12,7,93,9,7,1,7,3,7,96,8,7,1,8,1,8,1,8,1,8,1,8,1,8,5,8,104,
8,8,10,8,12,8,107,9,8,1,8,1,8,1,9,1,9,1,9,1,10,1,10,1,10,5,10,117,8,10,10,
10,12,10,120,9,10,1,10,1,10,1,11,1,11,1,11,1,11,1,11,1,11,5,11,130,8,11,
10,11,12,11,133,9,11,1,11,1,11,1,12,1,12,1,12,5,12,140,8,12,10,12,12,12,
143,9,12,1,12,1,12,1,12,1,12,1,12,1,12,1,13,1,13,1,13,1,13,1,13,1,13,1,13,
1,13,1,13,1,13,1,13,3,13,162,8,13,1,13,1,13,1,13,1,13,1,13,1,13,5,13,170,
8,13,10,13,12,13,173,9,13,1,13,1,47,1,26,14,0,2,4,6,8,10,12,14,16,18,20,
22,24,26,0,3,2,0,23,23,27,27,1,0,18,19,1,0,8,11,186,0,29,1,0,0,0,2,33,1,
0,0,0,4,47,1,0,0,0,6,62,1,0,0,0,8,76,1,0,0,0,10,78,1,0,0,0,12,82,1,0,0,0,
14,87,1,0,0,0,16,97,1,0,0,0,18,110,1,0,0,0,20,113,1,0,0,0,22,123,1,0,0,0,
24,136,1,0,0,0,26,161,1,0,0,0,28,30,3,2,1,0,29,28,1,0,0,0,30,31,1,0,0,0,
31,29,1,0,0,0,31,32,1,0,0,0,32,1,1,0,0,0,33,34,5,21,0,0,34,36,5,5,0,0,35,
37,5,1,0,0,36,35,1,0,0,0,36,37,1,0,0,0,37,38,1,0,0,0,38,40,3,4,2,0,39,41,
5,1,0,0,40,39,1,0,0,0,40,41,1,0,0,0,41,42,1,0,0,0,42,43,5,6,0,0,43,3,1,0,
0,0,44,46,3,6,3,0,45,44,1,0,0,0,46,49,1,0,0,0,47,48,1,0,0,0,47,45,1,0,0,
0,48,5,1,0,0,0,49,47,1,0,0,0,50,51,3,12,6,0,51,52,5,13,0,0,52,63,1,0,0,0,
53,54,3,8,4,0,54,55,5,13,0,0,55,63,1,0,0,0,56,57,3,10,5,0,57,58,5,13,0,0,
58,63,1,0,0,0,59,63,3,14,7,0,60,63,3,22,11,0,61,63,3,24,12,0,62,50,1,0,0,
0,62,53,1,0,0,0,62,56,1,0,0,0,62,59,1,0,0,0,62,60,1,0,0,0,62,61,1,0,0,0,
63,7,1,0,0,0,64,65,5,2,0,0,65,68,5,26,0,0,66,67,5,7,0,0,67,69,3,26,13,0,
68,66,1,0,0,0,68,69,1,0,0,0,69,77,1,0,0,0,70,71,5,2,0,0,71,74,7,0,0,0,72,
73,5,7,0,0,73,75,3,26,13,0,74,72,1,0,0,0,74,75,1,0,0,0,75,77,1,0,0,0,76,
64,1,0,0,0,76,70,1,0,0,0,77,9,1,0,0,0,78,79,5,26,0,0,79,80,5,7,0,0,80,81,
3,26,13,0,81,11,1,0,0,0,82,83,5,20,0,0,83,84,5,3,0,0,84,85,3,26,13,0,85,
86,5,4,0,0,86,13,1,0,0,0,87,91,3,16,8,0,88,90,3,18,9,0,89,88,1,0,0,0,90,
93,1,0,0,0,91,89,1,0,0,0,91,92,1,0,0,0,92,95,1,0,0,0,93,91,1,0,0,0,94,96,
3,20,10,0,95,94,1,0,0,0,95,96,1,0,0,0,96,15,1,0,0,0,97,98,5,14,0,0,98,99,
5,3,0,0,99,100,3,26,13,0,100,101,5,4,0,0,101,105,5,5,0,0,102,104,3,6,3,0,
103,102,1,0,0,0,104,107,1,0,0,0,105,103,1,0,0,0,105,106,1,0,0,0,106,108,
1,0,0,0,107,105,1,0,0,0,108,109,5,6,0,0,109,17,1,0,0,0,110,111,5,15,0,0,
111,112,3,16,8,0,112,19,1,0,0,0,113,114,5,15,0,0,114,118,5,5,0,0,115,117,
3,6,3,0,116,115,1,0,0,0,117,120,1,0,0,0,118,116,1,0,0,0,118,119,1,0,0,0,
119,121,1,0,0,0,120,118,1,0,0,0,121,122,5,6,0,0,122,21,1,0,0,0,123,124,5,
16,0,0,124,125,5,3,0,0,125,126,3,26,13,0,126,127,5,4,0,0,127,131,5,5,0,0,
128,130,3,6,3,0,129,128,1,0,0,0,130,133,1,0,0,0,131,129,1,0,0,0,131,132,
1,0,0,0,132,134,1,0,0,0,133,131,1,0,0,0,134,135,5,6,0,0,135,23,1,0,0,0,136,
137,5,17,0,0,137,141,5,5,0,0,138,140,3,6,3,0,139,138,1,0,0,0,140,143,1,0,
0,0,141,139,1,0,0,0,141,142,1,0,0,0,142,144,1,0,0,0,143,141,1,0,0,0,144,
145,5,6,0,0,145,146,5,16,0,0,146,147,5,3,0,0,147,148,3,26,13,0,148,149,5,
4,0,0,149,25,1,0,0,0,150,151,6,13,-1,0,151,152,5,3,0,0,152,153,3,26,13,0,
153,154,5,4,0,0,154,162,1,0,0,0,155,162,7,1,0,0,156,162,5,25,0,0,157,162,
5,22,0,0,158,162,5,26,0,0,159,162,5,24,0,0,160,162,5,23,0,0,161,150,1,0,
0,0,161,155,1,0,0,0,161,156,1,0,0,0,161,157,1,0,0,0,161,158,1,0,0,0,161,
159,1,0,0,0,161,160,1,0,0,0,162,171,1,0,0,0,163,164,10,8,0,0,164,165,7,2,
0,0,165,170,3,26,13,9,166,167,10,7,0,0,167,168,7,1,0,0,168,170,3,26,13,8,
169,163,1,0,0,0,169,166,1,0,0,0,170,173,1,0,0,0,171,169,1,0,0,0,171,172,
1,0,0,0,172,27,1,0,0,0,173,171,1,0,0,0,17,31,36,40,47,62,68,74,76,91,95,
105,118,131,141,161,169,171];


const atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

const decisionsToDFA = atn.decisionToState.map( (ds, index) => new antlr4.dfa.DFA(ds, index) );

const sharedContextCache = new antlr4.atn.PredictionContextCache();

export default class CtoMSParser extends antlr4.Parser {

    static grammarFileName = "CtoMS.g4";
    static literalNames = [ null, "'\\n'", null, "'('", "')'", "'{'", "'}'", 
                            "'='", "'+'", "'-'", "'*'", "'/'", "'\"'", "';'", 
                            "'if'", "'else'", "'while'", "'do'", null, null, 
                            "'printf'", "'void main()'" ];
    static symbolicNames = [ null, null, "TYPE", "OPEN_PARENTH", "CLOSE_PARENTH", 
                             "OPEN_CURL", "CLOSE_CURL", "EQUALS", "PLUS", 
                             "MINUS", "MULT", "DIV", "DOUBLE_QUOTE", "SEMI", 
                             "IF_PR", "ELSE_PR", "WHILE_PR", "DO_PR", "COND_MAT", 
                             "COND_LOG", "PRINT", "MAIN", "CHAR", "INT", 
                             "FLOAT", "STRING", "ID", "INV_ID", "WS" ];
    static ruleNames = [ "file", "init", "logic", "expression", "declaration", 
                         "assign", "log", "chained_conditional", "conditional", 
                         "conditional__elif", "conditional__else", "loop__while", 
                         "loop__do_while", "value" ];

    constructor(input) {
        super(input);
        this._interp = new antlr4.atn.ParserATNSimulator(this, atn, decisionsToDFA, sharedContextCache);
        this.ruleNames = CtoMSParser.ruleNames;
        this.literalNames = CtoMSParser.literalNames;
        this.symbolicNames = CtoMSParser.symbolicNames;
    }

    sempred(localctx, ruleIndex, predIndex) {
    	switch(ruleIndex) {
    	case 13:
    	    		return this.value_sempred(localctx, predIndex);
        default:
            throw "No predicate with index:" + ruleIndex;
       }
    }

    value_sempred(localctx, predIndex) {
    	switch(predIndex) {
    		case 0:
    			return this.precpred(this._ctx, 8);
    		case 1:
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
	        this.state = 29; 
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        do {
	            this.state = 28;
	            this.init();
	            this.state = 31; 
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        } while(_la===21);
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
	        this.state = 33;
	        this.match(CtoMSParser.MAIN);
	        this.state = 34;
	        this.match(CtoMSParser.OPEN_CURL);
	        this.state = 36;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,1,this._ctx);
	        if(la_===1) {
	            this.state = 35;
	            this.match(CtoMSParser.T__0);

	        }
	        this.state = 38;
	        this.logic();
	        this.state = 40;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===1) {
	            this.state = 39;
	            this.match(CtoMSParser.T__0);
	        }

	        this.state = 42;
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
	        this.state = 47;
	        this._errHandler.sync(this);
	        var _alt = this._interp.adaptivePredict(this._input,3,this._ctx)
	        while(_alt!=1 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
	            if(_alt===1+1) {
	                this.state = 44;
	                this.expression(); 
	            }
	            this.state = 49;
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
	        this.state = 62;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 20:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 50;
	            this.log();
	            this.state = 51;
	            this.match(CtoMSParser.SEMI);
	            break;
	        case 2:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 53;
	            this.declaration();
	            this.state = 54;
	            this.match(CtoMSParser.SEMI);
	            break;
	        case 26:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 56;
	            this.assign();
	            this.state = 57;
	            this.match(CtoMSParser.SEMI);
	            break;
	        case 14:
	            this.enterOuterAlt(localctx, 4);
	            this.state = 59;
	            this.chained_conditional();
	            break;
	        case 16:
	            this.enterOuterAlt(localctx, 5);
	            this.state = 60;
	            this.loop__while();
	            break;
	        case 17:
	            this.enterOuterAlt(localctx, 6);
	            this.state = 61;
	            this.loop__do_while();
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
	        this.state = 76;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,7,this._ctx);
	        switch(la_) {
	        case 1:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 64;
	            this.match(CtoMSParser.TYPE);
	            this.state = 65;
	            this.match(CtoMSParser.ID);
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

	        case 2:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 70;
	            this.match(CtoMSParser.TYPE);
	            this.state = 71;
	            localctx.id = this._input.LT(1);
	            _la = this._input.LA(1);
	            if(!(_la===23 || _la===27)) {
	                localctx.id = this._errHandler.recoverInline(this);
	            }
	            else {
	            	this._errHandler.reportMatch(this);
	                this.consume();
	            }
	            this.state = 74;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(_la===7) {
	                this.state = 72;
	                this.match(CtoMSParser.EQUALS);
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
	    this.enterRule(localctx, 10, CtoMSParser.RULE_assign);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 78;
	        this.match(CtoMSParser.ID);
	        this.state = 79;
	        this.match(CtoMSParser.EQUALS);
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
	    this.enterRule(localctx, 12, CtoMSParser.RULE_log);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 82;
	        this.match(CtoMSParser.PRINT);
	        this.state = 83;
	        this.match(CtoMSParser.OPEN_PARENTH);
	        this.state = 84;
	        this.value(0);
	        this.state = 85;
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
	        this.state = 87;
	        this.conditional();
	        this.state = 91;
	        this._errHandler.sync(this);
	        var _alt = this._interp.adaptivePredict(this._input,8,this._ctx)
	        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
	            if(_alt===1) {
	                this.state = 88;
	                this.conditional__elif(); 
	            }
	            this.state = 93;
	            this._errHandler.sync(this);
	            _alt = this._interp.adaptivePredict(this._input,8,this._ctx);
	        }

	        this.state = 95;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===15) {
	            this.state = 94;
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
	        this.state = 97;
	        this.match(CtoMSParser.IF_PR);
	        this.state = 98;
	        this.match(CtoMSParser.OPEN_PARENTH);
	        this.state = 99;
	        this.value(0);
	        this.state = 100;
	        this.match(CtoMSParser.CLOSE_PARENTH);
	        this.state = 101;
	        this.match(CtoMSParser.OPEN_CURL);
	        this.state = 105;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while((((_la) & ~0x1f) === 0 && ((1 << _la) & 68370436) !== 0)) {
	            this.state = 102;
	            this.expression();
	            this.state = 107;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	        this.state = 108;
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
	        this.state = 110;
	        this.match(CtoMSParser.ELSE_PR);
	        this.state = 111;
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
	        this.state = 113;
	        this.match(CtoMSParser.ELSE_PR);
	        this.state = 114;
	        this.match(CtoMSParser.OPEN_CURL);
	        this.state = 118;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while((((_la) & ~0x1f) === 0 && ((1 << _la) & 68370436) !== 0)) {
	            this.state = 115;
	            this.expression();
	            this.state = 120;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	        this.state = 121;
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



	loop__while() {
	    let localctx = new Loop__whileContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 22, CtoMSParser.RULE_loop__while);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 123;
	        this.match(CtoMSParser.WHILE_PR);
	        this.state = 124;
	        this.match(CtoMSParser.OPEN_PARENTH);
	        this.state = 125;
	        this.value(0);
	        this.state = 126;
	        this.match(CtoMSParser.CLOSE_PARENTH);
	        this.state = 127;
	        this.match(CtoMSParser.OPEN_CURL);
	        this.state = 131;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while((((_la) & ~0x1f) === 0 && ((1 << _la) & 68370436) !== 0)) {
	            this.state = 128;
	            this.expression();
	            this.state = 133;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	        this.state = 134;
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



	loop__do_while() {
	    let localctx = new Loop__do_whileContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 24, CtoMSParser.RULE_loop__do_while);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 136;
	        this.match(CtoMSParser.DO_PR);
	        this.state = 137;
	        this.match(CtoMSParser.OPEN_CURL);
	        this.state = 141;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while((((_la) & ~0x1f) === 0 && ((1 << _la) & 68370436) !== 0)) {
	            this.state = 138;
	            this.expression();
	            this.state = 143;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	        this.state = 144;
	        this.match(CtoMSParser.CLOSE_CURL);
	        this.state = 145;
	        this.match(CtoMSParser.WHILE_PR);
	        this.state = 146;
	        this.match(CtoMSParser.OPEN_PARENTH);
	        this.state = 147;
	        this.value(0);
	        this.state = 148;
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
	    const _startState = 26;
	    this.enterRecursionRule(localctx, 26, CtoMSParser.RULE_value, _p);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 161;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 3:
	            this.state = 151;
	            this.match(CtoMSParser.OPEN_PARENTH);
	            this.state = 152;
	            this.value(0);
	            this.state = 153;
	            this.match(CtoMSParser.CLOSE_PARENTH);
	            break;
	        case 18:
	        case 19:
	            this.state = 155;
	            localctx.cond_sym = this._input.LT(1);
	            _la = this._input.LA(1);
	            if(!(_la===18 || _la===19)) {
	                localctx.cond_sym = this._errHandler.recoverInline(this);
	            }
	            else {
	            	this._errHandler.reportMatch(this);
	                this.consume();
	            }
	            break;
	        case 25:
	            this.state = 156;
	            this.match(CtoMSParser.STRING);
	            break;
	        case 22:
	            this.state = 157;
	            this.match(CtoMSParser.CHAR);
	            break;
	        case 26:
	            this.state = 158;
	            this.match(CtoMSParser.ID);
	            break;
	        case 24:
	            this.state = 159;
	            this.match(CtoMSParser.FLOAT);
	            break;
	        case 23:
	            this.state = 160;
	            this.match(CtoMSParser.INT);
	            break;
	        default:
	            throw new antlr4.error.NoViableAltException(this);
	        }
	        this._ctx.stop = this._input.LT(-1);
	        this.state = 171;
	        this._errHandler.sync(this);
	        var _alt = this._interp.adaptivePredict(this._input,16,this._ctx)
	        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
	            if(_alt===1) {
	                if(this._parseListeners!==null) {
	                    this.triggerExitRuleEvent();
	                }
	                _prevctx = localctx;
	                this.state = 169;
	                this._errHandler.sync(this);
	                var la_ = this._interp.adaptivePredict(this._input,15,this._ctx);
	                switch(la_) {
	                case 1:
	                    localctx = new ValueContext(this, _parentctx, _parentState);
	                    this.pushNewRecursionContext(localctx, _startState, CtoMSParser.RULE_value);
	                    this.state = 163;
	                    if (!( this.precpred(this._ctx, 8))) {
	                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 8)");
	                    }
	                    this.state = 164;
	                    localctx.operation = this._input.LT(1);
	                    _la = this._input.LA(1);
	                    if(!((((_la) & ~0x1f) === 0 && ((1 << _la) & 3840) !== 0))) {
	                        localctx.operation = this._errHandler.recoverInline(this);
	                    }
	                    else {
	                    	this._errHandler.reportMatch(this);
	                        this.consume();
	                    }
	                    this.state = 165;
	                    this.value(9);
	                    break;

	                case 2:
	                    localctx = new ValueContext(this, _parentctx, _parentState);
	                    this.pushNewRecursionContext(localctx, _startState, CtoMSParser.RULE_value);
	                    this.state = 166;
	                    if (!( this.precpred(this._ctx, 7))) {
	                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 7)");
	                    }
	                    this.state = 167;
	                    localctx.cond_sym = this._input.LT(1);
	                    _la = this._input.LA(1);
	                    if(!(_la===18 || _la===19)) {
	                        localctx.cond_sym = this._errHandler.recoverInline(this);
	                    }
	                    else {
	                    	this._errHandler.reportMatch(this);
	                        this.consume();
	                    }
	                    this.state = 168;
	                    this.value(8);
	                    break;

	                } 
	            }
	            this.state = 173;
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
CtoMSParser.WHILE_PR = 16;
CtoMSParser.DO_PR = 17;
CtoMSParser.COND_MAT = 18;
CtoMSParser.COND_LOG = 19;
CtoMSParser.PRINT = 20;
CtoMSParser.MAIN = 21;
CtoMSParser.CHAR = 22;
CtoMSParser.INT = 23;
CtoMSParser.FLOAT = 24;
CtoMSParser.STRING = 25;
CtoMSParser.ID = 26;
CtoMSParser.INV_ID = 27;
CtoMSParser.WS = 28;

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
CtoMSParser.RULE_loop__while = 11;
CtoMSParser.RULE_loop__do_while = 12;
CtoMSParser.RULE_value = 13;

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

	loop__while() {
	    return this.getTypedRuleContext(Loop__whileContext,0);
	};

	loop__do_while() {
	    return this.getTypedRuleContext(Loop__do_whileContext,0);
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
        this.ruleIndex = CtoMSParser.RULE_loop__while;
    }

	WHILE_PR() {
	    return this.getToken(CtoMSParser.WHILE_PR, 0);
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
        this.ruleIndex = CtoMSParser.RULE_loop__do_while;
    }

	DO_PR() {
	    return this.getToken(CtoMSParser.DO_PR, 0);
	};

	OPEN_CURL() {
	    return this.getToken(CtoMSParser.OPEN_CURL, 0);
	};

	CLOSE_CURL() {
	    return this.getToken(CtoMSParser.CLOSE_CURL, 0);
	};

	WHILE_PR() {
	    return this.getToken(CtoMSParser.WHILE_PR, 0);
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
	        return visitor.visitLoop__do_while(this);
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
CtoMSParser.Loop__whileContext = Loop__whileContext; 
CtoMSParser.Loop__do_whileContext = Loop__do_whileContext; 
CtoMSParser.ValueContext = ValueContext; 
