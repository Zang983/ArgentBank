import React from 'react';
import Router from "./router.jsx"
import './App.css'
import { Provider } from "react-redux";
import { store } from "./store.js";


function App() {
  return (
    <React.StrictMode>
      <Provider store={store}>
        <Router />
      </Provider>
    </React.StrictMode>
  );
}

export default App;
