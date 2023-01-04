import TurnNumberSequence from './turn-number-sequence'

export default class TicketDispenser {

	public getTurnTicket () {
		return TurnNumberSequence.getTicketAndTurnNext()
	}

}
