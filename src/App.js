import React from 'react';
import './App.css';
import { HomePage } from "./pages/homepage/homepage.component";
import { Route, Switch } from 'react-router-dom';
import { ShopPage } from "./pages/shop/shop.component";
import { Header } from "./components/header/header.component";
import { SignInAndSignUpPage } from "./pages/sign-in-sigh-up/sign-in-and-sigh-up.component";
import { auth, createUserProfileDocument } from "./firebase/firebase.utils";
import { connect } from "react-redux";
import { userActions } from "./redux/user/user.actions";

class App extends React.Component {

    unsubscribeFromAuth = null;

    componentDidMount() {
        //check all time or user exist in database
        this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => { // all time will return actual user
            if (userAuth) {
                const userRef = await createUserProfileDocument(userAuth);
                // the documentSnapshot object allows us to check if a document exists -->
                // at this query using the .exist property with returns a boolean
                // we can also get the actual properties on the object by calling the .data() method, -->
                // which returns us a JSON object of the document
                userRef.onSnapshot(snapShot => {
                    this.props.setCurrentUser({
                        currentUser: {id: snapShot.id, ...snapShot.data()}
                    }, ()=>console.log(this.state))
                })
            }
            this.props.setCurrentUser(userAuth)
        });
    }

    componentWillUnmount() {
        this.unsubscribeFromAuth && this.unsubscribeFromAuth();
    }

    render() {
        return (
            <div>
                <Header />
                <Switch>
                    <Route exact path='/' component={HomePage} />
                    <Route path='/shop' component={ShopPage} />
                    <Route path='/sign-in' component={SignInAndSignUpPage} />
                </Switch>
            </div>
        );
    }
}

const mapDispatchToProps = dispatch => {
    return {
        setCurrentUser: user => dispatch(userActions.setCurrentUser(user))
    }
}

export default connect(null, mapDispatchToProps)(App);