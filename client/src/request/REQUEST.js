import axios from "axios";
import { getAllEventsUrl, addEventUrl } from "./Url";

export const fetchAllEvents = async () => await axios.get(getAllEventsUrl);

export const fetchAddEvent = async (
    formData,
    config = { headers: { "Content-Type": "multipart/form-data" } }
) => await axios.post(addEventUrl, formData, config);


export const fetchDeleteEvent=(_id)=> {
  axios
    .delete(`http://localhost:3002/event/deleteEvent/${_id}`)
    .then((res) => res.data);
}
