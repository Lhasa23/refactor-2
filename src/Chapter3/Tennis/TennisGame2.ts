import { TennisGame } from './TennisGame'

export class TennisGame2 implements TennisGame {
	private readonly SCORE = ['Love', 'Fifteen', 'Thirty', 'Forty']

	P1point: number = 0
	P2point: number = 0

	private readonly player1Name: string
	private readonly player2Name: string

	constructor (player1Name: string, player2Name: string) {
		this.player1Name = player1Name
		this.player2Name = player2Name
	}

	wonPoint (player: string): void {
		if (player === 'player1')
			this.P1point++
		else
			this.P2point++
	}

	getScore (): string {
		if (this.P1point === this.P2point) {
			return this.P1point > 2 ? 'Deuce' : `${this.SCORE[this.P1point]}-All`
		}

		if (this.P2point >= 4 || this.P1point >= 4) {
			return this.differ + this.winner
		}

		return `${this.SCORE[this.P1point]}-${this.SCORE[this.P2point]}`
	}

	private get differ () {
		return Math.abs(this.P1point - this.P2point) >= 2 ? 'Win for ' : 'Advantage '
	}

	private get winner () {
		return this.P1point > this.P2point ? this.player1Name : this.player2Name
	}
}
