export default class TurnTicket {
	private readonly turnNumber: number

	constructor (turnNumber: number) {
		this.turnNumber = turnNumber
	}

	getTurnNumber () {
		return this.turnNumber
	}
}
