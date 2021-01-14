import './App.css';
import React from 'react';
import Main from '../Main/Main';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import { Route, Switch, withRouter, Redirect } from 'react-router-dom';
import ProtectedRoute from '../ProtectedRoute/ProtectedRoute';
import PopupWithForm from '../PopupWithForm/PopupWithForm';
import SavedNewsHeader from '../SavedNewsHeader/SavedNewsHeader';
import {CurrentPageContext} from '../../utils/contexts/page/CurrentPageContext';

function App(props) {
  
  const [loggedIn, setLoggedIn] = React.useState(true);
  const [showModal, setShowModal] = React.useState(false);

  const closeModal = () => {
    setShowModal(false);
  }

  // console.log('showModal', showModal);

  return (
    <div className="root">

    <CurrentPageContext.Provider value={props.location.pathname === '/'}>
      
    <Header setShowModal={setShowModal}/>

    <Switch>

      {/* <Route path='/saved-news'>
        
      </Route> */}

      <ProtectedRoute 
        path="/saved-news" 
        loggedIn={loggedIn} 
        component={SavedNewsHeader}
        mainThis={this}
      />

      <ProtectedRoute 
        path="/" 
        loggedIn={loggedIn} 
        component={Main}
        mainThis={this}
      />

    </Switch>

    <Footer/>

    <PopupWithForm showModal={showModal} closeModal={closeModal}/>

    </CurrentPageContext.Provider>
    </div>
  );
}

export default withRouter(App);
