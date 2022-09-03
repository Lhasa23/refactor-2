class OrderApprovalRequest {
	readonly orderId: number
	private readonly approved: boolean

	constructor (id: number, approved: boolean) {
		this.orderId = id
		this.approved = approved
	}

	public isApproved (): boolean {
		return this.approved
	}
}

export default OrderApprovalRequest

