import { describe, it, expect, beforeEach } from 'vitest'
import Order from 'src/Chapter3/TellDontAsk/domain/Order'
import { OrderStatus } from 'src/Chapter3/TellDontAsk/domain/OrderStatus'
import OrderCannotBeShippedException from 'src/Chapter3/TellDontAsk/useCase/OrderCannotBeShippedException'
import OrderCannotBeShippedTwiceException from 'src/Chapter3/TellDontAsk/useCase/OrderCannotBeShippedTwiceException'
import OrderShipmentRequest from 'src/Chapter3/TellDontAsk/useCase/OrderShipmentRequest'
import OrderShipmentUseCase from 'src/Chapter3/TellDontAsk/useCase/OrderShipmentUseCase'
import TestOrderRepository from '../doubles/TestOrderRepository'
import TestShipmentService from '../doubles/TestShipmentService'

describe('OrderShipmentUseCase', () => {
	let orderRepository: TestOrderRepository
	let shipmentService: TestShipmentService
	let useCase: OrderShipmentUseCase

	beforeEach(() => {
		orderRepository = new TestOrderRepository()
		shipmentService = new TestShipmentService()
		useCase = new OrderShipmentUseCase(orderRepository, shipmentService)
	})

	it('shipApprovedOrder', () => {
		let initialOrder: Order = new Order(OrderStatus.APPROVED)
		initialOrder.setId(1)
		orderRepository.addOrder(initialOrder)

		let request: OrderShipmentRequest = new OrderShipmentRequest()

		expect(request.orderId).toEqual(1)
		useCase.run(request)

		expect(orderRepository.getSavedOrder().status).toBe(OrderStatus.SHIPPED)
		expect(shipmentService.getShippedOrder()).toBe(initialOrder)
	})

	it('createdOrdersCannotBeShipped', () => {
		let initialOrder: Order = new Order(OrderStatus.CREATED)
		initialOrder.setId(2)
		orderRepository.addOrder(initialOrder)

		let request: OrderShipmentRequest = new OrderShipmentRequest()
		expect(request.orderId).toEqual(2)

		expect(() => useCase.run(request)).toThrow(new OrderCannotBeShippedException())
		expect(orderRepository.getSavedOrder()).toBe(null)
		expect(shipmentService.getShippedOrder()).toBe(null)
	})

	it('rejectedOrdersCannotBeShipped', () => {
		let initialOrder: Order = new Order(OrderStatus.REJECTED)
		initialOrder.setId(3)
		orderRepository.addOrder(initialOrder)

		let request: OrderShipmentRequest = new OrderShipmentRequest()
		expect(request.orderId).toEqual(3)

		expect(() => useCase.run(request)).toThrow(new OrderCannotBeShippedException())
		expect(orderRepository.getSavedOrder()).toBe(null)
		expect(shipmentService.getShippedOrder()).toBe(null)
	})

	it('shippedOrdersCannotBeShippedAgain', () => {
		let initialOrder: Order = new Order(OrderStatus.SHIPPED)
		initialOrder.setId(4)
		orderRepository.addOrder(initialOrder)

		let request: OrderShipmentRequest = new OrderShipmentRequest()
		expect(request.orderId).toEqual(4)

		expect(() => useCase.run(request)).toThrow(new OrderCannotBeShippedTwiceException())
		expect(orderRepository.getSavedOrder()).toBe(null)
		expect(shipmentService.getShippedOrder()).toBe(null)
	})
})
