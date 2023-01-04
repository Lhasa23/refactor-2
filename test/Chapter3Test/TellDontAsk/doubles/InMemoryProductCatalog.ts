import Product from 'src/Chapter3/TellDontAsk/domain/Product'
import { ProductCatalog } from 'src/Chapter3/TellDontAsk/repository/ProductCatalog'

class InMemoryProductCatalog implements ProductCatalog {
	private products: Product[]

	public constructor (products: Product[]) {
		this.products = products
	}

	public getByName (name: string): Product {
		return this.products.find(p => p.name === name) as Product
	}
}

export default InMemoryProductCatalog

