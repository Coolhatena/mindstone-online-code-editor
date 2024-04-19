"use client";
import React, { useState } from 'react'

import CodeMirror from "@uiw/react-codemirror";
import { vscodeDark } from "@uiw/codemirror-theme-vscode";

import CtoMSTranslator from '@/module/CtoMSTranslator';

const Translator = ({ codeState=["", () => {}] }) => {
	const [inputText, setInputText] = codeState;
	const [inputTextCLang, setInputTextCLang] = useState("")

	let handleRun = () => {
		console.log("None");
	};

	let handleTranslateCtoMS = () => {
		let result = CtoMSTranslator(inputTextCLang)
		setInputText(result)
	};

	let clean = () => {
		setInputText("");
	};

	return (
		<div className='translator'>
			<div className="container-translator">
				<div className="editor">
					<div className="editor-header">
						<h2>C Code</h2>
						<div className="button-container">
							<button id="translateC" onClick={handleTranslateCtoMS} className="editor-button">Translate</button>
							<button id="clear" onClick={clean} className="editor-button">Clear</button>
						</div>
					</div>
					<CodeMirror
						value={inputTextCLang}
						onChange={(e) => setInputTextCLang(e)}
						height="20rem"
						width="100%"
						theme={vscodeDark}
					/>
				</div>
			</div>

			<div className="container-translator">
				<div className="editor">
					<div className="editor-header">
						<h2>MindStone Code</h2>
						<div className="button-container">
							<button id="translateMS" onClick={handleTranslateCtoMS} className="editor-button">Translate</button>
							<button id="clear" onClick={clean} className="editor-button">Clear</button>
						</div>
					</div>
					<CodeMirror
						value={inputText}
						onChange={(e) => setInputText(e)}
						height="20rem"
						width="100%"
						theme={vscodeDark}
					/>
				</div>
			</div>
		</div>
	);
}

export default Translator