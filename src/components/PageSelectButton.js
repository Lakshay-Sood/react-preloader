import React, { useEffect, useState } from 'react';
import Skeleton from '@material-ui/lab/Skeleton';
import ArrowLeftIcon from '@material-ui/icons/ArrowLeft';
import ArrowRightIcon from '@material-ui/icons/ArrowRight';
import './PageSelectButton.css';

function PageSelectButton() {
	const [isLoading, setIsLoading] = useState(true);

	useEffect(() => {
		setTimeout(() => setIsLoading(false), 2000);
	}, []);

	return (
		<div>
			<div className="pageSelector">
				{isLoading ? (
					<Skeleton variant="text" height={40} width="90%" />
				) : (
					<>
						<ArrowLeftIcon style={{ borderRight: '1px solid gray' }} />
						<span> 1 of 56K </span>
						<ArrowRightIcon style={{ borderLeft: '1px solid gray' }} />
					</>
				)}
			</div>
		</div>
	);
}

export default PageSelectButton;
