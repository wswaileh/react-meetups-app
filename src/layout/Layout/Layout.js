import { useContext } from "react";
import FavoritesContext from "../../store/favorites-context";

import classes from "./Layout.module.css";
import Navbar from "../Navbar/Navbar";
import { NAV_ITEMS } from "./Nav-items";
function Layout(props) {
  const favContext = useContext(FavoritesContext);

  return (
    <div>
      <Navbar items={NAV_ITEMS} count={favContext.numberOffavorites} />
      <main className={classes.main}>{props.children}</main>
    </div>
  );
}

export default Layout;
