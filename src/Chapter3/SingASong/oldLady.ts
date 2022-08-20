import { Animals } from './animals'

export class OldLady {
	constructor () {
	}

	swallowPrefix () {
		return `There was an old lady who swallowed a `
	}

	dead () {
		return `...She's dead, of course!`
	}

	curse (animals: Animals) {
		return `I don't know why she swallowed a ${animals.firstAnimal} - perhaps she'll die!\n`
	}

	swallow (animals: Animals) {
		return [...Array(animals.length).keys()].reduce((result, index) => {
			return result + this.swallowPrefix() + animals.swallowCurrentAnimal(index) + this.afterSwallow(index, animals)
		}, '')
	}

	private afterSwallow (i: number, animals: Animals) {
		return i === animals.length - 1 ? this.dead() : this.curse(animals)
	}
}