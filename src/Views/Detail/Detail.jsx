import style from "./Detail.module.css";
import axios from "axios";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { useState } from "react";

export default function About() {
const {id}= useParams();
const [character, setCharacter] = useState({});

console.log(character)


  useEffect(() => {
    axios(`https://rickandmortyapi.com/api/character/${id}`).then(
      ({ data }) => {
        if (data.name) {
          setCharacter(data);
          console.log(character)
        } else {
          window.alert("No hay personajes con ese ID");
        }
      }
    );
    return setCharacter({});
  }, []);

  return (
    <div className={style.detailBox}>
      <h1>{character.name}</h1>
      <h2>{character.gender}</h2>
    </div>
  );
}
