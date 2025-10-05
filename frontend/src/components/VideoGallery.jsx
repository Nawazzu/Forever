import React from 'react';

const videos = [
  { id: 1, src: '/videos/1.mp4', title: 'Luxury Fashion Walk' },
  { id: 2, src: '/videos/2.mp4', title: 'Premium Collection' },
  { id: 3, src: '/videos/3.mp4', title: 'Elegant Showreel' },
  { id: 4, src: '/videos/4.mp4', title: 'Timeless Styles' },
];

const VideoGallery = () => {
  return (
    <div className="w-full px-6 md:px-20 py-16 bg-gray-100">
      <h2 className="text-4xl font-semibold text-center text-black font-['Playfair_Display'] mb-12 tracking-wide">
        Fashion Films
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {videos.map((video) => (
          <div
            key={video.id}
            className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 flex flex-col"
          >
            <video
              className="w-full h-[300px] md:h-[500px] object-cover border-b border-gray-200"
              autoPlay
              muted
              loop
              playsInline
              preload="metadata"
            >
              <source src={video.src} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
            <h3 className="text-lg font-medium text-center text-gray-800 py-4 font-['Montserrat']">
              {video.title}
            </h3>
          </div>
        ))}
      </div>
    </div>
  );
};

export default VideoGallery;
