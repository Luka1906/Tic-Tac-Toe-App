export default function Log({turns}) {
    return (
        <ol id="log">
            {turns.map((turn, index) => (
                <li key={index}>
                    <span className="player-name">{turn.player}</span>
                    <span className="player-symbol">{turn.square.row}, {turn.square.col}</span>
                </li>
            ))}
        </ol>
    )
}