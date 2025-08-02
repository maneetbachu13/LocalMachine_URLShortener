import React, { useState } from 'react';
import { logEvent } from '../middleware/logger';
import { shortenUrl } from '../services/api';

const URLForm = ({ onShorten }) => {
  const [originalUrl, setOriginalUrl] = useState('');
  const [customCode, setCustomCode] = useState('');
  const [validity, setValidity] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    logEvent('FORM_SUBMIT', { originalUrl, customCode, validity });

    const response = await shortenUrl(originalUrl, customCode, validity);
    if (response) {
      onShorten(response);
      logEvent('URL_SHORTENED', response);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input value={originalUrl} onChange={(e) => setOriginalUrl(e.target.value)} placeholder="Enter URL" required />
      <input value={customCode} onChange={(e) => setCustomCode(e.target.value)} placeholder="Custom shortcode (optional)" />
      <input value={validity} onChange={(e) => setValidity(e.target.value)} placeholder="Validity in minutes (default 30)" />
      <button type="submit">Shorten</button>
    </form>
  );
};

export default URLForm;
