export default function Card({ title, description, link, isDark }) {
  return (
    <div className={`border rounded-lg p-4 m-4 w-80 transition-colors duration-500 ${isDark ? "bg-gray-700 text-white" : "bg-white text-black"}`}>
    
      <h2 className="text-xl font-bold mb-2">{title}</h2>
      <p className="mb-4">{description}</p>
      <a
        href={link}
        className={`text-blue-500 hover:underline ${
          isDark ? "text-blue-300" : "text-blue-500"
        }`}
      >
        View Project
      </a>
    </div>
  );
}   