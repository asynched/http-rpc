import express from 'express'
import cors from 'cors'

import logger from '@/config/logger'

const procedures = {}

export const registerProcedure = (name, procedure) => {
  logger.info(`Registered the procedure: "${name}"`)
  procedures[name] = procedure
}

const app = express()

app.use(cors())
app.use(express.json())

app.post('/rpc/:procedure', async (request, response) => {
  const procedure = request.params.procedure
  const args = request.body

  if (!procedures[procedure]) {
    logger.error(`The procedure: "${procedure}" is not registered`)
    return response.status(404).json({
      message: "The procedure you've requested does not exist",
      info: {
        procedure,
      },
    })
  }

  try {
    const result = await procedures[procedure](args)
    logger.success(`The procedure: "${procedure}" has been called successfully`)
    return response.status(200).json(result)
  } catch (error) {
    logger.error(`The procedure: "${procedure}" failed to execute`)
    return response.status(400).json({
      message: 'An error occurred while executing the procedure',
      info: {
        error,
      },
    })
  }
})

export const start = (port, cb) => app.listen(port, cb)
