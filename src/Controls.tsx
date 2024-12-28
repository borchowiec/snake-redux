import React from 'react';
import DirectionButton from "./DirectionButton";
import {Direction} from "./store/gameSlice";
import './Controls.css';
import {useSelector} from "react-redux";
import {RootState} from "./store/store";

function Controls() {
    const isGameOver = useSelector((state: RootState) => state.game.gameOver);

    return (
        <div className="controls">
            {
                isGameOver &&
                <div className="row">
                    <h1>Game Over</h1>
                </div>
            }
            <div className="row">
                <DirectionButton direction={Direction.NORTH}/>
            </div>
            <div className="row">
                <DirectionButton direction={Direction.WEST}/>
                <DirectionButton direction={Direction.EAST}/>
            </div>
            <div className="row">
                <DirectionButton direction={Direction.SOUTH}/>
            </div>
        </div>
    );
}

export default Controls;
