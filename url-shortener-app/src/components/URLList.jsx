import React from 'react';
import ShortLinkCard from './ShortLinkCard';

const URLList = ({ urls }) => (
  <div>
    {urls.map((url, index) => (
      <ShortLinkCard key={index} url={url} />
    ))}
  </div>
);

export default URLList;
