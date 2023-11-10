import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const CharacterDetails = () => {
    const { id } = useParams();
    const [character, setCharacter] = useState({});

    useEffect(() => {
        fetch(`https://swapi.dev/api/people/${id}`)
            .then(res => res.json())
            .then(setCharacter);
    }, [id]);

    return (
        <>
            <h1>{character.name}</h1>
            <ul>
                <li>{character.hair_color}</li>
                <li>{character.eye_color}</li>
                <li>{character.birth_year}</li>
                <li>{character.gander}</li>
            </ul>

            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore modi delectus earum aperiam laboriosam fugiat magnam, quam culpa eos hic corporis nemo cupiditate aliquam enim nisi, odio dolorum, eveniet voluptate.</p>
        </>
    );
};

export default CharacterDetails;