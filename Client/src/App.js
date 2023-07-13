import './App.css';
import Cards from './components/Cards/Cards.jsx';
import Nav from './components/Nav/Nav'
import { useState, useEffect } from 'react';
import axios from 'axios';
import { Routes, Route, useLocation, useNavigate} from 'react-router-dom';
import About from './Views/About/About';
import Detail from './Views/Detail/Detail'
import Form from './components/Form/Form';
import Favorites from './Views/Favorites/Favorites';


function App() {
   const [characters, setCharacters] = useState([])
   const [access, setAccess] = useState(true)
   const location = useLocation()
   const navigate = useNavigate();

   const email = 'kevsaloms@gmail.com';
   const password = '123456'

   function login (userData){
      if(userData.email === email && userData.password === password){
         setAccess(true);
         navigate('/home');
      }

   }

   function logOut (){
      setAccess(false)
   }

   useEffect(() => {
      !access && navigate('/');
   }, [access]);


   function onSearch(id) {

      axios(`http://localhost:3001/rickandmorty/character/${id}`).then(({ data }) => {
         if (data.name) {
            setCharacters((oldChars) => [...oldChars, data]);
         } else {
            window.alert('¡No hay personajes con este ID!');
         }
      });
   }

   function onClose(id){
      const updatePerson = characters.filter((person)=> person.id !== id )
      setCharacters(updatePerson)
   }

   return (
      <div className='App'>
          {(location.pathname !== '/') ? <Nav onSearch={onSearch} logout={logOut}/> : undefined}
         <Routes>
            <Route path='/' element={<Form login={login} />}/> 
            <Route path='/home' element={<Cards characters={characters} onClose={onClose}/>}/> 
            <Route path='/about' element={
               <About/>}/> 
            <Route path='/detail/:id' element={<Detail/>}/> 
            <Route path='/favorites' element={<Favorites/>}/> 
         </Routes>
      </div>
   );
}

export default App;



