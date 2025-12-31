import React, { useReducer } from "react";
import css from "./tradeModal.module.scss";
import type { Event, EventOptions, Side } from "../../types";
import Button from "../Buttons/Button";
import Input from "../Input/Input";
import { payoutReducer } from "./tradeModal.reducer";

interface modalProps {
  event: Event;
  side: Side;
  option: EventOptions;
}

const TradeModal: React.FC<modalProps> = ({ event, side, option }) => {
  const price = side === "YES" ? option.yesPrice : option.noPrice;
  const [state, dispatch] = useReducer(payoutReducer, {
    selectedSide: side,
    payout: 0,
    inputPayload: 0,
    price: price,
  });

  return (
    <div className={css.modalContainer}>
      <div className={css.modalContent}>
        <div className={css.eventQuestion}>
          <p>{event.question}</p>
        </div>
        <div className={css.buttonGroup}>
          <Button
            size="small"
            color="green"
            onClick={() => {
              dispatch({
                type: "selectSide",
                selectedSide: "YES",
                price: option.yesPrice,
                inputPayload: state.inputPayload,
              });
            }}
          >
            <div>
              <p>YES</p>
              <p>₦{option.yesPrice}</p>
            </div>
          </Button>
          <Button
            size="small"
            color="pink"
            onClick={() => {
              dispatch({
                type: "selectSide",
                selectedSide: "NO",
                price: option.noPrice,
                inputPayload: state.inputPayload,
              });
            }}
          >
            <div>
              <p>NO</p>
              <p>₦{option.noPrice}</p>
            </div>
          </Button>
        </div>
        <div className={css.tradeAmount}>
          <Input
            id={"amountInput"}
            inputSize={10}
            containerSize="small"
            color="black"
            layout="horizontal"
            onChange={(e) => {
              dispatch({
                type: "calPayout",
                price: state.price,
                inputPayload: Number(e.target.value),
              });
            }}
          >
            Trade Amount:
          </Input>
        </div>
        <div className={css.balance}>
          <p>Balance:</p>
        </div>
        <div className={css.payout}>
          <p>
            Potential payout if {state.selectedSide} wins: {state.payout}
          </p>
        </div>
      </div>
    </div>
  );
};

export default TradeModal;
