const swallowedFly = `I don't know why she swallowed a fly - perhaps she'll die!`

function readyToSwallow (animal: string) {
	return `There was an old lady who swallowed a ${animal}`
}

const song = `There was an old lady who swallowed a fly.
${swallowedFly}
There was an old lady who swallowed a spider;
That wriggled and wiggled and tickled inside her.
She swallowed the spider to catch the fly;
${swallowedFly}
${readyToSwallow('bird')};
How absurd to swallow a bird.
She swallowed the bird to catch the spider,
She swallowed the spider to catch the fly;
${swallowedFly}
${readyToSwallow('cat')};
Fancy that to swallow a cat!
She swallowed the cat to catch the bird,
She swallowed the bird to catch the spider,
She swallowed the spider to catch the fly;
${swallowedFly}
${readyToSwallow('dog')};
What a hog, to swallow a dog!
She swallowed the dog to catch the cat,
She swallowed the cat to catch the bird,
She swallowed the bird to catch the spider,
She swallowed the spider to catch the fly;
${swallowedFly}
${readyToSwallow('cow')};
I don't know how she swallowed a cow!
She swallowed the cow to catch the dog,
She swallowed the dog to catch the cat,
She swallowed the cat to catch the bird,
She swallowed the bird to catch the spider,
She swallowed the spider to catch the fly;
${swallowedFly}
${readyToSwallow('horse')}...
...She's dead, of course!`

export default function sing () {
	return song
}