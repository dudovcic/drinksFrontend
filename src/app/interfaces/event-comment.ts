import { User } from "./event-user";

export interface EventComment {
    user: User;
    timestamp: string;
    message: string;
  }
