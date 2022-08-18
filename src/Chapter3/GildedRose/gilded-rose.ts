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

			switch (currentItem.name) {
				case 'Sulfuras, Hand of Ragnaros':
					break
				case 'Backstage passes to a TAFKAL80ETC concert':
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

					if (--currentItem.sellIn >= 0) break
					currentItem.quality = 0
					break
				case 'Aged Brie':
					currentItem.quality = currentItem.quality + 1
					if (currentItem.quality >= 50) {
						currentItem.quality = 50
					}
					currentItem.sellIn = currentItem.sellIn - 1
					if (currentItem.sellIn >= 0) break
					if (currentItem.quality >= 50) break
					currentItem.quality = currentItem.quality + 1
					break
				default:
					if (currentItem.quality > 0) {
						currentItem.quality = currentItem.quality - 1
					}

					currentItem.sellIn = currentItem.sellIn - 1
					if (currentItem.sellIn >= 0) break

					if (currentItem.quality > 0) {
						currentItem.quality = currentItem.quality - 1
					}
					break
			}
		}

		return this.items
	}
}
