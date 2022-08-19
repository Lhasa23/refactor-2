import { Item } from '../gilded-rose'
import { Quality } from '../quality'

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