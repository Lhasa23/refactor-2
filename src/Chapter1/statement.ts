export type Invoices = {
	customer: string,
	performances: Performance[]
}

type Performance = { playID: string, audience: number }

export type Plays = {
	[key: string]: { name: string, type: 'tragedy' | 'comedy' }
}

export function statement (invoice: Invoices, plays: Plays) {
	const statementData = {
		customer: invoice.customer,
		performances: invoice.performances
	}
	return renderPlainText(statementData, plays)
}

function renderPlainText (data: { customer: string; performances: Invoices['performances'] }, plays: Plays) {
	function numberToCurrency (aNumber: number) {
		return new Intl.NumberFormat('en-US',
			{
				style: 'currency',
				currency: 'USD',
				minimumFractionDigits: 2
			}).format(aNumber / 100)
	}

	function getPlay (performance: Performance) {
		return plays[performance.playID]
	}

	function audienceBonus (aPerformance: Performance) {
		let result = 0
		switch (getPlay(aPerformance).type) {
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
				throw new Error(`unknown type: ${getPlay(aPerformance).type}`)
		}
		return result
	}

	function calculateVolumeCredits (aPerformance: Performance) {
		let result = 0
		result += Math.max(aPerformance.audience - 30, 0)
		if ('comedy' === getPlay(aPerformance).type) result += Math.floor(aPerformance.audience / 5)
		return result
	}

	function totalVolumeCredits () {
		let result = 0
		for (let perf of data.performances) {
			result += calculateVolumeCredits(perf)
		}
		return result
	}

	function totalAmount () {
		let result = 0
		for (let perf of data.performances) {
			result += audienceBonus(perf)
		}
		return result
	}

	let result = `Statement for ${data.customer}\n`
	for (let perf of data.performances) {
		result += ` ${getPlay(perf).name}: ${numberToCurrency((audienceBonus(perf)))} (${(perf.audience)} seats)\n`
	}
	result += `Amount owed is ${numberToCurrency((totalAmount()))}\n`
	result += `You earned ${(totalVolumeCredits())} credits\n`
	return result
}
