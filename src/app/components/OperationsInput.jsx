'use client'
import analizer from '@/module/analizer';
import React, { useState } from "react";

const OperationsInput = () => {
	const [inputText, setInputText] = useState("");
	const [results, setResults] = useState({
											ent:[], 
											pdec:[], 
											ctr:[]
										})
	const [errors, setErrors] = useState([])


	const onTextareaChange = (event) => {
		setInputText(event.target.value);
	};

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
		<div className='operations-input'>
			<p className='operations-input-title'>Test</p>
			<textarea
				id="operation-textarea"
				className='operations-input-textarea'
				value={inputText}
				onChange={onTextareaChange}
				placeholder='Ingrese sus operaciones'
			></textarea>
			<div className='button-container'>
				<button id="resolve" onClick={handleResolveClick} className='operations-input-button'>
					Resolver
				</button>
				<button id="resolve" onClick={clean} className='operations-input-button'>
					Limpiar
				</button>
			</div>
			{
				errors.length != 0 ?
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
				(results.ent.length && errors.length === 0) ? 
					<p>ent: {results.ent.join(', ')}</p>
					:
					null
			}		
			{
				(results.pdec.length && errors.length === 0) ? 
					<p>pdec: {results.pdec.join(', ')}</p>
					:
					null
			}	
			{
				(results.ctr.length && errors.length === 0) ? 
					<p>ctr: {results.ctr.join(', ')}</p>
					:
					null
			}	

		</div>
	);
};

export default OperationsInput;
