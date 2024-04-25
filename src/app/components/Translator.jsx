"use client";
import React, { useRef, useState } from 'react'

import CodeMirror from "@uiw/react-codemirror";
import { vscodeDark } from "@uiw/codemirror-theme-vscode";

import CtoMSTranslator from '@/module/CtoMSTranslator';

const Translator = ({ codeState=["", () => {}] }) => {
	const [inputText, setInputText] = codeState;
	const [inputTextCLang, setInputTextCLang] = useState("")
	const inputFile = useRef(null) 

	let handleTranslateCtoMS = () => {
		let result = CtoMSTranslator(inputTextCLang)
		setInputText(result)
	};

	let handleFileLoad = (e) => {
		e.preventDefault()
		const reader = new FileReader();
		if (e.target.files.length){
			reader.readAsText(e.target.files[0]);
			reader.onload = (e) => {
				const file = e.target.result;
				setInputTextCLang(file);
			}
		}
	};

	let handleClickFileLoad = () => {
		inputFile.current.click();
		inputFile.current.value = ""
	}

	let HandleCleanMs = () => {
		setInputText("");
	};

	let HandleCleanC = () => {
		setInputTextCLang("");
	};

	return (
		<div className='translator'>
			<div className="container-translator">
				<div className="editor">
					<div className="editor-header">
						<h2>C Code</h2>
						<div className="button-container">
							<button id="load-file-button" className="editor-button" onClick={handleClickFileLoad}>
								Load file
								<input type='file' name='load-file' id="load-file" accept=".txt, .c" ref={inputFile} onChange={(e) => handleFileLoad(e)} className="file-reader" />	
							</button>
							
							<button id="translateC" onClick={handleTranslateCtoMS} className="editor-button">Translate</button>
							<button id="clear" onClick={HandleCleanC} className="editor-button">Clear</button>
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
							<button id="clear" onClick={HandleCleanMs} className="editor-button">Clear</button>
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