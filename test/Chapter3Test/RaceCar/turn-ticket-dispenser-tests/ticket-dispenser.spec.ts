import { describe, expect, it } from 'vitest'
import TicketDispenser from '../../../../src/Chapter3/RaceCar/turn-ticket-dispenser/ticket-dispenser'

describe('Turn Ticket Dispenser', () => {

	describe('TurnTicketDispenser', () => {

		it('foo', () => {
			const dispenser = new TicketDispenser()
			const ticket = dispenser.getTurnTicket()
			expect(ticket.getTurnNumber()).to.eql(0)
		})

	})

})
