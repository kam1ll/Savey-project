
import React from "react";

import moneyIcon from '../assets/money-bill-wave-solid.svg'

const Homepage = () => {

    return (
        <>
    <div className="card">
        <p>
            <img src={moneyIcon} className="logoMoney" alt="Money logo"/>
            Welcome to Savey, where you can save money and manage your finances way better!
        </p>
    </div>
    <div className="form-login">
        <p className="login-facebook">Login via Facebook</p>
        <p className="login-google">Login via Google</p>
        <p className="login-mail">Sign up via Mail</p>
        <form>
            <label>email <input type="email"/> </label>
            <label>Password <input type="password"/> </label>
        </form>
    </div>
            </>
    )
}

export default Homepage


