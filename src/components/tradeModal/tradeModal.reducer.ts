import type { Side } from "../../types";
import { calPayout } from "../../utils/calculatePayout";

interface State {
  selectedSide: Side;
  payout: number;
  inputPayload: number;
  price: number;
}

type Action =
  | { type: "inputPayload"; inputPayload: number }
  | {
      type: "selectSide";
      selectedSide: Side;
      inputPayload: number;
      price: number;
    }
  | { type: "calPayout"; price: number; inputPayload: number };

export function payoutReducer(state: State, action: Action) {
  switch (action.type) {
    case "inputPayload": {
      return {
        ...state,
        inputPayload: action.inputPayload,
      };
    }
    case "selectSide": {
      const payout = calPayout(action.inputPayload, action.price);
      return {
        ...state,
        selectedSide: action.selectedSide,
        price: action.price,
        payout: payout,
      };
    }
    case "calPayout": {
      const payout = calPayout(action.inputPayload, action.price);
      return {
        ...state,
        payout: payout,
        inputPayload: action.inputPayload,
      };
    }
    default:
      throw new Error();
  }
}
