'use client'

import React, { useState } from "react";
import Header from "./components/Header";
import CodeSpace from "./components/CodeSpace";
import Translator from './components/Translator';

const page = () => {
	const [switchSpaces, setSwitchSpaces] = useState(true)
	const [mindStoneCode, setMindStoneCode] = useState("")

	return (
		<>
			<main>
				<Header />
				<div className='SwitchButton-container'>
					<button className={!switchSpaces ? "SwitchButton" : "SwitchButton SwitchButton_selected"} onClick={() => setSwitchSpaces(true)}>Code</button>
					<button className={switchSpaces ? "SwitchButton" : "SwitchButton SwitchButton_selected"} onClick={() => setSwitchSpaces(false)}>Translate</button>
				</div>
				{
				switchSpaces ? 
					<CodeSpace codeState={[mindStoneCode, setMindStoneCode]}/> 
					: 
					<Translator codeState={[mindStoneCode, setMindStoneCode]}/>
				}
				
			</main>
		</>
	);
};

export default page;
