import React from "react";

export default function Legend({ values, fullValue, parts }) {
	const newItem = (num) => (
		<li key={`--value--${num}`}>
			<i>{`field-${num}`}</i>

			<b>
				{values["--value" + num]}
				{` (${((values["--value" + num] / fullValue) * 100).toFixed(2)}%) `}
			</b>
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
