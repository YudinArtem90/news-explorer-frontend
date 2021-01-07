import './PopupWithForm.css';
import logoClose from '../../images/close.svg';
import Form from '../Form/Form';

function PopupWithForm() {
    return (
      <div className="popup">
        <div className="popup__main-container">
          <img src={logoClose} alt='кнопка закрытия' className="popup__icon-close"/>
          <div className="popup__footer-container">
            <Form/>
          </div>
        </div>
      </div>
    );
  }
  
  export default PopupWithForm;