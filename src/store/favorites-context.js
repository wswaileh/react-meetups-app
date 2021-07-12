import { createContext, useState } from "react";

const FavoritesContext = createContext({
  favorites: [],
  numberOffavorites: 0,
  addFavHandler: (favMeetup) => {},
  removeFavHandler: (removedMeetupId) => {},
  itemIsFavHandler: (meetupId) => {},
});

export function FavoritesContextProvider(props) {
  const [userfavorites, setUserfavorites] = useState([]);

  const context = {
    favorites: userfavorites,
    numberOffavorites: userfavorites.length,
    addFavHandler,
    removeFavHandler,
    itemIsFavHandler,
  };

  function addFavHandler(favMeetup) {
    setUserfavorites([...userfavorites, favMeetup]);
  }

  function removeFavHandler(removedMeetupId) {
    setUserfavorites(
      userfavorites.filter((fav) => fav.id !== removedMeetupId)
    );
  }

  function itemIsFavHandler(meetupId) {
    return userfavorites.some((fav) => fav.id === meetupId);
  }

  return (
    <FavoritesContext.Provider value={context}>
      {props.children}
    </FavoritesContext.Provider>
  );
}

export default FavoritesContext;