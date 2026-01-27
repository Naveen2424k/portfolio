import {
  FaGithub,
  FaLinkedin,
  FaTwitter,
  FaInstagram,
  FaFacebook,
  FaYoutube,
} from "react-icons/fa";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const socialLinks = [
  { icon: FaGithub, url: "https://github.com", color: "#0d0d0dff" },
  { icon: FaLinkedin, url: "https://linkedin.com/in", color: "#0A66C2" },
  { icon: FaInstagram, url: "https://instagram.com", color: "#E4405F" },
];

export default function Bodymain({ isDark }) {
  /* typing */
  const [index, setIndex] = useState(0);
  const [subIndex, setSubIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);
  const [blink, setBlink] = useState(true);

  /* interactions */
  const [launch, setLaunch] = useState(false);
  const [showContact, setShowContact] = useState(false);

  /* terminal dots */
  const [activeDot, setActiveDot] = useState(0);

  /* terminal logs */
  const logs = [
    "✔ Server running",
    "✔ DataBase connected",
    "✔ APIs ready",
    "✔ Let's Start Together",
  ];
  const [visible, setVisible] = useState(0);

  const words = [
    { text: "Software Developer", color: "text-blue-500" },
    { text: "Software Engineer", color: "text-green-500" },
  ];

  const navigate = useNavigate();

  /* scroll to contact */
  useEffect(() => {
    if (showContact) {
      setTimeout(() => {
        document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
      }, 100);
    }
  }, [showContact]);

  /* typing effect */
  useEffect(() => {
    const speed = deleting ? 60 : 120;
    const t = setTimeout(() => {
      if (!deleting && subIndex < words[index].text.length) {
        setSubIndex(subIndex + 1);
      } else if (deleting && subIndex > 0) {
        setSubIndex(subIndex - 1);
      } else if (!deleting) {
        setDeleting(true);
      } else {
        setDeleting(false);
        setIndex((i) => (i + 1) % words.length);
      }
    }, speed);
    return () => clearTimeout(t);
  }, [subIndex, deleting, index]);

  /* cursor blink */
  useEffect(() => {
    const b = setInterval(() => setBlink((v) => !v), 500);
    return () => clearInterval(b);
  }, []);

  /* glowing dots loop */
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveDot((prev) => (prev + 1) % 3);
    }, 400);
    return () => clearInterval(interval);
  }, []);

  /* terminal logs reveal */
  useEffect(() => {
    if (visible < logs.length) {
      const t = setTimeout(() => setVisible((v) => v + 1), 700);
      return () => clearTimeout(t);
    }
  }, [visible]);

  return (
    <>
      {/* ROCKET */}
      {launch && (
        <div className="fixed bottom-24 left-1/2 -translate-x-1/2 text-5xl z-50 animate-[launch_1.2s_ease-in-out_forwards]">
          🚀
        </div>
      )}

      {/* HERO */}
      <section
        className={`pt-20 min-h-screen flex items-center justify-between px-10
        ${isDark ? "bg-gray-900 text-white" : "bg-gray-100 text-gray-900"}`}
      >
        {/* LEFT */}
        <div className="max-w-2xl space-y-8">
          <h1 className="text-7xl font-extrabold">
            HELLO, I'M{" "}
            <span className="bg-gradient-to-r from-blue-500 via-purple-500 to-green-400 bg-clip-text text-transparent">
              NAVEEN
            </span>
          </h1>

          <h3 className="text-4xl font-semibold">
            I'm a{" "}
            <span className={words[index].color}>
              {words[index].text.slice(0, subIndex)}
              <span className={`ml-1 ${blink ? "opacity-100" : "opacity-0"}`}>
                |
              </span>
            </span>
          </h3>

          <p className="text-2xl text-gray-400">
            I build scalable web applications and powerful backend systems.
          </p>

          <button
            onClick={() => {
              setLaunch(true);
              setTimeout(() => {
                setShowContact(true);
                setLaunch(false);
              }, 1200);
            }}
            className="px-12 py-4 text-lg font-semibold rounded-xl
            bg-gradient-to-r from-blue-600 to-green-500
            text-white shadow-xl hover:scale-105 transition"
          >
            Hire Me 🚀
          </button>

          {/* SOCIAL */}
          <div className="flex gap-6 pt-6">
            {socialLinks.map(({ icon: Icon, url, color }, i) => (
              <a
                key={i}
                href={url}
                target="_blank"
                rel="noreferrer"
                className="p-4 rounded-full bg-white/10 hover:scale-110 transition"
              >
                <Icon size={26} style={{ color }} />
              </a>
            ))}
          </div>
        </div>

        {/* TERMINAL */}
        <div className="hidden md:flex items-center justify-center pointer-events-none">
          <div className="w-[440px] rounded-xl font-mono shadow-2xl border border-green-500/30 bg-black text-green-400">
            {/* Header */}
            <div className="flex gap-2 px-4 py-2 bg-gray-900 rounded-t-xl items-center">
              {["bg-red-500", "bg-yellow-500", "bg-green-500"].map((c, i) => (
                <span
                  key={i}
                  className={`w-3 h-3 rounded-full transition-all duration-300
                  ${c}
                  ${
                    activeDot === i
                      ? "opacity-100 shadow-[0_0_12px_currentColor]"
                      : "opacity-30"
                  }`}
                />
              ))}
              <span className="ml-3 text-gray-400 text-sm">
                naveen@portfolio
              </span>
            </div>

            {/* Body */}
            <div className="p-4 text-sm space-y-2 pointer-events-auto">
              <div className="text-blue-400">
                naveen@portfolio:~$ <span className="text-white">npm start</span>
              </div>

              {logs.slice(0, visible).map((log, i) => (
                <div
                  key={i}
                  className="transition-all duration-300 ease-out"
                >
                  {log}
                </div>
              ))}

              {visible < logs.length && (
                <div className="animate-pulse">▮</div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* CONTACT */}
      {showContact && (
        <section
          id="contact"
          className="min-h-screen flex flex-col items-center justify-center
          bg-gray-950 text-white space-y-6"
        >
          <h2 className="text-4xl font-bold">Let’s Work Together</h2>
          <p className="text-gray-400 text-lg">
            Ready to discuss opportunities, projects, or collaborations.
          </p>
          <button
            onClick={() => navigate("/contact")}
            className="px-10 py-4 rounded-xl text-lg font-semibold
            bg-gradient-to-r from-green-500 to-emerald-500
            text-black shadow-lg transition-all duration-300
            hover:scale-105 hover:shadow-green-500/40"
          >
            Go to Contact Page →
          </button>
        </section>
      )}

      {/* ROCKET KEYFRAMES */}
      <style>
        {`
          @keyframes launch {
            0% { transform: translate(-50%, 0); opacity: 1; }
            100% { transform: translate(-50%, -100vh); opacity: 0; }
          }
        `}
      </style>
    </>
  );
}
