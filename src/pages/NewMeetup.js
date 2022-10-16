import { useHistory } from "react-router-dom";
import NewMeetupForm from "../componant/meetups/NewMeetupForm";

function NewMeetupPage() {
  const history = useHistory();

  function addMeetupHandler(meetupData) {
    fetch("https://section29-b0d7b-default-rtdb.firebaseio.com/meetups.json", {
      method: "POST",
      body: JSON.stringify(meetupData),
      headers: { "Content-Type": "application/json" }
    }).then(() => {
      history.replace("/");
    });
  }
  return (
    <section>
      <h1> Add newmeetup</h1>
      <NewMeetupForm onAddMeetup={addMeetupHandler} />
    </section>
  );
}

export default NewMeetupPage;
