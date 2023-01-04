import { TennisGame } from './TennisGame'

export class TennisGame3 implements TennisGame {
	private p2: number = 0
	private p1: number = 0
	private readonly p1Name: string
	private readonly p2Name: string

	constructor (p1N: string, p2N: string) {
		this.p1Name = p1N
		this.p2Name = p2N
	}

	getScore (): string {
		const p: string[] = ['Love', 'Fifteen', 'Thirty', 'Forty']
		if (this.p1 === this.p2)
			return this.p1 < 3 ? p[this.p1] + '-All' : 'Deuce'

		if (this.p1 < 4 && this.p2 < 4) {
			return p[this.p1] + '-' + p[this.p2]
		}

		return this.differ ? 'Advantage ' + this.winner : 'Win for ' + this.winner
	}

	wonPoint (playerName: string): void {
		playerName === 'player1' ? this.p1++ : this.p2++
	}

	private get differ () {
		return ((this.p1 - this.p2) * (this.p1 - this.p2)) === 1
	}

	private get winner () {
		return this.p1 > this.p2 ? this.p1Name : this.p2Name
	}
}
