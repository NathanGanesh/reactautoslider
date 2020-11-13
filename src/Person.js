import React from 'react';
import { FiChevronRight, FiChevronLeft } from 'react-icons/fi';
import { FaQuoteRight } from 'react-icons/fa';

export default function Person({ person, nextPerson, prevPerson }) {
	const { image, name, title, quote } = person;
	console.log(person);
	return (
		<div className="person">
			<div>
				<img src={image} />
			</div>
			<div className="person-descripion">
				<p className="person-name">{name}</p>
				<p className="person-title">{title}</p>
				<div className="button-click">
					<button onClick={nextPerson}>
						<FiChevronLeft />
					</button>
					<button onClick={prevPerson}>
						<FiChevronRight />
					</button>
				</div>
				<p className="quote-description">{quote}</p>
				<FaQuoteRight className="quote" />
			</div>
		</div>
	);
}
