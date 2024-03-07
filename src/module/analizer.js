import antlr4 from "antlr4";
import LanguageLexer from "@/grammar/LanguageLexer.js";
import LanguageParser from "@/grammar/LanguageParser.js";
// import CalculadoraVisitor from '../grammar/CalculadoraVisitor.js';
import CustomVisitor from "../helper/CustomVisitor.js";

let analizer = (input) => {
	const chars = new antlr4.InputStream(input);
	const lexer = new LanguageLexer(chars);
	const tokens = new antlr4.CommonTokenStream(lexer);

	const visitor = new CustomVisitor();

	const parser = new LanguageParser(tokens);
	parser.buildParseTrees = true;
	parser.removeErrorListeners();
	parser.addErrorListener({
		syntaxError: (recognizer, offendingSymbol, line, column, msg, err) => {
			visitor.logs.push({
				type: "error",
				header: "ERROR",
				text: `Syntax error on line ${line}: ${offendingSymbol}`,
			});
		},
	});
	const tree = parser.file();

	return visitor.visitFile(tree);
};

export default analizer;
