export default function CharacterCard({ char, addFavorite, onSelect }) {
  return (
    <div className="card" onClick={() => onSelect(char)}>
      <div className="card-image-wrap">
        <img src={char.image} alt={char.name} />
        <span className="status-badge">● {char.status.toUpperCase()}</span>
      </div>

      <p className="entity-id">
        Entity ID: {String(char.id).padStart(3, "0")}
      </p>

      <h2>{char.name}</h2>

      <div className="info-grid">
        <div>
          <p className="label">Species</p>
          <p className="value">{char.species}</p>
        </div>

        <div>
          <p className="label">Gender</p>
          <p className="value">{char.gender}</p>
        </div>
      </div>

      <div className="location-box">
        <p className="label">Last known location</p>
        <p className="location-value">📍 {char.location.name}</p>
      </div>

      <button
        onClick={(e) => {
          e.stopPropagation();
          addFavorite(char);
        }}
      >
        ❤️ Agregar a favoritos
      </button>
    </div>
  );
}
