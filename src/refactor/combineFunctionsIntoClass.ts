// init
const reading = { customer: 'ivan', quantity: 10, month: 5, year: 2017 }

function client1 () {
	const aReading = acquireReading()
	const baseCharge = baseRate(aReading.month, aReading.year) * aReading.quantity
}

function client2 () {
	const aReading = acquireReading()
	const base = (baseRate(aReading.month, aReading.year) * aReading.quantity)
	const taxableCharge = Math.max(0, base - taxThreshold(aReading.year))
}

function client3 () {
	const aReading = acquireReading()
	const basicChargeAmount = calculateBaseCharge(aReading)

	function calculateBaseCharge (aReading) {
		return baseRate(aReading.month, aReading.year) * aReading.quantity
	}
}

// start

// const reading = { customer: 'ivan', quantity: 10, month: 5, year: 2017 }
class Reading {
	constructor (data) {
		this.customer = data.customer
		this.quantity = data.quantity
		this.month = data.month
		this.year = data.year
	}
}

function getBaseCharge (aReading: any) {
	return baseRate(aReading.month, aReading.year) * aReading.quantity
}

function client1 () {
	const aReading = acquireReading()
	const baseCharge = getBaseCharge(aReading)
}

function client2 () {
	const aReading = acquireReading()
	const base = getBaseCharge(aReading)
	const taxableCharge = Math.max(0, base - taxThreshold(aReading.year))
}

function client3 () {
	const aReading = acquireReading()
	const basicChargeAmount = getBaseCharge(aReading)
}

// final
class Reading {
	constructor (data) {
		this.customer = data.customer
		this.quantity = data.quantity
		this.month = data.month
		this.year = data.year
	}

	get baseCharge () {
		return baseRate(this.month, this.year) * this.quantity
	}

	get taxableCharge () {
		return Math.max(0, this.baseCharge - taxThreshold(this.year))
	}
}

function client1 () {
	const aReading = acquireReading()
	const reading = new Reading(aReading)
	const baseCharge = reading.baseCharge
}

function client2 () {
	const aReading = acquireReading()
	const reading = new Reading(aReading)
	const base = reading.baseCharge
	const taxableCharge = reading.taxableCharge
}

function client3 () {
	const aReading = acquireReading()
	const reading = new Reading(aReading)
	const basicChargeAmount = reading.baseCharge
}


