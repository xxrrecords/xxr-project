import { useEffect, useState } from "react";
import { supabase } from "../../lib/supabaseClient";
import { FaPlus } from "react-icons/fa";

// Define type for your artist post from Supabase
type KS_Artists = {
  id: number;
  artistName: string;
  artistImage: string;
  artistProfession: string;
};

export default function PostList() {
  const [artists, setArtists] = useState<KS_Artists[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  // Pagination state
  const [currentSuggested, setCurrentSuggested] = useState(0);
  const cardsPerPage = 3;

  useEffect(() => {
    const fetchArtists = async () => {
      setLoading(true);
      const { data, error } = await supabase
        .from("KS_Artists")
        .select("id, artistName, artistImage, artistProfession")
        .order("id", { ascending: false });

      if (error) {
        setError(error.message);
      } else {
        setArtists(data || []);
      }
      setLoading(false);
    };

    fetchArtists();
  }, []);

  if (loading) return <p>Loading artists...</p>;
  if (error) return <p className="text-red-500">Error: {error}</p>;

  return (
    <div>
      <div className="flex space-x-6 overflow-hidden">
        {artists
          .slice(currentSuggested, currentSuggested + cardsPerPage)
          .map(({ id, artistImage, artistName, artistProfession }) => (
            <div
              key={id}
              className="bg-[#0e0e0e] rounded shadow overflow-hidden flex flex-col flex-shrink-0 w-60"
            >
              <img
                src={artistImage || "/fallback-image.jpg"}
                alt={artistName}
                className="w-full h-44 object-cover"
              />
              <div className="p-4 flex flex-col flex-grow text-white">
                <p className="font-semibold mb-2">{artistName}</p>
                <p className="font-semibold mb-2">{artistProfession}</p>
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
