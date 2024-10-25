import React from "react";

const DocUpload = ({ handleFileChange }) => {
  return (
    <div>
      <h3>Document Upload</h3>
      <label htmlFor="">Upload The Docs (Adhar ,PAN) :</label>
      <input
        type="file"
        name="fileUpload"
        onChange={handleFileChange}
        accept=".jpg , .png"
      />
    </div>
  );
};

export default DocUpload;
