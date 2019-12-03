import React from "react"; 
import {SigninForm} from './Forms';

function FormPage() {
  return (
    <section className="centered form-page">
      <div className="form-container min">
    <SigninForm />
      </div>
    </section>
  );
}

export default FormPage;
