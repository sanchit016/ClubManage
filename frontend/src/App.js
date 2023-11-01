import "./App.css";
import ClubList from "./components/ClubList/ClubList";
import Login from "./components/Login/Login";
import AdminDashboard from "./components/Admin/AdminDashboard";
import Top from "./components/Top/Top";
import About from "./components/AboutUs/About";
import Club from './pages/Club'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Home from "./pages/Home";
import { ToastContainer } from "react-toastify";
import Footer from "./components/Footer/Footer";
import Navbar from "./components/Navbar/Navbar";
import Contact from "./components/Contact/Contact";
function App() {
  return (
    <>
    <Router>
      {/*<ToastContainer /> */}
      <Top />
      <Navbar /> 
        <Routes>
          <Route path ='/home' exact element = {<Home />} />
          <Route path ='/about' exact element = {<About />} />
          <Route path ='/contact' exact element = {<Contact />} />
          <Route path ='/list' exact element = {<ClubList />} />
          <Route path ='/club' exact element = {<Club />} />
          <Route path="/club/:clubId" element={<Club />} />
          <Route path ='/login' exact element = {<Login />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
