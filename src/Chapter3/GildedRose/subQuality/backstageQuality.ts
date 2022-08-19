import { Item } from '../gilded-rose'
import { Quality } from '../quality'

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