// import logo from "./logo.svg";
// import { useEffect } from "react";
import "./App.css";
import UsersList from "./components/UsersList";
import { Provider } from "react-redux";
import store from "./store/store";
// import fetchUsers from "./store/actions/userActions";
// import { useDispatch } from "react-redux";

function App() {
  // const dispatch = useDispatch();
  // useEffect(() => {
  //   dispatch(fetchUsers());
  //   // return () => {};
  // }, []);

  return (
    <Provider store={store}>
      <div className="App">
        {/* <header className="App-header"> */}
        {/* <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a> */}
        <UsersList />
        {/* </header> */}
      </div>
    </Provider>
  );
}

export default App;
