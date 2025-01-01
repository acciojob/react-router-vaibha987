import React from 'react';
import { Link } from 'react-router-dom';
const About=()=>{
    return (

        <div>
             <Link to={"/"}>Home</Link>
             <Link to={"/about"}>About</Link>
            <h1>This is a sample React Router program.</h1>
        </div>
    )
}

export default About
