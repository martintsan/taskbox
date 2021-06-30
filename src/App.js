import { Provider } from "react-redux";
import store from "./lib/redux";

import InboxScreen from "./stories/tasks/InboxScreen";
import "./index.css";

function App() {
  return (
    <Provider store={store}>
      <InboxScreen />
    </Provider>
  );
}

export default App;
