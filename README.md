# http-rpc

This is a test on doing remote procedure calls over HTTP with React.

My main goal with this is to explore remote procedure calls, using them as a function for the front-end. As you'll see in the project, the front-end uses a proxy object to do the remote calls for the back-end, providing a simple interface for executing remote calls.

```js
// The main goal is to build something that looks something
// like the code below, bridging the gap between front-end
// and back-end.
const output = await rpcConnector.readFile({ filename: 'package.json' })
console.log(output.contents)
```

As for the back-end, registering procedures to be called by the rpc connector should be just as easy as the front-end. Ended up with an API that looks like this:

```js
// As for the back-end, you register a procedure attributing a
// callback function to the procedure name. Because of proxies
// we can afford to do this magic.
procedures.readFile = ({ filename }) => {
  // Do something with the args
  return null
}
```
