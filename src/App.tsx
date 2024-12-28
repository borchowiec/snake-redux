import React, {useEffect} from 'react';
import './App.css';
import Tiles from "./Tiles";
import {useDispatch, useSelector} from "react-redux";
import {gameSlice} from "./store/gameSlice";
import Controls from "./Controls";
import {RootState} from "./store/store";

function App() {
    const dispatch = useDispatch();
    const isGameOver = useSelector((state: RootState) => state.game.gameOver);

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
        <div className="app">
            <Tiles/>
            <Controls/>
        </div>
    );
}

export default App;
