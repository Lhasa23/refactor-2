import { describe, it, expect } from 'vitest'
import Category from 'src/Chapter3/TellDontAsk/domain/Category'
import Order from 'src/Chapter3/TellDontAsk/domain/Order'
import { OrderStatus } from 'src/Chapter3/TellDontAsk/domain/OrderStatus'
import Product from 'src/Chapter3/TellDontAsk/domain/Product'
import { ProductCatalog } from 'src/Chapter3/TellDontAsk/repository/ProductCatalog'
import OrderCreationUseCase from 'src/Chapter3/TellDontAsk/useCase/OrderCreationUseCase'
import SellItemRequest from 'src/Chapter3/TellDontAsk/useCase/SellItemRequest'
import SellItemsRequest from 'src/Chapter3/TellDontAsk/useCase/SellItemsRequest'
import UnknownProductException from 'src/Chapter3/TellDontAsk/useCase/UnknownProductException'
import InMemoryProductCatalog from '../doubles/InMemoryProductCatalog'
import TestOrderRepository from '../doubles/TestOrderRepository'

describe('OrderApprovalUseCase', () => {
	const orderRepository: TestOrderRepository = new TestOrderRepository()
	let food: Category = new Category('food', 10)

	const saladProduct = new Product('salad', 3.56, food)
	const tomatoProduct = new Product('tomato', 4.65, food)
	const productCatalog: ProductCatalog = new InMemoryProductCatalog([saladProduct, tomatoProduct])
	const useCase: OrderCreationUseCase = new OrderCreationUseCase(orderRepository, productCatalog)

	it('sellMultipleItems', () => {
		let saladRequest: SellItemRequest = new SellItemRequest()
		saladRequest.setProductName('salad')
		saladRequest.setQuantity(2)

		let tomatoRequest: SellItemRequest = new SellItemRequest()
		tomatoRequest.setProductName('tomato')
		tomatoRequest.setQuantity(3)

		let request: SellItemsRequest = new SellItemsRequest()
		request.setRequests([])
		request.getRequests().push(saladRequest)
		request.getRequests().push(tomatoRequest)

		useCase.run(request)

		const insertedOrder: Order = orderRepository.getSavedOrder() as Order
		expect(insertedOrder.status).toBe(OrderStatus.CREATED)
		expect(insertedOrder.total).toBe(23.20)
		expect(insertedOrder.tax).toBe((2.13))
		expect(insertedOrder.currency).toBe(('EUR'))
		expect(insertedOrder.items.length).toBe(2)
		expect(insertedOrder.items[0].product.name).toBe('salad')
		expect(insertedOrder.items[0].product.price).toBe(3.56)
		expect(insertedOrder.items[0].quantity).toBe(2)
		expect(insertedOrder.items[0].taxedAmount).toBe(7.84)
		expect(insertedOrder.items[0].tax).toBe(0.72)
		expect(insertedOrder.items[1].product.name).toBe('tomato')
		expect(insertedOrder.items[1].product.price).toBe(4.65)
		expect(insertedOrder.items[1].quantity).toBe(3)
		expect(insertedOrder.items[1].taxedAmount).toBe(15.36)
		expect(insertedOrder.items[1].tax).toBe(1.41)
	})

	it('unknownProduct', () => {
		let request: SellItemsRequest = new SellItemsRequest()
		request.setRequests([])
		let unknownProductRequest: SellItemRequest = new SellItemRequest()
		unknownProductRequest.setProductName('unknown product')
		request.getRequests().push(unknownProductRequest)

		expect(() => useCase.run(request)).toThrow(new UnknownProductException())
	})
})
