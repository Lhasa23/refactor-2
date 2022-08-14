import { Animal } from './animal'
import { Animals } from './animals'

class SwallowAnimals {
	private readonly animals: Animals

	constructor (animals: Animal[]) {
		this.animals = new Animals(animals)
	}

	singing (): string {
		return this.animals.swallowed()
	}
}

const song = new SwallowAnimals([
	new Animal('fly', ''),
	new Animal('spider', 'That wriggled and wiggled and tickled inside her.'),
	new Animal('bird', 'How absurd to swallow a bird.'),
	new Animal('cat', 'Fancy that to swallow a cat!'),
	new Animal('dog', 'What a hog, to swallow a dog!'),
	new Animal('cow', 'I don\'t know how she swallowed a cow!'),
	new Animal('horse', '')
]).singing()

export default function sing () {
	return song
}
