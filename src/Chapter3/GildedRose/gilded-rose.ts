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

export class GildedRose {
	items: Array<Item>

	constructor (items = [] as Array<Item>) {
		this.items = items
	}

	updateQuality () {
		for (let i = 0; i < this.items.length; i++) {
			const currentItem = this.items[i]
			if (currentItem.name === 'Sulfuras, Hand of Ragnaros') continue

			if (currentItem.name === 'Backstage passes to a TAFKAL80ETC concert') {
				currentItem.quality = currentItem.quality + 1

				if (currentItem.sellIn < 11) {
					currentItem.quality = currentItem.quality + 1
				}
				if (currentItem.sellIn < 6) {
					currentItem.quality = currentItem.quality + 1
				}
				if (currentItem.quality >= 50) {
					currentItem.quality = 50
				}

				if (--currentItem.sellIn >= 0) continue
				currentItem.quality = 0
				continue
			}

			if (currentItem.name === 'Aged Brie') {
				currentItem.quality = currentItem.quality + 1
				if (currentItem.quality >= 50) {
					currentItem.quality = 50
				}
				currentItem.sellIn = currentItem.sellIn - 1
				if (currentItem.sellIn >= 0) continue
				if (currentItem.quality >= 50) continue
				currentItem.quality = currentItem.quality + 1
				continue
			}

			if (currentItem.quality > 0) {
				currentItem.quality = currentItem.quality - 1
			}

			currentItem.sellIn = currentItem.sellIn - 1
			if (currentItem.sellIn >= 0) continue

			if (currentItem.quality > 0) {
				currentItem.quality = currentItem.quality - 1
			}
		}

		return this.items
	}
}
