import React from 'react'
import { Link } from 'react-router-dom'

function Landing() {
  return (
    <div className="container">

      
      <div className="row align-items-center py-5">

        {/* content */}
        <div className="col-md-7 text-center text-md-start">

          <h1 className="display-5 fw-bold">
            Student Management
            <br />
            <span className="text-primary">Made Simple</span>
          </h1>

          <p className="lead text-muted mt-3">
            Easily manage student records, add new students,
            and keep all your information organized in one place.
          </p>

          <div className="mt-4">
            <Link
              to="/students"
              className="btn btn-dark btn-lg me-2"
            >
              View Students
            </Link>

            <Link
              to="/add"
              className="btn btn-primary btn-lg"
            >
              Add Student
            </Link>
          </div>

        </div>

        {/* image */}
        <div className="col-md-5 text-center mt-5 mt-md-0">

          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRe8nxth7NGX-ef-0XPdqFGfzhXHOyX5OwggeDHs6pkenzQKZJ-tltss-Fp&s=10"
            alt="Student Management"
            className="img-fluid rounded-4 shadow"
          />

        </div>

      </div>

    </div>
  )
}

export default Landing