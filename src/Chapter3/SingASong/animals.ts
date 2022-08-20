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

	oldLadySwallowed () {
		return `There was an old lady who swallowed a `
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

	swallowed (): string {
		return this.animals.slice(1, this.animals.length - 1).reduce(this.swallowEachAnimal(), '')
	}

	animalLastSwallowed () {
		return this.last.swallowed
	}

	animalFirstSwallowed () {
		return this.first.swallowed
	}

	private swallowEachAnimal () {
		return (result: string, animal: Animal) => {
			return result + this.swallowProcedure(animal)
		}
	}

	private swallowProcedure (animal: Animal) {
		let result = `${this.oldLadySwallowed()}${(animal.swallowed)};\n${animal.swallowedAction}`
		result += this.swallowAnimalsBeforeWith(animal)

		result += this.animalsCurse

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