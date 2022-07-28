import { numberToCurrency } from './numberToCurrency'
import { CustomizedPerformance } from './type'

export function renderPlainText (data: { customer: string; performances: CustomizedPerformance[], totalVolumeCredits: number, totalAmount: number }) {
	let result = `<h1>Statement for ${data.customer}</h1>\n`
	result += '<table>\n'
	result += '<tr><th>play</th><th>seats</th><th>cost</th></tr>'
	for (let perf of data.performances) {
		result += ` <tr><td>${perf.play.name}</td><td>${perf.audience}</td>`
		result += `<td>${numberToCurrency(perf.amount)}</td></tr>\n`
	}
	result += '</table>\n'
	result += `<p>Amount owed is <em>${numberToCurrency(data.totalAmount)}</em></p>\n`
	result += `<p>You earned <em>${data.totalVolumeCredits}</em> credits</p>\n`
	return result
}