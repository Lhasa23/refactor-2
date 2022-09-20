import { TennisGame } from './TennisGame'

export class TennisGame1 implements TennisGame {
	private m_score1: number = 0
	private m_score2: number = 0
	private player1Name: string
	private player2Name: string
	private readonly scoreAlias: string[] = ['Love', 'Fifteen', 'Thirty', 'Forty']

	constructor (player1Name: string, player2Name: string) {
		this.player1Name = player1Name
		this.player2Name = player2Name
	}

	wonPoint (playerName: string): void {
		playerName === 'player1' ? this.m_score1++ : this.m_score2++
	}

	getScore (): string {
		if (this.m_score1 === this.m_score2) {
			return this.m_score1 > 2 ? 'Deuce' : `${this.scoreAlias[this.m_score1]}-All`
		}
		if (this.m_score1 >= 4 || this.m_score2 >= 4) {
			return this.outerFourScore()
		}
		return `${this.scoreAlias[this.m_score1]}-${this.scoreAlias[this.m_score2]}`
	}

	private outerFourScore () {
		const minusResult: number = this.m_score1 - this.m_score2
		if (minusResult === 1) return `Advantage ${this.player1Name}`
		if (minusResult === -1) return `Advantage ${this.player2Name}`
		if (minusResult >= 2) return `Win for ${this.player1Name}`
		return `Win for ${this.player2Name}`
	}
}
