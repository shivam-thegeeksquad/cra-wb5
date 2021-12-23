import React, { useState } from 'react';

const App = (props) => {
	const [input, setInput] = useState('');
	const { message, updateScore } = props;
	let { view = 'default-view' } = props;
	return (
		<div
			style={{
				margin: '10px',
				padding: '10px',
				textAlign: 'center',
				backgroundColor: 'cyan',
			}}>
			<h1>App 2</h1>
			<hr></hr>
			<p>Message from APp1</p>
			<p>{message}</p>
			{view === 'table-view' ? (
				<div>
					{' '}
					<p>Table view</p>
					<input
						type='number'
						value={input}
						onChange={(e) => {
							setInput(e.target.value);
						}}></input>
					<button
						onClick={() => {
							updateScore(input);
						}}>
						Update Score
					</button>
				</div>
			) : (
				<p>You are viewing the default view</p>
			)}
		</div>
	);
};

export default App;
