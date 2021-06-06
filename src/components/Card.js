import React, { useEffect, useState } from 'react';
import Avatar from '@material-ui/core/Avatar';
import Skeleton from '@material-ui/lab/Skeleton';
import GrainIcon from '@material-ui/icons/Grain';
import SupervisorAccountIcon from '@material-ui/icons/SupervisorAccount';
import ShareIcon from '@material-ui/icons/Share';
import './card.css';

function Card(props) {
	const {
		imgSrc,
		category,
		datePosted,
		title,
		description,
		numPublications,
		numReach,
		numShare,
		numContributors,
		thumbnailSrc,
	} = props.data;

	const [isLoadingContent, setIsLoadingContent] = useState(true);
	const [isLoadingImage, setIsLoadingImage] = useState(true);

	useEffect(() => {
		// let imgDiv = document.querySelector('.imageDiv');
		// setIsLoadingImage(true);

		let preLoadThumbnails = document.createElement('img');
		preLoadThumbnails.src = thumbnailSrc;

		let preloaderImg = document.createElement('img');
		preloaderImg.src = imgSrc;

		preLoadThumbnails.addEventListener('load', (event) => {
			preLoadThumbnails = null;
			setIsLoadingContent(false);
		});

		preloaderImg.addEventListener('load', (event) => {
			setIsLoadingImage(false);
			document.querySelector(
				'.imageDiv'
			).style.backgroundImage = `url(${imgSrc})`;
			preloaderImg = null;
		});
	}, [imgSrc, thumbnailSrc]);

	return (
		<div className="card">
			{/* Card-Image */}
			{isLoadingImage ? (
				<Skeleton className="skeletonImg" animation="wave" variant="rect" />
			) : (
				<div
					className="imageDiv"
					style={{ backgroundImage: `url(${imgSrc})` }}
				></div>
				// <img src={imgSrc} alt="something" />
			)}

			{/* Card-Content */}
			{isLoadingContent ? (
				<div className="skeletonContent">
					<Skeleton variant="text" height={40} width="40%" />
					<Skeleton
						variant="text"
						height={60}
						width="90%"
						style={{ marginBottom: '0.7em' }}
					/>
					<Skeleton variant="text" height={30} width="70%" />
					<Skeleton
						variant="text"
						height={30}
						width="80%"
						style={{ marginBottom: '0.5em' }}
					/>
					<Skeleton
						variant="text"
						height={30}
						width="65%"
						style={{ marginBottom: '0.3em' }}
					/>

					<div className="inlineSkeleton">
						<Skeleton variant="text" height={40} width="20%" />
						<Skeleton variant="text" height={40} width="15%" />
						<Skeleton variant="text" height={40} width="20%" />
					</div>
				</div>
			) : (
				<div className="cardContent">
					<span className="categoryDate">
						{category} ÷ {datePosted}
					</span>
					<h2>{title}</h2>
					<p>{description}</p>
					<span className="avatars">
						<Avatar src={thumbnailSrc} />
						<Avatar src={thumbnailSrc} className="shiftLeft" />
						<Avatar src={thumbnailSrc} className="shiftLeft" />
						<span>+{numPublications} publications globally</span>
					</span>
					<div className="stats">
						<span>
							<GrainIcon /> <span>{numReach}B</span>
						</span>
						<span>
							<SupervisorAccountIcon /> <span>{numContributors}</span>
						</span>
						<span>
							<ShareIcon /> <span>{numShare}K</span>
						</span>
					</div>
				</div>
			)}
		</div>
	);
}

export default Card;
