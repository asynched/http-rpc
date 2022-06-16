const source = {}

const rpcConnector = new Proxy(source, {
  get(_, name) {
    return async (param) => {
      const response = await fetch('http://localhost:3333/rpc/' + name, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify(param),
      })

      const data = await response.json()
      return data
    }
  },
})

export default rpcConnector
