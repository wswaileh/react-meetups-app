import { Link } from "react-router-dom";
import classes from "./Navbar.module.css";

function NavBar(props) {
  return (
    <header className={classes.header}>
      <Link to="/">
        <div className={classes.logo}>React Meetups</div>
      </Link>
      <nav>
        <ul>
          {props.items.map((item) => (
            <li key={item.link}>
              <Link to={item.link}>
                {item.title}
                {item.badge && props.count != null && (
                  <span className={classes.badge}>{props.count}</span>
                )}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
export default NavBar;
