import { describe, expect, it } from 'vitest'
import TicketDispenser from '../../../../src/Chapter3/RaceCar/turn-ticket-dispenser/ticket-dispenser'

describe('Turn Ticket Dispenser', () => {

	describe('TurnTicketDispenser', () => {

		it('should arise turn number by sequence', () => {
			const dispenser = new TicketDispenser()
			const ticket1 = dispenser.getTurnTicket()
			expect(ticket1.turnNumber).toEqual(0)
			const ticket2 = dispenser.getTurnTicket()
			expect(ticket2.turnNumber).toEqual(1)
		})

	})

})
