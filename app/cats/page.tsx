import path from "path";
import fs from "fs";

const getCatImages = () => {
  const imagesDirectory = path.join(process.cwd(), "public", "Cat");
  return fs
    .readdirSync(imagesDirectory)
    .map((file) => `/Cat/${file}`)
    .filter((file) => !file.includes("cat1.jpg")); // Exclude Cat #1
};

const Cats = () => {
  const catImages = getCatImages();

  return (
    <div className="text-center my-10">
      {/* Header */}
      <h1 className="text-4xl font-extrabold bg-gradient-to-tl from-primary to-secondary text-transparent bg-clip-text mb-6">
  🐾 Cat Gallery 🐾
</h1>
      <p className="text-lg mb-4 text-gray-700">
        Welcome to the Cat Gallery! Click on an image to see it in full size. 😺
      </p>

      {/* Gallery Section */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {catImages.map((image, index) => (
          <div
            key={index}
            className="rounded-lg overflow-hidden shadow-lg hover:shadow-xl transform hover:scale-105 transition duration-300 bg-white"
          >
            <a href={image} target="_blank" rel="noopener noreferrer">
              <img
                src={image}
                alt={`Cat ${index + 2}`} // Adjust index to reflect skipped cat
                className="w-full h-auto rounded-t-lg"
              />
            </a>
            <div className="p-3 bg-pink-50">
            </div>
          </div>
        ))}
      </div>

      {/* Footer */}
      <p className="mt-10 text-gray-500">
        Made with ❤️ for cat lovers everywhere.
      </p>
    </div>
  );
};

export default Cats;