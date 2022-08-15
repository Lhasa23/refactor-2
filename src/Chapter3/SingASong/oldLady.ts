import { Animals } from './animals'
import { Animal } from './animal'

export class OldLady {
	private readonly animals: Animals

	constructor (animals: Animals) {
		this.animals = animals
	}

	swallow () {
		return this.animals.swallowed(this.swallowEachAnimal())
	}

	get curse () {
		return `I don't know why she swallowed a ${this.animals.firstAnimal} - perhaps she'll die!\n`
	}

	get preSwallow () {
		return `There was an old lady who swallowed a `
	}

	get swallowed () {
		return `She swallowed the `
	}

	get catch () {
		return ` to catch the `
	}

	private swallowEachAnimal () {
		return (result: string, animal: Animal) => {
			if (animal === this.animals.first) {
				return result + this.startSwallow(animal)
			}
			if (animal === this.animals.last) {
				return result + this.endSwallow(animal)
			}
			return result + this.swallowProcedure(animal)
		}
	}

	private startSwallow (animal: Animal) {
		return `${this.preSwallow}${(animal.swallowed)}.\n${this.curse}`
	}

	private swallowProcedure (animal: Animal) {
		let result = `${this.preSwallow}${(animal.swallowed)};\n${animal.swallowedAction}`
		result += this.swallowAnimalsBeforeWith(animal)

		result += this.curse

		return result
	}

	private endSwallow (animal: Animal) {
		return `${this.preSwallow}${(animal.swallowed)}...\n...She's dead, of course!`
	}

	private swallowAnimalsBeforeWith (animal: Animal) {
		let result = ''
		let order = this.animals.indexOf(animal)
		for (let i = order; i > 0; --i) {
			result += `${this.swallowed}${this.animals.getSwallowed(i)}${this.catch}${this.animals.getCaught(i - 1)}`
			result += `${i !== 1 ? ',' : ';'}\n`
		}
		return result
	}
}