export interface Ticket {
    eventId: string;
    _id: string;
    name: string;
    age: string;
    email: string;
    tickets: TicketItem[] | undefined;
  }

  export interface TicketItem {
    status: "active" | "inactive";
    _id: string;
  }