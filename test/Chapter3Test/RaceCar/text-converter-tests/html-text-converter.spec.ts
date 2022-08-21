import { describe, expect, it } from 'vitest'
import HtmlTextConverter from '../../../../src/Chapter3/RaceCar/text-converter/html-text-converter'

describe('Html Converter', () => {

	describe('HtmlTextConverter', () => {

		it('foo', () => {
			const converter = new HtmlTextConverter('foo')
			expect(converter.getFilename()).to.eql('foo')
		})

	})

})
