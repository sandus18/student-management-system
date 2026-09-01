import axios from "axios";

const BASE_URL = "http://localhost:5000/students";

// GET  all students
export async function getStudents() {
  const res = await axios.get(BASE_URL);
  return res.data;
}

// POST a new student
export async function addStudent(student) {
  const res = await axios.post(BASE_URL, student);
  return res.data;
}

// DELETE a student by id
export async function deleteStudent(id) {
  const res = await axios.delete(`${BASE_URL}/${id}`);
  return res.data;
}