import React from 'react';
import {Helmet} from 'react-helmet';
import favicon from '../static/images/favicon.png';
import 'antd/dist/antd.css'

function HeadMetadata({children, title}) {
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <meta http-equiv="x-ua-compatible" content="ie=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="app_name" content="Partnerz" />
        <meta name="author" content="Bruno Edoh" />
        <link rel="icon" type="image/png" href={`${favicon}`} />
        <link href="https://fonts.googleapis.com/css?family=Varela+Round&display=swap" rel="stylesheet" />
        <title>{title}</title>
        {children ? children : null}
      </Helmet>
    </>
  );
}

export default HeadMetadata;
