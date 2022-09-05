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

	return (
		<div className='App'>
			<PieChart values={inputs} />
			<Legend values={inputs} />
			<div className='data'>
				{newInput(1)}
				{newInput(2)}
				{newInput(3)}
			</div>
		</div>
	);
}

export default App;
