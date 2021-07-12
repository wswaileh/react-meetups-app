import { useHistory } from "react-router-dom";
import NewMeetupForm from "./NewMeetupForm/NewMeetupForm";

function NewMeetupPage() {
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
    }).then(() => {
      history.replace("/");
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
