import { motion } from "framer-motion";
import { weddingData } from "../../data/weddingData";

export default function Blessing() {
  return (
    <section className="min-h-screen bg-[#FFF9F1] flex items-center justify-center px-6">

      <motion.div
        initial={{ opacity: 0, y: 60 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2 }}
        className="max-w-4xl w-full border border-[#C89B3C] rounded-3xl bg-white/80 backdrop-blur-sm p-16 shadow-2xl text-center"
      >

        <div className="text-8xl mb-8">
          🕉
        </div>

        <div
          style={{ fontFamily: "Cinzel" }}
          className="text-[#9A6B00] tracking-[6px]"
        >
          Sriastu │ Shubhamastu │ Avighnamastu
        </div>

        <h1
          style={{ fontFamily: "Great Vibes" }}
          className="text-7xl text-[#9A6B00] mt-12"
        >
          Wedding Invitation
        </h1>

        <div className="w-40 h-[2px] bg-[#C89B3C] mx-auto my-8" />

        <p
          style={{ fontFamily: "Cormorant Garamond" }}
          className="text-3xl text-gray-700"
        >
          {weddingData.blessing}
        </p>

        <h2
          style={{ fontFamily: "Cinzel" }}
          className="text-5xl mt-6 text-[#7A5200]"
        >
          {weddingData.elders[0]}
        </h2>

      </motion.div>

    </section>
  );
}