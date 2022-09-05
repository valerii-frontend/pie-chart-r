import React from "react";

export default function Controls({ controls, setControls }) {
	return (
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
					Scale - <strong>{controls.s * 100}%</strong>
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
	);
}
