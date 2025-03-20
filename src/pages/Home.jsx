import React from "react";
import profileImg from "../assets/profilepic.jpeg";

const Home = () => {
  return (
    <div className="home-container">
      <h1>Welcome to My Portfolio</h1>
      <p>My name is Danny and here is my portfolio page!</p>

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
