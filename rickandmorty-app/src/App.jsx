import { useEffect, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { getCharactersByName, getAllCharacters } from "./services/api";
import { useLocalStorage } from "./hooks/useLocalStorage";
import CharacterCard from "./components/CharacterCard";
import CharacterModal from "./components/CharacterModal";

export default function App() {
  const [characters, setCharacters] = useState([]);
  const [search, setSearch] = useState("");
  const [favorites, setFavorites] = useLocalStorage("favorites", []);
  const [showFavs, setShowFavs] = useState(false);
  const [selectedChar, setSelectedChar] = useState(null);
  const [loading, setLoading] = useState(false);

  const loadAllCharacters = async () => {
    try {
      setLoading(true);
      const data = await getAllCharacters();
      setCharacters(data);
    } catch (error) {
      toast.error("Error al cargar personajes");
    } finally {
      setLoading(false);
    }
  };

  const handleSearch = async () => {
    if (!search.trim()) {
      await loadAllCharacters();
      return;
    }

    try {
      setLoading(true);
      const data = await getCharactersByName(search.trim());
      setCharacters(data);
      toast.success("Personajes cargados correctamente");
    } catch (error) {
      setCharacters([]);
      toast.error("No se encontraron personajes");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadAllCharacters();
  }, []);

  const handleChange = async (e) => {
    const value = e.target.value;
    setSearch(value);

    if (value.trim() === "") {
      await loadAllCharacters();
    }
  };

  const addFavorite = (char) => {
    const exists = favorites.some((fav) => fav.id === char.id);

    if (exists) {
      toast.info("Ese personaje ya está en favoritos");
      return;
    }

    setFavorites([...favorites, char]);
    toast.success("Personaje agregado a favoritos");
  };

  const removeFavorite = (id) => {
    setFavorites(favorites.filter((fav) => fav.id !== id));
    toast.info("Personaje eliminado de favoritos");
  };

  return (
    <div className="container">
      <ToastContainer />

      <div className="header">
        <h1 className="brand">Portal Rick and Morty</h1>

        <div className="top-actions">
          <button className="fav-btn" onClick={() => setShowFavs(!showFavs)}>
            ⭐ Favoritos ({favorites.length})
          </button>
        </div>
      </div>

      {showFavs && (
        <div className="dropdown">
          <h3 className="dropdown-title">Tus favoritos</h3>

          {favorites.length === 0 ? (
            <p className="empty-message">Todavía no agregaste personajes.</p>
          ) : (
            favorites.map((char) => (
              <div key={char.id} className="dropdown-item">
                <img src={char.image} alt={char.name} />
                <h4>{char.name}</h4>
                <p>🧬 {char.species}</p>
                <p>💀 {char.status}</p>
                <p>🚻 {char.gender}</p>
                <p>📍 {char.location.name}</p>

                <button onClick={() => removeFavorite(char.id)}>
                  Eliminar
                </button>
              </div>
            ))
          )}
        </div>
      )}

      <div className="search">
        <input
          type="text"
          placeholder="Buscar personaje..."
          value={search}
          onChange={handleChange}
        />

        <button onClick={handleSearch}>Buscar</button>
      </div>

      {loading ? (
        <p className="empty-message">Cargando personajes...</p>
      ) : (
        <div className="grid">
          {characters.map((char) => (
            <CharacterCard
              key={char.id}
              char={char}
              addFavorite={addFavorite}
              onSelect={setSelectedChar}
            />
          ))}
        </div>
      )}

      <CharacterModal
        char={selectedChar}
        onClose={() => setSelectedChar(null)}
      />
    </div>
  );
}