import "./App.css";
import { useState } from "react";
import Legend from "./components/Legend";
import PieChart from "./components/PieChart";

function App() {
	const [inputs, setInputs] = useState({});

	return (
		<div className='App'>
			<PieChart values={inputs} />
			<Legend values={inputs} />
			<div className='data'>
				<div className='input'>
					<label htmlFor='1'>1</label>
					<input
						min={0}
						step={1}
						type='number'
						id='1'
						defaultValue={1}
						onChange={(e) => {
							setInputs({ ...inputs, "--value1": e.target.value });
						}}
					/>
				</div>
				<div className='input'>
					<label htmlFor='2'>2</label>
					<input
						min={0}
						step={1}
						type='number'
						defaultValue={1}
						id='2'
						onChange={(e) => {
							setInputs({ ...inputs, "--value2": e.target.value });
						}}
					/>
				</div>
				<div className='input'>
					<label htmlFor='3'>3</label>
					<input
						min={0}
						step={1}
						defaultValue={1}
						type='number'
						id='3'
						onChange={(e) => {
							setInputs({ ...inputs, "--value3": e.target.value });
						}}
					/>
				</div>
			</div>
		</div>
	);
}

export default App;
