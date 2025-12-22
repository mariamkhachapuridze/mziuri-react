import "./App.css";
import { nanoid } from "nanoid";
import { useState } from "react";

function App() {
  const [hobbies, setHobbies] = useState([]);
  const [hobbyName, setHobbyName] = useState("");

  const favHobbies = hobbies.filter((hobby) => hobby.isFav == true);

  function addHobby(hobbyName) {
    setHobbies((prevHobbies) => [
      ...prevHobbies,
      { id: nanoid(), name: hobbyName, isFav: false },
    ]);
  }

  function favoriteHobby(hobbyId) {
    setHobbies((prevHobbies) =>
      prevHobbies.map((hobby) =>
        hobby.id === hobbyId ? { ...hobby, isFav: !hobby.isFav } : hobby
      )
    );
  }

  return (
    <div className="app">
      <h1>My Hobbies</h1>
      <div className="hobby-form">
        <input
          type="text"
          value={hobbyName}
          onChange={(e) => setHobbyName(e.target.value)}
          placeholder="Enter a new hobby..."
          className="hobby-input"
        />
        <button onClick={() => addHobby(hobbyName)} className="save-button">
          Save
        </button>
      </div>

      <div className="hobby-list">
        {hobbies.map((hobby) => (
          <div key={hobby.id} className="hobby-item">
            <span>{hobby.name}</span>
            <button
              onClick={() => favoriteHobby(hobby.id)}
              className="favorite-star favorite-button"
            >
              ☆
            </button>
          </div>
        ))}
      </div>
      <div className="favorite-hobbies hobby-list">
        {favHobbies.map((hobby) => (
          <div key={hobby.id} className="hobby-item">
            <span>{hobby.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
