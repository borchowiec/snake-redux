import {configureStore} from '@reduxjs/toolkit';
import {gameSlice} from "./gameSlice";

export const store = configureStore({
    reducer: {
        game: gameSlice.reducer
    },
});

export default store;
export type RootState = ReturnType<typeof store.getState>;