export function statement (invoice: any, plays: any) {
	let totalAmount = 0
	let volumeCredits = 0
	let result = `Statement for ${invoice.customer}\n`

	function numberToCurrency (aNumber: number) {
		return new Intl.NumberFormat('en-US',
			{
				style: 'currency',
				currency: 'USD',
				minimumFractionDigits: 2
			}).format(aNumber / 100)
	}

	function getPlay (performance: any) {
		return plays[performance.playID]
	}

	function audienceBonus (aPerformance: any) {
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

	function calculateVolumeCredits (aPerformance: any) {
		let result = 0
		result += Math.max(aPerformance.audience - 30, 0)
		if ('comedy' === getPlay(aPerformance).type) result += Math.floor(aPerformance.audience / 5)
		return result
	}

	for (let perf of invoice.performances) {
		volumeCredits += calculateVolumeCredits(perf)

		// print line for this order
		result += ` ${getPlay(perf).name}: ${numberToCurrency((audienceBonus(perf)))} (${(perf.audience)} seats)\n`
		totalAmount += audienceBonus(perf)
	}
	result += `Amount owed is ${numberToCurrency((totalAmount))}\n`
	result += `You earned ${volumeCredits} credits\n`
	return result
}