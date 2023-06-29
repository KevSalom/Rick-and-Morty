import React from "react";
import Card from "../../components/Card/Card";
import { connect } from "react-redux";
import { orderCards, filterCards } from "../../redux/action";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import style from "./Favorite.module.css"

export default function Favorites() {
  const [aux, setAux] = useState(false);
  const favorites = useSelector((state) => state.myFavorites);
  const dispatch = useDispatch();

  const handleOrder = (ev) => {
    dispatch(orderCards(ev.target.value));
    setAux(true)
    
  };
  const handleFilter = (ev) => {
    dispatch(filterCards(ev.target.value));
  };
  return (
    <>
      <select name="ORDER" id="" onChange={handleOrder}>
        <option value="A">Ascendente</option>
        <option value="D">Descendente</option>
      </select>
      <select name="FILTER" id="" onChange={handleFilter}>
        <option value="Male">Male</option>
        <option value="Female">Female</option>
        <option value="Genderless">Genderless</option>
        <option value="unknown">unknown</option>
      </select>
      <div className={style.container}>
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
        /> ))}
        </div>
    </>
  );
}

// class Favorites extends React.Component{

//     render(){
//         return(<>
//         <select name="ORDER" id="">
//             <option value="A">Ascendente</option>
//             <option value="D">Descendente</option>
//         </select>
//         <select name="FILTER" id="">
//             <option value="Male">Male</option>
//             <option value="Female">Female</option>
//             <option value="Genderless">Female</option>
//             <option value="unknown">unknown</option>
//         </select>
//         {this.props.favorites.map((e) => < Card name={e.name} status={e.status} species={e.species} gender={e.gender} origin={e.origin} image={e.image} key={e.id} id={e.id}/> )}
//         </>)

// }
// }

// const mapStateToProps = (state) => {
//     return{
//         favorites: state.myFavorites
//     }
// }

// export default connect(mapStateToProps, null)(Favorites);
