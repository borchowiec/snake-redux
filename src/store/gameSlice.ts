import { createSlice } from '@reduxjs/toolkit';
import { COLS, ROWS } from '../properties';

export enum Direction {
	NORTH,
	EAST,
	SOUTH,
	WEST,
}

interface SnakePart {
	x: number;
	y: number;
}

function createNewSnake(): SnakePart[] {
	return [
		{ x: 10, y: 10 },
		{ x: 10, y: 11 },
		{ x: 10, y: 12 },
	];
}

function getRandomCoordinates() {
	return {
		x: Math.floor(Math.random() * COLS),
		y: Math.floor(Math.random() * ROWS),
	};
}

function setInitialState() {
	return {
		snake: createNewSnake(),
		direction: Direction.NORTH,
		bonus: getRandomCoordinates(),
		gameOver: false,
	};
}

export const gameSlice = createSlice({
	name: 'game',
	initialState: setInitialState(),

	reducers: {
		updateGameState: (state) => {
			let previousX = state.snake[0].x;
			let previousY = state.snake[0].y;

			if (state.direction === Direction.NORTH) {
				previousY--;
				if (previousY < 0) {
					previousY = COLS - 1;
				}
			} else if (state.direction === Direction.EAST) {
				previousX = (previousX + 1) % COLS;
			} else if (state.direction === Direction.SOUTH) {
				previousY = (previousY + 1) % ROWS;
			} else if (state.direction === Direction.WEST) {
				previousX--;
				if (previousX < 0) {
					previousX = COLS - 1;
				}
			}

			for (let i = 0; i < state.snake.length; i++) {
				const snakePart = state.snake[i];

				const tempX = snakePart.x;
				const tempY = snakePart.y;

				snakePart.x = previousX;
				snakePart.y = previousY;

				previousX = tempX;
				previousY = tempY;
			}

			if (state.snake[0].x === state.bonus.x && state.snake[0].y === state.bonus.y) {
                state.bonus = getRandomCoordinates();
                const newSnakePart: SnakePart = {x: previousX, y: previousY};
                state.snake.push(newSnakePart);
            }

		},
		setDirection: (state, action: { payload: Direction }) => {
			state.direction = action.payload;
		},
		setGameOver: (state) => {
			state.gameOver = true;
		},
		restartGame: () => {
			const newState = setInitialState();
			return newState
	
		},
	},
});
