import Product from '../domain/Product'
import OrderItem from '../domain/OrderItem'

class SellItemRequest {
	productName: string
	quantity: number

	constructor (productName: string, quantity: number = 0) {
		this.productName = productName
		this.quantity = quantity
	}

	buildOrderItem (product: Product) {
		return new OrderItem(product, this.quantity, this.getRequestTaxedAmount(product), this.getRequestTaxAmount(product))
	}

	private getRequestTaxedAmount (product: Product) {
		return Math.round(product.productUnitaryTaxedAmount * this.quantity * 100) / 100
	}

	private getRequestTaxAmount (product: Product) {
		return product.productUnitaryTax * this.quantity
	}
}

export default SellItemRequest
