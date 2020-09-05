import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import "./styles.css";
import MainPage from "./MainPage";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" component={MainPage} />
      </Switch>
    </BrowserRouter>
  );
}

ReactDOM.render(<App />, document.getElementById("root"));
