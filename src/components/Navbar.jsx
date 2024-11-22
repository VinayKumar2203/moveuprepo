import About from "../pages/About"
import Contact from "../pages/Contact"
import Home from "../pages/Home"
import PageNotFound from "../pages/pageNotFound"
import Service from "../pages/Service"
import { Link, Route, Routes } from "react-router-dom"
import SingleUser from "../pages/SingleUser"
import Login from "../pages/Login"

const Navbar = () => {
  return (
    <div>
      <div className="linkNavbar">
        <Link to='/'>Home</Link>
        <Link to='/about'>About</Link>
        <Link to='/contact'>Contact</Link>
        <Link to='/service'>Service</Link>
        <Link to='/login'>Login</Link>
      </div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/service" element={<Service />} />
        <Route path="*" element={<PageNotFound />} />
        <Route path="/service/:user_ID" element={<SingleUser />} />
      </Routes>
    </div>
  )
}

export default Navbar
