import React from "react";
import HeadMeta from "../components/HeadMetadata"; 
import FormNav from "../components/FormNav";
import FormPage from "../components/FormPage";

function form() {
  return (
    <>
      <HeadMeta title="Partnerz FP Limited | Your Financial Architects" />
      <FormNav />
      <FormPage />
    </>
  );
}

export default form;
