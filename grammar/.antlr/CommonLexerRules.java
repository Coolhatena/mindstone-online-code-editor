// Generated from /home/coolhatena/Documents/Proyectos/automatas2/online-code-editor/grammar/CommonLexerRules.g4 by ANTLR 4.13.1
import org.antlr.v4.runtime.Lexer;
import org.antlr.v4.runtime.CharStream;
import org.antlr.v4.runtime.Token;
import org.antlr.v4.runtime.TokenStream;
import org.antlr.v4.runtime.*;
import org.antlr.v4.runtime.atn.*;
import org.antlr.v4.runtime.dfa.DFA;
import org.antlr.v4.runtime.misc.*;

@SuppressWarnings({"all", "warnings", "unchecked", "unused", "cast", "CheckReturnValue", "this-escape"})
public class CommonLexerRules extends Lexer {
	static { RuntimeMetaData.checkVersion("4.13.1", RuntimeMetaData.VERSION); }

	protected static final DFA[] _decisionToDFA;
	protected static final PredictionContextCache _sharedContextCache =
		new PredictionContextCache();
	public static final int
		EQUALS=1, PLUS=2, MINUS=3, INT=4, FLOAT=5, CHAR=6, SEMI=7, ID=8, INV_ID=9, 
		NEWLINE=10, WS=11;
	public static String[] channelNames = {
		"DEFAULT_TOKEN_CHANNEL", "HIDDEN"
	};

	public static String[] modeNames = {
		"DEFAULT_MODE"
	};

	private static String[] makeRuleNames() {
		return new String[] {
			"EQUALS", "PLUS", "MINUS", "INT", "FLOAT", "CHAR", "SEMI", "ID", "INV_ID", 
			"NEWLINE", "WS"
		};
	}
	public static final String[] ruleNames = makeRuleNames();

	private static String[] makeLiteralNames() {
		return new String[] {
			null, "'='", "'+'", "'-'", null, null, null, "'!'"
		};
	}
	private static final String[] _LITERAL_NAMES = makeLiteralNames();
	private static String[] makeSymbolicNames() {
		return new String[] {
			null, "EQUALS", "PLUS", "MINUS", "INT", "FLOAT", "CHAR", "SEMI", "ID", 
			"INV_ID", "NEWLINE", "WS"
		};
	}
	private static final String[] _SYMBOLIC_NAMES = makeSymbolicNames();
	public static final Vocabulary VOCABULARY = new VocabularyImpl(_LITERAL_NAMES, _SYMBOLIC_NAMES);

	/**
	 * @deprecated Use {@link #VOCABULARY} instead.
	 */
	@Deprecated
	public static final String[] tokenNames;
	static {
		tokenNames = new String[_SYMBOLIC_NAMES.length];
		for (int i = 0; i < tokenNames.length; i++) {
			tokenNames[i] = VOCABULARY.getLiteralName(i);
			if (tokenNames[i] == null) {
				tokenNames[i] = VOCABULARY.getSymbolicName(i);
			}

			if (tokenNames[i] == null) {
				tokenNames[i] = "<INVALID>";
			}
		}
	}

	@Override
	@Deprecated
	public String[] getTokenNames() {
		return tokenNames;
	}

	@Override

	public Vocabulary getVocabulary() {
		return VOCABULARY;
	}


	public CommonLexerRules(CharStream input) {
		super(input);
		_interp = new LexerATNSimulator(this,_ATN,_decisionToDFA,_sharedContextCache);
	}

	@Override
	public String getGrammarFileName() { return "CommonLexerRules.g4"; }

	@Override
	public String[] getRuleNames() { return ruleNames; }

	@Override
	public String getSerializedATN() { return _serializedATN; }

	@Override
	public String[] getChannelNames() { return channelNames; }

	@Override
	public String[] getModeNames() { return modeNames; }

	@Override
	public ATN getATN() { return _ATN; }

	public static final String _serializedATN =
		"\u0004\u0000\u000bG\u0006\uffff\uffff\u0002\u0000\u0007\u0000\u0002\u0001"+
		"\u0007\u0001\u0002\u0002\u0007\u0002\u0002\u0003\u0007\u0003\u0002\u0004"+
		"\u0007\u0004\u0002\u0005\u0007\u0005\u0002\u0006\u0007\u0006\u0002\u0007"+
		"\u0007\u0007\u0002\b\u0007\b\u0002\t\u0007\t\u0002\n\u0007\n\u0001\u0000"+
		"\u0001\u0000\u0001\u0001\u0001\u0001\u0001\u0002\u0001\u0002\u0001\u0003"+
		"\u0004\u0003\u001f\b\u0003\u000b\u0003\f\u0003 \u0001\u0004\u0004\u0004"+
		"$\b\u0004\u000b\u0004\f\u0004%\u0001\u0004\u0001\u0004\u0004\u0004*\b"+
		"\u0004\u000b\u0004\f\u0004+\u0001\u0005\u0001\u0005\u0001\u0006\u0001"+
		"\u0006\u0001\u0007\u0004\u00073\b\u0007\u000b\u0007\f\u00074\u0001\b\u0004"+
		"\b8\b\b\u000b\b\f\b9\u0001\t\u0003\t=\b\t\u0001\t\u0001\t\u0001\n\u0004"+
		"\nB\b\n\u000b\n\f\nC\u0001\n\u0001\n\u0000\u0000\u000b\u0001\u0001\u0003"+
		"\u0002\u0005\u0003\u0007\u0004\t\u0005\u000b\u0006\r\u0007\u000f\b\u0011"+
		"\t\u0013\n\u0015\u000b\u0001\u0000\u0005\u0001\u000009\u0001\u0000..\u0002"+
		"\u0000AZaz\u0005\u0000++--09AZaz\u0003\u0000\t\n\r\r  M\u0000\u0001\u0001"+
		"\u0000\u0000\u0000\u0000\u0003\u0001\u0000\u0000\u0000\u0000\u0005\u0001"+
		"\u0000\u0000\u0000\u0000\u0007\u0001\u0000\u0000\u0000\u0000\t\u0001\u0000"+
		"\u0000\u0000\u0000\u000b\u0001\u0000\u0000\u0000\u0000\r\u0001\u0000\u0000"+
		"\u0000\u0000\u000f\u0001\u0000\u0000\u0000\u0000\u0011\u0001\u0000\u0000"+
		"\u0000\u0000\u0013\u0001\u0000\u0000\u0000\u0000\u0015\u0001\u0000\u0000"+
		"\u0000\u0001\u0017\u0001\u0000\u0000\u0000\u0003\u0019\u0001\u0000\u0000"+
		"\u0000\u0005\u001b\u0001\u0000\u0000\u0000\u0007\u001e\u0001\u0000\u0000"+
		"\u0000\t#\u0001\u0000\u0000\u0000\u000b-\u0001\u0000\u0000\u0000\r/\u0001"+
		"\u0000\u0000\u0000\u000f2\u0001\u0000\u0000\u0000\u00117\u0001\u0000\u0000"+
		"\u0000\u0013<\u0001\u0000\u0000\u0000\u0015A\u0001\u0000\u0000\u0000\u0017"+
		"\u0018\u0005=\u0000\u0000\u0018\u0002\u0001\u0000\u0000\u0000\u0019\u001a"+
		"\u0005+\u0000\u0000\u001a\u0004\u0001\u0000\u0000\u0000\u001b\u001c\u0005"+
		"-\u0000\u0000\u001c\u0006\u0001\u0000\u0000\u0000\u001d\u001f\u0007\u0000"+
		"\u0000\u0000\u001e\u001d\u0001\u0000\u0000\u0000\u001f \u0001\u0000\u0000"+
		"\u0000 \u001e\u0001\u0000\u0000\u0000 !\u0001\u0000\u0000\u0000!\b\u0001"+
		"\u0000\u0000\u0000\"$\u0007\u0000\u0000\u0000#\"\u0001\u0000\u0000\u0000"+
		"$%\u0001\u0000\u0000\u0000%#\u0001\u0000\u0000\u0000%&\u0001\u0000\u0000"+
		"\u0000&\'\u0001\u0000\u0000\u0000\')\u0007\u0001\u0000\u0000(*\u0007\u0000"+
		"\u0000\u0000)(\u0001\u0000\u0000\u0000*+\u0001\u0000\u0000\u0000+)\u0001"+
		"\u0000\u0000\u0000+,\u0001\u0000\u0000\u0000,\n\u0001\u0000\u0000\u0000"+
		"-.\u0007\u0002\u0000\u0000.\f\u0001\u0000\u0000\u0000/0\u0005!\u0000\u0000"+
		"0\u000e\u0001\u0000\u0000\u000013\u0007\u0002\u0000\u000021\u0001\u0000"+
		"\u0000\u000034\u0001\u0000\u0000\u000042\u0001\u0000\u0000\u000045\u0001"+
		"\u0000\u0000\u00005\u0010\u0001\u0000\u0000\u000068\u0007\u0003\u0000"+
		"\u000076\u0001\u0000\u0000\u000089\u0001\u0000\u0000\u000097\u0001\u0000"+
		"\u0000\u00009:\u0001\u0000\u0000\u0000:\u0012\u0001\u0000\u0000\u0000"+
		";=\u0005\r\u0000\u0000<;\u0001\u0000\u0000\u0000<=\u0001\u0000\u0000\u0000"+
		"=>\u0001\u0000\u0000\u0000>?\u0005\n\u0000\u0000?\u0014\u0001\u0000\u0000"+
		"\u0000@B\u0007\u0004\u0000\u0000A@\u0001\u0000\u0000\u0000BC\u0001\u0000"+
		"\u0000\u0000CA\u0001\u0000\u0000\u0000CD\u0001\u0000\u0000\u0000DE\u0001"+
		"\u0000\u0000\u0000EF\u0006\n\u0000\u0000F\u0016\u0001\u0000\u0000\u0000"+
		"\b\u0000 %+49<C\u0001\u0006\u0000\u0000";
	public static final ATN _ATN =
		new ATNDeserializer().deserialize(_serializedATN.toCharArray());
	static {
		_decisionToDFA = new DFA[_ATN.getNumberOfDecisions()];
		for (int i = 0; i < _ATN.getNumberOfDecisions(); i++) {
			_decisionToDFA[i] = new DFA(_ATN.getDecisionState(i), i);
		}
	}
}