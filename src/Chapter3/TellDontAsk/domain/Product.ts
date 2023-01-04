import Category from './Category'

class Product {
	name: string
	price: number
	category: Category

	constructor (name: string = '', price: number = 0, category: Category = new Category()) {
		this.name = name
		this.price = price
		this.category = category
	}

	get productUnitaryTax () {
		return Math.round(this.price / 100 * this.category.taxPercentage * 100) / 100
	}

	get productUnitaryTaxedAmount () {
		return Math.round((this.price + this.productUnitaryTax) * 100) / 100
	}
}

export default Product

