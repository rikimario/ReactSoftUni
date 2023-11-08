import { useEffect, useState } from "react";
const base_url = 'https://swapi.dev/api';

const CharacterList = () => {
    const [characters, setCharacters] = useState([]);

    useEffect(() => {
        fetch(`${base_url}/people`)
            .then(res => res.json())
            .then(data => {
                setCharacters(data.results);
            })
    }, []);

    return (
        <ul>
            {characters.map(character => <li key={character.name}>{character.name}</li>)}
        </ul>
    )
};

export default CharacterList;