import antlr4 from "antlr4";
import CtoMSLexer from '@/grammar/translator/CtoMS/grammar/translator/CtoMSLexer.js';
import CtoMSParser from '@/grammar/translator/CtoMS/grammar/translator/CtoMSParser.js';
import CtoMSCustomVisitor from '@/helper/CtoMSCustomVisitor';

import automata from '@/helper/automata.js';

let CtoMSTranslator = (input) => {
	input = automata(input);
	const chars = new antlr4.InputStream(input);
	const lexer = new CtoMSLexer(chars);
	const tokens = new antlr4.CommonTokenStream(lexer);

	const visitor = new CtoMSCustomVisitor();

	const parser = new CtoMSParser(tokens);
	parser.buildParseTrees = true;
	// parser.removeErrorListeners();
	// parser.addErrorListener({
	// 	syntaxError: (recognizer, offendingSymbol, line, column, msg, err) => {
	// 		visitor.logs.push({
	// 			type: "error",
	// 			header: "ERROR",
	// 			text: `Syntax error on line ${line}: ${offendingSymbol.text}`,
	// 		});
	// 	},
	// });
	const tree = parser.file();

	return visitor.visitFile(tree);
};

export default CtoMSTranslator;