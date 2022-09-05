import "./App.css";
import { useState } from "react";
import Legend from "./components/Legend";
import PieChart from "./components/PieChart";

function App() {
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
		<div className='App' style={{ "--x": controls.x, "--y": controls.y, "--z": controls.z, "--scale": controls.s }}>
			<h1>Total - {fullValue}</h1>
			<PieChart values={inputs} fullValue={fullValue} />
			<Legend values={inputs} fullValue={fullValue} />
			<div className='data'>
				{newInput(1)}
				{newInput(2)}
				{newInput(3)}
				<div className='controls'>
					<div className='rotate-x'>
						<label htmlFor='rangeX'>
							Rotate X - <strong>{controls.x}°</strong>
						</label>

						<input
							min={0}
							max={360}
							step={1}
							defaultValue={15}
							type='range'
							id='rangeX'
							onChange={(e) => {
								setControls({ ...controls, x: e.target.value });
							}}
						/>
					</div>
					<div className='rotate-y'>
						<label htmlFor='rangeY'>
							Rotate Y - <strong>{controls.y}°</strong>
						</label>
						<input
							min={0}
							max={360}
							step={1}
							defaultValue={15}
							type='range'
							id='rangeY'
							onChange={(e) => {
								setControls({ ...controls, y: e.target.value });
							}}
						/>
					</div>
					<div className='rotate-z'>
						<label htmlFor='rangeZ'>
							Rotate Z - <strong>{controls.z}°</strong>
						</label>
						<input
							min={0}
							max={360}
							step={1}
							defaultValue={15}
							type='range'
							id='rangeZ'
							onChange={(e) => {
								setControls({ ...controls, z: e.target.value });
							}}
						/>
					</div>
					<div className='scale'>
						<label htmlFor='scale'>
							Scale - <strong>{controls.s}</strong>
						</label>
						<input
							min={1}
							max={2}
							step={0.2}
							defaultValue={1}
							type='range'
							id='scale'
							onChange={(e) => {
								setControls({ ...controls, s: e.target.value });
							}}
						/>
					</div>
				</div>
			</div>
		</div>
	);
}

export default App;
