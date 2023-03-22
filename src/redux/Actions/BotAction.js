export const GET_BOT_DETAILS = "GET_BOT_DETAILS";
export const CLEAR_BOT_DETAILS = "CLEAR_BOT_DETAILS";
export const BOT_INFORMATIONS = "BOT_INFORMATIONS";

export const getBotDetails = (data) => async (dispatch) => {
  try {
    dispatch(
      fetchDataSuccessTwo({
        data,
      })
    );
  } catch (error) {
    return { error: "Action Failed" };
  }
};

export const getBotInformation = (data) => async (dispatch) => {
  try {
    console.log(data);
    dispatch(
      getDataUserInputs({
        data,
      })
    );
  } catch (error) {
    return { error: "Action Failed" };
  }
};

export const clearBotDetails = () => async (dispatch) => {
  try {
    dispatch(clearFetchData());
  } catch (error) {
    return { error: "Action Failed" };
  }
};

const fetchDataSuccessTwo = (payload) => {
  return {
    type: "GET_BOT_DETAILS",
    payload: payload,
  };
};

const clearFetchData = () => {
  return {
    type: "CLEAR_BOT_DETAILS",
  };
};

const getDataUserInputs = (payload) => {
  return {
    type: "BOT_INFORMATIONS",
    payload: payload,
  };
};
