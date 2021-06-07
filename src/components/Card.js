import React, { useEffect, useState } from 'react';
import Avatar from '@material-ui/core/Avatar';
import Skeleton from '@material-ui/lab/Skeleton';
import GrainIcon from '@material-ui/icons/Grain';
import SupervisorAccountIcon from '@material-ui/icons/SupervisorAccount';
import ShareIcon from '@material-ui/icons/Share';
import './Card.css';

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
		loadImg(imgSrc, () => setIsLoadingImage(false));
		loadImg(thumbnailSrc, () => setIsLoadingContent(false));
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
			)}

			{/* Card-Content */}
			{isLoadingContent ? (
				<SkeletonContent />
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

/**
 * A helper function to load images into browser's cache
 * @param {string} url source URL of the image
 * @param {function():void} callback a function that is called upon image load completion
 */
const loadImg = (url, callback) => {
	let loader = document.createElement('img');
	loader.src = url;

	loader.addEventListener('load', () => {
		loader = null;
		callback();
	});
};

const SkeletonContent = () => (
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
);
