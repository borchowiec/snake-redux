import React from 'react';
import {Direction, gameSlice} from "./store/gameSlice";
import './DirectionButton.css';
import {useDispatch, useSelector} from "react-redux";
import {RootState} from "./store/store";

function DirectionButton({direction}: {direction: Direction}) {
    const isDirectionActive = useSelector((state: RootState) => state.game.direction === direction);
    const dispatch = useDispatch();

    function getButtonText() {
        switch (direction) {
            case Direction.EAST:
                return "RIGHT";
            case Direction.WEST:
                return "LEFT";
            case Direction.NORTH:
                return "UP";
            case Direction.SOUTH:
                return "DOWN";
        }
    }

    function handleOnClick() {
        if (!isDirectionActive) {
            dispatch(gameSlice.actions.setDirection(direction));
        }
    }

    return (
        <button
            className={`direction-button ${isDirectionActive ? "active" : ""}`}
            onClick={handleOnClick}
        >
            {getButtonText()}
        </button>
    );
}

export default DirectionButton;
