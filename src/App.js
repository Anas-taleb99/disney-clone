import React from 'react';
import Header from './components/Header';
import Home from './components/Home';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Detail from './components/Detail';
import './App.css';
import Login from './components/Login';
import { Provider } from 'react-redux';
import { store } from './Redux/index';

function App() {

  return (
    <Provider store={store}>
      <div className="App">
        <Router>
          <Header />
          <Switch>
            <Route path='/login'>
              <Login />
            </Route>
            <Route path='/detail/:id'>
              <Detail />
            </Route>
            <Route exact path='/'>
              <Home />
            </Route>
          </Switch>
        </Router>
      </div>
    </Provider>
  );
}

export default App;
