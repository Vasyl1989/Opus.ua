import React from 'react';
import Validation from 'react-validation';
import { rules, Form, Input, Select, Textarea, Button } from 'react-validation/lib/build/validation.rc';
import validator from 'validator';

Object.assign(Validation.rules, {
 required: {
  rule: value => {
   return value.toString().trim();
  },
  hint: value => {
   return <span className='form-error is-visible'>Required</span>
  }
 },
 email: {
  rule: value => {
   return validator.isEmail(value);
  },
  hint: value => {
   return <span className='form-error is-visible'>{value} isnt an Email.</span>
  }
 }
   api: {
  // We don't need the rule here because we will call the 'showError' method by hand on API error 
  hint: value => (
   <button
    className="form-error is-visible"
   >
    API Error on "{value}" value. Focus to hide.
            </button>
  )
 }
});
