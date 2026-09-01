import { useState } from "react";

const initialState = { name: "", age: "", course: "", email: "" };

function StudentForm({ onAdd }) {
  const [formData, setFormData] = useState(initialState);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.age || !formData.course || !formData.email) {
      alert("Please fill in all fields.");
      return;
    }
    onAdd({ ...formData, age: Number(formData.age) });
    setFormData(initialState);
  };

  return (
    <form onSubmit={handleSubmit} className="card p-4 shadow-sm" style={{ maxWidth: "500px" }}>
      <div className="mb-3">
        <label className="form-label">Name</label>
        <input
          type="text"
          name="name"
          className="form-control"
          value={formData.name}
          onChange={handleChange}
        />
      </div>

      <div className="mb-3">
        <label className="form-label">Age</label>
        <input
          type="number"
          name="age"
          className="form-control"
          value={formData.age}
          onChange={handleChange}
        />
      </div>

      <div className="mb-3">
        <label className="form-label">Course</label>
        <input
          type="text"
          name="course"
          className="form-control"
          value={formData.course}
          onChange={handleChange}
        />
      </div>

      <div className="mb-3">
        <label className="form-label">Email</label>
        <input
          type="email"
          name="email"
          className="form-control"
          value={formData.email}
          onChange={handleChange}
        />
      </div>

      <button type="submit" className="btn btn-primary">
        Add Student
      </button>
    </form>
  );
}

export default StudentForm;
