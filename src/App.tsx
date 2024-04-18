// import useFetch from "./hooks/useFetch";

import React from "react";
import Header from "./templates/Header";

function App() {
  // const { isSuccess, data } = useFetch({
  //   key: "date",
  //   value: "2024-04-09",
  // });
  // console.log(data);
  // return isSuccess ? <h1>App</h1> : <p>aguarde</p>;

  return (
    <React.Fragment>
      <Header />
      <h1>App</h1>
    </React.Fragment>
  );
}

export default App;
