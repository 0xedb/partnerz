import React, { useState, useEffect } from 'react';

function FormFieldError({ touched, error }) {
  const [showError, setShowError] = useState(false);
 

useEffect(() => { 
    setShowError(touched && error ? true : false)
}, [touched, error])

  return (
    <small className={`error_message ${showError ? 'error_animate' : ''}`}>
      {showError ? error : ''}
    </small>
  );
}

export default FormFieldError;
