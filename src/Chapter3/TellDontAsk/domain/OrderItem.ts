import Product from './Product'

class OrderItem {
	product: Product
	quantity: number
	taxedAmount: number
	tax: number

	constructor (product: Product, quantity: number, tax: number, taxedAmount: number) {
		this.product = product
		this.quantity = quantity
		this.taxedAmount = taxedAmount
		this.tax = tax
	}
}

export default OrderItem

