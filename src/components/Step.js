import React from "react";

function Step({
  currentStep,
  formData,
  handleChange,
  nextStep,
  prevStep,
  handleSubmit,
}) {
  return (
    <form onSubmit={handleSubmit}>
      {/* Step 1 */}
      {currentStep === 1 && (
        <div>
          <h2>Step 1: Personal Information</h2>

          <input
            type="text"
            id="first_name"
            placeholder="First Name"
            value={formData.first_name}
            onChange={handleChange}
          />

          <input
            type="text"
            id="last_name"
            placeholder="Last Name"
            value={formData.last_name}
            onChange={handleChange}
          />
        </div>
      )}

      {/* Step 2 */}
      {currentStep === 2 && (
        <div>
          <h2>Step 2: Car Information</h2>

          <input
            type="text"
            id="model"
            placeholder="Car Model"
            value={formData.model}
            onChange={handleChange}
          />

          <input
            type="number"
            id="car_price"
            placeholder="Car Price"
            value={formData.car_price}
            onChange={handleChange}
          />
        </div>
      )}

      {/* Step 3 */}
      {currentStep === 3 && (
        <div>
          <h2>Step 3: Payment Information</h2>

          <input
            type="text"
            id="card_info"
            placeholder="Card Information"
            value={formData.card_info}
            onChange={handleChange}
          />

          <input
            type="date"
            id="expiry_date"
            value={formData.expiry_date}
            onChange={handleChange}
          />
        </div>
      )}

      {/* Navigation Buttons */}

      {currentStep > 1 && (
        <button type="button" onClick={prevStep}>
          Previous
        </button>
      )}

      {currentStep < 3 && (
        <button type="button" onClick={nextStep}>
          Next
        </button>
      )}

      {currentStep === 3 && <button type="submit">Submit</button>}
    </form>
  );
}

export default Step;
