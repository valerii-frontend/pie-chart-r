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

	const [interfaceToggle, setInterfaceToggle] = useState(true);

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
					}}
				/>
				<button
					onClick={() => {
						setLoad(true);
						setInputs(() => initValues(parts));
					}}>
					load
				</button>
			</div>
			{interfaceToggle && <h1>Total - {fullValue} (100%)</h1>}
			<div className='interface-toggle'>
				<label htmlFor='ui-toggle'>
					<b>{interfaceToggle ? "hide" : "show"}</b> interface
				</label>
				<input id='ui-toggle' type='checkbox' onChange={() => setInterfaceToggle((p) => !p)} />
			</div>
			<PieChart values={inputs} fullValue={fullValue} parts={parts} />
			{interfaceToggle && <Legend values={inputs} fullValue={fullValue} parts={parts} />}
			{interfaceToggle && (
				<div className='sidebar'>
					{start(parts)}
					<Controls controls={controls} setControls={setControls} />
				</div>
			)}
		</div>
	);
}

export default App;
