import React from "react";
import HeadMeta from "../components/HeadMetadata";
import IndexHead from "../components/IndexHead";
import IndexContent from "../components/IndexConent";
import IndexFooter from "../components/IndexFooter";
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
