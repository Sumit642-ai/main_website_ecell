import React, { useState } from 'react';
import '../styles/VideoSection.css';

const VideoSection = () => {
  const videos = [
    {
      id: 1,
      src: '/videos/v11.mp4',
      title: 'Event Highlights',
      gradient: 'linear-gradient(135deg, #EB5002 0%, #C10801 100%)',
    },
    {
      id: 2,
      src: '/videos/v22.mp4',
      title: 'Networking Events',
      gradient: 'linear-gradient(135deg, #EB5002 0%, #C10801 100%)',
    },
  ];

  const [selectedVideo, setSelectedVideo] = useState(null);

  return (
    <section className="video-section">
      <div className="video-section-container">
        {/* Section Header */}
        <div className="video-section-header">
          <h2 className="section-title">Video Gallery</h2>
          <p className="section-subtitle">
            Experience the energy and innovation of GES
          </p>
        </div>

        {/* Video Grid */}
        <div className="video-grid">
          {videos.map((video) => (
            <div
              key={video.id}
              className="video-card"
              onClick={() => setSelectedVideo(video)}
            >
              <div className="video-thumbnail-wrapper">
                <video
                  className="video-thumbnail"
                  preload="metadata"
                  onMouseEnter={(e) => e.target.play()}
                  onMouseLeave={(e) => {
                    e.target.pause();
                    e.target.currentTime = 0;
                  }}
                >
                  <source src={video.src} type="video/mp4" />
                </video>
                <div
                  className="video-overlay-gradient"
                  style={{ background: video.gradient }}
                />
                <div className="play-button">
                  <svg viewBox="0 0 24 24" fill="currentColor">
                    <path d="M8 5v14l11-7z" />
                  </svg>
                </div>
              </div>
              <h3 className="video-title">{video.title}</h3>
            </div>
          ))}
        </div>
      </div>

      {/* Modal for playing video */}
      {selectedVideo && (
        <div className="video-modal" onClick={() => setSelectedVideo(null)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button
              className="modal-close"
              onClick={() => setSelectedVideo(null)}
            >
              ✕
            </button>
            <div className="modal-video-wrapper">
              <video
                className="modal-video"
                controls
                autoPlay
                style={{ width: '100%', height: '100%' }}
              >
                <source src={selectedVideo.src} type="video/mp4" />
              </video>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default VideoSection;
