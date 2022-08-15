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

	indexOf (animal: Animal) {
		return this.animals.findIndex((item) => item.name === animal.name)
	}

	getSwallowed (index: number) {
		return this.animals[index].swallowed
	}

	getCaught (index: number) {
		return this.animals[index].caught
	}

	swallowed (swallowMethod: any): string {
		return this.animals.reduce(swallowMethod, '')
	}

}