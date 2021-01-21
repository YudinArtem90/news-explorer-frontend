import './Preloader.css';
import preloader from '../../images/preloader.png';
import notFound from '../../images/not-found.png';
import status from '../../utils/statusSearch/status';

function Preloader({searchStatus}) {
  
    return (
      <>
      {
        searchStatus === status.searchIsActive() ?
          <div className="preloader-container">
            <img className="preloader-container__preloader" src={preloader} alt="прелоудер"/>
            <p className="preloader-container__text-inform">Идет поиск новостей...</p>
          </div> : null
      }

      {
        searchStatus === status.searchNothingFound() ?
        <div className="preloader-container">
        <div className="preloader-container__not-found">
          <img className="preloader-container__not-found-image" src={notFound} alt="Ничего не найдено"/>
          <h2 className="preloader-container__text-header">Ничего не найдено</h2>
          <p className="preloader-container__not-found-text-inform">К сожалению по вашему запросу ничего не найдено.</p>
        </div>
      </div> : null
      }

      {
        searchStatus === status.searchError() ?
          <div className="preloader-container">
            <p className="preloader-container__text-inform">Во время запроса произошла ошибка. Возможно, проблема с соединением или сервер недоступен. Подождите немного и попробуйте ещё раз</p>
          </div> : null
      }
      
      </>
    );
  }
  
  export default Preloader;