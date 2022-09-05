import React from "react";

export default function Legend({ values }) {
	let inputValues = Object.values(values);
	let fullValue = inputValues.reduce((a, c) => +a + +c, 0);

	const newItem = (num) =>
		values["--value" + num] && (
			<li>
				{values["--value" + num]}
				{` (${((values["--value" + num] / fullValue) * 100).toFixed(2)}%) `}
			</li>
		);

	return (
		<div className='legend'>
			<h1>Total - {fullValue}</h1>
			<ul className='list'>
				{newItem(1)}
				{newItem(2)}
				{newItem(3)}
			</ul>
		</div>
	);
}
