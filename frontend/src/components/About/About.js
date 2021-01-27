import './About.css';
import avatar from '../../images/avatar.jpg'

function About() {
    return (
      <div className="about">
        <div className="about__container-avatar">
          <img src={avatar} className="about__avatar" alt="аватарка"/>
        </div>
        <div className="about__container">
            <h2 className="about__header-text">Об авторе</h2>
            <p className="about__text">Меня зовут Юдин Артем Вячеславович. Практический опыт разработки программного обеспечения на языках JavaScript и PHP более 5 лет. За это время удалось поработать с двумя CRM системами. Одна из них функционирует с 2010 года, основной задачей в которой является поддержка системы и написание нового функционала, переход на новый стек технологий в составе команды из 6 человек под моим руководством. Клиентская часть второго проекта написана мною с нуля. На данный момент я занимаюсь поддержкой и доработкой данного проекта.</p>
            <p className="about__text">В ходе работы была возможность работать с такими JS библиотеками как: Backbone, Marionette, Underscore, Leaflet, JQuery, React, Redux, React Router.</p>
        </div>
      </div>
    );
  }
  
  export default About;