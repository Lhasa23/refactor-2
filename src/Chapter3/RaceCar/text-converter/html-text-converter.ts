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
		return this.text.split('\n').map((line) => {
			return line.split('').reduce((convertingLine, char) => {
				return convertingLine + this.getEscapeChar(char)
			}, '')
		}).join('<br />')
	}

	public getFilename () {
		return this.fullFilenameWithPath.split('/').pop()
	}

	private getEscapeChar (char: string) {
		return this.keyMap[char] || char
	}
}
