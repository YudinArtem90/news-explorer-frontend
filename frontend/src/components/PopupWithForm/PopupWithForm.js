import './PopupWithForm.css';
import logoClose from '../../images/close.svg';
import Form from '../Form/Form';
import React from 'react';
import LinkForm from '../LinkForm/LinkForm';
class PopupWithForm extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      firstDiscovery : false, // нужен для того, что бы при первом открытии модалки не сработал close
    };

    this.setWrapperRef = this.setWrapperRef.bind(this);
    this.handleClickOutside = this.handleClickOutside.bind(this);
    this.escFunction = this.escFunction.bind(this);
    this.close = this.close.bind(this);
  }

  componentDidMount() {
    const _this = this;
    window.addEventListener("click", function(event) {
      _this.handleClickOutside(event);
    }, false);
    document.addEventListener("keydown", this.escFunction, false);
  }

  componentWillUnmount(){
    document.removeEventListener("keydown", this.escFunction, false);
  }

  escFunction(event){
    if(event.keyCode === 27) {
      this.close()
    }
  }

  handleClickOutside(event) {
    // eslint-disable-next-line react/no-direct-mutation-state
    if(this.state.firstDiscovery){
      if (this.wrapperRef && !this.wrapperRef.contains(event.target)) {
        this.close()
        return;
      }
    }

    // eslint-disable-next-line react/no-direct-mutation-state
    this.state.firstDiscovery = true;
  }

  close() {
    this.props.closeModal();
  }

  setWrapperRef(node) {
    this.wrapperRef = node;
  }

  render() {

    const { showModal, statusForm, setStatusForm } = this.props;

    if(showModal){
      // eslint-disable-next-line react/no-direct-mutation-state
      this.state.firstDiscovery = false;
    }

    return (
      <div className={`popup ${showModal ? "popup_active_true" : "popup_active_false"}`}  >
        <div className="popup__main-container" ref={this.setWrapperRef}>
          <img src={logoClose} alt='кнопка закрытия' className="popup__icon-close" onClick={this.close}/>
          <div className="popup__footer-container">

          {
            statusForm === 'authorization' || statusForm === 'registration' ?
              <>
                <div className="popup__container-with-link popup__container-with-link_theme_form">или <LinkForm setStatus={setStatusForm} status={statusForm}/></div>
                  <Form {...this.props} />
                </> : 
                <>
                  <div className="popup__container-with-link popup__container-with-link_theme_info-successfully"><LinkForm setStatus={setStatusForm} status={statusForm}/></div>
                  <h2 className="popup__info-successfully">{statusForm}</h2>
                </>
          }
          </div>
        </div>
      </div>
    );
  }
}

export default PopupWithForm;