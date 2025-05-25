import { useState } from "react";
import { FaChevronLeft, FaChevronRight, FaPlus } from "react-icons/fa";

import CardImage1 from "../../assets/ProfileImage.png";
import CardImage2 from "../../assets/ProfileImage/LadyGaga.jpg";
import CardImage3 from "../../assets/ProfileImage/OliviaRodrigo.jpg";
import CardImage4 from "../../assets/ProfileImage/OliviaRodrigo.jpg";

type SuggestedCard = {
  id: number;
  image: string;
  name: string;
  title: string;
};

const suggestedCards: SuggestedCard[] = [
  { id: 1, image: CardImage1, name: "DJ Alex", title: "DJ & Producer"},
  { id: 2, image: CardImage2, name: "Lady Gaga", title: "Singer" },
  { id: 3, image: CardImage3, name: "Olivia Rodrigo", title: "Singer" },
  { id: 4, image: CardImage4, name: "Olivia Rodrigo", title: "Singer" },
];

export default function SuggestedCarousel() {
  const [currentSuggested, setCurrentSuggested] = useState(0);
  const cardsPerPage = 3;
  const maxSuggestedIndex = Math.max(0, suggestedCards.length - cardsPerPage);

  function handleSuggestedPrev() {
    setCurrentSuggested((prev) =>
      prev <= 0 ? maxSuggestedIndex : prev - 1
    );
  }
  function handleSuggestedNext() {
    setCurrentSuggested((prev) =>
      prev >= maxSuggestedIndex ? 0 : prev + 1
    );
  }

  return (
    <div className="w-full mt-4">
      <div className="flex items-center justify-between mb-4 px-1">
        <h2 className="text-gray-300 font-bold text-lg">Suggested for You</h2>
        <div className="flex space-x-2">
          <button
            onClick={handleSuggestedPrev}
            className="p-2 rounded bg-[#0e0e0e] hover:bg-pink-600 transition text-gray-300 hover:text-white"
            aria-label="Previous"
          >
            <FaChevronLeft />
          </button>
          <button
            onClick={handleSuggestedNext}
            className="p-2 rounded bg-[#0e0e0e] hover:bg-pink-600 transition text-gray-300 hover:text-white"
            aria-label="Next"
          >
            <FaChevronRight />
          </button>
        </div>
      </div>

      <div className="flex space-x-6 overflow-hidden">
        {suggestedCards
          .slice(currentSuggested, currentSuggested + cardsPerPage)
          .map(({ id, image, name, title }: SuggestedCard) => (
            <div
              key={id}
              className="bg-[#0e0e0e] rounded shadow overflow-hidden flex flex-col flex-shrink-0 w-60"
            >
              <img src={image} alt={name} className="w-full h-44 object-cover" />
              <div className="p-4 flex flex-col flex-grow">
                <p className="text-gray-200 font-semibold mb-2">{name}</p>
                <p className="text-gray-200 font-semibold mb-2">{title}</p>
                <button className="bg-pink-600 text-white rounded px-4 py-2 hover:bg-pink-700 transition flex items-center justify-center gap-2">
                  <FaPlus /> Follow
                </button>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
}
