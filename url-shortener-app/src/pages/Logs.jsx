function Logs() {
  const stored = JSON.parse(localStorage.getItem("shortenedUrls")) || [];

  return (
    <div>
      <h2>Shortened URLs</h2>
      <ul>
        {stored.map((item, index) => (
          <li key={index}>
            <a href={`/${item.shortCode}`} target="_blank" rel="noreferrer">
              {window.location.origin}/{item.shortCode}
            </a>{" "}
            → {item.originalUrl}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Logs;
