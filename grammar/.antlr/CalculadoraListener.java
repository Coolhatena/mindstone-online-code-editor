// Generated from /home/coolhatena/Documentos/Proyectos/automatas/gramaticas/analizador-sintactico/grammar/Calculadora.g4 by ANTLR 4.13.1
import org.antlr.v4.runtime.tree.ParseTreeListener;

/**
 * This interface defines a complete listener for a parse tree produced by
 * {@link CalculadoraParser}.
 */
public interface CalculadoraListener extends ParseTreeListener {
	/**
	 * Enter a parse tree produced by {@link CalculadoraParser#file}.
	 * @param ctx the parse tree
	 */
	void enterFile(CalculadoraParser.FileContext ctx);
	/**
	 * Exit a parse tree produced by {@link CalculadoraParser#file}.
	 * @param ctx the parse tree
	 */
	void exitFile(CalculadoraParser.FileContext ctx);
	/**
	 * Enter a parse tree produced by the {@code timesDiv}
	 * labeled alternative in {@link CalculadoraParser#expr}.
	 * @param ctx the parse tree
	 */
	void enterTimesDiv(CalculadoraParser.TimesDivContext ctx);
	/**
	 * Exit a parse tree produced by the {@code timesDiv}
	 * labeled alternative in {@link CalculadoraParser#expr}.
	 * @param ctx the parse tree
	 */
	void exitTimesDiv(CalculadoraParser.TimesDivContext ctx);
	/**
	 * Enter a parse tree produced by the {@code number}
	 * labeled alternative in {@link CalculadoraParser#expr}.
	 * @param ctx the parse tree
	 */
	void enterNumber(CalculadoraParser.NumberContext ctx);
	/**
	 * Exit a parse tree produced by the {@code number}
	 * labeled alternative in {@link CalculadoraParser#expr}.
	 * @param ctx the parse tree
	 */
	void exitNumber(CalculadoraParser.NumberContext ctx);
	/**
	 * Enter a parse tree produced by the {@code plusSubtraction}
	 * labeled alternative in {@link CalculadoraParser#expr}.
	 * @param ctx the parse tree
	 */
	void enterPlusSubtraction(CalculadoraParser.PlusSubtractionContext ctx);
	/**
	 * Exit a parse tree produced by the {@code plusSubtraction}
	 * labeled alternative in {@link CalculadoraParser#expr}.
	 * @param ctx the parse tree
	 */
	void exitPlusSubtraction(CalculadoraParser.PlusSubtractionContext ctx);
}