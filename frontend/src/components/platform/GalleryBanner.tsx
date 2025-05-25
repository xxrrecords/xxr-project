import { useState, useEffect } from "react";

type GalleryItem = {
  image: string;
  title: string;
  description: string;
  meta: string;
};

type GalleryBannerProps = {
  galleryItems: GalleryItem[];
};

export default function GalleryBanner({ galleryItems }: GalleryBannerProps) {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % galleryItems.length);
    }, 7000);
    return () => clearInterval(interval);
  }, [galleryItems.length]);

  const { image, title, description, meta } = galleryItems[current];

  return (
    <div className="w-full relative h-[350px]">
      <img src={image} alt={title} className="w-full h-full object-cover" />
      <div className="absolute inset-0 flex items-center pl-10 bg-black/30">
        <div className="text-white max-w-md">
          <span className="text-md border-b-2 p-1 mb-2 inline-block">
            Top Playlists
          </span>
          <h1 className="text-3xl font-bold mt-2 mb-1">{title}</h1>
          <p className="text-md mb-1">{description}</p>
          <p className="text-md mb-4">{meta}</p>
          <button className="rounded-3xl hover:bg-pink-600 focus:outline-none focus:ring-0 text-white py-2 px-4">
            Play Now
          </button>
        </div>
      </div>
      <div className="absolute bottom-10 left-16 flex space-x-2">
        {galleryItems.map((_: GalleryItem, idx: number) => (
          <span
            key={idx}
            className={`w-2 h-2 rounded-full ${
              current === idx ? "bg-white" : "bg-white/50"
            }`}
          />
        ))}
      </div>
    </div>
  );
}
