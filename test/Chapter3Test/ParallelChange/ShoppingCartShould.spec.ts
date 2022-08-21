import { describe, expect, it } from 'vitest'
import ShoppingCart from '../../../src/Chapter3/ParallelChange/Field/ShoppingCart'

describe('shopping cart', () => {
	let cart = new ShoppingCart()

	it('calculates the final price', () => {
		cart.add(10)

		expect(cart.calculateTotalPrice()).toBe(10)
	})

	it('knows the number of items', () => {
		cart.add(10)

		expect(cart.numberOfProducts()).toBe(1)
	})

	it('may offer discounts when there is at least one expensive product', () => {
		cart.add(120)

		expect(cart.hasDiscount()).toBeTruthy()
	})

	it('does not offer discount for cheap products', () => {
		cart.add(10)

		expect(cart.hasDiscount()).toBeFalsy()
	})

	it('calculates the multiple prices', () => {
		cart.add(10, 10, 11, 14, 16)

		expect(cart.calculateTotalPrice()).toBe(61)
	})

	it('calculates the product number with price', () => {
		cart.add(10, 10, 11, 14, 20)

		expect(cart.numberOfProducts()).toBe(5)
	})
})