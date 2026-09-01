import { useNavigate } from "react-router-dom";
import StudentForm from "../components/StudentForm";
import { addStudent, getStudents } from "../api/studentApi";

function AddStudent() {
  const navigate = useNavigate();

  const handleAdd = async (student) => {
    try {
      const students = await getStudents();

      const id =
        students.length > 0
          ? Math.max(...students.map((s) => Number(s.id))) + 1
          : 1;

      await addStudent({
        ...student,
        id: id
      });

      navigate("/students");
    } catch (err) {
      alert("Could not add student");
    }
  };

  return (
    <div className="container">
      <h2 className="mb-4">Add New Student</h2>
      <StudentForm onAdd={handleAdd} />
    </div>
  );
}

export default AddStudent;