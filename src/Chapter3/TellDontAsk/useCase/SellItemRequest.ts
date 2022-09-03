class SellItemRequest {
	productName: string
	quantity: number

	constructor (productName: string, quantity: number = 0) {
		this.productName = productName
		this.quantity = quantity
	}
}

export default SellItemRequest
