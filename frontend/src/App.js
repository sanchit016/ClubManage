import "./App.css";
import Banner from "./components/Banner/Banner";
import ClubList from "./components/ClubList/ClubList";
import ClubMain from "./components/Clubs/ClubMain";
import AddEvent from "./components/Convener/AddEvent";
import Convener from "./components/Convener/Convener";
import Login from "./components/Login/Login";
import AdminDashboard from "./components/Admin/AdminDashboard";
import StudReq from "./components/StudReq/StudReq";
import Top from "./components/Top/Top";
import About from "./components/AboutUs/About";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      {/* <Login /> */}
      {/* <AdminDashboard /> */}
      <About />
    </>
  );
}

export default App;
