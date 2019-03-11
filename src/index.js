import React from "react";
import ReactDOM from "react-dom";
// import { BrowserRouter,HashRouter  } from 'react-router-dom'
import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import reducers from "./reducers";
import { Provider } from "react-redux";

import "./index.css";
import App from "./app.js";

// import store from './store'

// if (module.hot) {
//     module.hot.accept();
// }

let store = createStore(reducers, applyMiddleware(thunk));

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
