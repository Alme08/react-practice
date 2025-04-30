import './App.css';
import { TwitterFollowCard } from './TwitterFollowCard';

export function App() {
	const formatUserName = userName => `@${userName}`;

	return (
		<section className='App'>
			<TwitterFollowCard
				formatUserName={formatUserName}
				userName='Uh_WhyYouCare'
				name='Alme'
			>
				Alme
			</TwitterFollowCard>
			<TwitterFollowCard formatUserName={formatUserName} userName='midudev'>
				Miguel Angel Durán
			</TwitterFollowCard>
		</section>
	);
}
