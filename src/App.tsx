import React from 'react';
import {
  Redirect,
  Route,
  BrowserRouter as Router,
  Switch,
} from 'react-router-dom';

import './App.css';
import QuestionsPage from './containers/Questions';

const App = () => (
  <div className="App">
    <Router>
      <Switch>
        <Route
          path="/question/one"
          component={QuestionsPage}
        />
        <Route
          path="/question/two"
          component={QuestionsPage}
        />
        <Route path="/">
          <Redirect to="/question/one" />
        </Route>
      </Switch>
    </Router>
  </div>
);

export default App;
