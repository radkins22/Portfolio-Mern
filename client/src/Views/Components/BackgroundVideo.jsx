import React from 'react';
import backgroundVideo from "../../assets/animation/aiBG.mp4";

const BackgroundVideo = () => {
  return (
    <div className="absolute inset-0 w-full h-full overflow-hidden -z-10">
      {/* Background Video */}
      <video 
        src={backgroundVideo}
        autoPlay
        loop
        muted
        playsInline
        className="w-full h-full object-cover"
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/40" />
    </div>
  );
};

export default BackgroundVideo;
