import "./BaseStats.css";

function BaseStats({ clicker, stats: { hp, attack, defense, speed } }) {
  return (
    <div className="stats">
      <h1>BaseStats</h1>
      <button onClick={clicker} className="sp-stats">
        Check Special Stats
      </button>
      <div className="base-stats">
        <table>
          <tbody>
            <tr>
              <td>Hit Points</td>
              <td>{hp}</td>
            </tr>
            <tr>
              <td>Attack</td>
              <td>{attack}</td>
            </tr>
            <tr>
              <td>Defense</td>
              <td>{defense}</td>
            </tr>
            <tr>
              <td>Speed</td>
              <td>{speed}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default BaseStats;
