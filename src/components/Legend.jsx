import React from "react";

export default function Legend({ values, fullValue, parts }) {
	const newItem = (num) => (
		<li key={`--value--${num}`}>
			{`field-${num}`}
			<br />
			{values["--value" + num]}
			{` (${((values["--value" + num] / fullValue) * 100).toFixed(2)}%) `}
		</li>
	);
	function start(count) {
		let arr = [];
		for (let i = 1; i < count + 1; i++) {
			arr.push(newItem(i));
		}
		return arr;
	}
	let array = start(parts);

	return <ul className='legend'>{array}</ul>;
}
