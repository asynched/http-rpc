import './module-aliases'

import * as rpc from '@/rpc'
import logger from '@/config/logger'

import '@/impl/getComputerInfo'
import '@/impl/readFile'

rpc.start(3333, () => {
  logger.success(`Server started on port :3333`)
})
