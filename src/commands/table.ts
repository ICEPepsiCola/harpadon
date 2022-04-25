import {Command} from '@oclif/core'
import {marked} from 'marked'
import {JSDOM} from 'jsdom'
import {readFile} from 'fs/promises'

export default class Table extends Command {
  static enableJsonFlag = true

  static description = 'create json form markdown table'

  static examples = [
    '<%= config.bin %> <%= command.id %>',
  ]

  static flags = {}

  static args = [{name: 'file', required: true}, {name: 'output'}]

  public async run(): Promise<Record<string, string>[]> {
    const {args} = await this.parse(Table)
    const {file} = args
    const text = await readFile(file, {encoding: 'utf8'})
    const content = marked.parse(text)
    const dom = new JSDOM(content)
    const table = dom.window.document?.querySelector('table')
    if (!table) return []
    const header = []
    const json: Record<string, string>[] = []
    for (const cell of table.rows[0].cells) {
      header.push(cell.innerHTML)
    }

    for (let i = 1; i < table.rows.length; i++) {
      const row = table.rows[i]

      const data: Record<string, string> = {}
      for (let j = 0; j < row.cells.length; j++) {
        const cell = row.cells[j]
        data[header[j]] = cell.innerHTML
      }

      json.push(data)
    }

    return json
  }
}
