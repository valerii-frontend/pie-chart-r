import React from "react";

export default function PieChart({ values, fullValue }) {
	let styles = {};

	const updateStyle = (count) => {
		let temp = [];
		temp[0] = +values[`--value${1}`];
		styles[`--value${1}`] = `${((temp[0] / fullValue) * 100).toFixed(2)}%`;
		temp[1] = temp[0] + +values[`--value${2}`];
		styles[`--value${2}`] = `${((temp[1] / fullValue) * 100).toFixed(2)}%`;
		temp[2] = temp[1] + +values[`--value${3}`];
		styles[`--value${3}`] = `${((temp[2] / fullValue) * 100).toFixed(2)}%`;
	};
	updateStyle();

	return (
		<div className='wrap' style={styles}>
			<div className='pie pie_1'></div>
			<div className='pie pie_2'></div>
			<div className='pie pie_3'></div>
			<div className='pie pie_4'></div>
			<div className='pie pie_5'></div>
			<div className='pie pie_6'></div>
			<div className='pie pie_7'></div>
			<div className='pie pie_8'></div>
			<div className='pie pie_9'></div>
			<div className='pie pie_10'></div>
			<div className='pie pie_11'></div>
			<div className='pie pie_12'></div>
			<div className='pie pie_13'></div>
			<div className='pie pie_14'></div>
			<div className='pie pie_15'></div>
			<div className='pie pie_16'></div>
			<div className='pie pie_17'></div>
			<div className='pie pie_18'></div>
			<div className='pie pie_19'></div>
			<div className='pie pie_20'></div>
		</div>
	);
}
