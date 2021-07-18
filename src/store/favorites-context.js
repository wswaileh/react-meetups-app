import { createContext, useState, useEffect } from "react";

const FavoritesContext = createContext({
  allMeetups: [],
  favorites: [],
  numberOffavorites: 0,
  loading: true,
  addFavHandler: (favMeetup) => {},
  removeFavHandler: (removedMeetupId) => {},
  itemIsFavHandler: (meetupId) => {},
  addMeetupUpHandler: (newMeetup) => {}
});

export function FavoritesContextProvider(props) {
  const [userfavorites, setUserfavorites] = useState([]);
  const [allMeetups, setAllMeetups] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const context = {
    allMeetups: allMeetups,
    favorites: userfavorites,
    numberOffavorites: userfavorites.length,
    loading: isLoading,
    addFavHandler,
    removeFavHandler,
    itemIsFavHandler,
    addMeetupUpHandler,
  };

  const url =
    "https://react--meetups-672fc-default-rtdb.europe-west1.firebasedatabase.app";
  const endPoint = "/meetups.json";

  useEffect(() => {
    fetch(`${url + endPoint}`, {
      headers: {
        "Content-Type": "Application/json",
      },
    })
      .then((res) => res.json())
      .then((data) => {
        setIsLoading(false);
        const meetups = [];
        for (const [key, value] of Object.entries(data)) {
          meetups.push({
            id: key,
            ...value,
          });
        }
        setAllMeetups(meetups.reverse());
        setIsLoading(false);
      });
  }, []);

  function addFavHandler(favMeetup) {
    setUserfavorites([...userfavorites, favMeetup]);
  }

  function addMeetupUpHandler(newMeetup) {
    setAllMeetups([newMeetup, ...allMeetups]);
  }

  function removeFavHandler(removedMeetupId) {
    setUserfavorites(userfavorites.filter((fav) => fav.id !== removedMeetupId));
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
