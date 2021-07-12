import { useEffect, useState } from "react";
import MeetupList from "../MeetupList/MeetupList";

function AllMeetupsPage() {
  const [isLoading, setIsLoading] = useState(true);
  const [allMeetups, setAllMeetups] = useState([]);

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
            ...value
          })
        }
        setAllMeetups(meetups);
      });
  }, []);

  return (
    <section>
      <h1>All Meetups</h1>
      {isLoading && <p>Loading ...</p>}
      {!isLoading && <MeetupList meetups={allMeetups} />}
    </section>
  );
}
export default AllMeetupsPage;
