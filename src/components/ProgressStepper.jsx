import React, { useState } from 'react';

const steps = [
  { id: 1, label: 'Step 1' },
  { id: 2, label: 'Step 2' },
  { id: 3, label: 'Step 3' },
];

const ProgressStepper = () => {
  const [currentStep, setCurrentStep] = useState(1);

  const handleNext = () => {
    setCurrentStep(currentStep + 1);
  };

  const handlePrevious = () => {
    setCurrentStep(currentStep - 1);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log('Form submitted');
  };

  return (
    <div className="max-w-md mx-auto w-full">
      <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
        <div className="mb-4">
          <div className="text-xs uppercase font-bold text-gray-500 tracking-widest">
            Step {currentStep} of {steps.length}
          </div>
          <div className="flex items-center mt-1">
            {steps.map((step) => (
              <div
                key={step.id}
                className={`flex-1 ${
                  step.id === currentStep
                    ? 'text-blue-600 font-bold'
                    : 'text-gray-400'
                } text-center`}
              >
                {step.label}
              </div>
            ))}
          </div>
        </div>
        <form onSubmit={handleSubmit}>
          {currentStep === 1 && (
            <div>
              <label className="block text-gray-700 text-sm font-bold mb-2">
                First Name
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline mb-6"
                id="fname"
                type="text"
                placeholder="First Name"
                required
              />
              <label className="block text-gray-700 text-sm font-bold mb-2">
                Last Name
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline mb-6"
                id="lname"
                type="text"
                placeholder="Last Name"
                required
              />
              <label className="block text-gray-700 text-sm font-bold mb-2">
                Email
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline mb-6"
                id="email"
                type="email"
                placeholder="Enter your mail id"
                required
              />
              <label className="block text-gray-700 text-sm font-bold mb-2">
                Referrel ID
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline mb-6"
                id="fname"
                type="text"
                placeholder="KAR001"
              />
            </div>
          )}

          {currentStep === 2 && (
            <div>
              <label className="block text-gray-700 text-sm font-bold mb-2">
                Field 2
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="field2"
                type="text"
                placeholder="Field 2"
              />
            </div>
          )}

          {currentStep === 3 && (
            <div>
              <label className="block text-gray-700 text-sm font-bold mb-2">
                Field 3
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="field3"
                type="text"
                placeholder="Field 3"
              />
            </div>
          )}

          <div className="flex justify-between mt-4">
            {currentStep !== 1 && (
              <button
                type="button"
                className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                onClick={handlePrevious}
              >
                Previous
              </button>
            )}
            {currentStep < steps.length && (
              <button
                type="button"
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                onClick={handleNext}
              >
                Next
              </button>
            )}
            {currentStep === steps.length && (
              <button
                type="submit"
                className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              >
                Submit
              </button>
            )}
          </div>
        </form>
      </div>
    </div>
  );
};

export default ProgressStepper;
