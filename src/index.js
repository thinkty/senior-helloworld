import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import "./styles.css";
import MainPage from "./MainPage";
import CreatePage from "./CreatePage";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" component={MainPage} />
        <Route path="/post" component={CreatePage} />
      </Switch>
    </BrowserRouter>
  );
}

ReactDOM.render(<App />, document.getElementById("root"));
