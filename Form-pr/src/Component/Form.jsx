import React, { useState, useRef, useEffect } from "react";

const StyledFormPage = () => {
  // State for form data
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  // State for form errors
  const [errors, setErrors] = useState({});

  // Ref to focus the first input field
  const nameInputRef = useRef(null);

  // useEffect to focus on the name input when the page loads
  useEffect(() => {
    nameInputRef.current.focus();
  }, []);

  // Handle form data changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Form validation
  const validateForm = () => {
    let formErrors = {};
    if (!formData.name) formErrors.name = "Name is required.";
    if (!formData.email) formErrors.email = "Email is required.";
    if (!/\S+@\S+\.\S+/.test(formData.email)) formErrors.email = "Email is invalid.";
    if (!formData.password) formErrors.password = "Password is required.";
    if (formData.password.length < 6) formErrors.password = "Password must be at least 6 characters.";
    if (formData.password !== formData.confirmPassword) {
      formErrors.confirmPassword = "Passwords do not match.";
    }
    setErrors(formErrors);
    return Object.keys(formErrors).length === 0;
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      alert("Form submitted successfully!");
      console.log(formData); // You can send this data to your backend
    }
  };

  // State for button hover effect
  const [isButtonHovered, setButtonHovered] = useState(false);

  return (
    <div className="page-container">
      <div className="overlay-container">
        <h2 className="form-title">Create an Account</h2>

        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            placeholder="Name"
            value={formData.name}
            onChange={handleChange}
            ref={nameInputRef}
            className="input-field"
          />
          {errors.name && <p className="error-message">{errors.name}</p>}

          <input
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
            className="input-field"
          />
          {errors.email && <p className="error-message">{errors.email}</p>}

          <input
            type="password"
            name="password"
            placeholder="Password"
            value={formData.password}
            onChange={handleChange}
            className="input-field"
          />
          {errors.password && <p className="error-message">{errors.password}</p>}

          <input
            type="password"
            name="confirmPassword"
            placeholder="Confirm Password"
            value={formData.confirmPassword}
            onChange={handleChange}
            className="input-field"
          />
          {errors.confirmPassword && <p className="error-message">{errors.confirmPassword}</p>}

          <button
            type="submit"
            className={isButtonHovered ? "submit-button hover" : "submit-button"}
            onMouseEnter={() => setButtonHovered(true)}
            onMouseLeave={() => setButtonHovered(false)}
          >
            Sign Up
          </button>
        </form>
      </div>
    </div>
  );
};

export default StyledFormPage;
