"use client";
import React, { useRef, useState } from 'react'

import CodeMirror from "@uiw/react-codemirror";
import { vscodeDark } from "@uiw/codemirror-theme-vscode";

import CtoMSTranslator from '@/module/CtoMSTranslator';
import DualSwitchButton from './DualSwitchButton';
import CodeEditor from './codeEditor';

const Translator = ({ codeState=["", () => {}] }) => {
	const [switchTranslation, setSwitchTranslation] = useState(true);
	const [mindstoneCode, setMindstoneCode] = codeState;
	const [cCode, setCCode] = useState("");
	const [jazminCode, setJazminCode] = useState("")
	const inputFile = useRef(null);

	let handleTranslateCtoMS = () => {
		let result = CtoMSTranslator(cCode)
		setMindstoneCode(result)
	};

	return (
		<div>
			<div className='translator-switch'>
				<DualSwitchButton leftOption="C to MindStone" rightOption="MindStone to Jazmin" switchVariable={switchTranslation} setSwitchVariable={setSwitchTranslation}/>
			</div>
			{
				switchTranslation ?
				// C to MindStone 
				<div className='translator'>
					<div className="container-translator">
						<CodeEditor title="C code" textVariable={cCode} setTextVariable={setCCode} isTranslateOption handleTranslate={handleTranslateCtoMS} isLoadFileOption acceptedFileTypes='.txt, .c'/>
					</div>

					<div className="container-translator">
						<CodeEditor title="MindStone code" textVariable={mindstoneCode} setTextVariable={setMindstoneCode}/>
					</div>
				</div> 
				: 
				// MindStone to Jazmin
				<div className='translator'>
					<div className="container-translator">
						<CodeEditor title="MindStone code" textVariable={mindstoneCode} setTextVariable={setMindstoneCode} isTranslateOption handleTranslate={handleTranslateCtoMS}/>
					</div>

					<div className="container-translator">
						<CodeEditor title="Jazmin code" textVariable={jazminCode} setTextVariable={setJazminCode}/>
					</div>
				</div>
			}
			
		</div>
	);
}

export default Translator