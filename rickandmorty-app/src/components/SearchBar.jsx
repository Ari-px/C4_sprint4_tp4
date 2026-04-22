export default function SearchBar({ search, setSearch, onSearch }) {
  return (
    <div className="flex gap-2 justify-center mb-6">
      <input
        type="text"
        placeholder="Buscar personaje..."
        className="p-2 border rounded"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      <button
        onClick={onSearch}
        className="bg-blue-500 text-white px-4 py-2 rounded"
      >
        Buscar
      </button>
    </div>
  );
}
