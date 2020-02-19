import Actions from "./actions";

const initialState = {
  homedata: {},
  silder: {}
};

const homeReducer = (state = initialState, action) => {
  switch (action.type) {
    case Actions.GET_HOME_RESPONSE:
      return {
        ...state,
        homedata: action.data,
        silder: action.data.sliders
      };

    default:
      return state;
  }
};

export default homeReducer;
