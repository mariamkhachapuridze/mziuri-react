import { useState } from "react";

function App() {
  const [numbers, setNumbers] = useState([1, 2, 3]);

  function addOne() {
    const newArray = numbers.map((value) => value + 1);
    setNumbers(newArray);
  }

  return (
    <>
      {numbers.map((value, index) => (
        <h1 key={index}>{value}</h1>
      ))}
      <button onClick={addOne}>Add</button>
    </>
  );
}

export default App;
