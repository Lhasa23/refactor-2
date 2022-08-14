const curseHerDie = `I don't know why she swallowed a fly - perhaps she'll die!\n`

function readyToSwallow (animal: string) {
	return `There was an old lady who swallowed a ${animal}`
}

function swallowedToCatch (swallowed: string, toCatch: string) {
	return `She swallowed the ${swallowed} to catch the ${toCatch}`
}

class SwallowAnimals {
	private animals: string[]
	private animalActions: string[]

	constructor (animals: string[], animalActions: string[]) {
		this.animals = animals
		this.animalActions = animalActions
	}

	singing (): string {
		let song = ''
		for (let i = 0; i < this.animals.length; ++i) {
			if (i === 0) {
				song += `${readyToSwallow(this.animals[i])}.\n`
				song += curseHerDie
				continue
			}
			if (i === this.animals.length - 1) {
				song += `${readyToSwallow(this.animals[i])}...\n`
				song += '...She\'s dead, of course!'
				continue
			}
			song += `${readyToSwallow(this.animals[i])};\n`
			song += `${this.animalActions[i]}\n`
			song += this.swallowedAnimals(i)
			song += curseHerDie
		}
		return song
	}

	private swallowedAnimals (order: number) {
		let swallowed = ''
		for (let i = order; i > 0; --i) {
			swallowed += `${swallowedToCatch(this.animals[i], this.animals[i - 1])}`
			swallowed += `${i !== 1 ? ',' : ';'}\n`
		}
		return swallowed
	}
}

const song = new SwallowAnimals(
	['fly', 'spider', 'bird', 'cat', 'dog', 'cow', 'horse'],
	['', 'That wriggled and wiggled and tickled inside her.', 'How absurd to swallow a bird.', 'Fancy that to swallow a cat!', 'What a hog, to swallow a dog!', 'I don\'t know how she swallowed a cow!', '']
).singing()

export default function sing () {
	return song
}
