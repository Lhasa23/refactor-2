import Order from '../domain/Order'
import OrderItem from '../domain/OrderItem'
import Product from '../domain/Product'
import OrderRepository from '../repository/OrderRepository'
import { ProductCatalog } from '../repository/ProductCatalog'
import SellItemsRequest from './SellItemsRequest'
import UnknownProductException from './UnknownProductException'

class OrderCreationUseCase {
	private readonly orderRepository: OrderRepository
	private readonly productCatalog: ProductCatalog

	public constructor (orderRepository: OrderRepository, productCatalog: ProductCatalog) {
		this.orderRepository = orderRepository
		this.productCatalog = productCatalog
	}

	public run (request: SellItemsRequest): void {
		const order: Order = new Order('EUR')

		for (const requestItem of request.requests) {
			const product: Product = this.productCatalog.getByName(requestItem.productName)

			if (product === undefined) {
				throw new UnknownProductException()
			} else {
				requestItem.combiningProduct(product)
				const orderItem: OrderItem = requestItem.buildOrderItem()
				order.addOrderItem(orderItem)
			}
		}

		this.orderRepository.save(order)
	}
}

export default OrderCreationUseCase
