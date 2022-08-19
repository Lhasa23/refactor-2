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
		this.currentItem.quality++

		if (this.currentItem.sellIn < 11) {
			this.currentItem.quality++
		}
		if (this.currentItem.sellIn < 6) {
			this.currentItem.quality++
		}
		this.currentItem.quality = Math.min(50, this.currentItem.quality)

		if (--this.currentItem.sellIn >= 0) return
		this.currentItem.quality = 0
	}
}

export class AgedBrieQuality extends Quality {
	constructor (currentItem: Item) {
		super(currentItem)
	}

	updateQuality () {
		this.currentItem.quality++
		if (--this.currentItem.sellIn >= 0) return
		this.currentItem.quality = Math.min(50, ++this.currentItem.quality)
	}
}

export class ConjuredQuality extends Quality {
	constructor (currentItem: Item) {
		super(currentItem)
	}

	updateQuality () {
		super.updateQuality(2)
	}
}