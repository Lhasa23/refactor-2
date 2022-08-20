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
		let result = this.swallowPrefix() + `${animals.animalFirstSwallowed()}.\n` + this.curse(animals)
		result += animals.swallowed()
		return result + this.swallowPrefix() + `${animals.animalLastSwallowed()}...\n` + this.dead()
	}
}