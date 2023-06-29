import Card from '../Card/Card';
import style from './Cards.module.css'

export default function Cards(props) {
   const carac = props.characters;
   return <div className={style.container}>
       {carac.map((e) => <Card name={e.name} status={e.status} species={e.species} gender={e.gender} origin={e.origin} image={e.image} key={e.id} id={e.id} onClose={props.onClose}/> )}
   </div>;
}