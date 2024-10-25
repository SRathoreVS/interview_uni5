import React, { useState } from "react";

const EducationalDetail = () => {
  const [educationList, setEducationList] = useState([
    {
      institute: "",
      passingYear: "",
      score: "",
      fileUpload: null,
    },
  ]);

  // Handle input change for educational details
  const handleEducationChange = (index, event) => {
    const { name, value } = event.target;
    const updatedList = [...educationList];
    updatedList[index][name] = value;
    setEducationList(updatedList);
  };

  // Handle file upload change
  const handleFileChange = (index, event) => {
    const updatedList = [...educationList];
    updatedList[index].fileUpload = event.target.files[0];
    setEducationList(updatedList);
  };

  // Add a new educational entry, auto incrementing the passing year
  const addEducation = () => {
    const lastEducation = educationList[educationList.length - 1];
    const newPassingYear = lastEducation.passingYear
      ? parseInt(lastEducation.passingYear) + 1
      : "";

    setEducationList([
      ...educationList,
      {
        institute: "",
        passingYear: newPassingYear || "",
        score: "",
        fileUpload: null,
      },
    ]);
  };

  // Submit the form
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(educationList);
  };

  return (
    <div>
      <h3>Educational Details</h3>
      <form onSubmit={handleSubmit}>
        {educationList.map((education, index) => (
          <div key={index}>
            <label>Institute Name:</label>
            <input
              type="text"
              name="institute"
              value={education.institute}
              onChange={(e) => handleEducationChange(index, e)}
            />

            <label>Year of Passing:</label>
            <input
              type="number"
              name="passingYear"
              value={education.passingYear}
              onChange={(e) => handleEducationChange(index, e)}
            />

            <label>Score:</label>
            <input
              type="text"
              name="score"
              value={education.score}
              onChange={(e) => handleEducationChange(index, e)}
            />

            <label>Upload Result Document:</label>
            <input
              type="file"
              name="fileUpload"
              onChange={(e) => handleFileChange(index, e)}
              accept=".pdf"
            />

            <br />
          </div>
        ))}
        <button type="button" onClick={addEducation}>
          Add More Education
        </button>

        <br />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default EducationalDetail;
