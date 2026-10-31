import React, { useState } from "react";
import Step from "./Step";

function App() {
  const [currentStep, setCurrentStep] = useState(1);

  const [formData, setFormData] = useState({
    first_name: "",
    last_name: "",
    model: "",
    car_price: "",
    card_info: "",
    expiry_date: "",
  });

  // Update form data
  const handleChange = (e) => {
    const { id, value } = e.target;

    setFormData((prevData) => ({
      ...prevData,
      [id]: value,
    }));
  };

  // Navigate to next step
  const nextStep = () => {
    setCurrentStep((prev) => prev + 1);
  };

  // Navigate to previous step
  const prevStep = () => {
    setCurrentStep((prev) => prev - 1);
  };

  // Submit form
  const handleSubmit = (e) => {
    e.preventDefault();

    console.log("Form Submitted:", formData);
    alert("Form submitted successfully!");
  };

  return (
    <div>
      <h1>Multi-Step Form</h1>

      <Step
        currentStep={currentStep}
        formData={formData}
        handleChange={handleChange}
        nextStep={nextStep}
        prevStep={prevStep}
        handleSubmit={handleSubmit}
      />
    </div>
  );
}

export default App;
