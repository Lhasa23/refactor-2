import { describe, expect, it } from 'vitest'
import HtmlTextConverter from 'src/Chapter3/RaceCar/text-converter/html-text-converter'

describe('Html Converter', () => {

	describe('HtmlTextConverter', () => {

		it('should read file name correct', () => {
			const converter = new HtmlTextConverter('test/Chapter3Test/RaceCar/text-converter-tests/html-test')
			expect(converter.getFilename()).to.eql('html-test')
		})

		it('should read file html converted correct', () => {
			const converter = new HtmlTextConverter('test/Chapter3Test/RaceCar/text-converter-tests/html-test')
			expect(converter.convertToHtml()).toEqual(`&lt;!doctype html&gt;<br />&lt;html lang="en"&gt;<br />&lt;head&gt;<br />  &lt;meta charset="UTF-8"&gt;<br />  &lt;meta name="viewport"<br />        content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0"&gt;<br />  &lt;meta http-equiv="X-UA-Compatible" content="ie=edge"&gt;<br />  &lt;title&gt;Document&lt;/title&gt;<br />&lt;/head&gt;<br />&lt;body&gt;<br />&lt;div class="test-header"&gt;<br />  &lt;p&gt;testtesttesttesttest&lt;/p&gt;<br />&lt;/div&gt;<br />&lt;/body&gt;<br />&lt;/html&gt;`)
		})
	})
})
