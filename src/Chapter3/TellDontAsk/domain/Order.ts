import OrderItem from './OrderItem'
import { OrderStatus } from './OrderStatus'

// let id = 1

class Order {
	total: number
	currency: string
	items: OrderItem[]
	tax: number
	private status: OrderStatus = OrderStatus.CREATED
	id: number


	constructor (items: OrderItem[] = [], currency: string = '', total: number = 0, tax: number = 0) {
		this.total = total
		this.currency = currency
		this.items = items
		this.tax = tax
		this.id = 0
	}

	public setId (id: number): void {
		this.id = id
	}

	orderApprove () {
		this.status = OrderStatus.APPROVED
	}

	orderReject () {
		this.status = OrderStatus.REJECTED
	}

	orderShip () {
		this.status = OrderStatus.SHIPPED
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
}

export default Order

