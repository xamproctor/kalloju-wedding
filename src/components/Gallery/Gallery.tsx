import { motion } from "framer-motion";
import image1 from "../../assets/images/image1.png";
import image2 from "../../assets/images/image2.png";
import image3 from "../../assets/images/image3.png";
import image4 from "../../assets/images/image4.png";

const images = [
  image1,
  image2,
  image3,
  image4,
];

export default function Gallery() {
  return (
    <section
      id="gallery"
      className="bg-[#FFF8F0] py-24 px-6"
    >
      <div className="max-w-7xl mx-auto">

        <h2
          className="text-center text-6xl text-[#9A6B00]"
          style={{ fontFamily: "Great Vibes" }}
        >
          Gallery
        </h2>
<div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-16 max-w-5xl mx-auto">
  {images.map((image, index) => (
    <motion.div
      key={index}
      whileHover={{ scale: 1.03 }}
      transition={{ duration: 0.3 }}
      className="overflow-hidden rounded-3xl shadow-xl aspect-[4/5] bg-white"
    >
      <img
        src={image}
        alt={`Gallery ${index + 1}`}
        className="w-full h-full object-cover object-top transition-transform duration-500 hover:scale-110"
      />
    </motion.div>
  ))}
</div>
      </div>
    </section>
  );
}