import './App.css';
import { Button, Grid, Input, Typography } from '@mui/material';
import React, { useState } from 'react';
function App(props) {
	const { message, updateScore, closeRecipeTool, view } = props;
	const [input, setInput] = useState('');
	return (
		<div className='App'>
			<Grid>
				{view === 'diet' ? (
					<Grid
						container
						direction='column'
						justifyContent={'space-between'}
						alignItems={'center'}
						style={{
							height: '200px',
						}}>
						<Grid item>
							<Typography>{`Message from diet tool: ${message}`}</Typography>
						</Grid>
						<Grid item>
							<Input
								type='number'
								placeholder='Enter score'
								value={input}
								onChange={(e) => {
									setInput(e.target.value);
								}}></Input>
						</Grid>

						<Grid item>
							<Button
								variant='contained'
								onClick={() => {
									updateScore(input);
									closeRecipeTool();
								}}>
								Update Score
							</Button>
						</Grid>
					</Grid>
				) : (
					<Typography variant='h1' color='secondary' align='center'>
						Welcome to the recipe tool!!
					</Typography>
				)}
			</Grid>
		</div>
	);
}

export default App;
