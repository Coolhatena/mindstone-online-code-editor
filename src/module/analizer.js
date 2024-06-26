import antlr4 from "antlr4";
import LanguageLexer from "@/grammar/LanguageLexer.js";
import LanguageParser from "@/grammar/LanguageParser.js";
import CustomVisitor from "../helper/CustomVisitor.js";

import automata from '@/helper/automata.js';

let analizer = (input) => {
	input = automata(input);
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
				text: `Syntax error on line ${line}: ${offendingSymbol.text}`,
			});
		},
	});
	const tree = parser.file();

	return visitor.visitFile(tree);
};

export default analizer;
