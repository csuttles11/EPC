import React from "react";
import "./App.css";

export default function Services() {
  return (
    <div className="home-container">
      
    <p className="IP title">Interior Painting</p>
    <ul className="IP animate__animated animate__fadeInDown">
    <li>Walls, ceilings, trim, and doors</li>
    <li>Accent walls and custom finishes</li>
    <li>Low-VOC and eco-friendly paint options</li>
    </ul>

    <div>
  <p className="IP title">Exterior Painting</p>
    <ul className="IP animate__animated animate__fadeInDown animate__delay-1s">
    <li>Siding, brick, stucco, and wood</li>
    <li>Deck and fence staining</li>
    <li>Weather-resistant coatings</li>
    </ul>
    </div>

    <p className="IP title">Specialty Services</p>
    <ul className="IP animate__animated animate__fadeInDown animate__delay-2s">
    <li>Cabinet painting and refinishing</li>
    <li>Wallpaper removal</li>
    <li>Drywall patching and repair</li>
    <li>Kitchen/Bath Tile work</li>
    <li>Carpentry</li>
    </ul>

    </div>
  )

}


