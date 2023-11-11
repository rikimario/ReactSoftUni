import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

const CharacterDetails = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const [character, setCharacter] = useState({});

    useEffect(() => {
        fetch(`https://swapi.dev/api/people/${id}`)
            .then(res => {
                if (!res.ok) {
                    throw new Error('Not Found!');
                }

                return res.json();
            })
            .then(setCharacter)
            .catch((err) => {
                navigate('/404')
            });
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