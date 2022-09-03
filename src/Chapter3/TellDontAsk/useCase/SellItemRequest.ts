class SellItemRequest {
	productName: string
	quantity: number

	constructor (productName: string, quantity: number = 0) {
		this.productName = productName
		this.quantity = quantity
	}

	public getProductName (): string {
		return this.productName
	}
}

export default SellItemRequest
