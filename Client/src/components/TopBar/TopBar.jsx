import "../../App.css";


export default function TopBar({toggle, handleToggle}){

    return(
        <div className="topbar">
          <div className={(toggle)? 'toggle active' : 'toggle'} onClick={handleToggle}>
            <ion-icon name="menu-outline"></ion-icon>
          </div>
        
          <div className="user">
            <img src="./img-perfil.jpg" />
          </div>
        </div>
    )
}