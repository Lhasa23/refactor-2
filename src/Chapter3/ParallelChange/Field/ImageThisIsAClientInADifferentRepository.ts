import ShoppingCart from './ShoppingCart'

class ImagineThisIsAClientInADifferentRepository {
	FormattedPrice = () => {
		const cart = new ShoppingCart()
		cart.add(10)
		return `Total price is ${cart.calculateTotalPrice()} euro`
	}
}

export default ImagineThisIsAClientInADifferentRepository