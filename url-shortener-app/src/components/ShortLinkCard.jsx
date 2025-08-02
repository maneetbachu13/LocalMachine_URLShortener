import React from 'react';

const ShortLinkCard = ({ url }) => (
  <div>
    <p><strong>Original:</strong> {url.originalUrl}</p>
    <p><strong>Short:</strong> http://localhost:3000/{url.shortCode}</p>
    <p><strong>Expires in:</strong> {url.expiry} min</p>
  </div>
);

export default ShortLinkCard;
