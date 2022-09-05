import React from "react";

export default function Legend({ values, fullValue }) {
	const newItem = (num) =>
		values["--value" + num] && (
			<li>
				{values["--value" + num]}
				{` (${((values["--value" + num] / fullValue) * 100).toFixed(2)}%) `}
			</li>
		);

	return (
		<ul className='legend'>
			{newItem(1)}
			{newItem(2)}
			{newItem(3)}
		</ul>
	);
}
