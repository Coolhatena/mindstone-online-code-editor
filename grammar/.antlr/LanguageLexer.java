// Generated from /home/coolhatena/Documents/Proyectos/automatas2/online-code-editor/grammar/Language.g4 by ANTLR 4.13.1
import org.antlr.v4.runtime.Lexer;
import org.antlr.v4.runtime.CharStream;
import org.antlr.v4.runtime.Token;
import org.antlr.v4.runtime.TokenStream;
import org.antlr.v4.runtime.*;
import org.antlr.v4.runtime.atn.*;
import org.antlr.v4.runtime.dfa.DFA;
import org.antlr.v4.runtime.misc.*;

@SuppressWarnings({"all", "warnings", "unchecked", "unused", "cast", "CheckReturnValue", "this-escape"})
public class LanguageLexer extends Lexer {
	static { RuntimeMetaData.checkVersion("4.13.1", RuntimeMetaData.VERSION); }

	protected static final DFA[] _decisionToDFA;
	protected static final PredictionContextCache _sharedContextCache =
		new PredictionContextCache();
	public static final int
		T__0=1, T__1=2, T__2=3, MAIN=4, TYPE=5, EQUALS=6, PLUS=7, MINUS=8, INT=9, 
		FLOAT=10, CHAR=11, SEMI=12, ID=13, INV_ID=14, NEWLINE=15, WS=16;
	public static String[] channelNames = {
		"DEFAULT_TOKEN_CHANNEL", "HIDDEN"
	};

	public static String[] modeNames = {
		"DEFAULT_MODE"
	};

	private static String[] makeRuleNames() {
		return new String[] {
			"T__0", "T__1", "T__2", "MAIN", "TYPE", "EQUALS", "PLUS", "MINUS", "INT", 
			"FLOAT", "CHAR", "SEMI", "ID", "INV_ID", "NEWLINE", "WS"
		};
	}
	public static final String[] ruleNames = makeRuleNames();

	private static String[] makeLiteralNames() {
		return new String[] {
			null, "'{'", "'\\n'", "'}'", "'start -->'", null, "'='", "'+'", "'-'", 
			null, null, null, "'!'"
		};
	}
	private static final String[] _LITERAL_NAMES = makeLiteralNames();
	private static String[] makeSymbolicNames() {
		return new String[] {
			null, null, null, null, "MAIN", "TYPE", "EQUALS", "PLUS", "MINUS", "INT", 
			"FLOAT", "CHAR", "SEMI", "ID", "INV_ID", "NEWLINE", "WS"
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


	public LanguageLexer(CharStream input) {
		super(input);
		_interp = new LexerATNSimulator(this,_ATN,_decisionToDFA,_sharedContextCache);
	}

	@Override
	public String getGrammarFileName() { return "Language.g4"; }

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
		"\u0004\u0000\u0010n\u0006\uffff\uffff\u0002\u0000\u0007\u0000\u0002\u0001"+
		"\u0007\u0001\u0002\u0002\u0007\u0002\u0002\u0003\u0007\u0003\u0002\u0004"+
		"\u0007\u0004\u0002\u0005\u0007\u0005\u0002\u0006\u0007\u0006\u0002\u0007"+
		"\u0007\u0007\u0002\b\u0007\b\u0002\t\u0007\t\u0002\n\u0007\n\u0002\u000b"+
		"\u0007\u000b\u0002\f\u0007\f\u0002\r\u0007\r\u0002\u000e\u0007\u000e\u0002"+
		"\u000f\u0007\u000f\u0001\u0000\u0001\u0000\u0001\u0001\u0001\u0001\u0001"+
		"\u0002\u0001\u0002\u0001\u0003\u0001\u0003\u0001\u0003\u0001\u0003\u0001"+
		"\u0003\u0001\u0003\u0001\u0003\u0001\u0003\u0001\u0003\u0001\u0003\u0001"+
		"\u0004\u0001\u0004\u0001\u0004\u0001\u0004\u0001\u0004\u0001\u0004\u0001"+
		"\u0004\u0001\u0004\u0001\u0004\u0001\u0004\u0003\u0004<\b\u0004\u0001"+
		"\u0005\u0001\u0005\u0001\u0006\u0001\u0006\u0001\u0007\u0001\u0007\u0001"+
		"\b\u0004\bE\b\b\u000b\b\f\bF\u0001\t\u0004\tJ\b\t\u000b\t\f\tK\u0001\t"+
		"\u0001\t\u0004\tP\b\t\u000b\t\f\tQ\u0001\n\u0001\n\u0001\u000b\u0001\u000b"+
		"\u0001\f\u0001\f\u0004\fZ\b\f\u000b\f\f\f[\u0001\r\u0004\r_\b\r\u000b"+
		"\r\f\r`\u0001\u000e\u0003\u000ed\b\u000e\u0001\u000e\u0001\u000e\u0001"+
		"\u000f\u0004\u000fi\b\u000f\u000b\u000f\f\u000fj\u0001\u000f\u0001\u000f"+
		"\u0000\u0000\u0010\u0001\u0001\u0003\u0002\u0005\u0003\u0007\u0004\t\u0005"+
		"\u000b\u0006\r\u0007\u000f\b\u0011\t\u0013\n\u0015\u000b\u0017\f\u0019"+
		"\r\u001b\u000e\u001d\u000f\u001f\u0010\u0001\u0000\u0006\u0001\u00000"+
		"9\u0001\u0000..\u0002\u0000AZaz\u0003\u000009AZaz\u0005\u0000++--09AZ"+
		"az\u0003\u0000\t\n\r\r  v\u0000\u0001\u0001\u0000\u0000\u0000\u0000\u0003"+
		"\u0001\u0000\u0000\u0000\u0000\u0005\u0001\u0000\u0000\u0000\u0000\u0007"+
		"\u0001\u0000\u0000\u0000\u0000\t\u0001\u0000\u0000\u0000\u0000\u000b\u0001"+
		"\u0000\u0000\u0000\u0000\r\u0001\u0000\u0000\u0000\u0000\u000f\u0001\u0000"+
		"\u0000\u0000\u0000\u0011\u0001\u0000\u0000\u0000\u0000\u0013\u0001\u0000"+
		"\u0000\u0000\u0000\u0015\u0001\u0000\u0000\u0000\u0000\u0017\u0001\u0000"+
		"\u0000\u0000\u0000\u0019\u0001\u0000\u0000\u0000\u0000\u001b\u0001\u0000"+
		"\u0000\u0000\u0000\u001d\u0001\u0000\u0000\u0000\u0000\u001f\u0001\u0000"+
		"\u0000\u0000\u0001!\u0001\u0000\u0000\u0000\u0003#\u0001\u0000\u0000\u0000"+
		"\u0005%\u0001\u0000\u0000\u0000\u0007\'\u0001\u0000\u0000\u0000\t;\u0001"+
		"\u0000\u0000\u0000\u000b=\u0001\u0000\u0000\u0000\r?\u0001\u0000\u0000"+
		"\u0000\u000fA\u0001\u0000\u0000\u0000\u0011D\u0001\u0000\u0000\u0000\u0013"+
		"I\u0001\u0000\u0000\u0000\u0015S\u0001\u0000\u0000\u0000\u0017U\u0001"+
		"\u0000\u0000\u0000\u0019W\u0001\u0000\u0000\u0000\u001b^\u0001\u0000\u0000"+
		"\u0000\u001dc\u0001\u0000\u0000\u0000\u001fh\u0001\u0000\u0000\u0000!"+
		"\"\u0005{\u0000\u0000\"\u0002\u0001\u0000\u0000\u0000#$\u0005\n\u0000"+
		"\u0000$\u0004\u0001\u0000\u0000\u0000%&\u0005}\u0000\u0000&\u0006\u0001"+
		"\u0000\u0000\u0000\'(\u0005s\u0000\u0000()\u0005t\u0000\u0000)*\u0005"+
		"a\u0000\u0000*+\u0005r\u0000\u0000+,\u0005t\u0000\u0000,-\u0005 \u0000"+
		"\u0000-.\u0005-\u0000\u0000./\u0005-\u0000\u0000/0\u0005>\u0000\u0000"+
		"0\b\u0001\u0000\u0000\u000012\u0005e\u0000\u000023\u0005n\u0000\u0000"+
		"3<\u0005t\u0000\u000045\u0005p\u0000\u000056\u0005d\u0000\u000067\u0005"+
		"e\u0000\u00007<\u0005c\u0000\u000089\u0005c\u0000\u00009:\u0005t\u0000"+
		"\u0000:<\u0005r\u0000\u0000;1\u0001\u0000\u0000\u0000;4\u0001\u0000\u0000"+
		"\u0000;8\u0001\u0000\u0000\u0000<\n\u0001\u0000\u0000\u0000=>\u0005=\u0000"+
		"\u0000>\f\u0001\u0000\u0000\u0000?@\u0005+\u0000\u0000@\u000e\u0001\u0000"+
		"\u0000\u0000AB\u0005-\u0000\u0000B\u0010\u0001\u0000\u0000\u0000CE\u0007"+
		"\u0000\u0000\u0000DC\u0001\u0000\u0000\u0000EF\u0001\u0000\u0000\u0000"+
		"FD\u0001\u0000\u0000\u0000FG\u0001\u0000\u0000\u0000G\u0012\u0001\u0000"+
		"\u0000\u0000HJ\u0007\u0000\u0000\u0000IH\u0001\u0000\u0000\u0000JK\u0001"+
		"\u0000\u0000\u0000KI\u0001\u0000\u0000\u0000KL\u0001\u0000\u0000\u0000"+
		"LM\u0001\u0000\u0000\u0000MO\u0007\u0001\u0000\u0000NP\u0007\u0000\u0000"+
		"\u0000ON\u0001\u0000\u0000\u0000PQ\u0001\u0000\u0000\u0000QO\u0001\u0000"+
		"\u0000\u0000QR\u0001\u0000\u0000\u0000R\u0014\u0001\u0000\u0000\u0000"+
		"ST\u0007\u0002\u0000\u0000T\u0016\u0001\u0000\u0000\u0000UV\u0005!\u0000"+
		"\u0000V\u0018\u0001\u0000\u0000\u0000WY\u0007\u0002\u0000\u0000XZ\u0007"+
		"\u0003\u0000\u0000YX\u0001\u0000\u0000\u0000Z[\u0001\u0000\u0000\u0000"+
		"[Y\u0001\u0000\u0000\u0000[\\\u0001\u0000\u0000\u0000\\\u001a\u0001\u0000"+
		"\u0000\u0000]_\u0007\u0004\u0000\u0000^]\u0001\u0000\u0000\u0000_`\u0001"+
		"\u0000\u0000\u0000`^\u0001\u0000\u0000\u0000`a\u0001\u0000\u0000\u0000"+
		"a\u001c\u0001\u0000\u0000\u0000bd\u0005\r\u0000\u0000cb\u0001\u0000\u0000"+
		"\u0000cd\u0001\u0000\u0000\u0000de\u0001\u0000\u0000\u0000ef\u0005\n\u0000"+
		"\u0000f\u001e\u0001\u0000\u0000\u0000gi\u0007\u0005\u0000\u0000hg\u0001"+
		"\u0000\u0000\u0000ij\u0001\u0000\u0000\u0000jh\u0001\u0000\u0000\u0000"+
		"jk\u0001\u0000\u0000\u0000kl\u0001\u0000\u0000\u0000lm\u0006\u000f\u0000"+
		"\u0000m \u0001\u0000\u0000\u0000\t\u0000;FKQ[`cj\u0001\u0006\u0000\u0000";
	public static final ATN _ATN =
		new ATNDeserializer().deserialize(_serializedATN.toCharArray());
	static {
		_decisionToDFA = new DFA[_ATN.getNumberOfDecisions()];
		for (int i = 0; i < _ATN.getNumberOfDecisions(); i++) {
			_decisionToDFA[i] = new DFA(_ATN.getDecisionState(i), i);
		}
	}
}