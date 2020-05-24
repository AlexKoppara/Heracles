/** @jsx jsx */
import React from "react"
import { css, jsx } from "@emotion/core"
import colors from "../../shared/colors"
import AddressSearchBar from "../../shared/components/AddressSearchBar"

const Home = () => {
  const styles = {
    mainContent: css({
      width: "100%",
      backgroundColor: colors.pink,
      height: "400px",
      fontFamily: "'Montserrat', sans-serif"
    }),
    h1: css({
      fontWeight: 400,
      fontSize: "40px",
      margin: 0,
      padding: "10px",
      paddingTop: "20px"
    })
  }

  return (
    <div>
      <div css={styles.mainContent}>
        <h1 css={styles.h1}>Buy Food and Feel Good About It</h1>
        <AddressSearchBar />
      </div>
      <div>Text Blurb</div>
    </div>
  )
}

export default Home
