import { describe, it, expect, beforeEach } from 'vitest'
import Order from 'src/Chapter3/TellDontAsk/domain/Order'
import { OrderStatus } from 'src/Chapter3/TellDontAsk/domain/OrderStatus'
import ApprovedOrderCannotBeRejectedException
	from 'src/Chapter3/TellDontAsk/useCase/ApprovedOrderCannotBeRejectedException'
import OrderApprovalRequest from 'src/Chapter3/TellDontAsk/useCase/OrderApprovalRequest'
import OrderApprovalUseCase from 'src/Chapter3/TellDontAsk/useCase/OrderApprovalUseCase'
import RejectedOrderCannotBeApprovedException
	from 'src/Chapter3/TellDontAsk/useCase/RejectedOrderCannotBeApprovedException'
import ShippedOrdersCannotBeChangedException
	from 'src/Chapter3/TellDontAsk/useCase/ShippedOrdersCannotBeChangedException'
import TestOrderRepository from '../doubles/TestOrderRepository'

describe('OrderApprovalUseCase', () => {
	let orderRepository: TestOrderRepository
	let useCase: OrderApprovalUseCase

	beforeEach(() => {
		orderRepository = new TestOrderRepository()
		useCase = new OrderApprovalUseCase(orderRepository)
	})
	it('approvedExistingOrder', () => {
		let initialOrder: Order = new Order(OrderStatus.CREATED)
		initialOrder.setId(1)
		orderRepository.addOrder(initialOrder)

		let request: OrderApprovalRequest = new OrderApprovalRequest()
		request.setOrderId(1)
		request.setApproved(true)

		useCase.run(request)

		const savedOrder: Order = orderRepository.getSavedOrder()
		expect(savedOrder.status).toBe(OrderStatus.APPROVED)
	})

	it('rejectedExistingOrder', () => {
		let initialOrder: Order = new Order(OrderStatus.CREATED)
		initialOrder.setId(1)
		orderRepository.addOrder(initialOrder)

		let request: OrderApprovalRequest = new OrderApprovalRequest()
		request.setOrderId(1)
		request.setApproved(false)

		useCase.run(request)

		const savedOrder: Order = orderRepository.getSavedOrder()
		expect(savedOrder.status).toBe(OrderStatus.REJECTED)
	})

	it('cannotApproveRejectedOrder', () => {
		const initialOrder: Order = new Order(OrderStatus.REJECTED)
		initialOrder.setId(1)
		orderRepository.addOrder(initialOrder)

		const request: OrderApprovalRequest = new OrderApprovalRequest()
		request.setOrderId(1)
		request.setApproved(true)

		expect(() => useCase.run(request)).toThrow(new RejectedOrderCannotBeApprovedException())
		expect(orderRepository.getSavedOrder()).toBe(null)
	})

	it('cannotRejectApprovedOrder', () => {
		const initialOrder: Order = new Order(OrderStatus.APPROVED)
		initialOrder.setId(1)
		orderRepository.addOrder(initialOrder)

		const request: OrderApprovalRequest = new OrderApprovalRequest()
		request.setOrderId(1)
		request.setApproved(false)

		expect(() => useCase.run(request)).toThrow(new ApprovedOrderCannotBeRejectedException())
		expect(orderRepository.getSavedOrder()).toBe(null)
	})

	it('shippedOrdersCannotBeApproved', () => {
		const initialOrder: Order = new Order(OrderStatus.SHIPPED)
		initialOrder.setId(1)
		orderRepository.addOrder(initialOrder)

		const request: OrderApprovalRequest = new OrderApprovalRequest()
		request.setOrderId(1)
		request.setApproved(true)

		expect(() => useCase.run(request)).toThrow(new ShippedOrdersCannotBeChangedException())
		expect(orderRepository.getSavedOrder()).toBe(null)
	})

	it('shippedOrdersCannotBeRejected', () => {
		let initialOrder: Order = new Order(OrderStatus.SHIPPED)
		initialOrder.setId(1)
		orderRepository.addOrder(initialOrder)

		let request: OrderApprovalRequest = new OrderApprovalRequest()
		request.setOrderId(1)
		request.setApproved(false)

		expect(() => useCase.run(request)).toThrow(new ShippedOrdersCannotBeChangedException())
		expect(orderRepository.getSavedOrder()).toBe(null)
	})
})
