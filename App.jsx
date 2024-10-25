import React, { useState } from "react";
import PersonalDetails from "./details/PersonalDetails";
import ParentDetail from "./details/ParentDetail";
import EducationalDetail from "./details/EducationalDetail";
import DocUpload from "./details/DocUpload";

const App = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    middleName: "",
    lastName: "",
    fullName: "",
    dob: "",
    fatherName: "",
    motherName: "",
    fatherEmail: "",
    motherEmail: "",
    fatherContact: "",
    motherContact: "",
    fileUpload: null,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleFileChange = (e) => {
    setFormData({ ...formData, fileUpload: e.target.files[0] });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <form onSubmit={handleSubmit}>
      <PersonalDetails formData={formData} handleChange={handleChange} />
      <ParentDetail formData={formData} handleChange={handleChange} />
      <EducationalDetail />
      <DocUpload handleFileChange={handleFileChange} />
      <button type="submit">Submit</button>
    </form>
  );
};

export default App;
