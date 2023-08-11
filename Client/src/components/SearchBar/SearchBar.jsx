import '../../App.css';
import { useState } from "react";


export default function SearchBar({onSearch}){


   const [id, setId] = useState('')

   const handleChange = function(e){
      setId(e.target.value)
   }

    const search = function(e){
        e.preventDefault();
              onSearch(id)
              setId('')
        }

    return (
        <div className="search">
            <form>
              <ion-icon name="search-outline"></ion-icon>
              <input type="text" placeholder="Search here!"  onChange={handleChange} value={id}/>
              <button onClick={search}>Agregar</button>
            </form>
          </div>
    )
}