import { Animals } from './animals'

export class OldLady {
	constructor () {
	}

	swallow (animals: Animals) {
		animals.reset()
		return [...Array(animals.length).keys()].reduce((result) => {
			result += this.swallowPrefix + animals.swallowCurrentAnimal(this.swallowAction) + this.afterSwallow(animals.position, animals)
			animals.next()
			return result
		}, '')
	}

	get swallowPrefix () {
		return `There was an old lady who swallowed a `
	}

	get swallowAction () {
		return `She swallowed the `
	}

	get dead () {
		return `...She's dead, of course!`
	}

	curse (animals: Animals) {
		return `I don't know why she swallowed a ${animals.firstAnimal} - perhaps she'll die!\n`
	}

	private afterSwallow (i: number, animals: Animals) {
		return i === animals.length - 1 ? this.dead : this.curse(animals)
	}
}