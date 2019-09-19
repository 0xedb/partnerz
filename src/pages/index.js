import React from 'react';
import HeadMeta from '../components/HeadMetadata';
import IndexHead from '../components/IndexHead';
import IndexContent from '../components/IndexConent';
import IndexFooter from '../components/IndexFooter';

function index() {
  return (
    <>
      <HeadMeta title="Partnerz | Your Financial Architects" />
      <IndexHead />
      <IndexContent />
      <IndexFooter />
      
    </>
  );
}

export default index;
