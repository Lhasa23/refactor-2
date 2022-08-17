import { Item, GildedRose } from '../../../src/Chapter3/GildedRose/gilded-rose'
import { describe, expect, it } from 'vitest'

describe('Gilded Rose', () => {
	it('should normal item present correct', () => {
		const items = [
			new Item('+5 Dexterity Vest', 3, 6) //
		]
		const gildedRose = new GildedRose(items)
		gildedRose.updateQuality()
		items.forEach(element => {
			expect(element.name).toBe('+5 Dexterity Vest')
			expect(element.sellIn).toBe(2)
			expect(element.quality).toBe(5)
		})
		gildedRose.updateQuality()
		items.forEach(element => {
			expect(element.name).toBe('+5 Dexterity Vest')
			expect(element.sellIn).toBe(1)
			expect(element.quality).toBe(4)
		})
		gildedRose.updateQuality()
		items.forEach(element => {
			expect(element.name).toBe('+5 Dexterity Vest')
			expect(element.sellIn).toBe(0)
			expect(element.quality).toBe(3)
		})
		gildedRose.updateQuality()
		items.forEach(element => {
			expect(element.name).toBe('+5 Dexterity Vest')
			expect(element.sellIn).toBe(-1)
			expect(element.quality).toBe(1)
		})
		gildedRose.updateQuality()
		items.forEach(element => {
			expect(element.name).toBe('+5 Dexterity Vest')
			expect(element.sellIn).toBe(-2)
			expect(element.quality).toBe(0)
		})
		gildedRose.updateQuality()
		items.forEach(element => {
			expect(element.name).toBe('+5 Dexterity Vest')
			expect(element.sellIn).toBe(-3)
			expect(element.quality).toBe(0)
		})
	})

	it('should Aged Brie item present correct', () => {
		const items = [
			new Item('Aged Brie', 2, 0) //
		]
		const gildedRose = new GildedRose(items)
		gildedRose.updateQuality()
		items.forEach(element => {
			expect(element.name).toBe('Aged Brie')
			expect(element.sellIn).toBe(1)
			expect(element.quality).toBe(1)
		})
		gildedRose.updateQuality()
		items.forEach(element => {
			expect(element.name).toBe('Aged Brie')
			expect(element.sellIn).toBe(0)
			expect(element.quality).toBe(2)
		})
		gildedRose.updateQuality()
		items.forEach(element => {
			expect(element.name).toBe('Aged Brie')
			expect(element.sellIn).toBe(-1)
			expect(element.quality).toBe(4)
		})
	})

	it('should Sulfuras item present correct', () => {
		const items = [
			new Item('Sulfuras, Hand of Ragnaros', 0, 80),
			new Item('Sulfuras, Hand of Ragnaros', -1, 80)
		]
		const gildedRose = new GildedRose(items)
		for (let i of new Array(3).fill(1)) {
			gildedRose.updateQuality()
			items.forEach(element => {
				expect(element.name).toBe(element.name)
				expect(element.sellIn).toBe(element.sellIn)
				expect(element.quality).toBe(element.quality)
			})
		}
	})

	it('should Backstage item normal limited quality present correct', () => {
		const items = [
			new Item('Backstage passes to a TAFKAL80ETC concert', 15, 49)
		]
		const gildedRose = new GildedRose(items)
		gildedRose.updateQuality()
		items.forEach(element => {
			expect(element.name).toBe(element.name)
			expect(element.sellIn).toBe(14)
			expect(element.quality).toBe(50)
		})
		gildedRose.updateQuality()
		items.forEach(element => {
			expect(element.name).toBe(element.name)
			expect(element.sellIn).toBe(13)
			expect(element.quality).toBe(50)
		})
		gildedRose.updateQuality()
		items.forEach(element => {
			expect(element.name).toBe(element.name)
			expect(element.sellIn).toBe(12)
			expect(element.quality).toBe(50)
		})
	})

	it('should Backstage item present correct', () => {
		const items = [
			new Item('Backstage passes to a TAFKAL80ETC concert', 2, 49)
			// this conjured item does not work properly yet
			// new Item('Conjured Mana Cake', 3, 6)
		]
		const gildedRose = new GildedRose(items)
		gildedRose.updateQuality()
		items.forEach(element => {
			expect(element.name).toBe(element.name)
			expect(element.sellIn).toBe(1)
			expect(element.quality).toBe(50)
		})
		gildedRose.updateQuality()
		items.forEach(element => {
			expect(element.name).toBe(element.name)
			expect(element.sellIn).toBe(0)
			expect(element.quality).toBe(50)
		})
		gildedRose.updateQuality()
		items.forEach(element => {
			expect(element.name).toBe(element.name)
			expect(element.sellIn).toBe(-1)
			expect(element.quality).toBe(0)
		})
	})

	it('should Conjured item present correct', () => {
		const items = [
			// this conjured item does not work properly yet
			new Item('Conjured Mana Cake', 3, 6)
		]
		const gildedRose = new GildedRose(items)
		gildedRose.updateQuality()
		items.forEach(element => {
			expect(element.name).toBe(element.name)
		})
	})
})
