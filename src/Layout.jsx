import React from 'react';

import Header from './components/Header';
import Card from './components/Card';
import Footer from './components/Footer';

export default function Layout() {
	return (
		<>
			<div className="container">
				<Header />
				<Card
					title="Some text"
					date="Post date: 07/10/2020"
					image="https://api.adorable.io/avatars/285/abott@adorable.png"
				/>
				<Card
					title="Another text"
					date="Post date: 06/10/2020"
					image="https://api.adorable.io/avatars/285/abott@angry.png"
				/>
				<Card
					title="Check for fun"
					date="Post date: 05/10/2020"
					image="https://api.adorable.io/avatars/285/abott@sad.png"
				/>
				<Card
					title="Testing"
					date="Post date: 04/10/2020"
					image="https://api.adorable.io/avatars/285/abott@happy.png"
				/>
			</div>
			<Footer />
		</>
	);
}
