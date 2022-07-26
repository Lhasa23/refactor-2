import { statement } from './statement'
import { readTextFile } from './readTextFile'

export default function indexFn () {
	return statement(readTextFile('./assets/invoices.json'), readTextFile('./assets/plays.json'))
}
