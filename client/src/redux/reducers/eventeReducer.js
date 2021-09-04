const eventState = {
  event: [],
};
export const eventReducer = (state = eventState, action) => {
  const { type, payload } = action;
  switch (type) {
    case "GET_ALL_EVENTS_SUCCED":
      return {
        event: payload,
      };
    case "ADD_EVENT":
      return {
        ...state,
        event: [...state.event, payload],
      };
    case "DELETE_EVENT":
      return {
        event: [...state.event.filter((event) => event !== action.payload)],
      };
     
    default:
      return state;
  }
};
