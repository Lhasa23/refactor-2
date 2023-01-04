import Product from '../domain/Product'
import OrderItem from '../domain/OrderItem'

class SellItemRequest {
	productName: string
	quantity: number
	private product: Product = new Product()

	constructor (productName: string, quantity: number = 0) {
		this.productName = productName
		this.quantity = quantity
	}

	combiningProduct (product: Product) {
		this.product = product
	}

	buildOrderItem () {
		return new OrderItem(this.product, this.quantity, this.getRequestTaxedAmount(), this.getRequestTaxAmount())
	}

	private getRequestTaxedAmount () {
		return Math.round(this.product.productUnitaryTaxedAmount * this.quantity * 100) / 100
	}

	private getRequestTaxAmount () {
		return this.product.productUnitaryTax * this.quantity
	}
}

export default SellItemRequest
