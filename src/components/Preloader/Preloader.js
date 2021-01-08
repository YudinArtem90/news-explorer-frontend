import './Preloader.css';
import preloader from '../../images/preloader.png';

function Preloader() {
    return (
      <div className="preloader-container">
        <img className="preloader-container__preloader" src={preloader} alt="прелоудер"/>
        <div className="preloader-container__text-inform">Идет поиск новостей...</div>
      </div>
    );
  }
  
  export default Preloader;