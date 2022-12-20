import axios from "axios";
export const FETCH_USERS_REQUEST = "FETCH_USERS_REQUEST";
export const FETCH_USERS_SUCCESS = "FETCH_USERS_SUCCESS";
export const FETCH_USERS_FAILURE = "FETCH_USERS_FAILURE";

const GET_USERS_URL = "https://jsonplaceholder.typicode.com/userss";

const fetchUsersRequest = () => ({ type: FETCH_USERS_REQUEST });
const fetchUsersSuccess = (users) => ({
  type: FETCH_USERS_SUCCESS,
  payload: users,
});
const fetchUsersFailure = (error) => ({
  type: FETCH_USERS_FAILURE,
  payload: error,
});

const fetchUsers = () => {
  return function (dispatch) {
    dispatch(fetchUsersRequest());
    axios
      .get(GET_USERS_URL)
      .then((response) => {
        console.log("success:", response);
        dispatch(fetchUsersSuccess(response.data));
      })
      .catch((error) => {
        console.log("error:", error);
        dispatch(fetchUsersFailure(error));
      });
  };
};

export default fetchUsers;
