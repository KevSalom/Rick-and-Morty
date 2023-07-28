import style from "./Card.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPowerOff, faInfo } from "@fortawesome/free-solid-svg-icons";
import { Link, useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useState, useEffect } from "react";
import { addFav, removeFav } from "../../redux/action";

export default function Card(props) {
  const [isFav, setIsFav] = useState(false);
  const allCharacters = useSelector((state) => state.allCharacters);
  const dispatch = useDispatch();
  const location = useLocation();

  function newOnClose() {
    props.onClose(props.id);
  }

  function handleFavorite() {
    if (isFav === true) {
      setIsFav(false);
      dispatch(removeFav(props));
    } else if (isFav === false) {
      setIsFav(true);
      dispatch(addFav(props));
    }
  }

  useEffect(() => {
    allCharacters.some((fv) => {
      if (fv.id === props.id) {
        setIsFav(true);
      }
    });
  }, [allCharacters]);

  return (
    <div className={style.borderDiv}>
      <div className={style.container}>
        <img src={props.image} alt="" />
        <div className={style.info}>
          <h2 className={style.name}>{props.name}</h2>
          <h3 className={style.species}>{props.species}</h3>
        </div>

        <div className={style.buttomBox}>
          {isFav ? (
            <button onClick={handleFavorite}>❤️</button>
          ) : (
            <button onClick={handleFavorite}>🤍</button>
          )}
          <Link to={`/detail/${props.id}`}>
            <button className={style.closeButton}>
              <FontAwesomeIcon icon={faInfo} className={style.icon} />
            </button>
          </Link>

          {location.pathname !== "/favorites" ? (
            <button onClick={newOnClose} className={style.closeButton}>
              <FontAwesomeIcon icon={faPowerOff} className={style.icon} />
            </button>
          ) : null}
        </div>
      </div>
    </div>
  );
}
