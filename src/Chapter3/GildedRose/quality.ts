import { Item } from './gilded-rose'

export class Quality {
	currentItem: Item

	constructor (currentItem: Item) {
		this.currentItem = currentItem
	}

	updateQuality () {
		if (this.currentItem.quality > 0) {
			this.currentItem.quality = this.currentItem.quality - 1
		}

		this.currentItem.sellIn = this.currentItem.sellIn - 1
		if (this.currentItem.sellIn >= 0) return

		if (this.currentItem.quality > 0) {
			this.currentItem.quality = this.currentItem.quality - 1
		}
	}
}

export class NormalQuality extends Quality {
}

export class SulfurasQuality extends Quality {
	constructor (currentItem: Item) {
		super(currentItem)
	}

	updateQuality () {
		return
	}
}

export class BackstageQuality extends Quality {
	constructor (currentItem: Item) {
		super(currentItem)
	}

	updateQuality () {
		this.currentItem.quality = this.currentItem.quality + 1

		if (this.currentItem.sellIn < 11) {
			this.currentItem.quality = this.currentItem.quality + 1
		}
		if (this.currentItem.sellIn < 6) {
			this.currentItem.quality = this.currentItem.quality + 1
		}
		if (this.currentItem.quality >= 50) {
			this.currentItem.quality = 50
		}

		if (--this.currentItem.sellIn >= 0) return
		this.currentItem.quality = 0
		return
	}
}

export class AgedBrieQuality extends Quality {
	constructor (currentItem: Item) {
		super(currentItem)
	}

	updateQuality () {
		this.currentItem.quality = this.currentItem.quality + 1
		if (this.currentItem.quality >= 50) {
			this.currentItem.quality = 50
		}
		this.currentItem.sellIn = this.currentItem.sellIn - 1
		if (this.currentItem.sellIn >= 0) return
		if (this.currentItem.quality >= 50) return
		this.currentItem.quality = this.currentItem.quality + 1
	}
}