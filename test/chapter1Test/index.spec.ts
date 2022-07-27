import { describe, expect, it } from 'vitest'
import indexFn from '../../src/Chapter1'

// The two tests marked with concurrent will be run in parallel
describe('test index', () => {
	it('renders correctly', () => {
		expect(indexFn()).toBe(`<h1>Statement for BigCo</h1>
<table>
<tr><th>play</th><th>seats</th><th>cost</th></tr> <tr><td>Hamlet</td><td>55</td><td>$650.00</td></tr>
 <tr><td>As You Like It</td><td>35</td><td>$580.00</td></tr>
 <tr><td>Othello</td><td>40</td><td>$500.00</td></tr>
</table>
<p>Amount owed is <em>$1,730.00</em></p>
<p>You earned <em>47</em> credits</p>
`)
	})
})