import { renderPlainText } from './renderPlainText'
import { createStatementData } from './createStatementData'
import { Invoices, Plays } from './type'

export function statement (invoice: Invoices, plays: Plays) {
	const statementData = createStatementData(invoice, plays)

	return renderPlainText(statementData)
}
