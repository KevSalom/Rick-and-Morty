import React from "react";
import style from "./Form.module.css"
import { useState } from "react";
import Rick from "../../img/Rick-And-Morty-PNG-Image.png"


export default function Form(props) {

    const login = props.login;

   

    const [userData, setUserData] = useState({
        email: '',
        password: ''
    });

    const [errors, setErrors] = useState({
        email: '',
        password: ''
    });


    function validation(userData, errors, setErrors, element) {
        
        if (element === 'email') {
            if (!userData.email) {
                setErrors({ ...errors, email: 'Este campo no puede esta vacío' })
            } else if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(userData.email) === false) {
                setErrors({ ...errors, email: 'Formato de Email incorrecto' })
            } else { setErrors({ ...errors, email: '' }); }
        } else if (element === 'password') {
            if (userData.password.length < 6 || userData.password.length > 10) {
                setErrors({ ...errors, password: 'Debe contener de 6 a 10 carcteres' })
            } else {
                setErrors({ ...errors, password: '' })
            }
        }
    }

    function handleSubmit (evt){
        evt.preventDefault()
        login(userData)
    }

    function handleChange(e) {
        const element = e.target.name;
        const value = e.target.value;
        setUserData({ ...userData, [element]: value });
        validation({ ...userData, [element]: value }, errors, setErrors, element);
    }

   

    return (
        <div className={style.borderDiv}>
        <form>
            <div className={style.container}>
                <div className={style.containerImg}>
                   <img src={Rick} alt="" />
                </div>
                <label htmlFor="email">Email</label>
                <input type="text" name="email" value={userData.email} onChange={handleChange} />
                {(errors.email !== '') ? <span>{errors.email}</span> : undefined}
        
                <label htmlFor="password">Password</label>
                <input type="text" name="password" value={userData.password} onChange={handleChange} />
                {(errors.password !== '') ? <span>{errors.password}</span> : undefined}
                <button onClick={handleSubmit}>Submit</button> 
            </div>
            
        </form>

        </div>    )
}