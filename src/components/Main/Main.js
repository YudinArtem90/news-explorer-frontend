import './Main.css';
import SearchContainer from '../SearchContainer/SearchContainer';
import About from '../About/About';
import PopupWithForm from '../PopupWithForm/PopupWithForm';
import NewsCardList from '../NewsCardList/NewsCardList';
import Preloader from '../Preloader/Preloader';
import Footer from '../Footer/Footer';

function Main() {
    return (
      <div className="main">
        <SearchContainer/>
        <Preloader/>
        <NewsCardList/>
        <About/>
        <PopupWithForm/>
        <Footer/>
      </div>
    );
  }
  
  export default Main;