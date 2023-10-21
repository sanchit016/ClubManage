import "./App.css";
import Banner from "./components/Banner/Banner";
import ClubList from "./components/ClubList/ClubList";
import ClubMain from "./components/Clubs/ClubMain";
import AddEvent from "./components/Convener/AddEvent";
import Convener from "./components/Convener/Convener";
import Login from "./components/Login/Login";
import AdminDashboard from "./components/Admin/AdminDashboard";
import StudReq from "./components/StudReq/StudReq";
import Assign from "./components/Teacher/Assign";
import Dashboard from "./components/Teacher/Dashboard";
import Top from "./components/Top/Top";
import About from "./components/AboutUs/About";
import Club from './pages/Club'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Home from "./components/Home/Home";
import { ToastContainer } from "react-toastify";
import Footer from "./components/Footer/Footer";
import Navbar from "./components/Navbar/Navbar";
import Pending from "./components/StudReq/Pending";
import Contact from "./components/Contact/Contact";

function App() {
  return (
    <>
    <Router>
      {/*<ToastContainer />
      <Top />
  <Navbar /> */}
      
        <Routes>
          {/*
          <Route path ='/home' exact element = {<Home />} />
          <Route path ='/about' exact element = {<About />} />
          <Route path ='/list' exact element = {<ClubList />} />
          <Route path='/club' exact element={<ClubMain/>} />
          <Route path='/studreq' exact element={<StudReq />} />
          <Route path='/convenor' exact element={<Convener />} />
          <Route path='/addevent' exact element={<AddEvent />} />
          <Route path ='/login' exact element = {<Login />} />
          <Route path ='/contact' exact element = {<Contact />} /> */}
          <Route path ='/club' exact element = {<Club />} />

        </Routes>
      
      </Router>
    </>
  );
}

export default App;
