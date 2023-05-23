const initialState = {
  cardCity: [],
};

export const cityDataReducer = (state = initialState, action) => {
  switch (action.type) {
    case "Change_City_Data":
      return {
        ...state,
        cardCity: action.payload,
      };
    default:
      return state;
  }
};
