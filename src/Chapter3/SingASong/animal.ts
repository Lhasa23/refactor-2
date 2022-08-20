export class Animal {
	readonly name: string
	readonly action: string

	constructor (name: string, action: string) {
		this.name = name
		this.action = action
	}

	get swallowed () {
		return this.name
	}

	get swallowedAction () {
		return this.action ? this.action + `\n` : ''
	}

	get caught () {
		return this.name
	}
}