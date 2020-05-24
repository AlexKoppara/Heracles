/** @jsx jsx */
import React from "react"
import { css, jsx } from "@emotion/core"

const styles = {
  headerStyles: css({
    width: "100%",
    // boxShadow: "0 1px 2px 1px gray"
  }),
  logo: {
    container: css({
      fontFamily: "'Montserrat', sans-serif",
      display: "flex",
      flexWrap: "nowrap",
      alignItems: "baseline"
    }),
    font: {
      main: css({
        fontWeight: 700,
        fontSize: "40px",
        marginTop: "0px",
        marginBottom: "2px"
      }),
      mini: css({
        fontWeight: 700,
        fontSize: "20px",
        marginTop: "0px",
        marginBottom: "2px"
      })
    }
  }
}

const Header = () => {
  return (
    <div css={styles.headerStyles}>
      <div css={styles.logo.container}>
        <h1 css={styles.logo.font.main}>GoLocal</h1>
        <h1 css={styles.logo.font.mini}>.Restaurant</h1>
      </div>
    </div>
  )
}

export default Header
