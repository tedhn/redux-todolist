import React from "react";
import { createStore } from "redux";
import ReactDOM from "react-dom";
import "./style.scss";
import Todo from "./todo";

import todoReducer from "./reducer";
import { Provider } from "react-redux";

const store = createStore(
  todoReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

function App() {
  return (
    <div className="container">
      <Todo />
    </div>
  );
}

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
