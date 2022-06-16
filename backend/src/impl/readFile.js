import fs from 'node:fs/promises'
import { procedures } from '@/rpc'

procedures.readFile = async ({ filename }) => {
  const contents = await fs.readFile(filename, 'utf8')

  return {
    filename,
    contents: contents,
  }
}
