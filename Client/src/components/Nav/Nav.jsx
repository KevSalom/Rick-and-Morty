import "./Nav.css";
import { NavLink, Link } from "react-router-dom";

export default function Nav({toggleState, logout}) {

  return (
    <>
      <div className={(toggleState)? 'navigation active' : 'navigation'}>
        <ul>
          <li>
            <a href="index.html">
              <span className="icon">
                <ion-icon name="logo-apple"></ion-icon>
              </span>
              <span className="title">Brand Name</span>
            </a>
          </li>
          <li>
          <NavLink to='/home'>
              <span className="icon">
                <ion-icon name="home-outline"></ion-icon>
              </span>
              <span className="title">Home</span>
              </NavLink>
          </li>
          <li>
            <NavLink to='/favorites'>
              <span className="icon">
                <ion-icon name="heart-outline"></ion-icon>
              </span>
              <span className="title">Favorites</span>
            </NavLink>
          </li>
          <li>
          <NavLink to='/about'>
              <span className="icon">
                <ion-icon name="tennisball-outline"></ion-icon>
              </span>
              <span className="title">About me</span>
          </NavLink>
          </li>
          <li>
            <Link onClick={logout}>
              <span className="icon">
                <ion-icon name="log-out-outline"></ion-icon>
              </span>
              <span className="title">Log out</span>
            </Link>
          </li>
        </ul>
      </div>
    </>
  );
}


