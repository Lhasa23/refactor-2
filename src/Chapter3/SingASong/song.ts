const curseHerDie = `I don't know why she swallowed a fly - perhaps she'll die!\n`

function readyToSwallow (animal: string) {
	return `There was an old lady who swallowed a ${animal}`
}

function swallowedToCatch (swallowed: string, toCatch: string) {
	return `She swallowed the ${swallowed} to catch the ${toCatch}`
}

function swallowAddSpider () {
	return `There was an old lady who swallowed a spider;
That wriggled and wiggled and tickled inside her.
${swallowedToCatch('spider', 'fly')};
${curseHerDie}`
}

function startToSwallow () {
	return `There was an old lady who swallowed a fly.
${curseHerDie}`
}

function swallowAddBird () {
	return `${readyToSwallow('bird')};
How absurd to swallow a bird.
${swallowedToCatch('bird', 'spider')},
${swallowedToCatch('spider', 'fly')};
${curseHerDie}`
}

function swallowAddCat () {
	return `${readyToSwallow('cat')};
Fancy that to swallow a cat!
${swallowedToCatch('cat', 'bird')},
${swallowedToCatch('bird', 'spider')},
${swallowedToCatch('spider', 'fly')};
${curseHerDie}`
}

function swallowAddDog () {
	return `${readyToSwallow('dog')};
What a hog, to swallow a dog!
${swallowedToCatch('dog', 'cat')},
${swallowedToCatch('cat', 'bird')},
${swallowedToCatch('bird', 'spider')},
${swallowedToCatch('spider', 'fly')};
${curseHerDie}`
}

function swallowAddCow () {
	return `${readyToSwallow('cow')};
I don't know how she swallowed a cow!
${swallowedToCatch('cow', 'dog')},
${swallowedToCatch('dog', 'cat')},
${swallowedToCatch('cat', 'bird')},
${swallowedToCatch('bird', 'spider')},
${swallowedToCatch('spider', 'fly')};
${curseHerDie}`
}

function endToSwallow () {
	return `${readyToSwallow('horse')}...
...She's dead, of course!`
}

const song = startToSwallow() +
	swallowAddSpider() +
	swallowAddBird() +
	swallowAddCat() +
	swallowAddDog() +
	swallowAddCow() +
	endToSwallow()

export default function sing () {
	return song
}