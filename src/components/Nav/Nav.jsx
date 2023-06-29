import SearchBar from "../SearchBar/SearchBar";
import { NavLink } from "react-router-dom";

export default function Nav(props) {
  return (
    <div>
      <NavLink to="/about"><button>About</button></NavLink>
      <NavLink to="/home"><button>Home</button></NavLink>
      <NavLink to="/favorites"><button>Favorites Cards</button></NavLink>
      <SearchBar onSearch={props.onSearch} />
      <button onClick={props.logout}>Log Out</button>
    </div>
  );
}
