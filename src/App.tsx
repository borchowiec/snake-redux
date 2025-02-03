import React, { useEffect, useRef } from 'react';
import './App.css';
import Tiles from './Tiles';
import { useDispatch, useSelector } from 'react-redux';
import { gameSlice } from './store/gameSlice';
import Controls from './Controls';
import { RootState } from './store/store';
import { Direction } from './store/gameSlice';

function App() {
	const dispatch = useDispatch();
	const isGameOver = useSelector((state: RootState) => state.game.gameOver);
	const appRef = useRef<HTMLDivElement>(null);

	function moveSnake(e: React.KeyboardEvent<HTMLDivElement>) {
		console.log(e);
		switch (e.code) {
			case 'ArrowLeft':
			case 'KeyA':
				dispatch(gameSlice.actions.setDirection(Direction.WEST));
				break;
			case 'ArrowRight':
			case 'KeyD':
				dispatch(gameSlice.actions.setDirection(Direction.EAST));
				break;
			case 'ArrowDown':
			case 'KeyS':
				dispatch(gameSlice.actions.setDirection(Direction.SOUTH));
				break;
			case 'ArrowUp':
			case 'KeyW':
				dispatch(gameSlice.actions.setDirection(Direction.NORTH));
				break;
		}
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
	useEffect(() => {
		appRef.current.focus();
	}, []);
	return (
		<div className='app' ref={appRef} tabIndex={0} onKeyDown={moveSnake}>
			<Tiles />
			<Controls />
		</div>
	);
}

export default App;
