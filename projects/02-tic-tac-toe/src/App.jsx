import { useState } from 'react';
import './App.css';

const TURNS = {
	x: 'X',
	o: 'O',
};

const Square = ({ children, isSelected, updateBoard, index }) => {
	const className = `square ${isSelected ? 'is-selected' : ''}`;
	return <div className={className}>{children}</div>;
};

function App() {
	const [board, setBoard] = useState(Array(9).fill(null));
	const [turn, setTurn] = useState(TURNS.x);
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

			<section className='turn'>
				<Square isSelected={turn == TURNS.x}>{TURNS.x}</Square>
				<Square isSelected={turn == TURNS.o}>{TURNS.o}</Square>
			</section>
		</main>
	);
}

export default App;

