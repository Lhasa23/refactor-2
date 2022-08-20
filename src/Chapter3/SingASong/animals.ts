import { Animal } from './animal'

export class Animals {
	readonly animals: Animal[]

	constructor (animals: Animal[]) {
		this.animals = animals
	}

	get first () {
		return this.animals[0]
	}

	get last () {
		return this.animals[this.animals.length - 1]
	}

	get firstAnimal () {
		return this.first.name
	}

	get animalsCurse () {
		return `I don't know why she swallowed a ${this.firstAnimal} - perhaps she'll die!\n`
	}

	indexOf (animal: Animal) {
		return this.animals.findIndex((item) => item.name === animal.name)
	}

	getSwallowed (index: number) {
		return this.animals[index].swallowed
	}

	getCaught (index: number) {
		return this.animals[index].caught
	}

	swallowed (): string {
		return this.animals.reduce(this.swallowEachAnimal(), '')
	}

	private swallowEachAnimal () {
		return (result: string, animal: Animal) => {
			if (animal === this.first) {
				return result + this.startSwallow(animal)
			}
			if (animal === this.last) {
				return result + this.endSwallow(animal)
			}
			return result + this.swallowProcedure(animal)
		}
	}

	private startSwallow (animal: Animal) {
		return `There was an old lady who swallowed a ${(animal.swallowed)}.\n${this.animalsCurse}`
	}

	private swallowProcedure (animal: Animal) {
		let result = `There was an old lady who swallowed a ${(animal.swallowed)};\n${animal.swallowedAction}`
		result += this.swallowAnimalsBeforeWith(animal)

		result += this.animalsCurse

		return result
	}

	private endSwallow (animal: Animal) {
		return `There was an old lady who swallowed a ${(animal.swallowed)}...\n...She's dead, of course!`
	}

	private swallowAnimalsBeforeWith (animal: Animal) {
		let order = this.indexOf(animal)
		return this.animals.slice(0, order + 1).reduceRight((result, _, index) => {
			if (index < 1) return result
			return result + `She swallowed the ${this.getSwallowed(index)} to catch the ${this.getCaught(index - 1)}${index !== 1 ? ',' : ';'}\n`
		}, '')
	}
}