'use client'
import analizer from '@/module/analizer';
import React, { useState, useEffect } from "react";

import CodeMirror from "@uiw/react-codemirror";
import { vscodeDark } from "@uiw/codemirror-theme-vscode";

const OperationsInput = () => {
	const [inputText, setInputText] = useState("");
	const [results, setResults] = useState({
											ent:[], 
											pdec:[], 
											ctr:[]
										})
	const [errors, setErrors] = useState([])

	useEffect(() => {
		const delayDebounceFn = setTimeout(() => {
			const [res, err] = analizer(inputText);
			setResults(res);
			setErrors(err);
		}, 1000)
	
		return () => clearTimeout(delayDebounceFn)
	  }, [inputText])

	let handleResolveClick = () => {
		const [res, err] = analizer(inputText)
		console.log(res);
		setResults(res);
		setErrors(err);
	};

	let clean = () => {
		setInputText('');
	}

	return (
		<>
			<CodeMirror
					value={inputText}
					onChange={(e) => setInputText(e)}
					height="20rem"
					width='100%'
					theme={vscodeDark}
				/>
			<div className='operations-input'>
				
				<div className='button-container'>
					<button id="resolve" onClick={clean} className='operations-input-button'>
						Limpiar
					</button>
				</div>
				{
					errors.length ?
					<>
					{
						errors.map((text, i) => (
							<p key={i}>ERROR: {text}</p>
							))
						}
					</> 
						:
						null
					}
				{
					(results.ent.length && !errors.length) ? 
						<p>ent: {
							results.ent.map( (obj) => obj.id ).join(', ')}</p>
							:
							null
						}		
				{
					(results.pdec.length && !errors.length) ? 
					<p>pdec: {results.pdec.map( (obj) => obj.id ).join(', ')}</p>
					:
					null
				}	
				{
					(results.ctr.length && !errors.length) ? 
					<p>ctr: {results.ctr.map( (obj) => obj.id ).join(', ')}</p>
						:
						null
				}	

			</div>
		</>
	);
};

export default OperationsInput;
