import './App.css';
import React from 'react';
import Main from '../Main/Main';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import { Route, Switch, withRouter, Redirect } from 'react-router-dom';
import ProtectedRoute from '../ProtectedRoute/ProtectedRoute';
import PopupWithForm from '../PopupWithForm/PopupWithForm';

function App() {
  
  const [loggedIn, setLoggedIn] = React.useState(true);
  const [showModal, setShowModal] = React.useState(false);

  const closeModal = () => {
    setShowModal(false);
  }

  // console.log('showModal', showModal);

  return (
    <div className="root">

      <Header setShowModal={setShowModal}/>

      <Switch>

        <Route path='/saved-news'>
          
        </Route>

        <ProtectedRoute 
          path="/" 
          loggedIn={loggedIn} 
          component={Main}
          mainThis={this}
        />

      </Switch>

      <Footer/>
      {/* {
        showModal ? <PopupWithForm showModal={showModal} closeModal={closeModal}/> : null
      } */}
      <PopupWithForm showModal={showModal} closeModal={closeModal}/>
    </div>
  );
}

export default App;
