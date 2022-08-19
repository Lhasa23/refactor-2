import { Item } from './gilded-rose'

export class Quality {
	currentItem: Item

	constructor (currentItem: Item) {
		this.currentItem = currentItem
	}

	updateQuality (degrade: number = 1) {
		this.currentItem.quality -= degrade
		if (--this.currentItem.sellIn >= 0) return

		this.currentItem.quality -= degrade
		this.currentItem.quality = Math.max(0, this.currentItem.quality)
	}
}

