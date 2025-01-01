import React from 'react';
import { Link } from "react-router"
const Home=()=>{
return(
<>
<Link to={"/"}>Home</Link>
<Link to={"/about"}>About</Link>
<h1>Welcome to my website!</h1>

</>

)
}

export default Home
