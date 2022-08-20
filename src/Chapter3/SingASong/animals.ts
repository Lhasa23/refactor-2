import { Animal } from './animal'

export class Animals {
	readonly animals: Animal[]
	position: number

	constructor (animals: Animal[]) {
		this.animals = animals
		this.position = 0
	}

	get length () {
		return this.animals.length
	}

	get firstAnimal () {
		return this.animals[0].name
	}

	next () {
		this.position++
	}

	reset () {
		this.position = 0
	}

	oldLadySwallow () {
		return `She swallowed the `
	}

	getSwallowed (index: number) {
		return this.animals[index].swallowed
	}

	getCaught (index: number) {
		return this.animals[index].caught
	}

	swallowCurrentAnimal () {
		const currentAnimal = this.animals[this.position]
		const splitter = this.position === 0
			? `.\n`
			: this.position === this.length - 1 ? `...\n` : `;\n`
		return this.swallowCurrent(currentAnimal, splitter)
	}

	private swallowCurrent (currentAnimal: Animal, splitter: string) {
		return currentAnimal.swallowed + splitter + currentAnimal.swallowedAction + this.animalsCatch()
	}

	private animalsCatch () {
		let order = this.position + 1
		if (order <= 1) return ''
		if (order === this.length) return ''
		return this.animals.slice(0, order).reduceRight((result, _, index) => {
			if (index < 1) return result
			return result + this.oldLadySwallow() + `${this.getSwallowed(index)} to catch the ${this.getCaught(index - 1)}${index !== 1 ? ',' : ';'}\n`
		}, '')
	}
}