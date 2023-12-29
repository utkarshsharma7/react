import React, { useState } from 'react'

const Counter = () => {
    const [counter, setCounter] = useState(15)

    const AddValue = () => {
        setCounter(counter +1)
    }
    const SubValue = () => {
        // setCounter(counter-1)
        // setCounter(counter-1)
        // setCounter(counter-1)
        setCounter((counter) => counter -1)
        setCounter((counter) => counter -1)
        setCounter((counter) => counter -1)
        setCounter((counter) => counter -1)
        setCounter((counter) => counter -1)
    }
  return (
    <>
      Counter {counter} <br />
      <br />
      <br />
      <button onClick={AddValue}>Add one</button>
      <button onClick={SubValue}>Subtract one</button>
    </>
  );
}

export default Counter