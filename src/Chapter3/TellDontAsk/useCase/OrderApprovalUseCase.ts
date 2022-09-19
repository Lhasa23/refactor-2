import Order from '../domain/Order'
import OrderRepository from '../repository/OrderRepository'
import ApprovedOrderCannotBeRejectedException from './ApprovedOrderCannotBeRejectedException'
import OrderApprovalRequest from './OrderApprovalRequest'
import RejectedOrderCannotBeApprovedException from './RejectedOrderCannotBeApprovedException'
import ShippedOrdersCannotBeChangedException from './ShippedOrdersCannotBeChangedException'

class OrderApprovalUseCase {
	private readonly orderRepository: OrderRepository

	public constructor (orderRepository: OrderRepository) {
		this.orderRepository = orderRepository
	}

	public run (request: OrderApprovalRequest): void {
		const order: Order = this.orderRepository.getById(request.orderId)

		if (order.isShipped) {
			throw new ShippedOrdersCannotBeChangedException()
		}

		if (request.readyApprove() && order.isRejected) {
			throw new RejectedOrderCannotBeApprovedException()
		}

		if (!request.readyApprove() && order.isApproved) {
			throw new ApprovedOrderCannotBeRejectedException()
		}

		request.readyApprove() ? order.approveOrder() : order.rejectOrder()
		this.orderRepository.save(order)
	}
}

export default OrderApprovalUseCase
