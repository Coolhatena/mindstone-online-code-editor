// Generated from ./grammar/CtoMS.g4 by ANTLR 4.13.1
// jshint ignore: start
import antlr4 from 'antlr4';
import CtoMSVisitor from './CtoMSVisitor.js';

const serializedATN = [4,1,29,179,2,0,7,0,2,1,7,1,2,2,7,2,2,3,7,3,2,4,7,
4,2,5,7,5,2,6,7,6,2,7,7,7,2,8,7,8,2,9,7,9,2,10,7,10,2,11,7,11,2,12,7,12,
2,13,7,13,2,14,7,14,1,0,4,0,32,8,0,11,0,12,0,33,1,1,1,1,1,1,3,1,39,8,1,1,
1,1,1,3,1,43,8,1,1,1,1,1,1,2,5,2,48,8,2,10,2,12,2,51,9,2,1,3,1,3,1,3,1,3,
1,3,1,3,1,3,1,3,1,3,1,3,1,3,1,3,1,3,1,3,1,3,3,3,68,8,3,1,4,1,4,1,4,1,4,3,
4,74,8,4,1,5,1,5,1,5,1,5,1,6,1,6,1,6,1,6,1,6,3,6,85,8,6,1,7,1,7,1,7,1,7,
1,7,1,8,1,8,5,8,94,8,8,10,8,12,8,97,9,8,1,8,3,8,100,8,8,1,9,1,9,1,9,1,9,
1,9,1,9,5,9,108,8,9,10,9,12,9,111,9,9,1,9,1,9,1,10,1,10,1,10,1,11,1,11,1,
11,5,11,121,8,11,10,11,12,11,124,9,11,1,11,1,11,1,12,1,12,1,12,1,12,1,12,
1,12,5,12,134,8,12,10,12,12,12,137,9,12,1,12,1,12,1,13,1,13,1,13,5,13,144,
8,13,10,13,12,13,147,9,13,1,13,1,13,1,13,1,13,1,13,1,13,1,14,1,14,1,14,1,
14,1,14,1,14,1,14,1,14,1,14,1,14,1,14,3,14,166,8,14,1,14,1,14,1,14,1,14,
1,14,1,14,5,14,174,8,14,10,14,12,14,177,9,14,1,14,1,49,1,28,15,0,2,4,6,8,
10,12,14,16,18,20,22,24,26,28,0,3,1,0,7,8,1,0,20,21,1,0,9,13,189,0,31,1,
0,0,0,2,35,1,0,0,0,4,49,1,0,0,0,6,67,1,0,0,0,8,69,1,0,0,0,10,75,1,0,0,0,
12,79,1,0,0,0,14,86,1,0,0,0,16,91,1,0,0,0,18,101,1,0,0,0,20,114,1,0,0,0,
22,117,1,0,0,0,24,127,1,0,0,0,26,140,1,0,0,0,28,165,1,0,0,0,30,32,3,2,1,
0,31,30,1,0,0,0,32,33,1,0,0,0,33,31,1,0,0,0,33,34,1,0,0,0,34,1,1,0,0,0,35,
36,5,23,0,0,36,38,5,5,0,0,37,39,5,1,0,0,38,37,1,0,0,0,38,39,1,0,0,0,39,40,
1,0,0,0,40,42,3,4,2,0,41,43,5,1,0,0,42,41,1,0,0,0,42,43,1,0,0,0,43,44,1,
0,0,0,44,45,5,6,0,0,45,3,1,0,0,0,46,48,3,6,3,0,47,46,1,0,0,0,48,51,1,0,0,
0,49,50,1,0,0,0,49,47,1,0,0,0,50,5,1,0,0,0,51,49,1,0,0,0,52,53,3,14,7,0,
53,54,5,15,0,0,54,68,1,0,0,0,55,56,3,8,4,0,56,57,5,15,0,0,57,68,1,0,0,0,
58,59,3,10,5,0,59,60,5,15,0,0,60,68,1,0,0,0,61,62,3,12,6,0,62,63,5,15,0,
0,63,68,1,0,0,0,64,68,3,16,8,0,65,68,3,24,12,0,66,68,3,26,13,0,67,52,1,0,
0,0,67,55,1,0,0,0,67,58,1,0,0,0,67,61,1,0,0,0,67,64,1,0,0,0,67,65,1,0,0,
0,67,66,1,0,0,0,68,7,1,0,0,0,69,70,5,2,0,0,70,73,5,28,0,0,71,72,5,7,0,0,
72,74,3,28,14,0,73,71,1,0,0,0,73,74,1,0,0,0,74,9,1,0,0,0,75,76,5,28,0,0,
76,77,7,0,0,0,77,78,3,28,14,0,78,11,1,0,0,0,79,84,5,28,0,0,80,81,5,9,0,0,
81,85,5,9,0,0,82,83,5,10,0,0,83,85,5,10,0,0,84,80,1,0,0,0,84,82,1,0,0,0,
85,13,1,0,0,0,86,87,5,22,0,0,87,88,5,3,0,0,88,89,3,28,14,0,89,90,5,4,0,0,
90,15,1,0,0,0,91,95,3,18,9,0,92,94,3,20,10,0,93,92,1,0,0,0,94,97,1,0,0,0,
95,93,1,0,0,0,95,96,1,0,0,0,96,99,1,0,0,0,97,95,1,0,0,0,98,100,3,22,11,0,
99,98,1,0,0,0,99,100,1,0,0,0,100,17,1,0,0,0,101,102,5,16,0,0,102,103,5,3,
0,0,103,104,3,28,14,0,104,105,5,4,0,0,105,109,5,5,0,0,106,108,3,6,3,0,107,
106,1,0,0,0,108,111,1,0,0,0,109,107,1,0,0,0,109,110,1,0,0,0,110,112,1,0,
0,0,111,109,1,0,0,0,112,113,5,6,0,0,113,19,1,0,0,0,114,115,5,17,0,0,115,
116,3,18,9,0,116,21,1,0,0,0,117,118,5,17,0,0,118,122,5,5,0,0,119,121,3,6,
3,0,120,119,1,0,0,0,121,124,1,0,0,0,122,120,1,0,0,0,122,123,1,0,0,0,123,
125,1,0,0,0,124,122,1,0,0,0,125,126,5,6,0,0,126,23,1,0,0,0,127,128,5,18,
0,0,128,129,5,3,0,0,129,130,3,28,14,0,130,131,5,4,0,0,131,135,5,5,0,0,132,
134,3,6,3,0,133,132,1,0,0,0,134,137,1,0,0,0,135,133,1,0,0,0,135,136,1,0,
0,0,136,138,1,0,0,0,137,135,1,0,0,0,138,139,5,6,0,0,139,25,1,0,0,0,140,141,
5,19,0,0,141,145,5,5,0,0,142,144,3,6,3,0,143,142,1,0,0,0,144,147,1,0,0,0,
145,143,1,0,0,0,145,146,1,0,0,0,146,148,1,0,0,0,147,145,1,0,0,0,148,149,
5,6,0,0,149,150,5,18,0,0,150,151,5,3,0,0,151,152,3,28,14,0,152,153,5,4,0,
0,153,27,1,0,0,0,154,155,6,14,-1,0,155,156,5,3,0,0,156,157,3,28,14,0,157,
158,5,4,0,0,158,166,1,0,0,0,159,166,7,1,0,0,160,166,5,27,0,0,161,166,5,24,
0,0,162,166,5,28,0,0,163,166,5,26,0,0,164,166,5,25,0,0,165,154,1,0,0,0,165,
159,1,0,0,0,165,160,1,0,0,0,165,161,1,0,0,0,165,162,1,0,0,0,165,163,1,0,
0,0,165,164,1,0,0,0,166,175,1,0,0,0,167,168,10,8,0,0,168,169,7,2,0,0,169,
174,3,28,14,9,170,171,10,7,0,0,171,172,7,1,0,0,172,174,3,28,14,8,173,167,
1,0,0,0,173,170,1,0,0,0,174,177,1,0,0,0,175,173,1,0,0,0,175,176,1,0,0,0,
176,29,1,0,0,0,177,175,1,0,0,0,16,33,38,42,49,67,73,84,95,99,109,122,135,
145,165,173,175];


const atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

const decisionsToDFA = atn.decisionToState.map( (ds, index) => new antlr4.dfa.DFA(ds, index) );

const sharedContextCache = new antlr4.atn.PredictionContextCache();

export default class CtoMSParser extends antlr4.Parser {

    static grammarFileName = "CtoMS.g4";
    static literalNames = [ null, "'\\n'", null, "'('", "')'", "'{'", "'}'", 
                            "'='", null, "'+'", "'-'", "'*'", "'/'", "'%'", 
                            "'\"'", "';'", "'if'", "'else'", "'while'", 
                            "'do'", null, null, "'printf'", "'void main()'" ];
    static symbolicNames = [ null, null, "TYPE", "OPEN_PARENTH", "CLOSE_PARENTH", 
                             "OPEN_CURL", "CLOSE_CURL", "EQUALS", "MATH_EQUALS", 
                             "PLUS", "SUB", "MULT", "DIV", "MOD", "DOUBLE_QUOTE", 
                             "SEMI", "IF_PR", "ELSE_PR", "WHILE_PR", "DO_PR", 
                             "COND_MAT", "COND_LOG", "PRINT", "MAIN", "CHAR", 
                             "INT", "FLOAT", "STRING", "ID", "WS" ];
    static ruleNames = [ "file", "init", "logic", "expression", "declaration", 
                         "assign", "increment", "log", "chained_conditional", 
                         "conditional", "conditional__elif", "conditional__else", 
                         "loop__while", "loop__do_while", "value" ];

    constructor(input) {
        super(input);
        this._interp = new antlr4.atn.ParserATNSimulator(this, atn, decisionsToDFA, sharedContextCache);
        this.ruleNames = CtoMSParser.ruleNames;
        this.literalNames = CtoMSParser.literalNames;
        this.symbolicNames = CtoMSParser.symbolicNames;
    }

    sempred(localctx, ruleIndex, predIndex) {
    	switch(ruleIndex) {
    	case 14:
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
	        this.state = 31; 
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        do {
	            this.state = 30;
	            this.init();
	            this.state = 33; 
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        } while(_la===23);
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
	        this.state = 35;
	        this.match(CtoMSParser.MAIN);
	        this.state = 36;
	        this.match(CtoMSParser.OPEN_CURL);
	        this.state = 38;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,1,this._ctx);
	        if(la_===1) {
	            this.state = 37;
	            this.match(CtoMSParser.T__0);

	        }
	        this.state = 40;
	        this.logic();
	        this.state = 42;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===1) {
	            this.state = 41;
	            this.match(CtoMSParser.T__0);
	        }

	        this.state = 44;
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
	    this.enterRule(localctx, 6, CtoMSParser.RULE_expression);
	    try {
	        this.state = 67;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,4,this._ctx);
	        switch(la_) {
	        case 1:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 52;
	            this.log();
	            this.state = 53;
	            this.match(CtoMSParser.SEMI);
	            break;

	        case 2:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 55;
	            this.declaration();
	            this.state = 56;
	            this.match(CtoMSParser.SEMI);
	            break;

	        case 3:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 58;
	            this.assign();
	            this.state = 59;
	            this.match(CtoMSParser.SEMI);
	            break;

	        case 4:
	            this.enterOuterAlt(localctx, 4);
	            this.state = 61;
	            this.increment();
	            this.state = 62;
	            this.match(CtoMSParser.SEMI);
	            break;

	        case 5:
	            this.enterOuterAlt(localctx, 5);
	            this.state = 64;
	            this.chained_conditional();
	            break;

	        case 6:
	            this.enterOuterAlt(localctx, 6);
	            this.state = 65;
	            this.loop__while();
	            break;

	        case 7:
	            this.enterOuterAlt(localctx, 7);
	            this.state = 66;
	            this.loop__do_while();
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
	    this.enterRule(localctx, 8, CtoMSParser.RULE_declaration);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 69;
	        this.match(CtoMSParser.TYPE);
	        this.state = 70;
	        this.match(CtoMSParser.ID);
	        this.state = 73;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===7) {
	            this.state = 71;
	            this.match(CtoMSParser.EQUALS);
	            this.state = 72;
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
	    this.enterRule(localctx, 10, CtoMSParser.RULE_assign);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 75;
	        this.match(CtoMSParser.ID);
	        this.state = 76;
	        localctx.eq = this._input.LT(1);
	        _la = this._input.LA(1);
	        if(!(_la===7 || _la===8)) {
	            localctx.eq = this._errHandler.recoverInline(this);
	        }
	        else {
	        	this._errHandler.reportMatch(this);
	            this.consume();
	        }
	        this.state = 77;
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



	increment() {
	    let localctx = new IncrementContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 12, CtoMSParser.RULE_increment);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 79;
	        this.match(CtoMSParser.ID);
	        this.state = 84;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 9:
	            this.state = 80;
	            this.match(CtoMSParser.PLUS);
	            this.state = 81;
	            this.match(CtoMSParser.PLUS);
	            break;
	        case 10:
	            this.state = 82;
	            this.match(CtoMSParser.SUB);
	            this.state = 83;
	            this.match(CtoMSParser.SUB);
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



	log() {
	    let localctx = new LogContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 14, CtoMSParser.RULE_log);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 86;
	        this.match(CtoMSParser.PRINT);
	        this.state = 87;
	        this.match(CtoMSParser.OPEN_PARENTH);
	        this.state = 88;
	        this.value(0);
	        this.state = 89;
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
	    this.enterRule(localctx, 16, CtoMSParser.RULE_chained_conditional);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 91;
	        this.conditional();
	        this.state = 95;
	        this._errHandler.sync(this);
	        var _alt = this._interp.adaptivePredict(this._input,7,this._ctx)
	        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
	            if(_alt===1) {
	                this.state = 92;
	                this.conditional__elif(); 
	            }
	            this.state = 97;
	            this._errHandler.sync(this);
	            _alt = this._interp.adaptivePredict(this._input,7,this._ctx);
	        }

	        this.state = 99;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===17) {
	            this.state = 98;
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
	    this.enterRule(localctx, 18, CtoMSParser.RULE_conditional);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 101;
	        this.match(CtoMSParser.IF_PR);
	        this.state = 102;
	        this.match(CtoMSParser.OPEN_PARENTH);
	        this.state = 103;
	        this.value(0);
	        this.state = 104;
	        this.match(CtoMSParser.CLOSE_PARENTH);
	        this.state = 105;
	        this.match(CtoMSParser.OPEN_CURL);
	        this.state = 109;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while((((_la) & ~0x1f) === 0 && ((1 << _la) & 273481732) !== 0)) {
	            this.state = 106;
	            this.expression();
	            this.state = 111;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	        this.state = 112;
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
	    this.enterRule(localctx, 20, CtoMSParser.RULE_conditional__elif);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 114;
	        this.match(CtoMSParser.ELSE_PR);
	        this.state = 115;
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
	    this.enterRule(localctx, 22, CtoMSParser.RULE_conditional__else);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 117;
	        this.match(CtoMSParser.ELSE_PR);
	        this.state = 118;
	        this.match(CtoMSParser.OPEN_CURL);
	        this.state = 122;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while((((_la) & ~0x1f) === 0 && ((1 << _la) & 273481732) !== 0)) {
	            this.state = 119;
	            this.expression();
	            this.state = 124;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	        this.state = 125;
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
	    this.enterRule(localctx, 24, CtoMSParser.RULE_loop__while);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 127;
	        this.match(CtoMSParser.WHILE_PR);
	        this.state = 128;
	        this.match(CtoMSParser.OPEN_PARENTH);
	        this.state = 129;
	        this.value(0);
	        this.state = 130;
	        this.match(CtoMSParser.CLOSE_PARENTH);
	        this.state = 131;
	        this.match(CtoMSParser.OPEN_CURL);
	        this.state = 135;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while((((_la) & ~0x1f) === 0 && ((1 << _la) & 273481732) !== 0)) {
	            this.state = 132;
	            this.expression();
	            this.state = 137;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	        this.state = 138;
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
	    this.enterRule(localctx, 26, CtoMSParser.RULE_loop__do_while);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 140;
	        this.match(CtoMSParser.DO_PR);
	        this.state = 141;
	        this.match(CtoMSParser.OPEN_CURL);
	        this.state = 145;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while((((_la) & ~0x1f) === 0 && ((1 << _la) & 273481732) !== 0)) {
	            this.state = 142;
	            this.expression();
	            this.state = 147;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	        this.state = 148;
	        this.match(CtoMSParser.CLOSE_CURL);
	        this.state = 149;
	        this.match(CtoMSParser.WHILE_PR);
	        this.state = 150;
	        this.match(CtoMSParser.OPEN_PARENTH);
	        this.state = 151;
	        this.value(0);
	        this.state = 152;
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
	    const _startState = 28;
	    this.enterRecursionRule(localctx, 28, CtoMSParser.RULE_value, _p);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 165;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 3:
	            this.state = 155;
	            this.match(CtoMSParser.OPEN_PARENTH);
	            this.state = 156;
	            this.value(0);
	            this.state = 157;
	            this.match(CtoMSParser.CLOSE_PARENTH);
	            break;
	        case 20:
	        case 21:
	            this.state = 159;
	            localctx.cond_sym = this._input.LT(1);
	            _la = this._input.LA(1);
	            if(!(_la===20 || _la===21)) {
	                localctx.cond_sym = this._errHandler.recoverInline(this);
	            }
	            else {
	            	this._errHandler.reportMatch(this);
	                this.consume();
	            }
	            break;
	        case 27:
	            this.state = 160;
	            this.match(CtoMSParser.STRING);
	            break;
	        case 24:
	            this.state = 161;
	            this.match(CtoMSParser.CHAR);
	            break;
	        case 28:
	            this.state = 162;
	            this.match(CtoMSParser.ID);
	            break;
	        case 26:
	            this.state = 163;
	            this.match(CtoMSParser.FLOAT);
	            break;
	        case 25:
	            this.state = 164;
	            this.match(CtoMSParser.INT);
	            break;
	        default:
	            throw new antlr4.error.NoViableAltException(this);
	        }
	        this._ctx.stop = this._input.LT(-1);
	        this.state = 175;
	        this._errHandler.sync(this);
	        var _alt = this._interp.adaptivePredict(this._input,15,this._ctx)
	        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
	            if(_alt===1) {
	                if(this._parseListeners!==null) {
	                    this.triggerExitRuleEvent();
	                }
	                _prevctx = localctx;
	                this.state = 173;
	                this._errHandler.sync(this);
	                var la_ = this._interp.adaptivePredict(this._input,14,this._ctx);
	                switch(la_) {
	                case 1:
	                    localctx = new ValueContext(this, _parentctx, _parentState);
	                    this.pushNewRecursionContext(localctx, _startState, CtoMSParser.RULE_value);
	                    this.state = 167;
	                    if (!( this.precpred(this._ctx, 8))) {
	                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 8)");
	                    }
	                    this.state = 168;
	                    localctx.operation = this._input.LT(1);
	                    _la = this._input.LA(1);
	                    if(!((((_la) & ~0x1f) === 0 && ((1 << _la) & 15872) !== 0))) {
	                        localctx.operation = this._errHandler.recoverInline(this);
	                    }
	                    else {
	                    	this._errHandler.reportMatch(this);
	                        this.consume();
	                    }
	                    this.state = 169;
	                    this.value(9);
	                    break;

	                case 2:
	                    localctx = new ValueContext(this, _parentctx, _parentState);
	                    this.pushNewRecursionContext(localctx, _startState, CtoMSParser.RULE_value);
	                    this.state = 170;
	                    if (!( this.precpred(this._ctx, 7))) {
	                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 7)");
	                    }
	                    this.state = 171;
	                    localctx.cond_sym = this._input.LT(1);
	                    _la = this._input.LA(1);
	                    if(!(_la===20 || _la===21)) {
	                        localctx.cond_sym = this._errHandler.recoverInline(this);
	                    }
	                    else {
	                    	this._errHandler.reportMatch(this);
	                        this.consume();
	                    }
	                    this.state = 172;
	                    this.value(8);
	                    break;

	                } 
	            }
	            this.state = 177;
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


}

CtoMSParser.EOF = antlr4.Token.EOF;
CtoMSParser.T__0 = 1;
CtoMSParser.TYPE = 2;
CtoMSParser.OPEN_PARENTH = 3;
CtoMSParser.CLOSE_PARENTH = 4;
CtoMSParser.OPEN_CURL = 5;
CtoMSParser.CLOSE_CURL = 6;
CtoMSParser.EQUALS = 7;
CtoMSParser.MATH_EQUALS = 8;
CtoMSParser.PLUS = 9;
CtoMSParser.SUB = 10;
CtoMSParser.MULT = 11;
CtoMSParser.DIV = 12;
CtoMSParser.MOD = 13;
CtoMSParser.DOUBLE_QUOTE = 14;
CtoMSParser.SEMI = 15;
CtoMSParser.IF_PR = 16;
CtoMSParser.ELSE_PR = 17;
CtoMSParser.WHILE_PR = 18;
CtoMSParser.DO_PR = 19;
CtoMSParser.COND_MAT = 20;
CtoMSParser.COND_LOG = 21;
CtoMSParser.PRINT = 22;
CtoMSParser.MAIN = 23;
CtoMSParser.CHAR = 24;
CtoMSParser.INT = 25;
CtoMSParser.FLOAT = 26;
CtoMSParser.STRING = 27;
CtoMSParser.ID = 28;
CtoMSParser.WS = 29;

CtoMSParser.RULE_file = 0;
CtoMSParser.RULE_init = 1;
CtoMSParser.RULE_logic = 2;
CtoMSParser.RULE_expression = 3;
CtoMSParser.RULE_declaration = 4;
CtoMSParser.RULE_assign = 5;
CtoMSParser.RULE_increment = 6;
CtoMSParser.RULE_log = 7;
CtoMSParser.RULE_chained_conditional = 8;
CtoMSParser.RULE_conditional = 9;
CtoMSParser.RULE_conditional__elif = 10;
CtoMSParser.RULE_conditional__else = 11;
CtoMSParser.RULE_loop__while = 12;
CtoMSParser.RULE_loop__do_while = 13;
CtoMSParser.RULE_value = 14;

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

	increment() {
	    return this.getTypedRuleContext(IncrementContext,0);
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
        this.eq = null;
    }

	ID() {
	    return this.getToken(CtoMSParser.ID, 0);
	};

	value() {
	    return this.getTypedRuleContext(ValueContext,0);
	};

	EQUALS() {
	    return this.getToken(CtoMSParser.EQUALS, 0);
	};

	MATH_EQUALS() {
	    return this.getToken(CtoMSParser.MATH_EQUALS, 0);
	};

	accept(visitor) {
	    if ( visitor instanceof CtoMSVisitor ) {
	        return visitor.visitAssign(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



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
        this.ruleIndex = CtoMSParser.RULE_increment;
    }

	ID() {
	    return this.getToken(CtoMSParser.ID, 0);
	};

	PLUS = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(CtoMSParser.PLUS);
	    } else {
	        return this.getToken(CtoMSParser.PLUS, i);
	    }
	};


	SUB = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(CtoMSParser.SUB);
	    } else {
	        return this.getToken(CtoMSParser.SUB, i);
	    }
	};


	accept(visitor) {
	    if ( visitor instanceof CtoMSVisitor ) {
	        return visitor.visitIncrement(this);
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

	SUB() {
	    return this.getToken(CtoMSParser.SUB, 0);
	};

	MOD() {
	    return this.getToken(CtoMSParser.MOD, 0);
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
CtoMSParser.IncrementContext = IncrementContext; 
CtoMSParser.LogContext = LogContext; 
CtoMSParser.Chained_conditionalContext = Chained_conditionalContext; 
CtoMSParser.ConditionalContext = ConditionalContext; 
CtoMSParser.Conditional__elifContext = Conditional__elifContext; 
CtoMSParser.Conditional__elseContext = Conditional__elseContext; 
CtoMSParser.Loop__whileContext = Loop__whileContext; 
CtoMSParser.Loop__do_whileContext = Loop__do_whileContext; 
CtoMSParser.ValueContext = ValueContext; 
