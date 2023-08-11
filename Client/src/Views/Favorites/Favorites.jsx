import React from "react";
import Card from "../../components/Card/Card";
import { orderCards, filterCards, cleanFilterCards } from "../../redux/action";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import style from "./Favorite.module.css";

export default function Favorites() {
  const favorites = useSelector((state) => state.myFavorites);
  const [aux, setAux] = useState(true);
  const dispatch = useDispatch();

  const orderSelect = document.getElementById("Order");
  const genderSelect = document.getElementById("Gender");

  const handleOrder = (ev) => {
    dispatch(orderCards(ev.target.value));
    setAux(!aux);
  };
  const handleFilter = (ev) => {
    dispatch(filterCards(ev.target.value));
  };
  const cleanFilter = () => {
    dispatch(cleanFilterCards());
    orderSelect.selectedIndex = 0;
    genderSelect.selectedIndex = 0;
  };
  return (
      <div className={style.CardsContainer}>
        <nav className={style.NavFilters}>
          <select name="ORDER" id="Order" onChange={handleOrder}>
            <option value="">Order</option>
            <option value="A">Ascendente</option>
            <option value="D">Descendente</option>
          </select>
          <select name="FILTER" id="Gender" onChange={handleFilter}>
            <option value="">Filter</option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
            <option value="Genderless">Genderless</option>
            <option value="unknown">unknown</option>
          </select>
          <button onClick={cleanFilter}>Clean Filter</button>
        </nav>
        <div className={style.FavContainer}>
          {favorites.map((e) => (
            <Card
              name={e.name}
              status={e.status}
              species={e.species}
              gender={e.gender}
              origin={e.origin}
              image={e.image}
              key={e.id}
              id={e.id}
            />
          ))}
        </div>
      </div>
  );
}


{/* <select name="ORDER" id="Order" onChange={handleOrder}>
        <option value="">Order</option>
        <option value="A">Ascendente</option>
        <option value="D">Descendente</option>
      </select>
      <select name="FILTER" id="Gender" onChange={handleFilter}>
        <option value="">Filter</option>
        <option value="Male">Male</option>
        <option value="Female">Female</option>
        <option value="Genderless">Genderless</option>
        <option value="unknown">unknown</option>
      </select>
      <button onClick={cleanFilter}>Clean Filter</button> */}