export default function WelcomeS3() {
  return (
    <div className="w-full py-10 bg-black">
      <div className="max-w-7xl mx-auto flex flex-col-reverse md:flex-row items-center justify-between px-6 gap-6">
        {/* Image section */}
        <div className="w-full md:w-1/2 flex justify-center">
          <img
            src="./src/assets/MusicProducer.png"
            alt="Music Illustration"
            className="object-contain w-full"
          />
        </div>

        
        {/* Text section */}
        <div className="w-full md:w-1/2 text-center md:text-left">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 font-sans text-white">
            Are you an upcoming 
            <span className="text-pink-600"> Producer</span>
          </h2>
          <p className="text-lg text-gray-300">
            Unlock your full creative potential on KiraSound. Whether you're just starting out or looking to level up your skills, 
            we’ve got you covered — from exclusive production courses and downloadable stems to tools, templates, and community support.
            <br/><br/>
            Join today as an artist and become part of a growing network of producers and musicians collaborating, 
            sharing, and building the sound of tomorrow. Your journey starts here — create, connect, and grow with KiraSound.
          </p>
          <button className="bg-pink-600 hover:bg-pink-900 text-white px-6 py-2 rounded mt-5">
            Join Now
          </button>
        </div>

        
      </div>
    </div>
  );
}
