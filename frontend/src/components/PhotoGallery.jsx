import React, { useEffect, useState } from "react";

const PhotoGallery = () => {
  const images = [
    { id: 1, src: "/images/1.jpg", title: "YouTuber - Behind the Scenes" },
    { id: 2, src: "/images/2.jpg", title: "Pro Gamer with Gear" },
    { id: 3, src: "/images/3.jpg", title: "Content Creator Setup" },
    { id: 4, src: "/images/4.jpg", title: "Vlogger Travel Essentials" },
    { id: 5, src: "/images/5.jpg", title: "Photographer on the Move" },
    { id: 6, src: "/images/6.jpg", title: "Filmmaker's Choice" },
    { id: 7, src: "/images/7.jpg", title: "Influencer Lifestyle Shoot" },
    { id: 8, src: "/images/8.jpg", title: "Professional Streamer Gear" },
    { id: 9, src: "/images/9.jpg", title: "Creative Studio Setup" },
    { id: 10, src: "/images/10.jpg", title: "Popular Influencer Collab" },
    { id: 11, src: "/images/11.jpg", title: "Music Artist Recording Gear" },
    { id: 12, src: "/images/12.jpg", title: "Podcaster Essentials" },
    { id: 13, src: "/images/13.jpg", title: "Wedding Photographer Kit" },
    { id: 14, src: "/images/14.jpg", title: "Lifestyle Blogger Setup" },
    { id: 15, src: "/images/15.jpg", title: "Corporate Professional Shoot" },
    { id: 16, src: "/images/16.jpg", title: "Esports Champion Setup" },
    { id: 17, src: "/images/17.jpg", title: "Travel Vlogger Adventure" },
    { id: 18, src: "/images/18.jpg", title: "Fashion Influencer Gear" },
    { id: 19, src: "/images/19.jpg", title: "Tech Reviewer Setup" },
    { id: 20, src: "/images/20.jpg", title: "Creator Community Highlights" },
  ];

  const [startIndex, setStartIndex] = useState(0);
  const imagesPerPage = 6;

  // Auto-rotate every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setStartIndex((prevIndex) =>
        (prevIndex + imagesPerPage) % images.length
      );
    }, 4000);

    return () => clearInterval(interval);
  }, [images.length]);

  // Get 6 images, wrap if needed
  const currentImages = images.slice(
    startIndex,
    startIndex + imagesPerPage
  );

  const displayedImages =
    currentImages.length < imagesPerPage
      ? [
          ...currentImages,
          ...images.slice(0, imagesPerPage - currentImages.length),
        ]
      : currentImages;

  return (
    <div className="w-full px-6 md:px-20 py-16 bg-gray-100">
      <h2 className="text-4xl font-semibold text-center text-black font-['Playfair_Display'] mb-4 tracking-wide">
        Our Proud Customers
      </h2>
      <p className="text-center text-lg text-gray-600 max-w-3xl mx-auto mb-12 font-['Montserrat']">
        From <span className="font-semibold">YouTubers</span> and <span className="font-semibold">Gamers</span> 
        to <span className="font-semibold">Content Creators</span>, <span className="font-semibold">Professionals</span>, 
        and <span className="font-semibold">Influencers</span> — our community of creators trust us for premium 
        cameras, lenses, and bags that power their journeys.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 transition-all duration-700">
        {displayedImages.map((image) => (
          <div
            key={image.id}
            className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 flex flex-col"
          >
            <img
              src={image.src}
              alt={image.title}
              className="w-full h-[250px] md:h-[300px] object-cover transform hover:scale-105 transition-transform duration-500"
            />
            <h3 className="text-lg font-medium text-center text-gray-800 py-4 font-['Montserrat']">
              {image.title}
            </h3>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PhotoGallery;
