type Props = {
  id: number;
  cover_image: string;
  title: string;
  artistname: string;
  genre: string;
  onClick: (id: number) => void;
};

export default function ReleaseCard({ id, artistname, title, cover_image, genre, onClick }: Props) {
  return (
    <div className="relative bg-[#2c2c2c] rounded-md shadow-lg p-2">
      <div onClick={() => onClick(id)} className="cursor-pointer w-full" aria-label={`View ${title}`}>
        <img src={cover_image} alt={title} className="w-full h-auto object-cover rounded-md mb-4" />
      </div>
      <div className="text-left mb-6">
        <p className="font-bold text-lg text-white mb-1">{title}</p>
        <p className="text-md text-gray-300">{artistname}</p>
        <p className="text-md text-gray-300">{genre}</p>
      </div>
    </div>
  );
}
