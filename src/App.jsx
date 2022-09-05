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
	const [rotate, setRotate] = useState({ x: 15, y: 45 });

	return (
		<div className='App' style={{ "--x": rotate.x, "--y": rotate.y, "--z": rotate.z }}>
			<PieChart values={inputs} />
			<Legend values={inputs} />
			<div className='data'>
				{newInput(1)}
				{newInput(2)}
				{newInput(3)}
				<div className='rotates'>
					<div className='x'>
						<label htmlFor='rangeX'>Rotate X</label>
						<input
							min={1}
							max={360}
							step={1}
							defaultValue={15}
							type='range'
							id='rangeX'
							onChange={(e) => {
								console.log(rotate);
								setRotate({ ...rotate, x: e.target.value });
							}}
						/>
					</div>
					<div className='y'>
						<label htmlFor='rangeY'>Rotate Y</label>
						<input
							min={1}
							max={360}
							step={1}
							defaultValue={15}
							type='range'
							id='rangeY'
							onChange={(e) => {
								console.log(rotate);
								setRotate({ ...rotate, y: e.target.value });
							}}
						/>
					</div>
					<div className='z'>
						<label htmlFor='rangeZ'>Rotate Z</label>
						<input
							min={1}
							max={360}
							step={1}
							defaultValue={0}
							type='range'
							id='rangeZ'
							onChange={(e) => {
								console.log(rotate);
								setRotate({ ...rotate, z: e.target.value });
							}}
						/>
					</div>
				</div>
			</div>
		</div>
	);
}

export default App;
