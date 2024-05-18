import antlr4 from "antlr4";
import MStoJazminLexer from '@/grammar/translator/MStoJazmin/grammar/MStoJazminLexer';
import MStoJazminParser from '@/grammar/translator/MStoJazmin/grammar/MStoJazminParser';
import MStoJazminCustomVisitor from '@/helper/MStoJazminCustomVisitor';

import automata from '@/helper/automata.js';

let MStoJazminTranslator = (input) => {
	input = automata(input);
	const chars = new antlr4.InputStream(input);
	const lexer = new MStoJazminLexer(chars);
	const tokens = new antlr4.CommonTokenStream(lexer);

	const visitor = new MStoJazminCustomVisitor();

	const parser = new MStoJazminParser(tokens);
	parser.buildParseTrees = true;
	const tree = parser.file();

	return visitor.visitFile(tree);
};

export default MStoJazminTranslator;