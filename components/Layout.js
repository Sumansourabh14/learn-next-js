// contains navbar and footer - will go in every page
// wrapped the _app.js file with <Layout> Component.

import Footer from "./Footer"
import Navbar from "./Navbar"

const Layout = ({ children }) => {
  return (
    <div className="content">
        <Navbar />
        { children }
        <Footer />
    </div>
  )
}

export default Layout;