import { useEffect, useState } from "react";

export default function Slider() {
  const [campaigns, setCampaigns] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  
  useEffect(() => {
    const fetchCampaigns = async () => {
      try {
        const response = await fetch("https://test.mybrands.az/api/v1/campaigns", {
          headers: {
            "Accept": "application/json",
          },
        });
        const data = await response.json();
        setCampaigns(data);
      } catch (error) {
        console.error("Error fetching campaigns data:", error);
      }
    };

    fetchCampaigns();
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === campaigns.length - 1 ? 0 : prevIndex + 1
      );
    }, 2000);

    return () => clearInterval(interval);
  }, [campaigns]);

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === campaigns.length - 1 ? 0 : prevIndex + 1
    );
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? campaigns.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="slider">
      {campaigns.length > 0 && (
        <div className="slider-image">
          <button onClick={handlePrev} className="arrow-button left-arrow">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-arrow-left" viewBox="0 0 16 16">
              <path fillRule="evenodd" d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8"/>
            </svg>
          </button>
          <img src={campaigns[currentIndex].cover_photo_az} alt={campaigns[currentIndex].title_az} />
          <button onClick={handleNext} className="arrow-button right-arrow">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-arrow-right" viewBox="0 0 16 16">
              <path fillRule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8"/>
            </svg>
          </button>
        </div>
      )}
    </div>
  );
}
