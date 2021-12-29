import React, { Suspense, useState } from 'react';
import { Typography, Dialog, DialogContent, Button, Grid, DialogTitle } from '@mui/material';
const RecipeTool = React.lazy(() => import('recipe_tool/App'));

function App() {
	const [showRecipeTool, setShowRecipeTool] = useState(false);
	const [score, setScore] = useState('');

	const assignScore = (score) => {
		setScore(score);
	};

	return (
		<div className='App'>
			<Grid
				container
				direction='column'
				justifyContent={'space-around'}
				alignItems={'center'}
				style={{ height: '300px', backgroundColor: 'grey' }}>
				<Grid item>
					<Typography align='center' variant='h3'>
						Diet Tool
					</Typography>
				</Grid>
				<Grid item>
					<Typography>{`Score by Recipe tool: ${score}`}</Typography>
				</Grid>
				<Grid item>
					<Button
						variant='contained'
						color='primary'
						onClick={() => {
							setShowRecipeTool(true);
						}}>
						Show Recipe Tool
					</Button>
				</Grid>

				<Dialog
					open={showRecipeTool}
					fullWidth
					onClose={() => {
						setShowRecipeTool(false);
					}}>
					<DialogTitle>
						<Grid container justifyContent={'space-between'}>
							<Typography>Recipe Tool</Typography>
							<Button
								onClick={() => {
									setShowRecipeTool(false);
								}}>
								Close
							</Button>
						</Grid>
					</DialogTitle>
					<DialogContent dividers>
						<Suspense fallback={'loading...'}>
							<RecipeTool
							// message={'Hi from diet tool'}
							// updateScore={assignScore}
							// closeRecipeTool={() => {
							// 	setShowRecipeTool(false);
							// }}
							// view='diet'
							/>
						</Suspense>
					</DialogContent>
				</Dialog>
			</Grid>
		</div>
	);
}

export default App;
