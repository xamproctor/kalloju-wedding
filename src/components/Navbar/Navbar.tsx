import { useEffect, useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const links = [
    "Home",
    "Story",
    "Events",
    "Gallery",
    "Venue",
    "RSVP",
  ];

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
        scrolled
          ? "bg-white/80 backdrop-blur-md shadow-md"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">

        <h1
          className="text-3xl text-[#C89B3C]"
          style={{ fontFamily: "Great Vibes" }}
        >
          D ❤️ K
        </h1>

        <ul className="hidden md:flex gap-10 text-[#4A3528]">
          {links.map((item) => (
            <li
              key={item}
              className="cursor-pointer hover:text-[#C89B3C] transition"
            >
              {item}
            </li>
          ))}
        </ul>

      <button
  className="md:hidden"
  onClick={() => setOpen(!open)}
>
  {open ? <FaTimes size={24} /> : <FaBars size={24} />}
</button>
      </div>

      {open && (
        <div className="md:hidden bg-white shadow-lg">
          {links.map((item) => (
            <div
              key={item}
              className="p-4 border-b cursor-pointer hover:bg-gray-100"
            >
              {item}
            </div>
          ))}
        </div>
      )}
    </nav>
  );
}