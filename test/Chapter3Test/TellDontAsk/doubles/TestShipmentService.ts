import Order from '../../../../src/Chapter3/TellDontAsk/domain/Order'
import { ShipmentService } from '../../../../src/Chapter3/TellDontAsk/service/ShipmentService'

class TestShipmentService implements ShipmentService {
	private shippedOrder: Order | null = null

	public getShippedOrder (): Order | null {
		return this.shippedOrder
	}

	public ship (order: Order): void {
		this.shippedOrder = order
	}
}

export default TestShipmentService
