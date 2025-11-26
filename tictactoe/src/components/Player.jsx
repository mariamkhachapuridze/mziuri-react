import { useState } from "react";

export default function Player({ title, symbol }) {
  const [isEditing, setIsEditing] = useState(false);
  const [name, setName] = useState(title);

  function handleEditClick() {
    setIsEditing((prevValue) => !prevValue);
  }

  function handleNameChange(event) {
    setName(event.target.value);
  }

  let playerName = <span className="player-title">{name}</span>;

  if (isEditing === true) {
    playerName = (
      <input type="text" required value={name} onChange={handleNameChange} />
    );
  }

  return (
    <li>
      <span className="player">
        {playerName}
        <span className="player-symbol">{symbol}</span>
        <button onClick={handleEditClick}>
          {!isEditing ? "edit" : "save"}
        </button>
      </span>
    </li>
  );
}
