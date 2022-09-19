class OrderApprovalRequest {
	readonly orderId: number
	private readonly approved: boolean

	constructor (id: number, approved: boolean) {
		this.orderId = id
		this.approved = approved
	}

	public readyApprove (): boolean {
		return this.approved
	}
}

export default OrderApprovalRequest

