import { useState } from "react";


export default function SearchBar(props) {
   const [id, setId] = useState('')

   const handleChange = function(e){
      setId(e.target.value)
   }

   const search = function(){
      props.onSearch(id)
      setId('')

   }
   return (
      <div>
      <input type='search' onChange={handleChange} value={id}/>
       <button onClick={search}>Agregar</button>
      </div>
   );
}