import SellItemRequest from './SellItemRequest'

class SellItemsRequest {
	requests: SellItemRequest[]

	constructor () {
		this.requests = []
	}

	addRequest (request: SellItemRequest) {
		this.requests.push(request)
	}
}

export default SellItemsRequest
