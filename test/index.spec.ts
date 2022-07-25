import { describe, expect, it } from 'vitest'
import indexFn from '../src'

// The two tests marked with concurrent will be run in parallel
describe('test test', () => {
	it('renders correctly', () => {
		expect(indexFn()).toBe(`Statement for BigCo
 Hamlet: $650.00 (55 seats)
 As You Like It: $580.00 (35 seats)
 Othello: $500.00 (40 seats)
Amount owed is $1,730.00
You earned 47 credits
`)
	})
})