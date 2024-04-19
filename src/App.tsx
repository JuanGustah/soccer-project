// import useFetch from "./hooks/useFetch";

import React from "react";

import Header from "./templates/Header";
import Container from "./components/Container";

import Background from "./assets/images/background_list.png";
import Player from "./assets/icons/soccer_player.png";

function App() {
  // const { isSuccess, data } = useFetch({
  //   key: "date",
  //   value: "2024-04-09",
  // });
  // console.log(data);
  // return isSuccess ? <h1>App</h1> : <p>aguarde</p>;

  return (
    <React.Fragment>
      <img
        src={Background}
        alt="background image"
        className="absolute inset-0 w-full z-negative"
      />
      <Header />
      <Container>
        <span className="flex items-center gap-2">
          <h2 className="font-extra-bold text-xl text-white">
            Partidas de Hoje
          </h2>
          <img src={Player} alt="soccer player" width={30} height={30} />
        </span>
      </Container>
    </React.Fragment>
  );
}

export default App;
