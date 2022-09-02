import OrderItem from './OrderItem'
import { OrderStatus } from './OrderStatus'

class Order {
	total: number
	currency: string
	items: OrderItem[]
	tax: number
	status: OrderStatus
	id: number


	constructor (status: OrderStatus, items: OrderItem[] = [], currency: string = '', total: number = 0, tax: number = 0) {
		this.total = total
		this.currency = currency
		this.items = items
		this.tax = tax
		this.status = status
		this.id = 0
	}

	public setId (id: number): void {
		this.id = id
	}
}

export default Order

