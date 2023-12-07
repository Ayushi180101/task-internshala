import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const FirstPage: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    phoneNumber: '',
    email: '',
  });

  const navigate = useNavigate();

  const handleFormSubmit = () => {
    // Save data to local storage
    localStorage.setItem('userDetails', JSON.stringify(formData));

    // Redirect to the second page
    navigate('/second-page');
  };

  return (
    <div>
      <h1>First Page</h1>
      <form onSubmit={handleFormSubmit}>
        {/* Implement your form inputs */}
      </form>
    </div>
  );
};

export default FirstPage;

