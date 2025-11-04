import React, { useState } from "react";
import "./gallery.css";

export default function Gallery() {
  const [selectedImage, setSelectedImage] = useState(null);

  const projects = [
    { before: "/bath.jpg", after: "/bath2.jpg", title: "Shower" },
    { before: "/bb.jpg", after: "/bb2.jpg", title: "Bathtub" },
    { before: "/c1.jpg", after: "/c2.jpg", title: "Counters" },
    { before: "/sink.jpg", after: "/sink2.jpg", title: "Kitchen" },
  ];

  return (
    <div className="gallery-container">
      <h2 className="big">Before & After Projects</h2>
      <div className="gallery-grid">
        {projects.map((p, i) => (
          <div key={i} className="gallery-item">
            <h2>{p.title}</h2>
            <div className="photo-pair">
              <div className="photo before">
                <img
                  src={p.before}
                  alt={`${p.title} before`}
                  onClick={() => setSelectedImage(p.before)}
                />
                <span>Before</span>
              </div>
              <div className="photo after">
                <img
                  src={p.after}
                  alt={`${p.title} after`}
                  onClick={() => setSelectedImage(p.after)}
                />
                <span>After</span>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Modal overlay */}
      {selectedImage && (
        <div className="modal" onClick={() => setSelectedImage(null)}>
          <img src={selectedImage} alt="enlarged project" className="modal-img" />
        </div>
      )}
    </div>
  );
}
