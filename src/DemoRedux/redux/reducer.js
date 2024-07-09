import { GIAM, TANG } from "./constant";

let initialState = {
  value: 100,
};



export let numberReducer = (state = initialState, action) => {
  switch (action.type) {
    case TANG: {
      state.value++;
      return { ...state };
    }
    case GIAM: {
      state.value -= action.payload;
      return { ...state };
    }
    default:
      return state;
  }
};
