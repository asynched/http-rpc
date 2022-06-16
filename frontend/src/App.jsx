import { useEffect, useState } from 'react'
import rpcConnector from '@/rpc'

export default function App() {
  const [computerInfo, setComputerInfo] = useState(null)
  const [filename, setFilename] = useState('package.json')
  const [fileContents, setFileContents] = useState('')

  const handleFileQuery = (e) => {
    e.preventDefault()
    rpcConnector.readFile({ filename }).then((output) => {
      setFileContents(output.contents)
    })
  }

  useEffect(() => {
    rpcConnector.getComputerInfo().then(setComputerInfo)
  }, [])

  return (
    <main>
      <h1>Hello, world!</h1>
      <p>This is meant to be an RPC demo</p>
      <hr />
      {computerInfo && (
        <div>
          <h2>Computer info:</h2>
          <p>The computer name is: {computerInfo.name}</p>
          <p>The platform is: {computerInfo.platform}</p>
          <p>The type is: {computerInfo.type}</p>
          <p>The architecture is: {computerInfo.arch}</p>
          <p>The CPU count is: {computerInfo.config.cpus.length}</p>
        </div>
      )}
      <hr />
      <div>
        <h2>Hey! You can even read files from the backend</h2>
        <p>Try it out!</p>
        <form onSubmit={handleFileQuery}>
          <label htmlFor="filename">Filename: </label>
          <input
            type="text"
            id="filename"
            value={filename}
            onChange={(e) => setFilename(e.target.value)}
          />
          <br />
          <br />
          <button type="submit">Read!</button>
        </form>
        <br />
        <textarea
          cols="30"
          rows="10"
          readOnly
          value={fileContents || 'The contents will be displayed here'}
        ></textarea>
      </div>
    </main>
  )
}
