import React from 'react';
import './Tile.css';
import {useSelector} from "react-redux";
import {RootState} from "./store/store";

function Tile({x, y}: { x: number, y: number }) {
    const gameState = useSelector((state: RootState) => state.game);

    function checkIfHasSnake() {
        for (let i = 0; i < gameState.snake.length; i++) {
            let snakePart = gameState.snake[i];
            if (snakePart.x === x && snakePart.y === y) {
                return true;
            }
        }
        return false;
    }

    function checkIfHasBonus() {
        return gameState.bonus.x === x && gameState.bonus.y === y;
    }

    function createClassName() {
        if (checkIfHasSnake()) {
            return "content snake"
        } else if (checkIfHasBonus()) {
            return "content bonus"
        }
        return "content empty";
    }

    return (
        <div className={`tile ${(x + y) % 2 === 0 ? "light" : "dark"}`}>
            <div className={createClassName()}/>
        </div>
    );
}

export default Tile;
