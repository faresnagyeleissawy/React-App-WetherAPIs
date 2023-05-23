import "./style.css";
import { NavLink, Outlet } from "react-router-dom";
function HeaderHandel() {
  return (
    <header>
      <NavLink class="nav">Game</NavLink>
      <NavLink to={"/WitherAPIAPP"}>Home</NavLink>
      <NavLink to={"/LikedCities"}>LikedCities</NavLink>

      <Outlet />
    </header>
  );
}
export default HeaderHandel;
