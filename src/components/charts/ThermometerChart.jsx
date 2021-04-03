import React from "react";
import Thermometer from "react-thermometer";
const ThermometerChart = () => {
	<div>
		<Thermometer
			min={0}
			max={30}
			width={20}
			height={300}
			backgroundColor={'blue'}
			fillColor={'green'}
			current={10}
		/>
	</div>
}

export default ThermometerChart