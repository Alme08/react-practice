import { useState } from 'react';
import './App.css';

const turns = {
	x: 'X',
	o: 'O',
};

const Square = ({ children, updateBoard, index }) => {
	return <div className='square'>{children}</div>;
};

function App() {
	const [board, setBoard] = useState(Array(9).fill(null));
	const [turn, setTurn] = useState(turns.x);
	const [winner, setWinner] = useState(null);

	return (
		<main className='board'>
			<h1>Tic Tac Toe</h1>
			<section className='game'>
				{board.map((cell, index) => {
					return (
						<Square key={index} index={index}>
							{board[index]}
						</Square>
					);
				})}
			</section>
		</main>
	);
}

export default App;

