import './App.css';
import { TwitterFollowCard } from './TwitterFollowCard';

const users = [
	{
		userName: 'Uh_WhyYouCare',
		name: 'Alme',
		isFollowing: true,
	},
	{
		userName: 'midudev',
		name: 'Miguel Angel Durán',
		isFollowing: false,
	},
];
export function App() {
	return (
		<section className='App'>
			{users.map(({ userName, name, isFollowing }) => (
				<TwitterFollowCard
					key={userName}
					userName={userName}
					initialIsFollowing={isFollowing}
				>
					{name}
				</TwitterFollowCard>
			))}
		</section>
	);
}
