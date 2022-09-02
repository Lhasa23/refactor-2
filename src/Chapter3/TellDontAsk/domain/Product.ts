import Category from './Category'

class Product {
	name: string
	price: number
	category: Category

	constructor (name = '', price = 0, category: Category) {
		this.name = name
		this.price = price
		this.category = category
	}
}

export default Product

