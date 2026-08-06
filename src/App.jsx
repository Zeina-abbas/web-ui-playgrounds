import { Route, Routes } from 'react-router-dom'
import './App.css'
import Location from "./pages/Location/Location.jsx";
import Admin from "./pages/Admin/Admin.jsx";
import Contact from "./pages/Contact/Contact.jsx";
import NavBar from './components/NavBar/NavBar.jsx';
import Login from './pages/Login/Login.jsx';
import Home from './pages/Home/Home.jsx';

function App() {
  const navItems = [
    {
      content: "Home",
      href: "/"
    },
    {
      content: "Location",
      href: "/location"
    },
    {
      content: "Admin",
      href: "/admin"
    },
    {
      content: "Contact",
      href: "/contact"
    },
    {
      content: "Login",
      href: "/login",
      className: "loginLinkControl"
    }
  ]
  return (
    <div>
      <NavBar items={navItems} className="loginLinkControl" />
      <Routes>
        <Route path='/' element={<Home></Home>} />
        <Route path='/location' element={<Location></Location>} />
        <Route path='/admin' element={<Admin></Admin>} />
        <Route path='/contact' element={<Contact></Contact>} />
        <Route path='/login' element={<Login></Login>} />
      </Routes>

    </div>
  )
}

export default App
