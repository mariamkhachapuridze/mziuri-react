import React from "react";
import { useState } from "react";

export default function Player({
  initialName,
  symbol,
  isActive,
  onPlayerChanged,
}) {
  const [isEditing, setIsEditing] = useState(false);
  const [playerName, setPlayerName] = useState(initialName);

  function handleNameChange(event) {
    setPlayerName(event.target.value);
  }

  function handleEditClick() {
    setIsEditing((prevValue) => !prevValue);

    if (isEditing) {
      onPlayerChanged(symbol, playerName);
    }
  }

  let editablePlayerName = <span className="player-name">{playerName}</span>;

  if (isEditing) {
    editablePlayerName = (
      <input
        type="text"
        required
        value={playerName}
        onChange={handleNameChange}
      />
    );
  }

  return (
    <li className={isActive ? "active" : undefined}>
      <span className="player">
        {editablePlayerName}
        <span className="player-symbol">{symbol}</span>
        <button onClick={handleEditClick}>{isEditing ? "Save" : "Edit"}</button>
      </span>
    </li>
  );
}
