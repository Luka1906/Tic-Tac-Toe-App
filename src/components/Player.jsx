import { useState } from "react";

export default function Player({initialName, symbol}) {
    const [playerName, setPlayerName] = useState(initialName);
    const [isEditing, setIsEditing] = useState(false);
    

    function handleEditing() {
        setIsEditing((editing) => !editing);
    };

    function handleChange(event) {
        setPlayerName(event.target.value);
    }

    return (
        <li>
        <span className="player">
            {isEditing ? (
            <input onChange={handleChange} type="text" value={playerName}  />
            ) : (
            <span className="player-name">{playerName}</span>
            )}
 
          <span className="player-symbol">{symbol}</span>
        </span>
        <button onClick={handleEditing}>{isEditing? "Save" : "Edit"}</button>
      </li>
    )
}