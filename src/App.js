import React from 'react';
import './App.css';
import { HomePage } from "./pages/homepage/homepage.component";
import { Route, Switch } from 'react-router-dom';
import { ShopPage } from "./pages/shop/shop.component";
import { Header } from "./components/header/header.component";
import { SignInSighUp } from "./pages/sign-in-sigh-up/sign-in-sigh-up.component";


function App() {
  return (
    <div>
        <Header/>
         <Switch>
             <Route exact path='/' component={HomePage} />
             <Route exact path='/shop' component={ShopPage} />
             <Route exact path='/sign-in' component={SignInSighUp} />
         </Switch>
    </div>
  );
}

export default App;
