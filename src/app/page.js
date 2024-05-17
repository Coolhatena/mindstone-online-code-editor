'use client'

import React, { useState } from "react";
import Header from "./components/Header";
import CodeSpace from "./components/CodeSpace";
import Translator from './components/Translator';
import DualSwitchButton from './components/DualSwitchButton';

const page = () => {
	const [switchSpaces, setSwitchSpaces] = useState(true)
	const [mindStoneCode, setMindStoneCode] = useState("")

	return (
		<>
			<main>
				<Header />
				<DualSwitchButton leftOption="Code" rightOption="Translate" switchVariable={switchSpaces} setSwitchVariable={setSwitchSpaces}/>
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
