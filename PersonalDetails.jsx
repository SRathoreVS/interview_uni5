import React, { useState } from "react";

const PersonalDetails = ({ formData, setFormData, handleChange }) => {
  const [age, setAge] = useState("");
  const [fullName, setFullName] = useState("");

  // Calculate age based on DOB
  const calculateAge = (dob) => {
    const birthDate = new Date(dob);
    const difference = Date.now() - birthDate.getTime();
    const ageDate = new Date(difference);
    const calculatedAge = Math.abs(ageDate.getUTCFullYear() - 1970);
    setAge(calculatedAge);
  };

  // Handle DOB change and calculate age
  const handleDobChange = (e) => {
    handleChange(e);
    calculateAge(e.target.value);
  };

  // Update the full name dynamically
  const handleFullName = () => {
    setFormData((prevData) => ({
      ...prevData,
      fullName: `${prevData.firstName} ${prevData.middleName} ${prevData.lastName}`,
    }));
    setFullName(
      `${formData.firstName} ${formData.middleName} ${formData.lastName}`
    );
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    handleFullName();
  };

  return (
    <div>
      <h3>Personal Details</h3>
      <form onSubmit={handleSubmit}>
        <label htmlFor="">First Name :</label>
        <input
          type="text"
          name="firstName"
          value={formData.firstName}
          onChange={handleChange}
        />

        <label htmlFor="">Middle Name :</label>
        <input
          type="text"
          name="middleName"
          value={formData.middleName}
          onChange={handleChange}
        />

        <label htmlFor="">Last Name :</label>
        <input
          type="text"
          name="lastName"
          value={formData.lastName}
          onChange={handleChange}
        />

        <label htmlFor="">Full Name :</label>
        <input type="text" name="fullName" value={formData.fullName} readOnly />

        <label htmlFor="">Date of Birth :</label>
        <input
          type="date"
          name="dob"
          value={formData.dob}
          onChange={handleDobChange}
        />

        <label htmlFor="">Age - Auto Calc</label>
        <input type="text" name="age" value={age} readOnly />

        <input type="submit" value="Submit" />
      </form>
    </div>
  );
};

export default PersonalDetails;
