import { Animal } from './animal'

export class Animals {
	readonly animals: Animal[]

	constructor (animals: Animal[]) {
		this.animals = animals
	}

	get first () {
		return this.animals[0]
	}

	get length () {
		return this.animals.length
	}

	get curseHerDie () {
		return `I don't know why she swallowed a ${this.first.name} - perhaps she'll die!\n`
	}

	indexOf (animal: Animal) {
		return this.animals.findIndex((item) => item.name === animal.name)
	}

	get (index: number) {
		return this.animals[index]
	}

	swallowed (): string {
		return this.animals.reduce(this.swallowEachAnimal(), '')
	}

	private swallowEachAnimal () {
		return (song: string, animal: Animal, index: number) => {
			if (index === 0) {
				return song + this.startSwallowed(animal)
			}
			if (index === this.length - 1) {
				return song + this.endSwallowed(animal)
			}
			return song + this.swallowedProcedure(animal)
		}
	}

	private startSwallowed (animal: Animal) {
		return `${(animal.readyToSwallow())}.\n${this.curseHerDie}`
	}

	private endSwallowed (animal: Animal) {
		return `${(animal.readyToSwallow())}...\n...She's dead, of course!`
	}

	private swallowedAnimals (order: number) {
		let result = ''
		for (let i = order; i > 0; --i) {
			result += `${(this.get(i).toCatchAnimal(this.get(i - 1)))}`
			result += `${i !== 1 ? ',' : ';'}\n`
		}
		return result
	}

	private swallowedProcedure (animal: Animal) {
		let result = animal.swallowWithAction()
		result += this.swallowedAnimals(this.indexOf(animal))

		result += this.curseHerDie

		return result
	}
}