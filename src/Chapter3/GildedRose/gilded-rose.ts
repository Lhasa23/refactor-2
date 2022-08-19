import { Quality } from './quality'
import { NormalQuality } from './subQuality/normalQuality'
import { SulfurasQuality } from './subQuality/sulfurasQuality'
import { BackstageQuality } from './subQuality/backstageQuality'
import { AgedBrieQuality } from './subQuality/agedBrieQuality'
import { ConjuredQuality } from './subQuality/conjuredQuality'

export class Item {
	name: string
	sellIn: number
	quality: number

	constructor (name: string, sellIn: number, quality: number) {
		this.name = name
		this.sellIn = sellIn
		this.quality = quality
	}
}

function calculateItemQuality (currentItem: Item) {
	switch (currentItem.name) {
		case 'Sulfuras, Hand of Ragnaros':
			return new SulfurasQuality(currentItem).updateQuality()
		case 'Backstage passes to a TAFKAL80ETC concert':
			return new BackstageQuality(currentItem).updateQuality()
		case 'Aged Brie':
			return new AgedBrieQuality(currentItem).updateQuality()
		case 'Conjured Mana Cake':
			return new ConjuredQuality(currentItem).updateQuality()
		default:
			return new NormalQuality(currentItem).updateQuality()
	}
}

export class GildedRose {
	items: Array<Item>

	constructor (items = [] as Array<Item>) {
		this.items = items
	}

	updateQuality () {
		for (let i = 0; i < this.items.length; i++) {
			const currentItem = this.items[i]
			calculateItemQuality(currentItem)
		}

		return this.items
	}
}

