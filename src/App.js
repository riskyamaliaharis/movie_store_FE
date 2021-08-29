import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Home from "./views/Home/Home"
import MoviesList from "./views/Movies/MoviesList"


function App() {
  return (
    
    <BrowserRouter >
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/movies" exact component={MoviesList}></Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
