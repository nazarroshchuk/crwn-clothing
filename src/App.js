import React, {useEffect, useState} from 'react';
import './App.css';
import { HomePage } from "./pages/homepage/homepage.component";
import { Route, Switch } from 'react-router-dom';
import { ShopPage } from "./pages/shop/shop.component";
import { Header } from "./components/header/header.component";
import { SignInSighUp } from "./pages/sign-in-sigh-up/sign-in-sigh-up.component";
import {auth} from "./firebase/firebase.utils";


function App() {
    const [currentUser, setCurrentUser] = useState(null);

    useEffect(() => {
        const unsubscribeFromAuth = auth.onAuthStateChanged( user => {
            console.log(user)
            setCurrentUser(user)
        })
        return () => {
            unsubscribeFromAuth()
            console.log('unsubscribe')
        }

    }, [])

  return (
    <div>
        <Header currentUser={currentUser}/>
         <Switch>
             <Route exact path='/' component={HomePage} />
             <Route exact path='/shop' component={ShopPage} />
             <Route exact path='/sign-in' component={SignInSighUp} />
         </Switch>
    </div>
  );
}

export default App;
