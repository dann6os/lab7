import React, { useEffect, useState } from "react";
import profileImg from "../assets/profilepic.jpeg";

const Home = () => {
  const [weather, setWeather] = useState(null);

  useEffect(() => {
    fetch("/api/weather")
      .then((res) => res.json())
      .then((data) => setWeather(data))
      .catch((err) => console.error("Error fetching weather:", err));
  }, []);

  return (
    <div className="home-container">
      <h1>Welcome to My Portfolio</h1>
      <p>My name is Danny and here is my portfolio page!</p>

      {weather ? (
        <div>
          <h3>🌧️ Weather in {weather.city}</h3>
          <p>Temperature: {weather.temperature}°C</p>
          <p>Humidity: {weather.humidity}%</p>
        </div>
      ) : (
        <p>Loading weather info...</p>
      )}

      <img 
        src={profileImg}
        alt="Danny's Profile Picture" 
        className="img-fluid rounded mt-3"
        style={{ maxWidth: "300px" }}
      />

      <p className="mt-3">This is me!</p>
    </div>
  );
};

export default Home;
