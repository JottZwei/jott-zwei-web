import React from "react"
import { GlobalStyle } from "./globalStyle"
import Footer from "./footer"
import Navbar from "./navbar"
import ExitIntentModal from "./6_Reusable/ExitIntentModal"


const Layout = ({ children }) => (
      <>
        <GlobalStyle />
          <Navbar />
            <main>{children}</main>
          <Footer />
      </>
)

export default Layout
