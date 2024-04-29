import React from "react";

import Header from "./templates/Header";
import { Outlet } from "react-router-dom";

function App() {
  return (
    <React.Fragment>
      <Header />
      <Outlet />
    </React.Fragment>
  );
}

export default App;
