import React, { useEffect } from "react";
// import ShoppingComponent from "../@core/Shopping/index";

function shopping() {
  if (typeof window == "undefined") {
    return;
  } else {
    return (
      <>
        shopping
        {/* <ShoppingComponent /> */}
      </>
    );
  }
}

export default shopping;
