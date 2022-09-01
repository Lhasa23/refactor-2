import TurnNumberSequence from './turn-number-sequence'
import TurnTicket from './turn-ticket'

export default class TicketDispenser {

	public getTurnTicket () {
		const newTurnNumber = TurnNumberSequence.getNextTurnNumber()
		return new TurnTicket(newTurnNumber)
	}

}
