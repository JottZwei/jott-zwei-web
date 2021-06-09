import React from "react"
import { GlobalStyle } from "./globalStyle"
import Footer from "./footer"
import Navbar from "./navbar"


const Layout = ({ children }) => (
      <>
        <GlobalStyle />
        <Navbar />
            <main>
              {children}
            </main>
          <Footer />
      </>
)

export default Layout
