import { useState } from 'react';

export const TwitterFollowCard = ({ children, formatUserName, userName }) => {
	const [isFollowing, setIsFollowing] = useState(false);
	const text = isFollowing ? 'Unfollow' : 'Follow';
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
					<span className='tw-followCard-infoUserName'>
						{formatUserName(userName)}
					</span>
				</div>
			</header>

			<aside>
				<button className={buttonClassName} onClick={handleClick}>
					{text}
				</button>
			</aside>
		</article>
	);
};
