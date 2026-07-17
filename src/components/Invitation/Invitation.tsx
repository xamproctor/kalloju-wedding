import { motion } from "framer-motion";
import { weddingData } from "../../data/weddingData";
import ganesha from "../../assets/images/ganesha.png";

export default function Invitation() {
  return (
    <section
      id="invitation"
      className="min-h-screen bg-[#FFF9F1] py-24 px-6 flex items-center justify-center"
    >
      <motion.div
        initial={{ opacity: 0, y: 80 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
        className="max-w-4xl w-full rounded-3xl border-4 border-[#D4AF37] bg-white shadow-2xl p-12 md:p-20"
      >
      {/* Ganesha */}
<motion.div
  className="flex justify-center mb-8"
  initial={{ opacity: 0, scale: 0.6 }}
  animate={{ opacity: 1, scale: 1 }}
  transition={{ duration: 1.2, ease: "easeOut" }}
>
  <img
    src={ganesha}
    alt="Lord Ganesha"
    className="w-32 h-32 md:w-40 md:h-40 object-contain"
  />
</motion.div>
        {/* Sanskrit */}
        <p
          style={{ fontFamily: "Cinzel" }}
          className="text-center tracking-[4px] text-[#B8860B]"
        >
          Sriastu &nbsp; | &nbsp; Shubhamastu &nbsp; | &nbsp; Avighnamastu
        </p>

        {/* Title */}
        <h2
          style={{ fontFamily: "Great Vibes" }}
          className="text-center text-6xl text-[#9A6B00] mt-8"
        >
          Wedding Invitation
        </h2>

        <div className="w-40 h-[2px] bg-[#D4AF37] mx-auto my-8"></div>

        {/* Blessing */}
        <p
          style={{ fontFamily: "Cormorant Garamond" }}
          className="text-center text-2xl"
        >
          With the divine blessings of
        </p>

        <h3
          style={{ fontFamily: "Cinzel" }}
          className="text-center text-3xl mt-4 text-[#7A5200]"
        >
          {weddingData.blessings.elder}
        </h3>

        <p
          className="text-center mt-10 text-lg leading-8"
          style={{ fontFamily: "Cormorant Garamond" }}
        >
          We solicit your gracious presence with family & friends on the
          auspicious occasion of the marriage of
        </p>

        {/* Couple */}
        <div className="mt-12 text-center">
          <h1
            style={{ fontFamily: "Great Vibes" }}
            className="text-6xl text-[#7A5200]"
          >
            {weddingData.groom.name}
          </h1>

          <p className="text-3xl my-3 text-[#D4AF37]">❤</p>

          <h1
            style={{ fontFamily: "Great Vibes" }}
            className="text-6xl text-[#7A5200]"
          >
            {weddingData.bride.name}
          </h1>
        </div>

        {/* Wedding Details */}
        <div className="mt-14 text-center">
          <h3
            className="text-4xl text-[#9A6B00]"
            style={{ fontFamily: "Cinzel" }}
          >
            Sumuhurtham
          </h3>

          <p className="mt-6 text-2xl">
            {weddingData.wedding.date}
          </p>

          <p className="mt-2 text-xl">
           {weddingData.wedding.time}
          </p>

          <p className="mt-2 italic">
           {weddingData.wedding.muhurtham}
          </p>
        </div>

        {/* Venue */}
        <div className="mt-16 text-center">
          <h3
            className="text-4xl text-[#9A6B00]"
            style={{ fontFamily: "Cinzel" }}
          >
            Venue
          </h3>

          <div className="mt-6 space-y-3">
  <p className="text-2xl font-semibold text-[#7A5200]">
    {weddingData.wedding.venue}
  </p>

  <p
    className="text-lg text-gray-700"
    style={{ fontFamily: "Cormorant Garamond" }}
  >
    {weddingData.wedding.location}
  </p>
</div>
        </div>
      </motion.div>
    </section>
  );
}