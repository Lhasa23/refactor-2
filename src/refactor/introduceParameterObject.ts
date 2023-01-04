const station = {
	name: 'ZB1',
	readings: [
		{ temp: 47, time: '2016-11-10 09:10' },
		{ temp: 53, time: '2016-11-10 09:20' },
		{ temp: 58, time: '2016-11-10 09:30' },
		{ temp: 53, time: '2016-11-10 09:40' },
		{ temp: 51, time: '2016-11-10 09:50' }
	]
}

// before
function readingsOutsideRange (station, min, max) {
	return station.readings
		.filter(r => r.temp < min || r.temp > max)
}

alerts = readingsOutsideRange(station,
	operatingPlan.temperatureFloor,
	operatingPlan.temperatureCeiling)

// after

class Range {
	private max: any
	private min: any

	constructor (min, max) {
		this.min = min
		this.max = max
	}

	contain (arg) {
		return arg < this.min || arg > this.max
	}
}

const range = new Range(operatingPlan.temperatureFloor, operatingPlan.temperatureCeiling)

alerts = readingsOutsideRange(station, range)

function readingsOutsideRange (station, range) {
	return station.readings
		.filter(r => range.contain(r.temp))
}
