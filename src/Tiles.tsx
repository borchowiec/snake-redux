import React from 'react';
import './Tiles.css';
import {COLS, ROWS} from "./properties";
import Tile from "./Tile";

function Tiles() {
    return (
        <div className="tiles">
            {
                Array.from({length: ROWS}, (_, y) => (
                    <div className="row">
                        {
                            Array.from({length: COLS}, (_, x) => (
                                <Tile key={`${x}-${y}`} x={x} y={y}/>
                            ))
                        }
                    </div>
                ))
            }
        </div>
    );
}

export default Tiles;
