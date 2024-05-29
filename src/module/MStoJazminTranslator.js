import antlr4 from "antlr4";
import LanguageLexer from "@/grammar/LanguageLexer.js";
import LanguageParser from "@/grammar/LanguageParser.js";
import MStoJazminCustomVisitor from '@/helper/MStoJazminCustomVisitor';

import automata from '@/helper/automata.js';

let MStoJazminTranslator = (input) => {
	input = automata(input);
	const chars = new antlr4.InputStream(input);
	const lexer = new LanguageLexer(chars);
	const tokens = new antlr4.CommonTokenStream(lexer);

	const visitor = new MStoJazminCustomVisitor();

	const parser = new LanguageParser(tokens);
	parser.buildParseTrees = true;
	const tree = parser.file();

	return visitor.visitFile(tree);
};

export default MStoJazminTranslator;