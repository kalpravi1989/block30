import { useState } from "react";
import { Link } from "react-router-dom";

export default function HeaderLink({token}){

    return(
        <div id='navBar'>
        <Link to="/">HOME</Link>
        {token&& <Link to="/profile"> Profile</Link>}
        <Link to="/register"> Register</Link>
        <Link to="/login"> Login</Link>
        </div>
    )
};