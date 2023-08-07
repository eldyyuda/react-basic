import {NavLink, Outlet} from 'react-router-dom';
import "../styles/index.css";

function RootLayout() {
  return(
  <>
        <NavLink className={({isActive,isPending}) => isActive ? "active" : isPending ? "pending" : ""} to="/">Home</NavLink> | <NavLink className={({isActive,isPending}) => isActive ? "active" : isPending ? "pending" : ""} to="/about">About</NavLink> | <NavLink className={({isActive,isPending}) => isActive ? "active" : isPending ? "pending" : ""} to="/blogs">Blogs</NavLink>
        <Outlet/>
    </>
  )
}

export default RootLayout