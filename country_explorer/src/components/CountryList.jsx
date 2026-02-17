export default function SuggestionButtons({ setSearch }) {
  const suggestions = ["korea", "afghanistan", "italy", "france", "iceland"];

  return (
    <div>
      {suggestions.map((chip) => (
        <button key={chip} onClick={() => setSearch(chip)}>
          {chip}
        </button>
      ))}
    </div>
  );
}
