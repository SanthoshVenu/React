import React from "react";
import ReactDOM from "react-dom";
import { restaurant_cards } from "./restaurant-cards";

const Header = () => {
  return (
    <div className="header">
      <div className="logo-container">
        <img
          className="logo"
          src="https://img.freepik.com/premium-vector/food-delivery-logo-design-template-restaurant-logo_556845-430.jpg"
        ></img>
      </div>
      <div className="nav-item">
        <ul>
          <li>Home</li>
          <li>About Us</li>
          <li>Contact Us</li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
  );
};

const ImageContainer = ({ imgData }) => {
  console.log(imgData);
  return (
    <div className="card">
      <img
        src={
          "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_288,h_360/" +
          imgData.imageId
        }
      ></img>
      <div>
        <ul>
          <li>{imgData.action.text}</li>
          <li>Food</li>
          <li>4* Rating</li>
          <li>30 Minutes ETA</li>
        </ul>
      </div>
    </div>
  );
};

const Cards = ({ cardData }) => {
  const { header, imageGridCards } = cardData;
  return (
    <div>
      <div className="header-title">
        <h1>{header.title}</h1>
      </div>
      <div className="card-container">
        {imageGridCards.info.map((imageData) => (
          <ImageContainer key={imageData.id} imgData={imageData} />
        ))}
      </div>
    </div>
  );
};

const Body = () => {
  return (
    <div className="body">
      <div className="search"></div>
      <Cards cardData={restaurant_cards[0].card.card} />
    </div>
  );
};

const App = () => {
  return (
    <div className="app">
      <Header />
      <Body />
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
