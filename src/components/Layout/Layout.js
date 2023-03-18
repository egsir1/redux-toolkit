import React, { Fragment } from "react";
import MainHeader from "./MainHeader";

const Layout = (props) => {
  return (
    <Fragment>
      <MainHeader />
      <main>{props.chiildren}</main>
    </Fragment>
  );
};

export default Layout;
