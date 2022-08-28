import { readFileSync } from 'fs'

export default class HtmlTextConverter {
	private readonly fullFilenameWithPath: string
	private readonly text: string
	private readonly keyMap: { [name: string]: string } = { '<': '&lt;', '>': '&gt;', '&': '&amp;' }

	constructor (fullFilenameWithPath: string) {
		this.fullFilenameWithPath = fullFilenameWithPath
		this.text = readFileSync(this.fullFilenameWithPath).toString()
	}

	public convertToHtml (): string {
		const html: string[] = []
		let convertedLine: string[] = []

		this.text.split('').forEach((char) => {
			if (char === '\n') {
				html.push(convertedLine.join(''))
				convertedLine = []
				return
			}
			convertedLine.push(this.keyMap[char] || char)
		})

		html.push(convertedLine.join(''))
		return html.join('<br />')
	}

	public getFilename () {
		return this.fullFilenameWithPath
	}
}
