import OrderItem from './OrderItem'
import { OrderStatus } from './OrderStatus'

let id = 1

class Order {
	currency: string
	items: OrderItem[] = []
	total: number = 0
	tax: number = 0
	private status: OrderStatus = OrderStatus.CREATED
	id: number

	constructor (currency: string = '') {
		this.currency = currency
		this.id = id++
	}

	get isCreated () {
		return this.status === OrderStatus.CREATED
	}

	get isApproved () {
		return this.status === OrderStatus.APPROVED
	}

	get isShipped () {
		return this.status === OrderStatus.SHIPPED
	}

	get isRejected () {
		return this.status === OrderStatus.REJECTED
	}

	get totalAmount () {
		return this.items.reduce((amount, item) => amount + item.taxedAmount, this.total)
	}

	get taxAmount () {
		return this.items.reduce((amount, item) => amount + item.tax, this.tax)
	}

	approveOrder () {
		this.status = OrderStatus.APPROVED
	}

	rejectOrder () {
		this.status = OrderStatus.REJECTED
	}

	shipOrder () {
		this.status = OrderStatus.SHIPPED
	}

	addOrderItem (item: OrderItem) {
		this.items.push(item)
	}
}

export default Order

