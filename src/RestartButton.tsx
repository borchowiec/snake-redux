import React from 'react';
import './RestartButton.css';
function RestartButton({ restartGame }) {
	return (
		<button className='restart-button' onClick={restartGame}>
			Restart game
		</button>
	);
}

export default RestartButton;
