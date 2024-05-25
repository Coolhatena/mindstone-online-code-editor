"use client";
import React, { useState } from "react";

import CtoMSTranslator from "@/module/CtoMSTranslator";
import MStoJazminTranslator from "@/module/MStoJazminTranslator";
import DualSwitchButton from "./DualSwitchButton";
import CodeEditor from "./codeEditor";

const Translator = ({ codeState = ["", () => {}] }) => {
	const [switchTranslation, setSwitchTranslation] = useState(true);
	const [mindstoneCode, setMindstoneCode] = codeState;
	const [cCode, setCCode] = useState("");
	const [jazminCode, setJazminCode] = useState("");

	let handleTranslateCtoMS = () => {
		let result = CtoMSTranslator(cCode);
		setMindstoneCode(result);
	};

	let handleTranslateMStoJazmin = () => {
		let result = MStoJazminTranslator(mindstoneCode);
		setJazminCode(result);
	};

	return (
		<div>
			<div className="translator-switch">
				<DualSwitchButton
					leftOption="C to MindStone"
					rightOption="MindStone to Jasmin"
					switchVariable={switchTranslation}
					setSwitchVariable={setSwitchTranslation}
				/>
			</div>
			{switchTranslation ? (
				// C to MindStone
				<div className="translator">
					<div className="container-translator">
						<CodeEditor
							title="C code"
							textVariable={cCode}
							setTextVariable={setCCode}
							isTranslateOption
							handleTranslate={handleTranslateCtoMS}
							isLoadFileOption
							acceptedFileTypes=".txt, .c"
						/>
					</div>

					<div className="container-translator">
						<CodeEditor
							title="MindStone code"
							textVariable={mindstoneCode}
							setTextVariable={setMindstoneCode}
						/>
					</div>
				</div>
			) : (
				// MindStone to Jazmin
				<div className="translator">
					<div className="container-translator">
						<CodeEditor
							title="MindStone code"
							textVariable={mindstoneCode}
							setTextVariable={setMindstoneCode}
							isTranslateOption
							handleTranslate={handleTranslateMStoJazmin}
						/>
					</div>

					<div className="container-translator">
						<CodeEditor
							title="Jasmin code"
							textVariable={jazminCode}
							setTextVariable={setJazminCode}
						/>
					</div>
				</div>
			)}
		</div>
	);
};

export default Translator;
