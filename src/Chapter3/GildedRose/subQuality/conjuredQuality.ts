import { Item } from '../gilded-rose'
import { Quality } from '../quality'

export class ConjuredQuality extends Quality {
	constructor (currentItem: Item) {
		super(currentItem)
	}

	updateQuality () {
		super.updateQuality(2)
	}
}