export type Side = "YES" | "NO";

type MarketStatus = "OPEN" | "CLOSED";

interface EventOptions {
  id: string;
  title?: string;
  yesPrice: number;
  noPrice: number;
}

export interface Event {
  id: string;
  question: string;
  closesAt: string;
  status: MarketStatus;
  eventOptions: EventOptions[];

  imageUrl?: string;
}
