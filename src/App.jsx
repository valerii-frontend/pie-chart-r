import { useState } from "react";
import Legend from "./components/Legend";
import PieChart from "./components/PieChart";
import Controls from "./components/Controls";

function App() {
	const [load, setLoad] = useState(false);
	const [inputs, setInputs] = useState({ "--value1": 1, "--value2": 1, "--value3": 1 });
	const newInput = (number) => (
		<div className='input'>
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
	const [controls, setControls] = useState({ x: 15, y: 45, z: 0, s: 1 });
	let fullValue = Object.values(inputs).reduce((a, c) => +a + +c, 0);

	return (
		<div
			className={`App ${load ? "load" : ""}`}
			style={{ "--x": controls.x, "--y": controls.y, "--z": controls.z, "--scale": controls.s }}>
			<div className={`modal ${load ? "load" : ""}`}>
				<button onClick={() => setLoad(true)}>load</button>
			</div>
			<h1>Total - {fullValue}</h1>
			<PieChart values={inputs} fullValue={fullValue} />
			<Legend values={inputs} fullValue={fullValue} />
			<div className='sidebar'>
				{newInput(1)}
				{newInput(2)}
				{newInput(3)}
				<Controls controls={controls} setControls={setControls} />
			</div>
		</div>
	);
}

export default App;
