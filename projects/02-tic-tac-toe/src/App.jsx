import { useState } from 'react';
import confetti from 'canvas-confetti';
import { Square } from './components/Square';
import { TURNS } from './constants';
import { checkWinnerFrom, checkEndGame } from './logic/board';
import './App.css';
import { WinnerModal } from './components/WinnerModal';

function App() {
	const [board, setBoard] = useState(Array(9).fill(null));
	const [turn, setTurn] = useState(TURNS.x);
	const [winner, setWinner] = useState(null);

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
		const newWinner = checkWinnerFrom(newBoard);
		if (newWinner) {
			setWinner(newWinner);
			confetti({
				particleCount: 100,
				spread: 70,
				origin: { y: 0.6 },
			});
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

			<WinnerModal resetGame={resetGame} winner={winner} />
		</main>
	);
}

export default App;

