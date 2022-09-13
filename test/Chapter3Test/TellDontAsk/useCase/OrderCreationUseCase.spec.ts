import { describe, it, expect } from 'vitest'
import Category from 'src/Chapter3/TellDontAsk/domain/Category'
import Order from 'src/Chapter3/TellDontAsk/domain/Order'
import Product from 'src/Chapter3/TellDontAsk/domain/Product'
import { ProductCatalog } from 'src/Chapter3/TellDontAsk/repository/ProductCatalog'
import OrderCreationUseCase from 'src/Chapter3/TellDontAsk/useCase/OrderCreationUseCase'
import SellItemRequest from 'src/Chapter3/TellDontAsk/useCase/SellItemRequest'
import SellItemsRequest from 'src/Chapter3/TellDontAsk/useCase/SellItemsRequest'
import UnknownProductException from 'src/Chapter3/TellDontAsk/useCase/UnknownProductException'
import OrderItem from 'src/Chapter3/TellDontAsk/domain/OrderItem'
import InMemoryProductCatalog from '../doubles/InMemoryProductCatalog'
import TestOrderRepository from '../doubles/TestOrderRepository'

describe('OrderApprovalUseCase', () => {
	const orderRepository: TestOrderRepository = new TestOrderRepository()
	let food: Category = new Category('food', 10)

	const saladProduct = new Product('salad', 3.56, food)
	const tomatoProduct = new Product('tomato', 4.65, food)

	const productCatalog: ProductCatalog = new InMemoryProductCatalog([saladProduct, tomatoProduct])

	const creationUseCase: OrderCreationUseCase = new OrderCreationUseCase(orderRepository, productCatalog)

	it('sellMultipleItems', () => {
		let saladRequest: SellItemRequest = new SellItemRequest('salad', 2)
		let tomatoRequest: SellItemRequest = new SellItemRequest('tomato', 3)

		let request: SellItemsRequest = new SellItemsRequest()
		request.addRequest(saladRequest)
		request.addRequest(tomatoRequest)

		creationUseCase.run(request)

		const insertedOrder: Order = orderRepository.getSavedOrder() as Order
		expect(insertedOrder.isCreated).toBe(true)
		expect(insertedOrder.totalAmount).toBe(23.20)
		expect(insertedOrder.taxAmount).toBe((2.13))
		expect(insertedOrder.currency).toBe(('EUR'))
		expect(insertedOrder.items.length).toBe(2)
		expect(JSON.stringify(insertedOrder.items[0])).toBe(JSON.stringify(new OrderItem(saladProduct, 2, 7.84, 0.72)))
		expect(JSON.stringify(insertedOrder.items[1])).toBe(JSON.stringify(new OrderItem(tomatoProduct, 3, 15.36, 1.41)))
	})

	it('unknownProduct', () => {
		let request: SellItemsRequest = new SellItemsRequest()
		let unknownProductRequest: SellItemRequest = new SellItemRequest('unknown product')
		request.addRequest(unknownProductRequest)

		expect(() => creationUseCase.run(request)).toThrow(new UnknownProductException())
	})
})
