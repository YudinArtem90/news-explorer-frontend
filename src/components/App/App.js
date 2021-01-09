import './App.css';
import React from 'react';
import Main from '../Main/Main';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import { Route, Switch, withRouter, Redirect } from 'react-router-dom';
import ProtectedRoute from '../ProtectedRoute/ProtectedRoute';

function App() {
  
  const [loggedIn, setLoggedIn] = React.useState(true);

  return (
    <div className="root">

      <Header/>

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
    </div>
  );
}

export default App;
