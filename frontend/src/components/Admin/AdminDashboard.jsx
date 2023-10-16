import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useParams,
} from "react-router-dom";
import Sidebar from "./Sidebar";
import AdminClub from "./AdminClub/AdminClub";
import AdminHome from "./AdminHome";
import AdminStudent from "./AdminStudent/AdminStudent";
import AdminTeacher from "./AdminTeacher/AdminTeacher";
import AdminTeacherAdd from "./AdminTeacher/AdminTeacherAdd";
import AdminStudentAdd from "./AdminStudent/AdminStudentAdd";
import AdminClubAdd from "./AdminClub/AdminClubAdd";
import AdminTeacherView from "./AdminTeacher/AdminTeacherView";
export default function AdminDashboard() {
  let slug = useParams();
  return (
    <>
      <Router>
        <div className="d-flex">
          <div>
            <Sidebar />
          </div>
          <div>
            <Routes>
              <Route exact path="/adminHome" element={<AdminHome />}></Route>

              <Route
                exact
                path="/adminTeacher"
                element={<AdminTeacher />}
              ></Route>

              <Route
                exact
                path="/adminTeacherAdd"
                element={<AdminTeacherAdd />}
              ></Route>

              <Route
                exact
                path="/adminTeacherView/:slug"
                element={<AdminTeacherView />}
              ></Route>

              <Route exact path="/adminClub" element={<AdminClub />}></Route>

              <Route
                exact
                path="/adminClubAdd"
                element={<AdminClubAdd />}
              ></Route>

              <Route
                exact
                path="/adminStudent"
                element={<AdminStudent />}
              ></Route>

              <Route
                exact
                path="/adminStudentAdd"
                element={<AdminStudentAdd />}
              ></Route>
            </Routes>
          </div>
        </div>
      </Router>
    </>
  );
}
