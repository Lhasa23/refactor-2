class SwallowAnimals {
	private readonly animals: string[]
	private readonly animalActions: string[]
	private readonly curseHerDie: string

	constructor (animals: string[], animalActions: string[]) {
		this.animals = animals
		this.animalActions = animalActions
		this.curseHerDie = `I don't know why she swallowed a fly - perhaps she'll die!\n`
	}

	singing (): string {
		let song = ''
		this.animals.forEach((animal, index) => {
			if (index === 0) {
				song += this.startSwallowed(animal)
				return
			}
			if (index === this.animals.length - 1) {
				song += this.endSwallowed(animal)
				return
			}
			song += this.swallowedProcedure(animal, index)
		})
		return song
	}

	private readyToSwallow (animal: string) {
		return `There was an old lady who swallowed a ${animal}`
	}

	private swallowedToCatch (swallowed: string, toCatch: string) {
		return `She swallowed the ${swallowed} to catch the ${toCatch}`
	}

	private startSwallowed (animal: string) {
		return `${this.readyToSwallow(animal)}.\n${this.curseHerDie}`
	}

	private endSwallowed (animal: string) {
		return `${this.readyToSwallow(animal)}...\n...She's dead, of course!`
	}

	private swallowedAnimals (order: number) {
		let swallowed = ''
		for (let i = order; i > 0; --i) {
			swallowed += `${this.swallowedToCatch(this.animals[i], this.animals[i - 1])}`
			swallowed += `${i !== 1 ? ',' : ';'}\n`
		}
		return swallowed
	}

	private swallowedProcedure (animal: string, index: number) {
		let song = `${this.readyToSwallow(animal)};\n`
		song += `${this.animalActions[index]}\n`
		song += this.swallowedAnimals(index)
		song += this.curseHerDie
		return song
	}
}

const song = new SwallowAnimals(
	['fly', 'spider', 'bird', 'cat', 'dog', 'cow', 'horse'],
	['', 'That wriggled and wiggled and tickled inside her.', 'How absurd to swallow a bird.', 'Fancy that to swallow a cat!', 'What a hog, to swallow a dog!', 'I don\'t know how she swallowed a cow!', '']
).singing()

export default function sing () {
	return song
}
