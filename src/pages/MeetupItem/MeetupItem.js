import { useContext } from "react";
import Card from "../../components/Card";
import FavoritesContext from "../../store/favorites-context";
import classes from "./MeetupItem.module.css";

function MeetupItem(props) {
  const favContext = useContext(FavoritesContext);

  const isFavItem = favContext.itemIsFavHandler(props.id);

  function toggleIsFav() {
    if (isFavItem) {
      favContext.removeFavHandler(props.id);
    } else {
      favContext.addFavHandler({
        id: props.id,
        title: props.title,
        description: props.description,
        image: props.image,
        address: props.address,
      });
    }
  }

  return (
    <li key={props.id} className={classes.item}>
      <Card>
        <div className={classes.image}>
          <img src={props.image} alt={props.title} />
        </div>
        <div className={classes.content}>
          <h3>{props.title}</h3>
          <address>{props.address}</address>
          <p>{props.description}</p>
        </div>
        <div className={classes.actions}>
          <button onClick={toggleIsFav}>{!isFavItem ? 'Add To Favorites' : 'Remove From Favorites'}</button>
        </div>
      </Card>
    </li>
  );
}

export default MeetupItem;
