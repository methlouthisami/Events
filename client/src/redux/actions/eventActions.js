import { fetchAllEvents, fetchDeleteEvent } from "../../request/REQUEST";
import axios from "axios";
export const getAllEvents = async () => {
  try {
    const { data } = await fetchAllEvents();
    return { type: "GET_ALL_EVENTS_SUCCED", payload: data };
  } catch (error) {
    return {
      type: "GET_ALL_EVENTS_FAILED",
      error,
    };
  }
};

export const addEvent = (event) => ({
  type: "ADD_EVENT",
  payload: event,
  loading: true,
});

export const deleteEvent = (_id) => async (dispatch) => {
  try {
    await fetchDeleteEvent(_id);
    dispatch({
      type: "DELETE_EVENT",
      payload: _id,
    });
    console.log("delete");
    dispatch(getAllEvents);
  } catch (error) {
    console.log(error);
  }
};
export const updateEvent =
  (_id, date, title, description, catégorie,image) => async (dispatch) => {
    try {
      const res = await axios
        .put(`http://localhost:3002/event/updateEvent/${_id}`, {
          title,
          date,

          description,
          catégorie,
          image,
        })
        .then((res) => window.location.reload());

      dispatch({
        type: "UPDATE_EVENT",
        payload: res.data,
      });
      console.log("superrr");
    } catch (error) {
      console.log(error);
    }
  };
