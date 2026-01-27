export default function Card({ title, description, image, link, isDark }) {
  return (
    <div
      className={`rounded-xl overflow-hidden shadow-xl transform transition duration-300 hover:scale-105 ${
        isDark ? "bg-gray-800 text-white" : "bg-white text-black"
      }`}
    >
      {/* Image Section */}
      <div className="relative group">
        <img
          src={image}
          alt={title}
          className="w-full h-56 object-cover transition duration-500 group-hover:scale-110"
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition duration-500 flex items-center justify-center">
          <a
            href={link}
            className="bg-white text-black px-4 py-2 rounded-lg font-semibold shadow-md transform transition group-hover:scale-110"
          >
            View Project
          </a>
        </div>
      </div>

      {/* Content Section */}
      <div className="p-5">
        <h3 className="text-2xl font-bold">{title}</h3>
        <p className="mt-2 opacity-80">{description}</p>
      </div>
    </div>
  );
}
