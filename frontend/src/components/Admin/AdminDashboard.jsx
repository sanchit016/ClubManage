import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useParams,
} from "react-router-dom";
import Sidebar from "./Sidebar";
import AdminHome from "./AdminHome";
import AdminClub from "./AdminClub/AdminClub";
import AdminClubAdd from "./AdminClub/AdminClubAdd";
import AdminClubEdit from "./AdminClub/AdminClubEdit";
import AdminStudent from "./AdminStudent/AdminStudent";
import AdminStudentAdd from "./AdminStudent/AdminStudentAdd";
import AdminStudentView from "./AdminStudent/AdminStudentView";
import AdminStudentEdit from "./AdminStudent/AdminStudentEdit";
import AdminTeacher from "./AdminTeacher/AdminTeacher";
import AdminTeacherAdd from "./AdminTeacher/AdminTeacherAdd";
import AdminTeacherView from "./AdminTeacher/AdminTeacherView";
import AdminTeacherEdit from "./AdminTeacher/AdminTeacherEdit";

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
              <Route
                exact
                path="/adminDashboard"
                element={<AdminHome />}
              ></Route>

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
              <Route
                exact
                path="/adminTeacherEdit/:slug"
                element={<AdminTeacherEdit />}
              ></Route>
              <Route exact path="/adminClub" element={<AdminClub />}></Route>

              <Route
                exact
                path="/adminClubAdd"
                element={<AdminClubAdd />}
              ></Route>
              <Route
                exact
                path="/adminClubEdit/:slug"
                element={<AdminClubEdit />}
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
              <Route
                exact
                path="/adminStudentView/:slug"
                element={<AdminStudentView />}
              ></Route>
              <Route
                exact
                path="/adminStudentEdit/:slug"
                element={<AdminStudentEdit />}
              ></Route>
            </Routes>
          </div>
        </div>
      </Router>
    </>
  );
}
