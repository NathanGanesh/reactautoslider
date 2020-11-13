import React, { useState, useEffect } from 'react';
import data from './data';
import Person from './Person';

function App() {
	const [ index, setIndex ] = React.useState(1);

	const checkNumber = (number) => {
		if (number > data.length - 1) {
			return 0;
		}
		if (number < 0) {
			return data.length - 1;
		}
		return number;
	};

	const nextPerson = () => {
		setIndex((index) => {
			let newIndex = index + 1;
			return checkNumber(newIndex);
		});
	};
	const prevPerson = () => {
		setIndex((index) => {
			let newIndex = index - 1;
			return checkNumber(newIndex);
		});
	};

	useEffect(
		() => {
			let slider = setInterval(() => {
				setIndex((oldIndex) => {
					let index = oldIndex + 1;
					if (index > data.length - 1) {
						index = 0;
					}
					return index;
				});
			}, 5000);
			return () => {
				clearInterval(slider);
			};
		},
		[ index ]
	);

	return (
		<main>
			<h2>
				<span className="slide">/</span> Reviews
			</h2>
			<div>
				<Person person={data[index]} key={data[index].key} nextPerson={nextPerson} prevPerson={prevPerson} />
			</div>
		</main>
	);
}

export default App;
