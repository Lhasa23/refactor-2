// The reading of the pressure value from the sensor is simulated in this implementation.
// Because the focus of the exercise is on the other class.

export default class Sensor {

	public popNextPressurePsiValue () {
		const pressureTelemetryValue = this.samplePressure()

		return this.offset() + pressureTelemetryValue
	}

	private samplePressure () {
		// placeholder implementation that simulate a real sensor in a real tire
		return Math.floor(6 * Math.random() * Math.random())
	}

	private offset () {
		return 16
	}

}
