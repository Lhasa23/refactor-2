import { Animal } from './animal'

export class Animals {
	readonly animals: Animal[]

	constructor (animals: Animal[]) {
		this.animals = animals
	}

	get length () {
		return this.animals.length
	}

	get firstAnimal () {
		return this.animals[0].name
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

	swallowCurrentAnimal (i: number) {
		const currentAnimal = this.animals[i]
		if (i === 0) {
			return this.swallowCurrent(currentAnimal, `.\n`)
		}
		if (i === this.length - 1) {
			return this.swallowCurrent(currentAnimal, `...\n`)
		}
		return this.swallowCurrent(currentAnimal, `;\n`)
	}

	private swallowCurrent (currentAnimal: Animal, splitter: string) {
		return currentAnimal.swallowed + splitter + currentAnimal.swallowedAction + this.animalsCatch(currentAnimal)
	}

	private animalsCatch (animal: Animal) {
		let order = this.indexOf(animal) + 1
		if (order <= 1) return ''
		if (order === this.length) return ''
		return this.animals.slice(0, order).reduceRight((result, _, index) => {
			if (index < 1) return result
			return result + this.oldLadySwallow() + `${this.getSwallowed(index)} to catch the ${this.getCaught(index - 1)}${index !== 1 ? ',' : ';'}\n`
		}, '')
	}
}