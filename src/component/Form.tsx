import React from "react";
import { useState } from "react";

interface Employee {
  id: number;
  name: string;
  salary: number;
  dob: string;
}

const Form = () => {
  const [id, setID] = useState(0);
  const [name, setName] = useState("");
  const [salary, setSalary] = useState(0);
  const [dob, setDob] = useState("");

  const onSubmit = async (e) => {
    e.preventDefault();

    let emp: Employee = {
      id: id,
      name: name,
      salary: salary,
      dob: dob,
    };
    console.log(emp);

    try {
      const res = await fetch("http://localhost:7000/employee", {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify(emp),
      });

      const data = await res.json();

      alert(" data added sucessfully !!!");

      console.log(data);

      setID(0);
      setName("");
      setSalary(0);
      setDob("");
      
    } catch (error) {
      alert("Error while adding employee.Please try again !!!");
      console.log(error);
    }
  };

  return (
    <form onSubmit={onSubmit}>
      <table>
        <tbody>
          <tr>
            <td className="cols">
              <h1 style={{ color: "IndianRed" }}>Employee Data</h1>
            </td>
          </tr>
          <tr></tr>
          <tr>
            <td className="cols">
              <label>Employee Id </label>
            </td>
            <td className="cols">
              <input
                type="number"
                name="id"
                required
                value={id == 0 ? "" : id}
                onChange={(e) => setID(e.target.value)}
              ></input>
            </td>
          </tr>
          <tr></tr>
          <tr>
            <td className="cols">
              <label>Employee Name </label>
            </td>
            <td className="cols">
              <input
                type="text"
                name="name"
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
              ></input>
            </td>
          </tr>
          <tr></tr>
          <tr>
            <td className="cols">
              <label>Employee Salary </label>
            </td>
            <td className="cols">
              <input
                type="number"
                name="salary"
                required
                value={salary == 0 ? "" : salary}
                onChange={(e) => setSalary(e.target.value)}
              ></input>
            </td>
          </tr>
          <tr></tr>
          <tr>
            <td className="cols">
              <label>Date of Birth </label>
            </td>
            <td className="cols">
              <input
                type="date"
                name="date"
                required
                value={dob}
                onChange={(e) => setDob(e.target.value)}
              ></input>
            </td>
          </tr>
          <tr></tr>
          <tr></tr>
          <tr className="cols-submit">
            <td className="cols">
              <input type="submit" value="Submit" />
            </td>
          </tr>
        </tbody>
      </table>
    </form>
  );
};

export default Form;
