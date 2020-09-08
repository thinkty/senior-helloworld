import React from 'react';
import ReactDOM from 'react-dom';
import {
  BrowserRouter, Switch, Route, Redirect,
} from 'react-router-dom';
import '../node_modules/antd/dist/antd.css';
import MainPage from './MainPage';
import FeedbackPage from './FeedbackPage';
import PostPage from './PostPage';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={MainPage} />
        <Route exact path="/feedback" component={FeedbackPage} />
        <Route exact path="/post/:id" component={PostPage} />
        <Route path="*">
          <Redirect to="/" />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

ReactDOM.render(<App />, document.getElementById('root'));
