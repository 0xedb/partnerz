import React from "react";

function Form() {
  return (
    <>
      <form className="form">
        <div className="field">
          <label className="label">Email</label>
          <div className="control">
            <input
              className="input"
              type="email"
              placeholder="example@example.com"
            /> 
          </div>
        </div>
      </form>
    </>
  );
}

export default Form;
