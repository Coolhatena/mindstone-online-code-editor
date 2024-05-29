import React, { useRef, useState } from 'react'

import CodeMirror from "@uiw/react-codemirror";
import { vscodeDark } from "@uiw/codemirror-theme-vscode";

const CodeEditor = ({title, textVariable, setTextVariable = () => {}, isTranslateOption = false, handleTranslate = () => {}, isCompileOption = false, handleCompile = (e) => { e.preventDefault() }, isLoadFileOption = false, acceptedFileTypes = '.txt'}) => {
	const inputFile = useRef(null);

	let handleFileLoad = (e) => {
		e.preventDefault()
		const reader = new FileReader();
		if (e.target.files.length){
			reader.readAsText(e.target.files[0]);
			reader.onload = (e) => {
				const file = e.target.result;
				setTextVariable(file);
			}
		}
	};

	let handleClickFileLoad = () => {
		inputFile.current.click();
		inputFile.current.value = "";
	}

  return (
	<div className="editor">
		<div className="editor-header">
			<h2>{title}</h2>
			<div className="button-container">
				{
					isCompileOption ?
						<form onSubmit={handleCompile}>
							<button type="submit" id="compile" className="editor-button">Compile</button>
						</form>
					:
						<></>
				}
				{
					isLoadFileOption ?
						<button id="load-file-button" className="editor-button" onClick={handleClickFileLoad}>
							Load file
							<input type='file' name='load-file' id="load-file" accept={acceptedFileTypes} ref={inputFile} onChange={(e) => handleFileLoad(e)} className="file-reader" />	
						</button>
					:
						<></>
				}
				{
					isTranslateOption ?
						<button id="translate" onClick={handleTranslate} className="editor-button">Translate</button>
					:
						<></>

				}
				<button id="clear" onClick={() => setTextVariable("")} className="editor-button">Clear</button>
			</div>
		</div>
		<CodeMirror
			value={textVariable}
			onChange={(e) => setTextVariable(e)}
			height="20rem"
			width="100%"
			theme={vscodeDark}
		/>
	</div>
  )
}

export default CodeEditor