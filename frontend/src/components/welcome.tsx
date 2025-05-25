export default function Welcome() {
  return (
    <div className="w-full py-10 bg-black">
      <div className="max-w-7xl mx-auto flex flex-col-reverse md:flex-row items-center justify-between px-6 gap-6">
        {/* Image section */}
        <div className="w-full md:w-1/2 flex justify-center">
          <img
            src="./src/assets/musicillustration.png"
            alt="Music Illustration"
            className="object-contain w-full"
          />
        </div>

        
        {/* Text section */}
        <div className="w-full md:w-1/2 text-center md:text-left">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 font-sans text-white">
            <span className="text-pink-600">Listen </span>
            to your favourite artists
          </h2>
          <p className="text-lg text-gray-300">
            Discover all artists — both emerging talents and established names. On KiraSound, 
            you’ll find the best the music world has to offer. Join our community and be part of the sound of tomorrow.
          </p>
          <button className="bg-pink-600 hover:bg-pink-900 text-white px-6 py-2 rounded mt-5">
            Join Now
          </button>
        </div>

        
      </div>
    </div>
  );
}
