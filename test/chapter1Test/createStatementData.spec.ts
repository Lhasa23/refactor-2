import { describe, expect, it } from 'vitest'
import { calculateVolumeCredits, createStatementData } from '../../src/Chapter1/createStatementData'

// The two tests marked with concurrent will be run in parallel
describe('test statement', () => {
	it('comedy volume credits should be correct', () => {
		// 	expect(calculateVolumeCredits(
		// 		{
		// 			playID: 'a-work',
		// 			audience: 20,
		// 			play: {
		// 				name: 'A Great Work',
		// 				type: 'comedy'
		// 			},
		// 			amount: 36000,
		// 			volumeCredits: 4
		// 		}
		// 	)).toStrictEqual(4)
		// 	expect(calculateVolumeCredits(
		// 		{
		// 			playID: 'a-work',
		// 			audience: 55,
		// 			play: {
		// 				name: 'A Great Work',
		// 				type: 'comedy'
		// 			},
		// 			amount: 36000,
		// 			volumeCredits: 36
		// 		}
		// 	)).toStrictEqual(36)
		// })
		// it('comedy volume credits should be correct', () => {
		// 	expect(calculateVolumeCredits(
		// 		{
		// 			playID: 'a-work',
		// 			audience: 20,
		// 			play: {
		// 				name: 'A Great Work',
		// 				type: 'tragedy'
		// 			},
		// 			amount: 36000,
		// 			volumeCredits: 0
		// 		}
		// 	)).toStrictEqual(0)
		// 	expect(calculateVolumeCredits(
		// 		{
		// 			playID: 'a-work',
		// 			audience: 55,
		// 			play: {
		// 				name: 'A Great Work',
		// 				type: 'tragedy'
		// 			},
		// 			amount: 36000,
		// 			volumeCredits: 25
		// 		}
		// 	)).toStrictEqual(25)
	})
})
