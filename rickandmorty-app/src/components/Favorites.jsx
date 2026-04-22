export default function Favorites({ favorites, removeFavorite }) {
  return (
    <>
      <h2>Favoritos</h2>

      <div className="grid">
        {favorites.map((char) => (
          <div key={char.id} className="card">
            <h3>{char.name}</h3>

            <button onClick={() => removeFavorite(char.id)}>
              Eliminar
            </button>
          </div>
        ))}
      </div>
    </>
  );
}

