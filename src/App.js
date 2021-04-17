import { Provider } from "react-redux";
import store from "./redux/store";
import Header from "./components/header/Header";
import Body from "./components/body/Body";
import { BrowserRouter as Router } from "react-router-dom";

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Header />
        <Body />
      </Router>
    </Provider>
  );
}

export default App;
