import React from 'react';


const FormFoundVacansi = () => {
  return (
    <div>
      <h2>Пошук роботи</h2>

      <input type="text" className="ico-01" placeholder="назва роботи, ключові слова чи ім'я компанії" value="" />
      <input type="text" className="ico-02" placeholder="місто, область" value="" />
      <button><i className="fa fa-search"></i></button>
    </div>

  );
};

export default FormFoundVacansi;