'use client'
import analizer from '@/module/analizer';
import React, { useState, useEffect } from "react";

import CodeMirror from "@uiw/react-codemirror";
import { vscodeDark } from "@uiw/codemirror-theme-vscode";

const CodeSpace = () => {
	const [inputText, setInputText] = useState("");
	const [results, setResults] = useState({
											ent:[], 
											pdec:[], 
											ctr:[]
										})
	const [errors, setErrors] = useState([])

	useEffect(() => {
		const delayDebounceFn = setTimeout(() => {
			handleRun();
		}, 1000)
	
		return () => clearTimeout(delayDebounceFn)
	  }, [inputText])

	let handleRun = () => {
		const [res, err] = analizer(inputText)
		console.log(res);
		setResults(res);
		setErrors(err);
	};

	let clean = () => {
		setInputText('');
	}

	return (
			<div className="container">
				<div className='editor'>
					<div className='editor-header'>
						<h2>Editor</h2>
						<div className='button-container'>
							<button id="run" onClick={handleRun} className='editor-button'>
								Run
							</button>
							<button id="clear" onClick={clean} className='editor-button'>
								Clear
							</button>
						</div>
					</div>
					<CodeMirror
							value={inputText}
							onChange={(e) => setInputText(e)}
							height="20rem"
							width='100%'
							theme={vscodeDark}
					/>
				</div>
				
				<div className="terminal-container">
					<div className="terminal-header">
						<div className="buttons">
							<div className="btn red"></div>
							<div className="btn yellow"></div>
							<div className="btn green"></div>
						</div>
					</div>
					<div className="terminal-content">
						<p>Console Output:</p>
						{
						errors.length ?
						<>
						{
							errors.map((log, i) => (
								<p key={i} className={log.type}>{log.type.toUpperCase()}: {log.text}</p>
								))
							}
						</> 
							:
							null
						}
						{/* <p class="grey">undefined</p>
						<p>Hello..</p>
						<p>Hello..</p>
						<p>Hello..</p><p>Hello..</p>
						<p class="grey">undefined</p>
						<p class="last"></p> */}
					</div>
				</div>
			</div>
				
	);
};

export default CodeSpace;
