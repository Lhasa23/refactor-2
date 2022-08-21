class ShoppingCart {
	price: number = 0
	productNumber: number = 1

	constructor () {
	}

	add = (...price: number[]) => {
		this.price = price.reduce((mount, value) => mount + value, 0)
		this.productNumber = price.length
	}

	calculateTotalPrice = () => this.price

	numberOfProducts = () => this.productNumber

	hasDiscount = () => this.price > 100
}

export default ShoppingCart