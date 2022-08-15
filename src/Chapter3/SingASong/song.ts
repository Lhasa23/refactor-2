import { Animal } from './animal'
import { Animals } from './animals'
import { OldLady } from './oldLady'

class SingASong {
	private readonly oldLady: OldLady

	constructor (animals: Animal[]) {
		this.oldLady = new OldLady(new Animals(animals))
	}

	singing (): string {
		return this.oldLady.swallow()
	}
}

const song = new SingASong([
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
