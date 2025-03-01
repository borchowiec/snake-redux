import {configureStore} from '@reduxjs/toolkit';
import {gameSlice} from "./gameSlice";

function checkSnakeCollisionMiddleware(storeApi){
    return function(next){
        return function(action){
            const game = storeApi.getState().game
            next(action)
            for (let i = 1; i < game.snake.length; i++) {
                const snakePart = game.snake[i];
                
                if (snakePart.x === game.snake[0].x && snakePart.y === game.snake[0].y) {
                    return storeApi.dispatch(gameSlice.actions.setGameOver());
                    
                }
            }
        }
    }
}

export const store = configureStore({
    reducer: {
        game: gameSlice.reducer
    },
    middleware: (getDefaultMiddleware) =>
		getDefaultMiddleware().concat(checkSnakeCollisionMiddleware),
});

export default store;
export type RootState = ReturnType<typeof store.getState>;