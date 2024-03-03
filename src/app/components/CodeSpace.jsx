"use client";
import analizer from "@/module/analizer";
import React, { useState, useEffect } from "react";

import CodeMirror from "@uiw/react-codemirror";
import { vscodeDark } from "@uiw/codemirror-theme-vscode";

const CodeSpace = () => {
	const [inputText, setInputText] = useState("");
	const [results, setResults] = useState({
		ent: [],
		pdec: [],
		ctr: [],
	});
	const [logs, setLogs] = useState([]);

	useEffect(() => {
		const delayDebounceFn = setTimeout(() => {
			if (inputText != "") {
				handleRun();
			}
		}, 1000);

		return () => {
			clearTimeout(delayDebounceFn);
		};
	}, [inputText]);

	let handleRun = () => {
		const [res, err] = analizer(inputText);
		console.log(res);
		setResults(res);
		setLogs(err);
	};

	let clean = () => {
		setInputText("");
	};

	let filterLogs = () => {
		let filteredLogs = [];
		for (let i = 0; i < logs.length; i++) {
			filteredLogs.push(logs[i]);
			if (logs[i].type == "error") break;
		}

		return filteredLogs;
	};

	return (
		<div className="container">
			<div className="editor">
				<div className="editor-header">
					<h2>Editor</h2>
					<div className="button-container">
						<button
							id="run"
							onClick={handleRun}
							className="editor-button"
						>
							Run
						</button>
						<button
							id="clear"
							onClick={clean}
							className="editor-button"
						>
							Clear
						</button>
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
					{logs.length ? (
						<>
							{filterLogs().map((log, i) => (
								<p key={i} className={log.type}>
									{log.header}: {log.text}
								</p>
							))}
						</>
					) : null}
				</div>
			</div>
		</div>
	);
};

export default CodeSpace;
