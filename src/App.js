import { Provider } from "react-redux";
import store from "./redux/store";
import Header from "./components/header/Header";
import Body from "./components/body/Body";

function App() {
  console.log("access token - " + localStorage.getItem("accessToken"));
  console.log("refresh token - " + localStorage.getItem("refreshToken"));

  return (
    <Provider store={store}>
      <div>
        <Header />
        <Body />
      </div>
    </Provider>
  );
}

export default App;
