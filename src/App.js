import { Provider } from "react-redux";
import store from "./redux/store";
import Header from "./components/header/Header";
import Body from "./components/body/Body";

function App() {
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
