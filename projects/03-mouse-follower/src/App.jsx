import { useState, useEffect } from 'react';

const FollowMouse = () => {
	const [enable, setEnable] = useState(false);
	const [position, setPosition] = useState({ x: 0, y: 0 });

	useEffect(() => {
		const handleMove = e => {
			const { clientX, clientY } = e;
			setPosition({ x: clientX, y: clientY });
		};

		if (enable) window.addEventListener('pointermove', handleMove);

		return () => {
			window.removeEventListener('pointermove', handleMove);
		};
	}, [enable]);

	return (
		<main>
			<div
				style={{
					position: 'absolute',
					backgroundColor: '#09f',
					borderRadius: '50%',
					opacity: 0.8,
					pointerEvents: 'none',
					top: -15,
					left: -15,
					width: '40px',
					height: '40px',
					transform: `translate(${position.x}px, ${position.y}px)`,
				}}
			/>
			<button onClick={() => setEnable(!enable)}>
				{enable ? 'Desactivar' : 'Activar'} seguir puntero
			</button>
		</main>
	);
};

function App() {
	const [mounted, setMounted] = useState(false);
	return (
		<main>
			{mounted && <FollowMouse />}
			<button
				onClick={() => {
					setMounted(!mounted);
				}}
			>
				Toggle mounted FollowMouse componente
			</button>
		</main>
	);
}

export default App;

