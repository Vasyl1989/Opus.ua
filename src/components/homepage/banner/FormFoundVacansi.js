import React from 'react';


const FormFoundVacansi = () => {
  return (
    <div>

      <h2>Пошук роботи</h2>
      <div className="search-container">
        <div id="1">
          <input type="text" className="ico-01" placeholder="назва роботи, ключові слова чи ім'я компанії" value="" />
        </div>

        <div id="2">
          <input type="text" className="ico-02" placeholder="місто, область" value="" id="2" />
        </div>
        <button><i className="fa fa-search"></i></button>
      </div>
    </div>

  );
};

export default FormFoundVacansi;