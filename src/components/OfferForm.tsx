import React, { useState, forwardRef } from 'react';
import '../styles/OfferForm.css';
import { FaCheckCircle } from 'react-icons/fa'; // Success icon

const OfferForm = forwardRef<HTMLDivElement>((_, ref) => { // Use "_" to ignore the unused props
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    offer: '',
  });

  const [status, setStatus] = useState(''); // Form submission status

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Using FormData instead of JSON
    const formDataToSend = new FormData();
    formDataToSend.append('name', formData.name);
    formDataToSend.append('email', formData.email);
    formDataToSend.append('offer', formData.offer);

    const response = await fetch('https://formspree.io/f/xblrbpzq', {
      method: 'POST',
      body: formDataToSend,
      headers: {
        Accept: 'application/json',
      },
    });

    if (response.ok) {
      setStatus('success'); // Set status to success
      setFormData({ name: '', email: '', offer: '' }); // Clear form fields
    } else {
      setStatus('error'); // Set status to error
    }
  };

  return (
    <div className="form-container" ref={ref}>
      <form onSubmit={handleSubmit} className="offer-form">
        <h2 className="form-title">Send an Offer</h2>
        <h3>This is a portfolio project crafted on React + TypeScript by @jpcardozx.</h3>
        <h3>If you need help with any web development issues, submit this form and I'll reach out to you.</h3>
        <div className="form-group">
          <label htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="offer">Your Offer</label>
          <textarea
            id="offer"
            name="offer"
            rows={4}
            value={formData.offer}
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit" className="cta-btn primary-btn">
          Send Offer
        </button>
      </form>

      {/* Feedback message */}
      {status === 'success' && (
        <div className="success-message">
          <FaCheckCircle className="success-icon" /> Your offer has been successfully sent!
        </div>
      )}
      {status === 'error' && <p className="error-message">There was an error sending your offer. Please try again.</p>}
    </div>
  );
});

export default OfferForm;
