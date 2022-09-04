import "./App.css";
import Legend from "./components/Legend";
import PieChart from "./components/PieChart";

function App() {
	const style = {};
	return (
		<div className='App'>
			<PieChart style={style} />
			<Legend />
			<div className='data'>
				<div className='input'>
					<label for='1'>1</label> <input id='1' />
				</div>
				<div className='input'>
					<label for='2'>2</label> <input id='2' />
				</div>
				<div className='input'>
					<label for='3'>3</label> <input id='3' />
				</div>
				<div className='input'>
					<label for='4'>4</label> <input id='4' />
				</div>
				<div className='input'>
					<label for='5'>5</label> <input id='5' />
				</div>
				<div className='input'>
					<label for='6'>6</label> <input id='6' />
				</div>
				<div className='input'>
					<label for='7'>7</label> <input id='7' />
				</div>
				<div className='input'>
					<label for='8'>8</label> <input id='8' />
				</div>
				<div className='input'>
					<label for='9'>9</label> <input id='9' />
				</div>
				<div className='input'>
					<label for='10'>10</label> <input id='10' />
				</div>
			</div>
		</div>
	);
}

export default App;
