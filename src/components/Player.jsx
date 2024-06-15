import { useState } from "react";

export default function Player({ name, symbol, isActive, onChangeName }) {
  const [isEditing, setIsEditing] = useState(false);
  const [playerNameVal, setPlayerName] = useState(name);

  function handleEdit() {
    setIsEditing((isEditing) => !isEditing);

    if (isEditing) onChangeName(symbol, playerNameVal);
  }

  function handleChange(event) {
    setPlayerName(event.target.value);
  }

  let playerName = <span className="player-name">{playerNameVal}</span>;
  let btnCaption = "Edit";

  if (isEditing) {
    playerName = (
      <input
        type="text"
        defaultValue={playerNameVal}
        required
        onChange={handleChange}
      />
    );
    btnCaption = "Save";
  }
  return (
    <li className={isActive ? "active" : undefined}>
      <span className="player">
        {playerName}
        <span className="player-symbol">{symbol}</span>
      </span>
      <button onClick={handleEdit}>{btnCaption}</button>
    </li>
  );
}
