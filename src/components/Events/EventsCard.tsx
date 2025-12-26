import type React from "react";
import { useState } from "react";
import type { Event, Side, EventOptions } from "../../types";
import Button from "../Buttons/Button";
import css from "./EventsCard.module.scss";

interface EventsCardProps {
  event: Event;
  displayAmount?: number;
}

const EventsCard: React.FC<EventsCardProps> = ({
  event,
  displayAmount = 1000,
}) => {
  const [, setSide] = useState<Side | null>(null);
  const [, setOption] = useState<EventOptions | null>(null);

  const calPayout = (amount: number, price: number) => {
    return Math.floor((amount * 100) / price);
  };

  return (
    <div className={css.card}>
      {event.imageUrl && (
        <img src={event.imageUrl} alt="event" className={css.cardImage} />
      )}

      <div className={css.header}>{event.question}</div>

      <div className={css.payouts}>
        <p>Deposit: ₦{displayAmount}</p>
      </div>

      <div className={css.optionsContainer}>
        {event.eventOptions.map((option) => (
          <div key={option.id} className={css.optionCard}>
            {option.title && <p className={css.optionName}>{option.title}</p>}
            <div className={css.buttonGroup}>
              <Button
                size="small"
                color="green"
                onClick={() => {
                  setSide("YES");
                  setOption(option);
                }}
              >
                YES ₦{option.yesPrice}
              </Button>
              <Button
                size="small"
                color="red"
                onClick={() => {
                  setSide("NO");
                  setOption(option);
                }}
              >
                NO ₦{option.noPrice}
              </Button>
            </div>
            <div className={css.payouts}>
              <p>YES: ₦{calPayout(displayAmount, option.yesPrice)}</p>
              <p>NO: ₦{calPayout(displayAmount, option.noPrice)}</p>
            </div>
          </div>
        ))}
      </div>

      <div className={css.status}>
        <p>Status: {event.status}</p>
        <p>Closes at: {event.closesAt}</p>
      </div>
    </div>
  );
};

export default EventsCard;
