import { useState } from "react";
import Legend from "./components/Legend";
import PieChart from "./components/PieChart";
import Controls from "./components/Controls";

function App() {
	const [load, setLoad] = useState(false);
	const [parts, setParts] = useState(null);
	const [inputs, setInputs] = useState({});
	const [controls, setControls] = useState({ x: 15, y: 45, z: 0, s: 1 });
	let styles = { "--x": controls.x, "--y": controls.y, "--z": controls.z, "--scale": controls.s };

	let fullValue = Object.values(inputs).reduce((a, c) => +a + +c, 0);

	function initValues(parts) {
		let obj = {};
		for (let i = 1; i <= parts; i++) {
			obj[`--value${i}`] = 1;
		}
		return obj;
	}

	const newInput = (number) => (
		<div className='input' key={number}>
			<label htmlFor={number}>field - {number}</label>
			<input
				min={0}
				step={1}
				type='number'
				id={number}
				defaultValue={1}
				onChange={(e) => {
					setInputs({ ...inputs, ["--value" + number]: e.target.value });
				}}
			/>
		</div>
	);

	function start(count) {
		let arr = [];
		for (let i = 1; i < count + 1; i++) {
			arr.push(newInput(i));
		}
		return arr;
	}

	return (
		<div className={`App ${load ? "load" : ""}`} style={styles}>
			<div className={`modal ${load ? "load" : ""}`}>
				<label htmlFor='parts-number'>set parts number</label>
				<input
					min={2}
					max={10}
					step={1}
					type='number'
					name='parts-number'
					id='parts-number'
					onChange={(e) => {
						setParts(+e.target.value);

						setInputs(() => initValues(parts));
					}}
				/>
				<button onClick={() => setLoad(true)}>load</button>
			</div>
			<h1>Total - {fullValue}</h1>
			<PieChart values={inputs} fullValue={fullValue} parts={parts} />
			<Legend values={inputs} fullValue={fullValue} parts={parts} />
			<div className='sidebar'>
				{start(parts)}
				<Controls controls={controls} setControls={setControls} />
			</div>
		</div>
	);
}

export default App;
