import React from 'react';

function Service({title, description, pic}) {
  return (
    <div className="service">
      <div>
        <img
          className="service_image"
          src={pic ? pic : null}
          alt={description}
        />
        <div className="service_title">{title}</div>
        <div className="service_description">{description}</div>
      </div>
    </div>
  );
}

export default Service;
