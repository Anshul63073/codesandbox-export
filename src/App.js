import "./styles.css";

import React, { useState } from "react";

const StudentForm = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [age, setAge] = useState("");
  const [gender, setGender] = useState("");
  const [students, setStudents] = useState([]);

  const handleFirstNameChange = (e) => {
    setFirstName(e.target.value);
  };

  const handleLastNameChange = (e) => {
    setLastName(e.target.value);
  };

  const handleAgeChange = (e) => {
    setAge(e.target.value);
  };

  const handleGradeChange = (e) => {
    setGender(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Create a new student object
    const newStudent = {
      firstName: firstName,
      lastName: lastName,
      age: age,
      gender: gender
    };

    // Add the new student to the students array
    setStudents([...students, newStudent]);

    // Clear the form inputs
    setFirstName("");
    setLastName("");
    setAge("");
    setGender("");
  };

  return (
    <div className="container">
      <div>
        <h2>Student Form</h2>
        <form onSubmit={handleSubmit}>
          <div>
            <label>First Name:</label>
            <input
              type="text"
              value={firstName}
              onChange={handleFirstNameChange}
            />
          </div>
          <div>
            <label>Last Name:</label>
            <input
              type="text"
              value={lastName}
              onChange={handleLastNameChange}
            />
          </div>
          <div>
            <label>Age:</label>
            <input type="text" value={age} onChange={handleAgeChange} />
          </div>
          <div>
            <label>Gender:</label>
            <input type="text" value={gender} onChange={handleGradeChange} />
          </div>
          <button type="submit">Submit</button>
        </form>

        <h2>Student Information</h2>
        <table>
          <thead>
            <tr>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Age</th>
              <th>Gender</th>
            </tr>
          </thead>
          <tbody>
            {students.map((student, index) => (
              <tr key={index}>
                <td>{student.firstName}</td>
                <td>{student.lastName}</td>
                <td>{student.age}</td>
                <td>{student.gender}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default StudentForm;
