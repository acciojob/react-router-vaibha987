import { Link } from "react-router"
const About=()=>{
    return (

        <div>
             <Link to={"/"}>Home</Link>
             <Link to={"/about"}>About</Link>
            <h1>This is a sample React Router program</h1>
        </div>
    )
}

export default About