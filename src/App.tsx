import React, { useEffect } from 'react';
import './App.css';
import Tiles from './Tiles';
import { useDispatch, useSelector } from 'react-redux';
import { gameSlice } from './store/gameSlice';
import Controls from './Controls';
import { RootState } from './store/store';
import RestartButton from './RestartButton';

function App() {
	const dispatch = useDispatch();
	const isGameOver = useSelector((state: RootState) => state.game.gameOver);

	function restartGame() {
		dispatch(gameSlice.actions.restartGame());
	}

	useEffect(() => {
		if (isGameOver) {
			return;
		}
		const interval = setInterval(() => {
			if (!isGameOver) {
				dispatch(gameSlice.actions.updateGameState());
			}
		}, 500);

		return () => clearInterval(interval);
	}, [dispatch, isGameOver]);

	return (
		<div className='app'>
			<Tiles />
			<div>
				<Controls />
				{isGameOver && <RestartButton restartGame={restartGame} />}
			</div>
		</div>
	);
}

export default App;
