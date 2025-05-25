import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Release from './releases';

type Release = {
  id: number;
  title: string;
  artistname: string;
  genre: string;
  cover_image: string;
};

type Props = {
  title: string;
  endpoint: string;
};

export default function ReleasesSection({ title, endpoint }: Props) {
  const [releases, setReleases] = useState<Release[]>([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetch(endpoint)
      .then(res => res.json())
      .then(setReleases)
      .catch(err => console.error(`${title} fetch error:`, err));
  }, [endpoint]);

  const handleViewTrack = (id: number) => navigate(`/track/${id}`);
  const handleViewAll = () => navigate('/releases');

  return (
    <div className="max-w-6xl mx-auto px-4 py-10 text-left">
      <div className="text-[15px] font-bold text-gray-200 bg-[#2c2c2c] rounded-[10px] p-[10px] mb-6">
        <div className="flex justify-between items-center">
          <span>{title}</span>
          <span className="text-[12px] text-gray-300">
            <span
              onClick={handleViewAll}
              className="cursor-pointer text-white hover:text-gray-500 mr-[10px]"
              aria-label="View all releases"
            >
              View More
              <i className="fas fa-arrow-right ml-[5px] text-white" aria-hidden="true"></i>
            </span>
          </span>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
        {releases.map((release) => (
          <Release key={release.id} {...release} onClick={handleViewTrack} />
        ))}
      </div>
    </div>
  );
}
