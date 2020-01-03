import Actions from "./actions";

const initialState = {
  homedata: []
};

const homeReducer = (state = initialState, action) => {
  switch (action.type) {
    case Actions.GET_HOME_RESPONSE:
      return {
        ...state,
        homedata: action.data
      };

    default:
      return state;
  }
};

export default homeReducer;
