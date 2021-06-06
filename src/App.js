import Card from './components/Card';
import PageSelectButton from './components/PageSelectButton';
import './App.css';

function App() {
	const dataCard = {
		imgSrc:
			'https://www.inquirer.com/resizer/z1UbCvhMdY7beQm5HitlFYpaD5Q=/1400x932/smart/cloudfront-us-east-1.images.arcpublishing.com/pmn/3QIB3YQ4F5BSVCZUWE5Y3RFOD4.jpg',
		category: 'Technology',
		datePosted: 'May 29, 2021',
		title: "Bill gates regains his position as the World's richest",
		description:
			'lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum ',
		numPublications: 543,
		numReach: 23,
		numShare: 467,
		numContributors: 76,
	};

	return (
		<div className="App">
			<div className="container">
				<div className="title">
					<h2>Media Coverage: Highlights</h2>
					<span>See all stories {'>'}</span>
				</div>

				<div className="cardsContainer">
					<Card data={dataCard}></Card>
					<Card data={dataCard}></Card>
					<Card data={dataCard}></Card>
				</div>

				<div className="pageSelectButton">
					<PageSelectButton />
				</div>
			</div>
		</div>
	);
}

export default App;
