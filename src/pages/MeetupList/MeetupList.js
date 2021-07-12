import MeetupItem from "../MeetupItem/MeetupItem";
import classes from "./MeetupList.module.css";

function MeetupList(props) {
  return (
    <ul className={classes.list}>
      {props.meetups?.length ? (
        props.meetups.map((x, i) => (
          <MeetupItem
            key={i}
            id={x.id}
            title={x.title}
            image={x.image}
            address={x.address}
            description={x.description}
          />
        ))
      ) : (
        <p>{props.noRecordsMsg ? props.noRecordsMsg : "No Meetups"}</p>
      )}
    </ul>
  );
}

export default MeetupList;
