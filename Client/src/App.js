import "./App.css";
import Cards from "./components/Cards/Cards.jsx";
import Nav from "./components/Nav/Nav";
import { useState, useEffect } from "react";
import axios from "axios";
import { Routes, Route, useLocation, useNavigate } from "react-router-dom";
import About from "./Views/About/About";
import Detail from "./Views/Detail/Detail";
import Form from "./components/Form/Form";
import Favorites from "./Views/Favorites/Favorites";

function App() {
  const [characters, setCharacters] = useState([]);
  const [access, setAccess] = useState(true);
  const location = useLocation();
  const navigate = useNavigate();

  async function login(userData) {
    
    const URL = "http://localhost:3001/rickandmorty/login";
    const { email, password } = userData;
    try {
      const reqLogin = await axios(
        `${URL}?email=${email}&password=${password}`
      );
  
      if (reqLogin.data) {
        setAccess(true);
        navigate("/home");
        
      }
    } catch (error) {
      window.alert('Datos inválidos, por favor verifica');
    }
  }

  function logOut() {
    setAccess(false);
  }

  useEffect(() => {
    !access && navigate("/");
  }, [access]);

  async function onSearch(id) {
    if (characters.find((ch) => ch.id == id)) {
      return window.alert("Ya agregaste a ese personaje!");
    }
    try {
      const response = await axios(
        `http://localhost:3001/rickandmorty/character/${id}`
      );
      setCharacters((oldChars) => [...oldChars, response.data]);
    } catch (err) {
      if (err.response.data.error === "Character not found") {
        window.alert("No existe personaje con este ID");
      } else {
        window.alert(err.message);
      }
    }
  }

  function onClose(id) {
    const updatePerson = characters.filter((person) => person.id !== id);
    setCharacters(updatePerson);
  }

  return (
    <div className="App">
      {location.pathname !== "/" ? (
        <Nav onSearch={onSearch} logout={logOut} />
      ) : undefined}
      <Routes>
        <Route path="/" element={<Form login={login} />} />
        <Route
          path="/home"
          element={<Cards characters={characters} onClose={onClose} />}
        />
        <Route path="/about" element={<About />} />
        <Route path="/detail/:id" element={<Detail />} />
        <Route path="/favorites" element={<Favorites />} />
      </Routes>
    </div>
  );
}

export default App;
