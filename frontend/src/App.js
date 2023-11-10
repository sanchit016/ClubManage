import "./App.css";
import Banner from "./components/Banner/Banner";
import ClubList from "./components/ClubList/ClubList";
import ClubMain from "./components/Clubs/ClubMain";
import AddEvent from "./components/Convener/AddEvent";
import Convener from "./components/Convener/Convener";
import Login from "./components/Login/Login";

import AdminHome from "./components/Admin/AdminHome";
import StudReq from "./components/StudReq/StudReq";
import Assign from "./components/Teacher/Assign";
import Dashboard from "./components/Teacher/Dashboard";
import Top from "./components/Top/Top";
import About from "./components/AboutUs/About";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home/Home";
import { ToastContainer } from "react-toastify";
import Footer from "./components/Footer/Footer";
import Navbar from "./components/Navbar/Navbar";
import Pending from "./components/StudReq/Pending";
import AdminClub from "./components/Admin/AdminClub/AdminClub";
import AdminClubAdd from "./components/Admin/AdminClub/AdminClubAdd";
import AdminClubEdit from "./components/Admin/AdminClub/AdminClubEdit";
import AdminTeacher from "./components/Admin/AdminTeacher/AdminTeacher";
import AdminTeacherAdd from "./components/Admin/AdminTeacher/AdminTeacherAdd";
import AdminTeacherView from "./components/Admin/AdminTeacher/AdminTeacherView";
import AdminTeacherEdit from "./components/Admin/AdminTeacher/AdminTeacherEdit";
import AdminStudent from "./components/Admin/AdminStudent/AdminStudent";
import AdminStudentAdd from "./components/Admin/AdminStudent/AdminStudentAdd";
import AdminStudentEdit from "./components/Admin/AdminStudent/AdminStudentEdit";
import AdminStudentView from "./components/Admin/AdminStudent/AdminStudentView";

import TeacherHome from "./components/TeacherDashboard/TeacherHome";
import TeacherCreateEvent from "./components/TeacherDashboard/TeacherCreateEvent";
import TeacherEditEvent from "./components/TeacherDashboard/TeacherEditEvent";
import TeacherAssignConvenor from "./components/TeacherDashboard/TeacherAssignConvenor";
import Contact from "./components/Contact/Contact";
import Contact2 from "./components/Contact/Contact2";

import ConvenorHome from "./components/ConvenorDashboard/ConvenorHome";
import ConvenorCreateEvent from "./components/ConvenorDashboard/ConvenorCreateEvent";
import ConvenorClubStudentView from "./components/ConvenorDashboard/ConvenorClubStudentView";

function App() {
  return (
    <>
      <Router>
        {/* <ToastContainer />
        <Top /> */}
        <Navbar />

        <Routes>
          <Route path="/home" exact element={<Home />} />
          <Route path="/about" exact element={<About />} />
          <Route path="/list" exact element={<ClubList />} />
          <Route path="/club" exact element={<ClubMain />} />
          <Route path="/studreq" exact element={<StudReq />} />
          <Route path="/convenor" exact element={<Convener />} />
          <Route path="/addevent" exact element={<AddEvent />} />
          <Route path="/login" exact element={<Login />} />
          <Route path="/admin/adminHome" exact element={<AdminHome />} />

          <Route
            exact
            path="/admin/adminTeacher"
            element={<AdminTeacher />}
          ></Route>

          <Route
            exact
            path="/admin/adminTeacherAdd"
            element={<AdminTeacherAdd />}
          ></Route>

          <Route
            exact
            path="/admin/adminTeacherView/:slug"
            element={<AdminTeacherView />}
          ></Route>
          <Route
            exact
            path="/admin/adminTeacherEdit/:slug"
            element={<AdminTeacherEdit />}
          ></Route>
          <Route exact path="/admin/adminClub" element={<AdminClub />}></Route>

          <Route
            exact
            path="/admin/adminClubAdd"
            element={<AdminClubAdd />}
          ></Route>
          <Route
            exact
            path="/admin/adminClubEdit/:slug"
            element={<AdminClubEdit />}
          ></Route>
          <Route
            exact
            path="/admin/adminStudent"
            element={<AdminStudent />}
          ></Route>

          <Route
            exact
            path="/admin/adminStudentAdd"
            element={<AdminStudentAdd />}
          ></Route>
          <Route
            exact
            path="/admin/adminStudentView/:slug"
            element={<AdminStudentView />}
          ></Route>
          <Route
            exact
            path="/admin/adminStudentEdit/:slug"
            element={<AdminStudentEdit />}
          ></Route>
          <Route exact path="/teacher/teacherHome" element={<TeacherHome />} />
          <Route
            exact
            path="/teacher/teacherCreateEvent"
            element={<TeacherCreateEvent />}
          />
          <Route
            exact
            path="/teacher/teacherEditEvent/:slug"
            element={<TeacherEditEvent />}
          />
          <Route
            exact
            path="/teacher/teacherAssignConvenor"
            element={<TeacherAssignConvenor />}
          />
          <Route
            exact
            path="/convenor/convenorHome"
            element={<ConvenorHome />}
          />
          <Route
            exact
            path="/convenor/viewClubMembers"
            element={<ConvenorClubStudentView />}
          />
          <Route
            exact
            path="/convenor/convenorCreateEvent"
            element={<ConvenorCreateEvent />}
          />
        </Routes>

        <Footer />
      </Router>
    </>
  );
}

export default App;
