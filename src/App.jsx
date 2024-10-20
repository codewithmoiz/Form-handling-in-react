import React, { useState } from 'react';

const App = () => {

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const [submittedData, setSubmittedData] = useState(null);

  const submitHandler = (e) => {
    e.preventDefault();
    setSubmittedData(formData);
    console.log(formData);
  };

  const handleInputs = (e) => {
    const { id, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [id]: value,
    }));
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100">
      <form onSubmit={submitHandler} className="w-full max-w-lg bg-white p-6 rounded-lg shadow-lg mb-6">
        <h2 className="text-2xl font-bold mb-6 text-center">Form</h2>

        <div className="mb-4">
          <label className="block text-gray-700 font-bold mb-2" htmlFor="name">
            Name
          </label>
          <input
            onChange={handleInputs}
            className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:border-blue-500"
            type="text"
            id="name"
            placeholder="Enter your name"
            value={formData.name}
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 font-bold mb-2" htmlFor="email">
            Email
          </label>
          <input
            onChange={handleInputs}
            className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:border-blue-500"
            type="email"
            id="email"
            placeholder="Enter your email"
            value={formData.email}
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 font-bold mb-2" htmlFor="message">
            Message
          </label>
          <textarea
            onChange={handleInputs}
            className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:border-blue-500"
            id="message"
            rows="4"
            placeholder="Enter your message"
            value={formData.message}
          ></textarea>
        </div>

        <div className="text-center">
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg focus:outline-none focus:shadow-outline"
            type="submit"
          >
            Submit
          </button>
        </div>
      </form>

      {submittedData && (
        <div className="w-full max-w-lg bg-white p-6 rounded-lg shadow-lg mt-6">
          <h3 className="text-xl font-bold mb-4 text-center">Submitted Data</h3>
          <p><strong>Name:</strong> {submittedData.name}</p>
          <p><strong>Email:</strong> {submittedData.email}</p>
          <p><strong>Message:</strong> {submittedData.message}</p>
        </div>
      )}
    </div>
  );
};

export default App;
