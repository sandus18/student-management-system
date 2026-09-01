function StudentTable({ students, onDelete }) {
  if (students.length === 0) {
    return <p className="text-muted">No students found. Add one to get started.</p>;
  }

  return (
    <table className="table table-striped table-bordered align-middle">
      <thead className="table-dark">
        <tr>
          <th>ID</th>
          <th>Name</th>
          <th>Age</th>
          <th>Course</th>
          <th>Email</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        {students.map((student) => (
          <tr key={student.id}>
            <td>{student.id}</td>
            <td>{student.name}</td>
            <td>{student.age}</td>
            <td>{student.course}</td>
            <td>{student.email}</td>
            <td>
              <button
                className="btn btn-sm btn-danger"
                onClick={() => onDelete(student.id)}
              >
                Delete
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default StudentTable;
