import type { Event } from "../../types";
import type React from "react";
import EventsCard from "../Events/EventsCard";
import css from "./EventsList.module.scss";

interface EventListProps {
  events: Event[];
}

const EventList: React.FC<EventListProps> = ({ events }) => {
  return (
    <div className={css.eventGrid}>
      {events.map((event) => (
        <EventsCard key={event.id} event={event} displayAmount={1000} />
      ))}
    </div>
  );
};

export default EventList;
