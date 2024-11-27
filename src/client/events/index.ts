import { AxiosResponse } from "axios";
import { axiosInstance } from "..";

export const getEventDetail = (id: string) : Promise<AxiosResponse<any, any>> => {
   return axiosInstance.get("/events/event-detail/" + id);
}