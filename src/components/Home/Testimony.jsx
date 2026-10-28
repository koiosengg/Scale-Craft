import React, { useRef, useState, useEffect } from "react";
import video1 from "../../assets/Home/Testimony/1.mp4";
import video2 from "../../assets/Home/Testimony/2.mp4";
import video3 from "../../assets/Home/Testimony/3.mp4";
import video4 from "../../assets/Home/Testimony/4.mp4";

const reels = [
  {
    video: video1,
    brand: "Bagara Biryani Cafe",
    location: "Kolkata, India",
    handle: "@bagara.biryanicafe_kolkata",
  },
  {
    video: video2,
    brand: "The Mumbai Cafe",
    location: "Mumbai, India",
    handle: "@1966_themumbaicafe",
  },
  {
    video: video3,
    brand: "Tgf bakehousee",
    location: "Delhi, India",
    handle: "@tfg.bakehousee",
  },
  {
    video: video4,
    brand: "Khmer Kitchen",
    location: "Bengaluru, India",
    handle: "@khmerkitchen.in",
  },
];

function ReelCard({ reel, isActive, onClick }) {
  const videoRef = useRef(null);
  const [muted, setMuted] = useState(true);
  const [playing, setPlaying] = useState(false);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;
    if (isActive) {
      video.play().catch(() => {});
    } else {
      video.pause();
      video.currentTime = 0;
    }
  }, [isActive]);

  const toggleMute = (e) => {
    e.stopPropagation();
    setMuted((prev) => {
      if (videoRef.current) videoRef.current.muted = !prev;
      return !prev;
    });
  };

  const togglePlay = () => {
    if (!isActive) {
      onClick();
      return;
    }
    const video = videoRef.current;
    if (!video) return;
    if (video.paused) {
      video.play().catch(() => {});
    } else {
      video.pause();
    }
  };

  return (
    <div
      className={`reel-card ${isActive ? "reel-card--active" : ""}`}
      onClick={togglePlay}
    >
      {/* Gradient overlay */}
      <div className="reel-overlay" />

      {/* Video */}
      <video
        ref={videoRef}
        src={reel.video}
        className="reel-video"
        loop
        muted={muted}
        playsInline
        preload="metadata"
        onPlay={() => setPlaying(true)}
        onPause={() => setPlaying(false)}
      />

      {/* Play/Pause Icon */}
      {isActive && (
        <div
          className={`reel-play-icon ${!playing ? "reel-play-icon--visible" : ""}`}
        >
          <svg viewBox="0 0 24 24" fill="white" width="48" height="48">
            <path d="M8 5v14l11-7z" />
          </svg>
        </div>
      )}

      {/* Bottom info */}
      <div className="reel-info">
        <div className="reel-brand">{reel.brand}</div>
        <div className="reel-handle">{reel.handle}</div>
        <div className="reel-location">
          <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            width="13"
            height="13"
          >
            <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z" />
            <circle cx="12" cy="9" r="2.5" />
          </svg>
          {reel.location}
        </div>
      </div>

      {/* Mute toggle — only on active */}
      {isActive && (
        <button
          className="reel-mute-btn"
          onClick={toggleMute}
          aria-label={muted ? "Unmute" : "Mute"}
        >
          {muted ? (
            <svg viewBox="0 0 24 24" fill="white" width="18" height="18">
              <path d="M16.5 12A4.5 4.5 0 0 0 14 7.97V10.18L16.45 12.63C16.48 12.43 16.5 12.22 16.5 12ZM19 12C19 12.94 18.8 13.82 18.46 14.64L19.97 16.15C20.63 14.91 21 13.5 21 12C21 7.72 18.01 4.14 14 3.23V5.29C16.89 6.15 19 8.83 19 12ZM4.27 3L3 4.27L7.73 9H3V15H7L12 20V13.27L16.25 17.52C15.58 18.04 14.83 18.45 14 18.7V20.76C15.38 20.45 16.63 19.82 17.68 18.96L19.73 21L21 19.73L12 10.73L4.27 3ZM12 4L9.91 6.09L12 8.18V4Z" />
            </svg>
          ) : (
            <svg viewBox="0 0 24 24" fill="white" width="18" height="18">
              <path d="M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-1.02-3.29-2.5-4.03v8.05c1.48-.73 2.5-2.25 2.5-4.02zM14 3.23v2.06c2.89.86 5 3.54 5 6.71s-2.11 5.85-5 6.71v2.06c4.01-.91 7-4.49 7-8.77s-2.99-7.86-7-8.77z" />
            </svg>
          )}
        </button>
      )}
    </div>
  );
}

function Testimony() {
  const [activeIndex, setActiveIndex] = useState(1);

  return (
    <section className="home-reels-section">
      {/* Section heading — matches site-wide template-heading style */}
      <header className="template-heading home-reels-heading">
        <div className="template-heading-header">
          <hr />
          <p>Real Results. Real Brands.</p>
        </div>
        <h2>Hear It From The Ground Up</h2>
      </header>

      {/* Reel slider */}
      <div className="home-reels-track">
        {reels.map((reel, i) => (
          <ReelCard
            key={i}
            reel={reel}
            isActive={activeIndex === i}
            onClick={() => setActiveIndex(i)}
          />
        ))}
      </div>

      {/* Dot navigation */}
      <div className="home-reels-dots">
        {reels.map((_, i) => (
          <button
            key={i}
            className={`reel-dot ${activeIndex === i ? "reel-dot--active" : ""}`}
            onClick={() => setActiveIndex(i)}
            aria-label={`Go to reel ${i + 1}`}
          />
        ))}
      </div>
    </section>
  );
}

export default Testimony;
