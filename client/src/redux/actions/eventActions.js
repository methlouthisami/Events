import { fetchAllEvents,fetchDeleteEvent } from "../../request/REQUEST";
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
    loading:true

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