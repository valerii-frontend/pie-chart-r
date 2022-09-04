import React from "react";

export default function Legend({ values }) {
	let inputValues = Object.values(values);
	let fullValue = inputValues.reduce((a, c) => +a + +c, 0);

	return (
		<ul className='legend'>
			<li>
				{values["--value1"]}
				{` (${((values["--value1"] / fullValue) * 100).toFixed(2)} %) `}
			</li>
			<li>
				{values["--value2"]}
				{` (${((values["--value2"] / fullValue) * 100).toFixed(2)} %) `}
			</li>
			<li>
				{values["--value3"]}
				{` (${((values["--value3"] / fullValue) * 100).toFixed(2)} %) `}
			</li>
		</ul>
	);
}
