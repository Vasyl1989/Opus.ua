import React from 'react';
import {connect} from 'react-redux';
class Widgets extends React.Component {

  render() {
   
    return (
      <div className="five columns">
        <div className="widget">
          <h4>Загальний перегляд</h4>

          <div className="job-overview">

            <ul>
              <li>
                <i className="fa fa-map-marker"></i>
                <div>
                  <strong>Локація</strong>
                  <span>20180 Outer Dr Dearborn, MI 48124</span>
                </div>
              </li>
              <li>
                <i className="fa fa-user"></i>
                <div>
                  <strong>Назва роботи</strong>
                  <span>Food Service Specialist</span>
                </div>
              </li>
              <li>
                <i className="fa fa-clock-o"></i>
                <div>
                  <strong>Години</strong>
                  <span>40год / тиж</span>
                </div>
              </li>
              <li>
                <i className="fa fa-money"></i>
                <div>
                  <strong>Оплата праці</strong>
                  <span>9.50 грн - 12.50 грн / год</span>
                </div>
              </li>
            </ul>

            <a href="#small-dialog" className="popup-with-zoom-anim button">Погодитись на цю роботу</a>

            <div id="small-dialog" className="zoom-anim-dialog mfp-hide apply-popup">
              <div className="small-dialog-headline">
                <h2>Погодитись на цю роботу</h2>
              </div>

              <div className="small-dialog-content">
                <form action="#" method="get">
                  <input type="text" placeholder="Повне ім'я" value=""/>
                  <input type="text" placeholder="Електронна адреса" value=""/>
                  <textarea
                    placeholder="Ваше повідомлення / лист, який ви хочете надіслати роботодівцю"></textarea>

                  <div className="upload-info">
                    <strong>Завантажити ваше резюме</strong>
                    <span>Максимальний розмір файлу: 5MB</span>
                  </div>
                  <div className="clearfix"></div>

                  <label className="upload-btn">
                    <input type="file" multiple/>
                    <i className="fa fa-upload"></i>
                    Завантажити
                  </label>
                  <span className="fake-input">Жодний файл не є вибраним</span>

                  <div className="divider"></div>

                  <button className="send">Надіслати заявку</button>
                </form>
              </div>

            </div>

          </div>

        </div>
      </div>
    );
  }

}
function mapStateToProps(state) {

  return {vacancy: state.vacancy};
}

export default connect(mapStateToProps)(Widgets);