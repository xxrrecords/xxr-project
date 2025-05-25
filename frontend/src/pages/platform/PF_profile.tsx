import React, { useState, useRef, useEffect } from "react";
import { FiCheckCircle } from "react-icons/fi";
import { FaPlay, FaPause } from "react-icons/fa";

import profileImage from "../../assets/ProfileImage.png";
import bgImage from "../../assets/ProfileImage/bg_profile1.png";

import sexyTrack from "../../assets/music/SexyAndIKnowIt.mp3";
import saxobeatTrack from "../../assets/music/MrSaxobeat.mp3";

// Define Track type
type Track = {
  id: number;
  title: string;
  artist: string;
  length: string;
  src: string;
};

const tracks: Track[] = [
  { id: 1, title: "Sexy And I Know It", artist: "LMFO", length: "3:45", src: sexyTrack },
  { id: 2, title: "Mr. Saxobeat", artist: "MR X", length: "4:12", src: saxobeatTrack },
];

// Define props for TrackPlayer
type TrackPlayerProps = {
  track: Track;
  isPlaying: boolean;
  onPlay: (id: number) => void;
  onPause: () => void;
};

function TrackPlayer({ track, isPlaying, onPlay, onPause }: TrackPlayerProps) {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    const updateProgress = () => {
      if (audio.duration) {
        setProgress((audio.currentTime / audio.duration) * 100);
      }
    };

    audio.addEventListener("timeupdate", updateProgress);
    audio.addEventListener("ended", onPause);
    return () => {
      audio.removeEventListener("timeupdate", updateProgress);
      audio.removeEventListener("ended", onPause);
    };
  }, [onPause]);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    if (isPlaying) {
      audio.play();
    } else {
      audio.pause();
      setProgress(0);
    }
  }, [isPlaying]);

  return (
    <div className="flex items-center space-x-4 h-[60px] bg-[#0d1217] rounded-2xl p-4 mb-2">
      <button
        onClick={() => {
          if (isPlaying) {
            onPause();
          } else {
            onPlay(track.id);
          }
        }}
        className="text-white rounded-full w-10 h-10 flex items-center justify-center bg-gray-800 hover:bg-gray-700"
        aria-label={isPlaying ? "Pause" : "Play"}
      >
        {isPlaying ? <FaPause size={16} /> : <FaPlay size={16} />}
      </button>

      <div className="flex-1">
        <div className="text-gray-200 font-medium">{track.title} ({track.artist})</div>
        <div className="w-full h-1 bg-gray-500 rounded mt-1">
          <div
            className="h-1 bg-pink-500 rounded"
            style={{ width: `${progress}%` }}
          />
        </div>
      </div>

      <div className="text-gray-400 text-sm w-12 text-right">{track.length}</div>

      <audio ref={audioRef} src={track.src} preload="metadata" />
    </div>
  );
}

export default function Profile() {
  const [playingId, setPlayingId] = useState<number | null>(null);

  const handlePlay = (id: number) => {
    setPlayingId(id);
  };

  const handlePause = () => {
    setPlayingId(null);
  };

  return (
    <>
      <div className="w-full bg-gray-900 overflow-hidden">
        {/* Banner image - full width top */}
        <div className="relative h-48">
          <img
            src="https://images.unsplash.com/photo-1503264116251-35a269479413?auto=format&fit=crop&w=1200&q=80"
            alt="Banner"
            className="w-full h-full object-cover"
          />

          {/* Profile Image */}
          <div className="absolute left-10 bottom-[-64px] w-40 h-40 rounded-full border-4 border-white overflow-hidden bg-gray-800">
            <img
              src={profileImage}
              alt="Profile"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Buttons on the right */}
          <div className="absolute right-10 bottom-2 flex space-x-4 items-center">
            <button className="bg-pink-600 hover:bg-pink-700 text-white font-semibold px-5 py-2 rounded shadow">
              Follow
            </button>
            <button className="bg-gray-700 hover:bg-gray-600 text-white font-semibold px-5 py-2 rounded shadow">
              Edit Profile
            </button>
          </div>
        </div>

        {/* Content Area */}
        <div className="text-white flex flex-col lg:flex-row justify-between gap-10">
          {/* Left Column: Profile Info */}
          <div className="w-full lg:w-1/2 pt-20 px-10 pb-10">
            <div className="flex items-center space-x-3">
              <h1 className="text-3xl font-bold">Artist Name</h1>
              <FiCheckCircle className="text-green-400 text-2xl" />
              <span className="text-gray-400 text-lg">@username</span>
            </div>

            <p className="mt-3 max-w-3xl text-gray-300">
              This is a short bio description about the artist. It’s a great
              place to share your story, style, or mission.
            </p>

            <a
              href="https://example.com"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-3 inline-block text-pink-500 hover:underline hover:text-pink-700"
            >
              https://example.com
            </a>

            <div className="flex space-x-10 mt-6 text-gray-400">
              <div>
                <span className="font-bold text-white text-lg">10K</span>{" "}
                <span>Followers</span>
              </div>
              <div>
                <span className="font-bold text-white text-lg">300</span>{" "}
                <span>Following</span>
              </div>
            </div>
          </div>

          {/* Right Column: Stats & Top Tracks */}
          <div className="w-full lg:w-1/2 flex flex-col justify-between">
            {/* Image with overlay content - flush full height */}
            <div className="relative h-full w-full overflow-hidden min-h-[280px]">
              <img
                src={bgImage}
                alt="Artist Visual"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 p-4 flex flex-col justify-between text-white">
                <div className="text-right mr-10 mt-14 p-2">
                  <p className="text-sm uppercase text-gray-300">
                    Monthly Listeners
                  </p>
                  <h3 className="text-2xl font-bold">125K</h3>
                  <div className="space-x-4 mt-2">
                    <a
                      href="#"
                      className="hover:text-pink-400 text-lg text-white"
                    >
                      <i className="fab fa-instagram"></i>
                    </a>
                    <a
                      href="#"
                      className="hover:text-pink-400 text-lg text-white"
                    >
                      <i className="fab fa-twitter"></i>
                    </a>
                    <a
                      href="#"
                      className="hover:text-pink-400 text-lg text-white"
                    >
                      <i className="fab fa-youtube"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* The music and elements */}
      <div className="w-full flex flex-row justify-between">
        {/* Tracks Released */}
        <div
          className="flex flex-col justify-between p-4"
          style={{ width: "70%" }}
        >
          <h2 className="text-[16px] font-bold text-gray-300 mb-4">Tracks Released</h2>
          {tracks.map((track) => (
            <TrackPlayer
              key={track.id}
              track={track}
              isPlaying={playingId === track.id}
              onPlay={handlePlay}
              onPause={handlePause}
            />
          ))}
        </div>

        {/* Playlists */}
        <div className="flex flex-col justify-between" style={{ width: "30%" }}>
          <p>Music</p>
        </div>
      </div>
    </>
  );
}
