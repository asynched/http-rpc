import fs from 'node:fs/promises'
import { registerProcedure } from '@/rpc'

registerProcedure('readFile', async ({ filename }) => {
  const contents = await fs.readFile(filename, 'utf8')

  return {
    filename,
    contents: contents,
  }
})
