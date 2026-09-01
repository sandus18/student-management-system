import { useEffect, useState } from "react";
import StudentTable from "../components/StudentTable";
import { getStudents, deleteStudent } from "../api/studentApi";

function Home() {
  const [students, setStudents] = useState([]);

  // Get students from JSON Server
  useEffect(() => {
    getStudents().then((data) => {
      setStudents(data);
    });
  }, []);

  // Delete student
  const handleDelete = async (id) => {
    if (!window.confirm("Delete this student?")) return;

    await deleteStudent(id);

    setStudents((prev) =>
      prev.filter((student) => student.id !== id)
    );
  };

  return (
    <div className="container py-4">
      <h2 className="mb-4">Student List</h2>

      <StudentTable
        students={students}
        onDelete={handleDelete}
      />
    </div>
  );
}

export default Home;