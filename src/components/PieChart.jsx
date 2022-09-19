import React from "react";

export default function PieChart({ values, fullValue, parts }) {
	let styles = {};
	let temp = [];
	const updateStyle = (count) => {
		for (let i = 0; i < count; i++) {
			if (i === 0) {
				temp[i] = +values[`--value${i + 1}`];
				styles[`--value${i + 1}`] = `${((temp[i] / fullValue) * 100).toFixed(2)}%`;
			} else {
				temp[i] = temp[i - 1] + +values[`--value${i + 1}`];
				styles[`--value${i + 1}`] = `${((temp[i] / fullValue) * 100).toFixed(2)}%`;
			}
		}
	};
	updateStyle(parts);
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
