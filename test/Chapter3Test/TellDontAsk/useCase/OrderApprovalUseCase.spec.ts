import { describe, it, expect, beforeEach } from 'vitest'
import Order from 'src/Chapter3/TellDontAsk/domain/Order'
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
		let initialOrder: Order = new Order()
		orderRepository.addOrder(initialOrder)

		let request: OrderApprovalRequest = new OrderApprovalRequest(initialOrder.id, true)

		useCase.run(request)

		const savedOrder: Order = orderRepository.getSavedOrder() as Order
		expect(savedOrder.isApproved).toBe(true)
	})

	it('rejectedExistingOrder', () => {
		let initialOrder: Order = new Order()
		orderRepository.addOrder(initialOrder)

		let request: OrderApprovalRequest = new OrderApprovalRequest(initialOrder.id, false)

		useCase.run(request)

		const savedOrder: Order = orderRepository.getSavedOrder() as Order
		expect(savedOrder.isRejected).toBe(true)
	})

	it('cannotApproveRejectedOrder', () => {
		const initialOrder: Order = new Order()
		initialOrder.rejectOrder()
		orderRepository.addOrder(initialOrder)

		const request: OrderApprovalRequest = new OrderApprovalRequest(initialOrder.id, true)

		expect(() => useCase.run(request)).toThrow(new RejectedOrderCannotBeApprovedException())
		expect(orderRepository.getSavedOrder()).toBe(null)
	})

	it('cannotRejectApprovedOrder', () => {
		const initialOrder: Order = new Order()
		initialOrder.approveOrder()
		orderRepository.addOrder(initialOrder)

		const request: OrderApprovalRequest = new OrderApprovalRequest(initialOrder.id, false)

		expect(() => useCase.run(request)).toThrow(new ApprovedOrderCannotBeRejectedException())
		expect(orderRepository.getSavedOrder()).toBe(null)
	})

	it('shippedOrdersCannotBeApproved', () => {
		const initialOrder: Order = new Order()
		initialOrder.shipOrder()
		orderRepository.addOrder(initialOrder)

		const request: OrderApprovalRequest = new OrderApprovalRequest(initialOrder.id, true)

		expect(() => useCase.run(request)).toThrow(new ShippedOrdersCannotBeChangedException())
		expect(orderRepository.getSavedOrder()).toBe(null)
	})

	it('shippedOrdersCannotBeRejected', () => {
		let initialOrder: Order = new Order()
		initialOrder.shipOrder()
		orderRepository.addOrder(initialOrder)

		let request: OrderApprovalRequest = new OrderApprovalRequest(initialOrder.id, false)

		expect(() => useCase.run(request)).toThrow(new ShippedOrdersCannotBeChangedException())
		expect(orderRepository.getSavedOrder()).toBe(null)
	})
})
