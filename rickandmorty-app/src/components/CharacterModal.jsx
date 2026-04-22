export default function CharacterModal({ char, onClose }) {
  if (!char) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal" onClick={(e) => e.stopPropagation()}>
        <img src={char.image} alt={char.name} />

        <h2>{char.name}</h2>

        <p><strong>ID:</strong> {char.id}</p>
        <p><strong>Estado:</strong> {char.status}</p>
        <p><strong>Especie:</strong> {char.species}</p>
        <p><strong>Género:</strong> {char.gender}</p>
        <p><strong>Origen:</strong> {char.origin.name}</p>
        <p><strong>Ubicación actual:</strong> {char.location.name}</p>
        <p><strong>Tipo:</strong> {char.type || "No especificado"}</p>

        <button onClick={onClose}>Cerrar</button>
      </div>
    </div>
  );
}