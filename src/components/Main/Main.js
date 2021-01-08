import './Main.css';
import SearchContainer from '../SearchContainer/SearchContainer';
import About from '../About/About';
import PopupWithForm from '../PopupWithForm/PopupWithForm';
import NewsCardList from '../NewsCardList/NewsCardList';

function Main() {
    return (
      <div className="main">
        <SearchContainer/>
        <NewsCardList/>
        <About/>
        <PopupWithForm/>
      </div>
    );
  }
  
  export default Main;