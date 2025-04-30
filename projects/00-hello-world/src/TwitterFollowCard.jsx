import { useState } from 'react';

export const TwitterFollowCard = ({
	children,
	userName = 'unknown',
	initialIsFollowing = false,
}) => {
	const [isFollowing, setIsFollowing] = useState(initialIsFollowing);
	const text = isFollowing ? 'Following' : 'Follow';
	const buttonClassName = isFollowing
		? 'tw-followCard-button is-following'
		: 'tw-followCard-button';

	const handleClick = () => {
		setIsFollowing(!isFollowing);
	};
	return (
		<article className='tw-followCard'>
			<header className='tw-followCard-header'>
				<img
					className='tw-followCard-avatar'
					src={`https://unavatar.io/x/${userName}`}
					alt='Avatar de Alme'
				/>
				<div className='tw-followCard-info'>
					<strong className='tw-followCard-infoName'>{children}</strong>
					<span className='tw-followCard-infoUserName'>@{userName}</span>
				</div>
			</header>

			<aside>
				<button className={buttonClassName} onClick={handleClick}>
					<span className='tw-followCard-text'>{text}</span>
					<span className='tw-followCard-stopFollow'>Unfollow</span>
				</button>
			</aside>
		</article>
	);
};
