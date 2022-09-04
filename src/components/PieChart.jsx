import React from "react";

export default function PieChart({ values }) {
	let styles = {};
	let temp = {};

	temp["--value1"] = +values["--value1"];
	temp["--value2"] = +values["--value1"] + +values["--value2"];
	temp["--value3"] = +values["--value1"] + +values["--value2"] + +values["--value3"];
	let inputValues = Object.values(values);

	let fullValue = inputValues.reduce((a, c) => +a + +c, 0);

	styles["--value1"] = `${((temp["--value1"] / fullValue) * 100).toFixed(2)}%`;
	styles["--value2"] = `${((temp["--value2"] / fullValue) * 100).toFixed(2)}%`;
	styles["--value3"] = `${((temp["--value3"] / fullValue) * 100).toFixed(2)}%`;

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
		</div>
	);
}
