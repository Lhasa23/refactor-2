import Order from 'src/Chapter3/TellDontAsk/domain/Order'
import OrderRepository from 'src/Chapter3/TellDontAsk/repository/OrderRepository'

class TestOrderRepository implements OrderRepository {
	private insertedOrder: Order | null = null
	private orders: Order[] = []

	public getSavedOrder (): Order | null {
		return this.insertedOrder
	}

	public save (order: Order): void {
		this.insertedOrder = order
	}

	public getById (orderId: number): Order {
		return this.orders.find(o => o.id == orderId) as Order
	}

	public addOrder (order: Order): void {
		this.orders.push(order)
	}
}

export default TestOrderRepository

