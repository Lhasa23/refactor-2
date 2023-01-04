let orderId = 1

class OrderShipmentRequest {
	readonly orderId: number

	constructor () {
		this.orderId = orderId++
	}
}

export default OrderShipmentRequest
