import React from 'react';
import './App.css';
import { Switch, Route, Link } from 'react-router-dom';
import CartPage from './pages/CartPage';
import MainPage from './pages/MainPage';
import UserProfilePage from './pages/UserProfilePage';

function App() {
  return (
    <div className="App">
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/cart">Cart</Link>
        </li>
        <li>
          <Link to="/profile">Profile</Link>
        </li>
      </ul>
      <Switch>
        <Route path="/cart">
          <CartPage />
        </Route>
        <Route path="/profile">
          <UserProfilePage />
        </Route>
        <Route path="/">
          <MainPage />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
