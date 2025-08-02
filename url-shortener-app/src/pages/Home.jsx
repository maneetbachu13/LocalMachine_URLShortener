import React, { useState } from "react";
import { motion } from "framer-motion";

const Home = () => {
  const [originalUrl, setOriginalUrl] = useState("");
  const [shortUrl, setShortUrl] = useState(null);

  const handleShorten = () => {
    const id = Math.random().toString(36).substr(2, 6);
    const short = `http://localhost:3000/${id}`;

    const newUrl = {
      originalUrl,
      shortCode: id,
      expiry: 15,
    };

    const stored = JSON.parse(localStorage.getItem("shortenedUrls")) || [];
    const updated = [...stored, newUrl];
    localStorage.setItem("shortenedUrls", JSON.stringify(updated));
    setShortUrl(short);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-100 via-white to-green-100 flex items-center justify-center p-4">
      <motion.div
        className="w-full max-w-xl"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <div className="rounded-2xl shadow-lg bg-white p-8">
          <h1 className="text-3xl font-bold mb-6 text-center text-blue-800">
            🔗 React URL Shortener
          </h1>

          <div className="flex flex-col sm:flex-row gap-4 mb-6">
            <input
              type="text"
              placeholder="Paste your long URL here..."
              className="flex-1 border border-gray-300 rounded px-4 py-2"
              value={originalUrl}
              onChange={(e) => setOriginalUrl(e.target.value)}
            />
            <button
              onClick={handleShorten}
              className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 transition"
            >
              Shorten
            </button>
          </div>

          {shortUrl && (
            <div className="bg-green-50 text-green-800 p-4 rounded-md text-center font-semibold">
              ✅ Short URL:{" "}
              <a
                href={shortUrl}
                className="underline text-blue-600"
                target="_blank"
                rel="noreferrer"
              >
                {shortUrl}
              </a>
            </div>
          )}
        </div>
      </motion.div>
    </div>
  );
};

export default Home;
