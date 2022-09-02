import Category from './Category'

class Product {
	name: string
	price: number
	category: Category

	public getName (): string {
		return this.name
	}

	public setName (name: string): void {
		this.name = name
	}

	public getPrice (): number {
		return this.price
	}

	public setPrice (price: number): void {
		this.price = price
	}

	public getCategory (): Category {
		return this.category
	}

	public setCategory (category: Category): void {
		this.category = category
	}
}

export default Product

