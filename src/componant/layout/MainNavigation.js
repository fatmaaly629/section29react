import { useContext } from "react";
import { Link } from "react-router-dom";
import classes from "./MainNavigation.module.css";
import FavoritesContext from "../../store/favorites-context";
function MainNavigation() {
  const FavoritesCtx = useContext(FavoritesContext);
  return (
    <header className={classes.header}>
      <div className="clasess.logo"> React Meetups</div>
      <nav>
        <ul>
          <li>
            <Link to={"/"}>some link</Link>
          </li>
          <li>
            <Link to={"/new-meetup"}>A dd new meetup</Link>
          </li>
          <li>
            <Link to={"/Favorites"}>
              Favorites
              <span className={classes.badge}>
                {FavoritesCtx.totalFavorites}
              </span>
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default MainNavigation;
