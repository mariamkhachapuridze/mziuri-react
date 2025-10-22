import {useState} from 'react';

import CounterButton from "./components/counterButton.jsx"
import CounterDisplay from"./components/CounterDisplay.jsx"
import CounterHeader from"./components/CounterHeader.jsx"
import Message from"./components/Message.jsx"

function App() {
  const [counter, setCounter] = useState(0)
const projectName = "clicker game"


  return (
    <>
      <CounterHeader name={projectName} />
      <CounterDisplay counter={counter} />
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
      <CounterButton
        title={"Reset"}
        handleClick={() => {
          setCounter(0);
        }}
      />
      <Message count={counter} />
    </>
  )
}

export default App