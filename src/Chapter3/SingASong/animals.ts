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

	get length () {
		return this.animals.length
	}

	get firstAnimal () {
		return this.first.name
	}

	oldLadySwallow () {
		return `She swallowed the `
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

	animalLastSwallowed () {
		return this.last.swallowed + `...\n`
	}

	animalFirstSwallowed () {
		return this.first.swallowed + `.\n`
	}

	swallowCurrentAnimal (i: number) {
		if (i === 0) {
			return this.animalFirstSwallowed()
		}
		if (i === this.length - 1) {
			return this.animalLastSwallowed()
		}
		return this.swallowProcedure(this.animals[i])
	}

	swallowProcedure (animal: Animal) {
		let result = `${(animal.swallowed)};\n${animal.swallowedAction}`
		result += this.swallowAnimalsBeforeWith(animal)
		return result
	}

	private swallowAnimalsBeforeWith (animal: Animal) {
		let order = this.indexOf(animal)
		return this.animals.slice(0, order + 1).reduceRight((result, _, index) => {
			if (index < 1) return result
			return result + this.oldLadySwallow() + `${this.getSwallowed(index)} to catch the ${this.getCaught(index - 1)}${index !== 1 ? ',' : ';'}\n`
		}, '')
	}
}