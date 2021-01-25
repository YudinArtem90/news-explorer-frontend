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
import MainApi from '../../utils/api/MainApi';


function App(props) {
  
  const [currentUser, setCurrentUser] = React.useState({
    loggedIn : false,
    email: '',
    name: ''
  });
  
  const [showModal, setShowModal] = React.useState(false);
  const [hideMenu, setHideMenu] = React.useState(false);
  
  // для сохраненых новостей
  const [listSavedNewsItems, setListSavedNewsItems] = React.useState([]);
  const [cardsBookmarks, setCardsBookmarks] = React.useState([]);

  // для новостей
  const [searchStatus, setSearchStatus] = React.useState(status.searchDisabled());
  const [newsData, setNewsData] = React.useState({
    categoryName: '', 
    news: [],
    numberNewsItems: 0
  });

  //для формы
  const [ disabled, setDisabled ] = React.useState(true);
  const [ valueEmail, setValueEmail ] = React.useState('');
  const [ valuePassword, setValuePassword ] = React.useState('');
  const [ valueName, setValueName ] = React.useState('');
  const [ errorAll, setErrorAll ] = React.useState({
      status: false,
      error: ''
  });
  const [statusForm, setStatusForm] = React.useState('authorization');

  const saveNews = (date, idCard) => { 

    date.keyword = newsData.categoryName;
    // console.log('idCard', idCard);
    // console.log('date', date);
    MainApi
      .saveNews(date)
      .then((res) => { 
        const arrayCardsBookmarks = [...cardsBookmarks, idCard];
        setCardsBookmarks(arrayCardsBookmarks);
        workingWithNews.addCardsBookmarks(arrayCardsBookmarks);
      })
      .catch();
  }

  const deleteCardBookmarks = (idCard) => { 

    MainApi
      .deleteNews(idCard)
      .then((res) => { 
        // console.log('res', res);
      })
      .catch();
  }

  const getSaveNews = () => { 
    // debugger;
    MainApi
      .getSaveNews()
      .then((res) => { 
        console.log('res', res);
        setListSavedNewsItems(res);
      })
      .catch();
  }

  const clearFormAll = (res) => { 
    setValueEmail('');
    setValuePassword('');
    setValueName('');
    setStatusForm(res.message);
    setErrorAll({status: false, error: ''});
    setDisabled(true);
  }

  const getUser = () => {
    MainApi
        .getUser()
        .then((user) => {
            if(user){
                workingWithNews.deleteNews();

                setNewsData({
                  categoryName: '', 
                  news: [],
                  numberNewsItems: 0
                });

                setCurrentUser({
                    loggedIn : true,
                    email: user.email,
                    name: user.name
                });
                closeModal();
            }else{
                setErrorAll({status: true, error: 'Ошибка при запросе данных о пользователе.'});
            }
        })
        .catch((error) => setErrorAll({status: true, error: 'Ошибка при запросе данных о пользователе.'}));
  }

  const getCurrentUser = () => {
    MainApi
        .getUser()
        .then((user) => {
            if(user){
                setCurrentUser({
                    loggedIn : true,
                    email: user.email,
                    name: user.name
                });
                closeModal();
            }else{
                setErrorAll({status: true, error: 'Ошибка при запросе данных о пользователе.'});
            }
        })
        .catch((error) => setErrorAll({status: true, error: 'Ошибка при запросе данных о пользователе.'}));
  }

  const onRegister = () => { 
      MainApi
          .registration({
              email: valueEmail,
              password: valuePassword,
              name: valueName
          })
          .then((res) => {
              if(res.statusCode !== 400){
                clearFormAll(res);
              }else{
                  setErrorAll({status: true, error: res.validation.body.message});
              }
          })
          .catch((error) => {
              if(typeof error.validation !== 'object'){
                  setErrorAll({status: true, error: error.message});
              }else{
                  setErrorAll({status: true, error: error.validation.body.message});
              }
          });
  }

  const onLogin  = () => { 
      MainApi
          .authorization({
              email: valueEmail,
              password: valuePassword
          })
          .then((res) => {
              // console.log('res', res);
              if(res){
                  if(workingWithToken.saveToken(res.token)){
                      getUser();
                  }else{
                      setErrorAll({status: true, error: 'Ошибка token не сохранился.'});
                  }
              }else{
                  setErrorAll({status: true, error: 'Ошибка'});
              }
          })
          .catch((error) => setErrorAll({status: true, error: error.message}));
  }

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

  const getNewsLocalStorage = () => {
    if(workingWithNews.checkNews()){
      setNewsData(workingWithNews.getNews());
    }
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
    setCardsBookmarks(workingWithNews.getCardsBookmarks());

    if(isThereToken){
      getCurrentUser();
    }else{
      workingWithToken.deleteToken();
      workingWithNews.deleteCardsBookmarks();
      props.history.push('/');
    }
    
    getNewsLocalStorage();
  }, []);

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
              getSaveNews={getSaveNews}
              listSavedNewsItems={listSavedNewsItems}
              mainThis={this}
              cardsBookmarks={cardsBookmarks}
              deleteCardBookmarks={deleteCardBookmarks}
              setShowModal={setShowModal}
            />


            <Route path='/' exec>
              <Main mainThis={this} newsData={newsData} searchStatus={searchStatus} searchNews={searchNews} saveNews={saveNews} cardsBookmarks={cardsBookmarks}/>
            </Route>
          
          </Switch>

          <Footer/>

          <PopupWithForm 
            showModal={showModal} 
            closeModal={closeModal}
            setDisabled={setDisabled} 
            valueEmail={valueEmail} 
            setValueEmail={setValueEmail}
            valuePassword={valuePassword}
            setValuePassword={setValuePassword}
            valueName={valueName}
            setValueName={setValueName}
            errorAll={errorAll}
            statusForm={statusForm}
            setStatusForm={setStatusForm}
            onRegister={onRegister}
            onLogin={onLogin}
            disabled={disabled}
          />
      </CurrentUserContext.Provider>
    </CurrentPageContext.Provider>
    </div>
  );
}

export default withRouter(App);
