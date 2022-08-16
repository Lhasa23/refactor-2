import { Item, GildedRose } from '../../../src/Chapter3/GildedRose/gilded-rose'
import { describe, expect, it } from 'vitest'

describe('Gilded Rose', () => {
	it('should foo', () => {
		const gildedRose = new GildedRose([new Item('foo', 0, 0)])
		const items = gildedRose.updateQuality()
		expect(items[0].name).toBe('foo')
	})
})
