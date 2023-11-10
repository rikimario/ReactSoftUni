import { useEffect, useState } from "react";
import CharacterCards from './CharacterCards.jsx';
import styles from './CharacterLists.module.css';

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
        <div className={styles.characterList}>
            {characters.map((character, index) =>
                <CharacterCards key={character.name} id={index + 1} {...character} />
            )}
        </div>
    )
};

export default CharacterList;