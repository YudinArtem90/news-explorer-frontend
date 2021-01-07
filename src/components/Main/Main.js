import './Main.css';
import SearchContainer from '../SearchContainer/SearchContainer';
import About from '../About/About';
import PopupWithForm from '../PopupWithForm/PopupWithForm';

function Main() {
    return (
      <div className="main">
        <SearchContainer/>
        <About/>
        <PopupWithForm/>
      </div>
    );
  }
  
  export default Main;