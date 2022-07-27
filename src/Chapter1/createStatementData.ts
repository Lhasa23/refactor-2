import { CustomizedPerformance, Invoices, Performance, Play, Plays } from './statement'

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
		const result = Object.assign({ amount: 0, volumeCredits: 0, play: { name: '', type: '' } }, aPerformance)
		result.play = getPlay(result)
		result.amount = amountFor(result)
		result.volumeCredits = calculateVolumeCredits(result)
		return result
	}

	function getPlay (performance: Performance): Play {
		return plays[performance.playID]
	}

	function amountFor (aPerformance: CustomizedPerformance) {
		let result = 0
		switch (aPerformance.play.type) {
			case 'tragedy':
				result = 40000
				if (aPerformance.audience > 30) {
					result += 1000 * (aPerformance.audience - 30)
				}
				break
			case 'comedy':
				result = 30000
				if (aPerformance.audience > 20) {
					result += 10000 + 500 * (aPerformance.audience - 20)
				}
				result += 300 * aPerformance.audience
				break
			default:
				throw new Error(`unknown type: ${aPerformance.play.type}`)
		}

		return result
	}

	function calculateVolumeCredits (aPerformance: CustomizedPerformance) {
		let result = 0
		result += Math.max(aPerformance.audience - 30, 0)
		if ('comedy' === aPerformance.play.type) result += Math.floor(aPerformance.audience / 5)
		return result
	}

	return result
}