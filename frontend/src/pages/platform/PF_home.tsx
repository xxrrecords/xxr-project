import GalleryBanner from "../../components/platform/GalleryBanner";
import LatestPosts from "../../components/platform/LatestPosts";
import CreatePostForm from "../../components/platform/CreatePostForm";
import SuggestedCarousel from "../../components/platform/SuggestedCarousel";

import ProfileImage from "../../assets/ProfileImage.png";
import CardImage1 from "../../assets/ProfileImage.png";
import CardImage2 from "../../assets/ProfileImage/LadyGaga.jpg";
import CardImage3 from "../../assets/ProfileImage/OliviaRodrigo.jpg";
import CardImage4 from "../../assets/ProfileImage/OliviaRodrigo.jpg";
import Gallery1 from "../../assets/gallery/image4.jpg";
import Gallery2 from "../../assets/gallery/image5.jpg";
import Gallery3 from "../../assets/gallery/image6.jpg";

const galleryItems = [
  {
    image: Gallery1,
    title: "Hard Techno",
    description: "Discover amazing visuals and curated collections right here.",
    meta: "100 Songs, 8 Hours 45 minutes.",
  },
  {
    image: Gallery2,
    title: "Deep House",
    description: "Vibe with smooth beats and mellow rhythms.",
    meta: "80 Songs, 6 Hours 12 minutes.",
  },
  {
    image: Gallery3,
    title: "Lo-fi Chill",
    description: "Relax, study, or work with chill background music.",
    meta: "120 Songs, 10 Hours 5 minutes.",
  },
];

const suggestedCards = [
  { id: 1, image: CardImage1, name: "DJ Alex" },
  { id: 2, image: CardImage2, name: "Lady Gaga" },
  { id: 3, image: CardImage3, name: "Olivia Rodrigo" },
  { id: 4, image: CardImage4, name: "Olivia Rodrigo" },
];

export default function PF_home() {
  return (
    <>
      <GalleryBanner galleryItems={galleryItems} />
      <div className="w-full h-screen p-4 flex gap-4">
        <LatestPosts />
        <div className="w-2/5 p-4 rounded shadow flex flex-col">
          <CreatePostForm profileImage={ProfileImage} />
          <SuggestedCarousel suggestedCards={suggestedCards} />
        </div>
      </div>
    </>
  );
}
