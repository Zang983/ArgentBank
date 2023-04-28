import React from 'react';
import Router from "./router.tsx"
import { Provider } from "react-redux";
import { store } from "./store.ts";


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
