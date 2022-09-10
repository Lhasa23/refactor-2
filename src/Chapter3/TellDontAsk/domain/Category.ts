class Category {
	name: string
	taxPercentage: number

	constructor (name: string = '', taxPercentage: number = 0) {
		this.name = name
		this.taxPercentage = taxPercentage
	}
}

export default Category

