import { AxiosResponse } from "axios";
import { axiosInstance } from "..";

interface PostTicket {
  name: string;
  email: string;
  dni: string;
  quantity: string;
  id: string;
}

export const postTicket = (
  data: PostTicket
): Promise<AxiosResponse<any, any>> => {
  return axiosInstance.post("/tickets/create-ticket", data);
};

export const getTickets = (): Promise<AxiosResponse<any, any>> => {
  return axiosInstance.get("/tickets/tickets");
};

export const updateTickets = (
  eventId: string,
  ticketItemId: string
): Promise<AxiosResponse<any, any>> => {
  return axiosInstance.put("/tickets/update-ticket/" + eventId, {
    ticketId: ticketItemId,
  });
};
