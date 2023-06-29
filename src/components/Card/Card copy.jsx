import style from './Card.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPowerOff } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { useState, useEffect } from 'react'
import { addFav, removeFav } from '../../redux/action'


export default function Card(props) {
  
   const [isFav, setIsFav]  = useState(false)
   const fav = useSelector((state)=>state.myFavorites);
   const dispatch = useDispatch()
 
   function newOnClose(){
      props.onClose(props.id)
   }
   
   function handleFavorite (){

      if(isFav === true) {
         setIsFav(false);
         dispatch(removeFav(props));

      } else if (isFav === false){
         setIsFav(true);
         dispatch(addFav(props));
      }
   }

   useEffect(() => {
      fav.forEach((fv) => {
         if (fv.id === props.id) {
            setIsFav(true);
         }
      });
   }, [fav]);
  
   return (
      <div className={style.container}>
         <div>
         
            <div className={style.cardHead}>
               <div className={style.cardHeader}>
                     <span className={style.light}></span> 
                     <span className={style.light}></span> 
                     <span className={style.light}></span> 
               </div>  
            <Link to={`/detail/${props.id}`} ><h2 className={style.name}>{props.name}</h2>  </Link>
            </div>
         </div>
         <button onClick={newOnClose} className={style.closeButton}><FontAwesomeIcon icon={faPowerOff} className={style.icon}/></button>

         {
   isFav ? (
      <button onClick={handleFavorite}>❤️</button>
   ) : (
      <button onClick={handleFavorite}>🤍</button>
   )
}

         <div className={style.img}><img src={props.image} alt=''  /></div>
         <div className={style.footer}>
            <div className={style.details}> 
               <div><h3 >Estatus:</h3><p>{props.status}</p></div>
               <div><h3 >Especie:</h3><p>{props.species}</p></div>
               <div><h3 >Género:</h3><p>{props.gender}</p></div>
               <div><h3 >Origen:</h3><p>{props.origin.name}</p></div>
            </div>
         </div>
      </div>
   );
}

