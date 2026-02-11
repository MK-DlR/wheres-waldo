// frontend/src/FindCharacters.jsx

function FindCharacters(props) {
    if (props.status === "loading") return <p>Loading...</p>;
    if (props.status === "error") return <p>Something went wrong!</p>;
  
    return (
        <div className="characters-container">
          {props.characters.map((character) => (
            <div key={character.id} className="characters-card">
              <img src={character.image} className="character-icon" alt={character.name} />
              <p>{character.name}</p>
            </div>
          ))}
        </div>
    );
  }

export default FindCharacters;