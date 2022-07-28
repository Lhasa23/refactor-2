export type Performance = {
	playID: string
	audience: number
}

export type Plays = {
	[key: string]: Play
}

export type Play = { name: string, type: 'tragedy' | 'comedy' }

export type CustomizedPerformance = {
	play: { name: string; type: string };
	amount: number;
	volumeCredits: number
} & Performance

export type Invoices = {
	customer: string,
	performances: Performance[]
}
