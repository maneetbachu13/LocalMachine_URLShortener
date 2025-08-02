import { useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";

function Redirect() {
  const { shortCode } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    const stored = JSON.parse(localStorage.getItem("shortenedUrls")) || [];
    const match = stored.find((url) => url.shortCode === shortCode);

    if (match) {
      window.location.href = match.originalUrl;
    } else {
      navigate("/");
    }
  }, [shortCode, navigate]);

  return <p>Redirecting...</p>;
}

export default Redirect;
