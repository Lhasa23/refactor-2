import { describe, expect, it } from 'vitest'
import TicketDispenser from 'src/Chapter3/RaceCar/turn-ticket-dispenser/ticket-dispenser'

describe('Turn Ticket Dispenser', () => {

	describe('TurnTicketDispenser', () => {
		const dispenser1 = new TicketDispenser()
		const dispenser2 = new TicketDispenser()

		it('should arise turn number by sequence', () => {
			const ticket1 = dispenser1.getTurnTicket()
			expect(ticket1.getTurnNumber()).toEqual(0)
			const ticket2 = dispenser1.getTurnTicket()
			expect(ticket2.getTurnNumber()).toEqual(1)
		})

		it('should arise turn number by multi dispensers', () => {
			const ticket1 = dispenser1.getTurnTicket()
			expect(ticket1.getTurnNumber()).toEqual(2)
			const ticket2 = dispenser2.getTurnTicket()
			expect(ticket2.getTurnNumber()).toEqual(3)
		})

	})

})
