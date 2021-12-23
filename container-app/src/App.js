import React, { Suspense, useState } from 'react';
const RemoteApp = React.lazy(() => import('app2/App'));

const App = () => {
	const [score, setScore] = useState(0);

	const assignScore = (score) => {
		setScore(score);
	};
	return (
		<div
			style={{
				margin: '10px',
				padding: '10px',
				textAlign: 'center',
				backgroundColor: 'greenyellow',
			}}>
			<div>
				<h1>Container App</h1>
				<p>My current score by APp2 is</p>
				<p>{score}</p>
			</div>
			<Suspense fallback={'loading...'}>
				<RemoteApp message={'Hi greetings from App1. Please score me.'} updateScore={assignScore} view={'table-view'} />
			</Suspense>
		</div>
	);
};

export default App;
