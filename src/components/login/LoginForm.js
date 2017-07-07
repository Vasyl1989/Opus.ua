import React from "react";



class LoginForm extends React.Component {
 render() {
  return (
   <form method="post"
    className="login">

    <p className="form-row form-row-wide">
     <label htmlFor="username">Ім'я Користавача:
                    <i className="ln ln-icon-Male" />
      <input
       type="text"
       className="input-text"
       name="username"
       id="username"
       value="" />
     </label>
    </p>

    <p className="form-row form-row-wide">
     <label htmlFor="password">Пароль:
                    <i className="ln ln-icon-Lock-2" />
      <input
       className="input-text"
       type="password" name="password" id="password" />
     </label>
    </p>

    <p className="form-row">
     <input type="submit" className="button border fw margin-top-10" name="login" value="Увійти" />

     <label htmlFor="rememberme" className="rememberme">
      <input name="rememberme" type="checkbox" id="rememberme" value="forever" /> Запам'ятати мене</label>
    </p>

    <p className="lost_password">
     <a href="#" >Забули пароль?</a>
    </p>
   </form>


  );
 }
}
export default (LoginForm);