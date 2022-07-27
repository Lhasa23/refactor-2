import { describe, expect, it } from 'vitest'
import { createStatementData } from '../../src/Chapter1/createStatementData'

// The two tests marked with concurrent will be run in parallel
describe('test statement', () => {
	it('create correct statement data', () => {
		expect(createStatementData(
			{
				customer: 'ShiYi',
				performances: [{
					playID: 'a-work',
					audience: 20
				}]
			},
			{ 'a-work': { name: 'A Great Work', type: 'comedy' } }
		)).toStrictEqual({
			customer: 'ShiYi',
			performances: [{
				playID: 'a-work',
				audience: 20,
				play: {
					name: 'A Great Work',
					type: 'comedy'
				},
				amount: 36000,
				volumeCredits: 4
			}],
			totalAmount: 36000,
			totalVolumeCredits: 4
		})
	})
})
