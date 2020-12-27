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
            <p className="about__text">Это блок с описанием автора проекта. Здесь следует указать, как вас зовут, чем вы занимаетесь, какими технологиями разработки владеете.</p>
            <p className="about__text">Также можно рассказать о процессе обучения в Практикуме, чему вы тут научились, и чем можете помочь потенциальным заказчикам.</p>
        </div>
      </div>
    );
  }
  
  export default About;