import React, { useEffect, useState } from 'react';
import Skeleton from '@material-ui/lab/Skeleton';
import ArrowLeftIcon from '@material-ui/icons/ArrowLeft';
import ArrowRightIcon from '@material-ui/icons/ArrowRight';
import './PageSelectButton.css';

function PageSelectButton({ numPages }) {
	// const [isLoading, setIsLoading] = useState(true);

	// useEffect(() => {
	// 	setTimeout(() => setIsLoading(false), 1000);
	// }, []);

	return (
		<div>
			<div className="pageSelector">
				{numPages ? (
					<>
						<ArrowLeftIcon style={{ borderRight: '1px solid gray' }} />
						<span> 1 of {numPages}K </span>
						<ArrowRightIcon style={{ borderLeft: '1px solid gray' }} />
					</>
				) : (
					<Skeleton variant="text" height={40} width="90%" />
				)}
			</div>
		</div>
	);
}

export default PageSelectButton;
