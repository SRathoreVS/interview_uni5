import React from "react";

const ParentDetail = ({ formData, handleChange }) => {
  return (
    <div>
      <h2>Parent Detail</h2>

      <h4>Father's Detail</h4>
      <label htmlFor="">Father's Name</label>
      <input
        type="text"
        name="fatherName"
        value={formData.fatherName}
        onChange={handleChange}
      />

      <label htmlFor="">Father's Email</label>
      <input
        type="email"
        name="fatherEmail"
        value={formData.fatherEmail}
        onChange={handleChange}
      />

      <label htmlFor="">Father's Contact:</label>
      <input
        type="tel"
        name="fatherContact"
        value={formData.fatherContact}
        onChange={handleChange}
      />

      <h4>Mother's Detail</h4>
      <label htmlFor="">Mother's Name</label>
      <input
        type="text"
        name="motherName"
        value={formData.motherName}
        onChange={handleChange}
      />

      <label htmlFor="">Mother's Email</label>
      <input
        type="email"
        name="motherEmail"
        value={formData.motherEmail}
        onChange={handleChange}
      />

      <label htmlFor="">Mother's Contact:</label>
      <input
        type="tel"
        name="motherContact"
        value={formData.motherContact}
        onChange={handleChange}
      />
    </div>
  );
};

export default ParentDetail;
