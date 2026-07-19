import { motion } from "framer-motion";
import { weddingData } from "../../data/weddingData";
import ganesha from "../../assets/images/ganesha.png";
import bgImage from "../../assets/images/invitation-bg.png";

export default function Invitation() {
  return (
    <section
  id="invitation"
  className="relative min-h-screen overflow-hidden py-24 px-6"
>
  {/* Background Image */}
  <div
    className="absolute inset-0 bg-cover bg-center bg-fixed"
    style={{
      backgroundImage: `url(${bgImage})`,
    }}
  />

  {/* Overlay */}
  <div className="absolute inset-0 bg-[#FFF8F0]/80 backdrop-blur-[1px]" />

  {/* Content */}
  <div className="relative z-10">
    <motion.div
      initial={{ opacity: 0, y: 80 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
      viewport={{ once: true }}
      className="
        relative
        mx-auto
        max-w-5xl
        rounded-[40px]
        border-[10px]
        border-[#D4AF37]
        bg-gradient-to-br
        from-[#FFFDF9]/95
        via-[#FFF8EE]/95
        to-[#FFFDF9]/95
        p-10
        md:p-20
        shadow-[0_30px_80px_rgba(0,0,0,0.18)]
      "
    >
      {/* Ganesha */}
<div className="relative flex justify-center mb-10">

  <motion.div
    className="absolute w-52 h-52 rounded-full bg-yellow-100 blur-3xl"
    animate={{
      scale: [1, 1.15, 1],
      opacity: [0.4, 0.8, 0.4],
    }}
    transition={{
      duration: 5,
      repeat: Infinity,
    }}
  />

  <motion.img
    src={ganesha}
    alt="Lord Ganesha"
    className="relative w-36 md:w-44"
    animate={{
      y: [0, -10, 0],
      scale: [1, 1.04, 1],
    }}
    transition={{
      duration: 4,
      repeat: Infinity,
    }}
  />

</div>

  <p
  style={{ fontFamily: "Cinzel" }}
  className="text-center text-[11px] sm:text-sm md:text-base text-[#B8860B] tracking-[1px] whitespace-nowrap"
>
  Sriastu &nbsp;|&nbsp; Shubhamastu &nbsp;|&nbsp; Avighnamastu
</p>
        {/* Title */}
        <h2
          style={{ fontFamily: "Great Vibes" }}
          className="
text-center
text-6xl
md:text-7xl
text-[#8B5E3C]
mt-8
drop-shadow-lg
"
        >
          Wedding Invitation
        </h2>

        <div className="flex items-center justify-center gap-5 my-10">

<div className="h-[2px] w-28 bg-[#D4AF37]" />

<span className="text-4xl text-[#D4AF37]">
❤
</span>

<div className="h-[2px] w-28 bg-[#D4AF37]" />

</div>

        {/* Blessing */}
        <p
          style={{ fontFamily: "Cormorant Garamond" }}
          className="
text-center
text-2xl
italic
text-[#7A5200]
"
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
          className="
text-center
mt-12
text-xl
leading-10
text-gray-700
"
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
    </div> {/* Close relative z-10 div */}
  </section>
  );
}