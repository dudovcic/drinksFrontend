import { User } from "./event-user";
import { EventComment } from "./event-comment";
import { EventLocation } from "./event-location";

export interface Event {
    id: number;
    time: string;
    title: string;
    creator: User;
    guests: User[];
    type: 'BEERS' | 'COCKTAILS' | 'COFFEES' | 'MILKSHAKES';
    location: EventLocation;
    comments: EventComment[];
  }