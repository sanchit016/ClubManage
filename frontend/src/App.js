import React from "react";
import "./App.css";
import ClubList from "./components/ClubList/ClubList";
import Login from "./components/Login/Login";
import Top from "./components/Top/Top";
import About from "./components/AboutUs/About";
import Club from "./pages/Club";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import CustomSwitch from "./CustomSwitch";
import Home from "./pages/Home";
import Navbar from "./components/Navbar/Navbar";
import Contact from './components/Contact/Contact'
import { UserProvider } from './userContext';
import Event from './pages/Events'
import Profile from './components/Profile/Profile';
import Error from './pages/Error'
import { ToastContainer } from 'react-toastify';

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
import TeacherEvent from "./components/TeacherDashboard/TeacherEvent";
import TeacherCreateEvent from "./components/TeacherDashboard/TeacherCreateEvent";
import TeacherEditEvent from "./components/TeacherDashboard/TeacherEditEvent";
import TeacherAssignConvenor from "./components/TeacherDashboard/TeacherAssignConvenor";

import ConvenorHome from "./components/ConvenorDashboard/ConvenorHome";
import ConvenorEvent from "./components/ConvenorDashboard/ConvenorEvent";
import ConvenorCreateEvent from "./components/ConvenorDashboard/ConvenorCreateEvent";
import ConvenorClubStudentView from "./components/ConvenorDashboard/ConvenorClubStudentView";
import ConvenorRequests from "./components/ConvenorDashboard/ConvenorRequests";
import ConvenorEditEvent from "./components/ConvenorDashboard/ConvenorEditEvent";

import Request from "./components/Profile/Request";
import LoadingBar from "react-top-loading-bar";
import AdminHome from "./components/Admin/AdminHome";

function App() {
  return (
    <>
      <UserProvider>
        <Router>
          <Top />
          <Navbar />
          <ToastContainer />
          <CustomSwitch>
            <Route path="/home" exact element={<Home />} />
            <Route path="/about" exact element={<About />} />
            <Route path="/contact" exact element={<Contact />} />
            <Route path="/list" exact element={<ClubList />} />
            <Route path="/club" exact element={<Club />} />
            <Route path="/club/:clubId" element={<Club />} />
            <Route path ='/event/:eventId' exact element = {<Event />} />
            <Route path="/login" exact element={<Login />} />
            <Route path="/profile" exact element={<Profile />} />
            <Route path="/event/:eventId" exact element={<Event />} />
            <Route path="/error" exact element={<Error />} />


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
            <Route
              exact
              path="/admin/adminClub"
              element={<AdminClub />}
            ></Route>
            

            <Route
              exact
              path="/teacher/teacherHome"
              element={<TeacherHome />}
            />

            
           
            <Route
              exact
              path="/teacher/teacherEvents"
              element={<TeacherEvent />}
            />
            
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
            <Route
              exact
              path="/convenor/clubRequest"
              element={<ConvenorRequests />}
            />
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
            <Route exact path="/teacher/clubEvents" element={<TeacherHome />} />
            
            
            <Route
              exact
              path="/convenor/convenorEvent"
              element={<ConvenorEvent />}
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
            <Route
              exact
              path="/convenor/convenorEditEvent/:slug"
              element={<ConvenorEditEvent />}
            />
            <Route
              exact
              path="/convenor/clubRequests"
              element={<ConvenorRequests />}
            />
          </CustomSwitch>
        </Router>
      </UserProvider>
    </>
  );
}

export default App;
