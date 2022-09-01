import TurnTicket from './turn-ticket'

class TurnNumberSequence {
	private turnNumber: number

	constructor () {
		this.turnNumber = 0
	}

	public getTicketAndTurnNext () {
		return new TurnTicket(this.turnNumber++)
	}
}

export default new TurnNumberSequence()
