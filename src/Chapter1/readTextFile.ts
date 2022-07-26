import path from 'path'
import fs from 'fs'

export function readTextFile (file: any) {
	const filePath = path.resolve(__dirname, file)
	const rawFile = fs.readFileSync(filePath)
	return JSON.parse(rawFile.toString())
}