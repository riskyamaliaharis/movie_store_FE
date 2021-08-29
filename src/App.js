import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Home from "./views/Home/Home"
import MoviesList from "./views/Movies/MoviesList"
import SubscribePerMovie from "./views/Subscribe/SubscribePerMovie";
import SubscribeType from "./views/Subscribe/SubscribeType";


function App() {
  return (
    
    <BrowserRouter >
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/movies" exact component={MoviesList}></Route>
        <Route path="/subscribe/permovie" exact component={SubscribePerMovie}></Route>
        <Route path="/subscribe" exact component={SubscribeType}></Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
