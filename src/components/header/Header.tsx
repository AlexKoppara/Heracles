/** @jsx jsx */
import React from "react";
import { css, jsx } from "@emotion/core";

const styles = {
  headerStyles: css({
    width: "100%",
    boxShadow: "0 1px 2px 1px gray",
    fontFamily: "'Montserrat', sans-serif",
  }),
  logoFont: css({
    fontWeight: 700,
    fontSize: "40px",
    marginTop: "0px",
  }),
};

const Header = () => {
  return (
    <div css={styles.headerStyles}>
      <h1 css={styles.logoFont}>GoLocal.Restaurant</h1>
    </div>
  );
};

export default Header;
