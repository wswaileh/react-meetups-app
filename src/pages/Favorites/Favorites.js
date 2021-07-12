import { useContext, useEffect, useState } from "react";
import MeetupList from "../MeetupList/MeetupList";
import FavoritesContext from "../../store/favorites-context";

function FavoritesPage() {
  const favContext = useContext(FavoritesContext);
  const [favMeetups, setFavMeetups] = useState([]);

  useEffect(() => {
    setFavMeetups(favContext.favorites);
  }, [favContext]);

  return (
    <section>
      <h1>Favorite Meetups</h1>
      <MeetupList meetups={favMeetups} noRecordsMsg={"No Favorite Meetups."} />
    </section>
  );
}
export default FavoritesPage;
