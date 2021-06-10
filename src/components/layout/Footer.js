import React from "react";

import FooterStyle from "./FooterStyle";

const Footer = () => {
  const classes = FooterStyle();

  return (
    <>
      <div className={classes.cont}>
        <div>
          <p className={classes.me}>Joaquin de los Reyes - 2021</p>
        </div>
      </div>
    </>
  );
};

export default Footer;
