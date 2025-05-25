export default function WelcomeS2() {
  return (
    <div className="bg-white w-full">
      <div className="w-full py-10">
        <div className="max-w-7xl mx-auto flex flex-col-reverse md:flex-row items-center justify-between px-6 gap-6">
          {/* Text on the left (now below image on mobile) */}
          <div className="w-full md:w-1/2">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 font-sans text-gray-700">
            <span className="text-pink-600">KiraSound </span>
            isn’t just for artists
          </h2>
            <p className="text-lg text-gray-700 text-center md:text-left">
              KiraSound is for the fans who love Music.<br/>
              Discover new music, follow your favorite performers, and connect directly with the people behind the sound.
              Build and share your own playlists, connect with friends, and support the artists you love.
              Whether you're here to explore, vibe, or share the experience, you're part of the KiraSound community.
              The stage is yours too.
            </p>
          </div>

          {/* Image on the right (now above text on mobile) */}
          <div className="w-full md:w-1/2 flex justify-center">
            <img
              src="./src/assets/listeningtomusic.png"
              alt="Listening to Music"
              className="object-contain w-full"
            />
          </div>
        </div>
      </div>
      </div>
  );
}
