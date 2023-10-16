import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
export default function AdminTeacherView() {
  let slug = useParams();
  const [teacher, setTeacher] = useState({});
  let response;
  const load_data = async () => {
    response = await axios.get("http://localhost:8080/api/admin/");
  };
  response = response.data;
  if (!response.success) {
    alert(response.message);
  } else {
    setTeacher(response.data);
  }
  useEffect(() => {
    load_data();
  }, []);
  return <></>;
}
