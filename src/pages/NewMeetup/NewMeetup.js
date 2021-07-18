import { useHistory } from "react-router-dom";
import { useContext } from "react";

import NewMeetupForm from "./NewMeetupForm/NewMeetupForm";

import FavoritesContext from "../../store/favorites-context";

function NewMeetupPage() {
  const favContext = useContext(FavoritesContext);

  const history = useHistory();
  const url =
    "https://react--meetups-672fc-default-rtdb.europe-west1.firebasedatabase.app";
  const endPoint = "/meetups.json";

  function submitHandler(newMeetup) {
    fetch(`${url + endPoint}`, {
      method: "POST",
      body: JSON.stringify(newMeetup),
      headers: {
        "Content-Type": "Application/json",
      },
    })
    .then((res) => res.json())
    .then((res) => {
      const id = res.name;
      favContext.addMeetupUpHandler({
        id,
        ...newMeetup
      });
      history.replace('/');
    });
  }

  return (
    <section>
      <h1>Add New Meetup</h1>
      <NewMeetupForm onSubmit={submitHandler} />
    </section>
  );
}
export default NewMeetupPage;
