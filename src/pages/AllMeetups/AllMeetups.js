import { useState, useContext, useEffect } from "react";
import MeetupList from "../MeetupList/MeetupList";
import FavoritesContext from "../../store/favorites-context";

function AllMeetupsPage() {
  const favContext = useContext(FavoritesContext);

  const [isLoading, setIsLoading] = useState(favContext.loading);
  const [allMeetups, setAllMeetups] = useState(favContext.meetups);

  useEffect(() => {
    setAllMeetups(favContext.allMeetups);
    setIsLoading(favContext.loading);
  }, [favContext]);

  return (
    <section>
      <h1>All Meetups</h1>
      {isLoading && <p>Loading ...</p>}
      {!isLoading && <MeetupList meetups={allMeetups} />}
    </section>
  );
}
export default AllMeetupsPage;
