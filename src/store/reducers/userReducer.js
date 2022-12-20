import {
  FETCH_USERS_FAILURE,
  FETCH_USERS_REQUEST,
  FETCH_USERS_SUCCESS,
} from "../actions/userActions";

const userState = { loading: false, users: [], error: "" };

const userReducer = function (state = userState, action) {
  const { type, payload } = action;
  // console.log("action", { action });
  switch (type) {
    case FETCH_USERS_REQUEST:
      return { ...state, loading: true };
    case FETCH_USERS_SUCCESS:
      return { ...state, loading: false, users: payload };
    case FETCH_USERS_FAILURE:
      return { ...state, loading: false, error: payload };
    default:
      return state;
  }
};
export default userReducer;
