import { useState } from 'react';
import './App.css';

const TURNS = {
	x: 'X',
	o: 'O',
};

const WINNER_COMBOS = [
	[0, 1, 2],
	[3, 4, 5],
	[6, 7, 8],
	[0, 3, 6],
	[1, 4, 7],
	[2, 5, 8],
	[0, 4, 8],
	[2, 4, 6],
];

const Square = ({ children, isSelected, updateBoard, index }) => {
	const className = `square ${isSelected ? 'is-selected' : ''}`;
	const handleClick = () => {
		updateBoard(index);
	};

	return (
		<div className={className} onClick={handleClick}>
			{children}
		</div>
	);
};

function App() {
	const [board, setBoard] = useState(Array(9).fill(null));
	const [turn, setTurn] = useState(TURNS.x);
	const [winner, setWinner] = useState(null);

	const checkWinner = board => {
		for (const combo of WINNER_COMBOS) {
			const [a, b, c] = combo;
			if (board[a] && board[a] === board[b] && board[a] === board[c]) {
				return board[a];
			}
		}
		return null;
		// Check for a draw
	};

	const checkEndGame = board => {
		return board.every(square => square !== null);
	};

	const resetGame = () => {
		setBoard(Array(9).fill(null));
		setTurn(TURNS.x);
		setWinner(null);
	};

	const updateBoard = index => {
		if (board[index] || winner) return;
		const newBoard = [...board];
		newBoard[index] = turn;
		setBoard(newBoard);
		const newTurn = turn === TURNS.x ? TURNS.o : TURNS.x;
		setTurn(newTurn);
		// Check for a winner
		const newWinner = checkWinner(newBoard);
		if (newWinner) {
			setWinner(newWinner);
		} else if (checkEndGame(newBoard)) {
			setWinner(false);
		}
	};

	return (
		<main className='board'>
			<h1>Tic Tac Toe</h1>
			<button onClick={resetGame}>Reset</button>
			<section className='game'>
				{board.map((cell, index) => {
					return (
						<Square key={index} index={index} updateBoard={updateBoard}>
							{board[index]}
						</Square>
					);
				})}
			</section>

			<section className='turn'>
				<Square isSelected={turn == TURNS.x}>{TURNS.x}</Square>
				<Square isSelected={turn == TURNS.o}>{TURNS.o}</Square>
			</section>

			<section>
				{winner !== null && (
					<section className='winner'>
						<div className='text'>
							<h2>{winner === false ? 'Draw' : 'Winner:'}</h2>
							<header className='win'>
								{winner && <Square>{winner}</Square>}
							</header>

							<footer>
								<button onClick={resetGame}>Reset</button>
							</footer>
						</div>
					</section>
				)}
			</section>
		</main>
	);
}

export default App;

