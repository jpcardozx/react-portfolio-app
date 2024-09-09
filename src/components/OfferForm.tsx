import React, { useState } from 'react';
import '../styles/OfferForm.css';
import { FaCheckCircle } from 'react-icons/fa'; // Ícone de sucesso

const OfferForm: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    offer: '',
  });

  const [status, setStatus] = useState(''); // Status de envio

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Usando FormData ao invés de JSON
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
      setStatus('success'); // Definindo status para sucesso
      setFormData({ name: '', email: '', offer: '' }); // Limpando o formulário
    } else {
      setStatus('error'); // Definindo status para erro
    }
  };

  return (
    <div className="form-container">
      <form onSubmit={handleSubmit} className="offer-form">
        <h2 className="form-title">Send an Offer</h2>
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

      {/* Mensagem de feedback visual */}
      {status === 'success' && (
        <div className="success-message">
          <FaCheckCircle className="success-icon" /> Your offer has been successfully sent!
        </div>
      )}
      {status === 'error' && <p className="error-message">There was an error sending your offer. Please try again.</p>}
    </div>
  );
};

export default OfferForm;
