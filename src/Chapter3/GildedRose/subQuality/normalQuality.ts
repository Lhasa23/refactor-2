import { Quality } from '../quality'
import { Item } from '../gilded-rose'

export class NormalQuality extends Quality {
	constructor (currentItem: Item) {
		super(currentItem)
	}

	updateQuality (degrade: number = 1) {
		super.updateQuality(degrade)
	}
}