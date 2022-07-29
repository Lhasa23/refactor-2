import { CustomizedPerformance, Invoices, Performance, Play, Plays } from './type'

function createPerformanceCalculator (aPerformance: Performance, aPlay: Play) {
	switch (aPlay.type) {
		case 'tragedy':
			return new TragedyCalculator(aPerformance, aPlay)
		case 'comedy':
			return new ComedyCalculator(aPerformance, aPlay)
		default:
			throw new Error(`unknown type: ${aPlay.type}`)
	}
}

export function createStatementData (invoice: Invoices, plays: Plays) {
	const result = {
		customer: invoice.customer,
		performances: invoice.performances.map(createEnrichedPerformances),
		totalVolumeCredits: 0,
		totalAmount: 0
	}
	result.totalVolumeCredits = totalVolumeCredits(result)
	result.totalAmount = totalAmount(result)

	function totalVolumeCredits (data: typeof result) {
		return data.performances.reduce((total, perf) => total + perf.volumeCredits, 0)
	}

	function totalAmount (data: typeof result) {
		return data.performances.reduce((total, perf) => total + perf.amount, 0)
	}

	function createEnrichedPerformances (aPerformance: Performance): CustomizedPerformance {
		const calculator = createPerformanceCalculator(aPerformance, getPlay(aPerformance))
		const result = Object.assign({ amount: 0, volumeCredits: 0, play: { name: '', type: '' } }, calculator.performance)
		result.play = calculator.play
		result.amount = calculator.amount
		result.volumeCredits = calculator.volumeCredits
		return result
	}

	function getPlay (performance: Performance): Play {
		return plays[performance.playID]
	}

	return result
}

export default class PerformanceCalculator {
	public performance: Performance
	public play: Play

	constructor (aPerformance: Performance, aPlay: Play) {
		this.performance = aPerformance
		this.play = aPlay
	}

	get amount (): number {
		throw new Error('subclass responsibility')
	}

	get volumeCredits () {
		return Math.max(this.performance.audience - 30, 0)
	}
}

class TragedyCalculator extends PerformanceCalculator {
	get amount () {
		let result: number = 40000
		if (this.performance.audience > 30) {
			result += 1000 * (this.performance.audience - 30)
		}
		return result
	}
}

class ComedyCalculator extends PerformanceCalculator {
	get amount () {
		let result: number = 30000
		if (this.performance.audience > 20) {
			result += 10000 + 500 * (this.performance.audience - 20)
		}
		result += 300 * this.performance.audience
		return result
	}

	get volumeCredits () {
		return super.volumeCredits + Math.floor(this.performance.audience / 5)
	}
}
