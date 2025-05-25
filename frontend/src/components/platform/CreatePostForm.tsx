type CreatePostFormProps = {
  profileImage: string; // since it's an imported image URL string
};

export default function CreatePostForm({ profileImage }: CreatePostFormProps) {
  return (
    <>
      <div className="flex items-center border-b border-gray-500 pb-3 mb-4">
        <img
          src={profileImage}
          alt="User avatar"
          className="w-14 h-14 rounded-full object-cover"
        />
        <input
          type="text"
          placeholder="What's on your mind?"
          className="ml-4 flex-grow rounded-full border border-gray-300 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-pink-600"
        />
      </div>

      <div className="flex items-center justify-between mb-6">
        <div className="flex space-x-6 text-gray-300 text-sm">
          <label
            htmlFor="upload-photo"
            className="flex items-center cursor-pointer hover:text-pink-600 transition"
            title="Upload Photo"
          >
            <i className="fa fa-image text-lg mr-1"></i> Photo
          </label>
          <input
            id="upload-photo"
            type="file"
            accept="image/*"
            className="hidden"
          />

          <label
            htmlFor="upload-video"
            className="flex items-center cursor-pointer hover:text-pink-600 transition"
            title="Upload Video"
          >
            <i className="fa fa-video text-lg mr-1"></i> Video
          </label>
          <input
            id="upload-video"
            type="file"
            accept="video/*"
            className="hidden"
          />

          <label
            htmlFor="upload-music"
            className="flex items-center cursor-pointer hover:text-pink-600 transition"
            title="Upload Music"
          >
            <i className="fa fa-music text-lg mr-1"></i> Music
          </label>
          <input
            id="upload-music"
            type="file"
            accept="audio/*"
            className="hidden"
          />
        </div>

        <button
          type="submit"
          className="bg-pink-600 text-white px-5 py-2 rounded-full hover:bg-pink-700 transition text-sm"
        >
          Submit
        </button>
      </div>
    </>
  );
}
