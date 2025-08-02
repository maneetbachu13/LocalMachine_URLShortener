import { v4 as uuidv4 } from 'uuid';

export async function shortenUrl(originalUrl, customCode, validity) {
  const shortCode = customCode || uuidv4().slice(0, 6);
  const expiry = parseInt(validity) || 30;

  return {
    originalUrl,
    shortCode,
    expiry,
    createdAt: new Date().toISOString()
  };
}
