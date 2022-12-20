import User from "./User";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import fetchUsers from "../store/actions/userActions";

const UsersList = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchUsers());
    // return () => {};
  }, [dispatch]);

  const { loading, users, error } = useSelector((store) => store.users);

//   console.log("Users", { users });

  if (loading) return <p>Loading...</p>;

  if (error) return <p>Failed to load users data...</p>;

  return (
    <ul>
      {users.map((user) => (
        <User user={user} key={user.id} />
      ))}
    </ul>
  );
};

export default UsersList;
