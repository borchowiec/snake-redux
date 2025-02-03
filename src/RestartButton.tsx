import React from 'react';
import './RestartButton.css';
function RestartButton({ restartGame }) {
	return (
		<button className='restart-button' onClick={restartGame}>
			Zacznij jeszcze raz
		</button>
	);
}

export default RestartButton;
