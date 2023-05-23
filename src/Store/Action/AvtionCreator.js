import { Change_City_Data } from "./ActionType";
export const getCityData = (payload) => {
  return {
    type: Change_City_Data,
    payload: payload,
  };
};
