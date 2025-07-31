import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/home.css';
import img1 from '../assets/p1.jpg';
import img2 from '../assets/p2.jpg';
import img3 from '../assets/p3.png';
import Footer from '../components/footer';

function Home() {
  return (
    <div className="page-wrapper">
      <div className="home-container">
        <h1 className="home-title">
          Welcome to <span>ResuMaker</span>
        </h1>
        <p className="home-subtext">
          Build your modern resume instantly using our simple and elegant interface.
        </p>

        <div className="card-deck">
          <img src={img1} alt="Card 1" className="card-img card-left" />
          <img src={img2} alt="Card 2" className="card-img card-center" />
          <img src={img3} alt="Card 3" className="card-img card-right" />
        </div>

        <Link to="/resume" className="home-button">
          Start Building
        </Link>
      </div>

      {/* Footer placed outside the content container */}
      <Footer />
    </div>
  );
}

export default Home;
