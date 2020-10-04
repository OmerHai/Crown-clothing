// General
import React from 'react';

// Styles
import './App.css';

// Router
import { Switch, Route, Redirect } from 'react-router-dom';

// Redux
import { setCurrentUser } from './redux/user/user.actions';
import { connect } from 'react-redux';
import { selectCurrentUser } from './redux/user/user.selectors';
import { selectShopColllectionForPreview } from './redux/shop/shop.selectors';

// Reselect
import { createStructuredSelector } from 'reselect';

// Firebase
import { auth, createUserProfileDocument, addCollectionAndDocuments } from './firebase/firebase.utils';

// Our components
import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component';
import Header from './components/header/header.component';
import SignInAndSignUp from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component';
import CheckoutPage from './pages/checkout/checkout.component';


class App extends React.Component {
  unSubscribeFromAuth = null; /* This is function for closing the communication between our app and firebase */
  componentDidMount() {
    const { setCurrentUser, collectionsArray } = this.props;
    /* This is open the communication between our app and the auth service in firebase  */
    this.unSubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      if(userAuth) {
        const userRef = await createUserProfileDocument(userAuth);
        userRef.onSnapshot(snapShot => {
          setCurrentUser({
            id: snapShot.id,
            ...snapShot.data()
          });
        });
      }
      else {
        setCurrentUser(userAuth);
        addCollectionAndDocuments('collections', collectionsArray.map(({ title, items })=>({ title, items })));
      }
    });
  }

  componentWillUnmount() {
    this.unSubscribeFromAuth();
  }

  render() {
      return (
      <div>
        <Header />
        <Switch>
          <Route exact path='/' component={HomePage}/>
          <Route path='/shop' component={ShopPage}/>
          <Route exact path='/signin' render={() => this.props.currentUser ? (<Redirect to="/" />) : (<SignInAndSignUp/>)}/>
          <Route exact path='/checkout' component={CheckoutPage}/>
        </Switch>  
      </div>
    );
    
  }
}

// Redux Functions
const mapStateToProp = createStructuredSelector({
  currentUser: selectCurrentUser,
  collectionsArray: selectShopColllectionForPreview
});

const mapDispatchToProps = dispatch => ({
  setCurrentUser: user => dispatch(setCurrentUser(user))
});
export default connect(mapStateToProp, mapDispatchToProps)(App);
