export class Animal {
	readonly name: string
	readonly action: string

	constructor (name: string, action: string) {
		this.name = name
		this.action = action
	}

	readyToSwallow () {
		return `There was an old lady who swallowed a ${this.name}`
	}

	swallowWithAction () {
		return `${(this.readyToSwallow())};\n${this.action}\n`
	}

	toCatchAnimal (toCatch: Animal) {
		return `She swallowed the ${this.name} to catch the ${toCatch.name}`
	}
}