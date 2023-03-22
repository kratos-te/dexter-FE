import { GET_BOT_DETAILS } from "../Actions/BotAction";

const initialState = {
  botDetails: [],
  botInfo: null,
};

const dataReducer = (state = initialState, action) => {
  switch (action.type) {
    case "GET_BOT_DETAILS":
      return {
        ...state,
        botDetails: [action.payload.data, ...state.botDetails],
      };
    case "CLEAR_BOT_DETAILS":
      return {
        ...state,
        botDetails: [],
      };
    case "BOT_INFORMATIONS":
      console.log(action.payload.data);
      return {
        ...state,
        botInfo: action.payload.data,
      };
    default:
      return state;
  }
};

export default dataReducer;
