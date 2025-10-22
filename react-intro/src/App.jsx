import {useState} from 'react';

function App() {
  const [counter, setCounter] = useState(0)
const projectName = "clicker game"


  return (
    <>
      <h1>my first react project  -  name : {projectName}</h1>
      <h2>counter: {counter}</h2>
<CounterButton
        title={"Increase"}
        handleClick={() => {
          setCounter(counter + 1);
        }}
      />
      <CounterButton
        title={"Decrease"}
        handleClick={() => {
          setCounter(counter - 1);
        }}
      />
    </>
  )
}

export default App