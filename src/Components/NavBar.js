import { NavLink } from "react-router-dom";

export const NavBar = () => {
    return (
        <div>
            <ul>
                <li >
                    <NavLink to="/productos" >Productos</NavLink>
                </li>
                <li >
                    <NavLink to="/" >Home</NavLink>
                </li>
            </ul>
        </div>
    )
}