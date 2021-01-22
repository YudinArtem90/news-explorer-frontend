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
import {CurrentUserContext} from '../../utils/contexts/user/CurrentUserContext';
import workingWithToken from '../../utils/workingWithToken/WorkingWithToken';
import workingWithNews from '../../utils/WorkingWithNews/WorkingWithNews';
import newsApi from '../../utils/api/NewsApi';
import status from '../../utils/statusSearch/status';

function App(props) {
  
  const [currentUser, setCurrentUser] = React.useState({
    loggedIn : false,
    email: '',
    name: ''
  });
  const [newsData, setNewsData] = React.useState({
    categoryName: '', 
    news: [],
    numberNewsItems: 0
  });
  const [showModal, setShowModal] = React.useState(false);
  const [hideMenu, setHideMenu] = React.useState(false);
  const [searchStatus, setSearchStatus] = React.useState(status.searchDisabled());

  const searchNews = (news) => {
      
    setNewsData({
      categoryName: '', 
      news: [],
      numberNewsItems: 0
    });
    setSearchStatus(status.searchIsActive());

    newsApi
      .getNews(news)
      .then(request => { 
        const newsArray = request.articles;
        if(newsArray.length){

          const data = {
            categoryName: news, 
            news: newsArray,
            numberNewsItems: request.totalResults
          };

          setNewsData(data);
          workingWithNews.saveNews(data);
          setSearchStatus(status.searchDisabled());
        }else{
          setSearchStatus(status.searchNothingFound());
        }
      })
      .catch(error => {
        setSearchStatus(status.searchError());
      });
  }

  const closeModal = () => {
    setHideMenu(false);
    setShowModal(false);
  }

  const onSignOut = () => { 
    window.location.replace("/"); // заменить
    workingWithToken.deleteToken();
    workingWithNews.deleteNews();
    setCurrentUser({
      loggedIn : false,
      email: '',
      name: ''
    });
  }

  React.useEffect(() => {
    const isThereToken = workingWithToken.tokenCheck();
    if(isThereToken){
      // setCurrentUser({
      //   loggedIn : false,
      //   email: '',
      //   name: ''
      // });
      // getCurrentUser();
    }else{
      // workingWithToken.deleteToken();
      // props.history.push('/sign-in');
    }
    // debugger;
    if(workingWithNews.checkNews()){
      let h = workingWithNews.getNews();
      setNewsData(workingWithNews.getNews());
    }
  }, []);


  React.useEffect(() => {
    
    if (!currentUser.loggedIn) { return }

    setNewsData({
      categoryName: '', 
      news: [],
      numberNewsItems: 0
    });
  }, [currentUser.loggedIn]);


  console.log('newsData App', newsData);

  return (
    <div className="root">

    <CurrentPageContext.Provider value={props.location.pathname === '/'}>
      <CurrentUserContext.Provider value={currentUser}>
          <Header setShowModal={setShowModal} hideMenu={hideMenu} setHideMenu={setHideMenu} onSignOut={onSignOut}/>

          <Switch>

            <ProtectedRoute 
              path="/saved-news" 
              loggedIn={currentUser.loggedIn} 
              component={SavedNewsHeader}
              mainThis={this}
            />


            <Route path='/' exec>
              <Main mainThis={this} newsData={newsData} searchStatus={searchStatus} searchNews={searchNews}/>
            </Route>
          
          </Switch>

          <Footer/>

          <PopupWithForm showModal={showModal} closeModal={closeModal} setCurrentUser={setCurrentUser}/>
      </CurrentUserContext.Provider>
    </CurrentPageContext.Provider>
    </div>
  );
}

export default withRouter(App);
