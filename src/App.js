import React from "react";
import { HashRouter, Route, Switch } from "react-router-dom";

//components
import Pokemons from "./components/Pokemons.tsx";
import PokemonTypes from "./components/PokemonTypes";
import Navbar from "./components/Navbar";
// import Kanto from "./components/Kanto";
import PokemonInfo from "./components/PokemonInfo.tsx";

const App = () => {
  return (
    <>
    <HashRouter>
    <Navbar />
      <Switch>

          <Route exact path='/' component={Pokemons} />

        <Route path='/details/:id' component={PokemonInfo} />
      </Switch>
    </HashRouter>
    </>
  );
};

export default App;
