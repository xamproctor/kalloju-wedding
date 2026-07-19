import { motion } from "framer-motion";
import hero from "../../assets/images/hero1.png";
import ganesha from "../../assets/images/ganesha.png";
import { weddingData } from "../../data/weddingData";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative h-screen overflow-hidden"
    >
      {/* Background */}
      <img
        src={hero}
        alt="Wedding Hero"
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/25 via-black/45 to-black/70" />
      <div className="absolute inset-0 bg-[#D4AF37]/5" />

      {/* Content */}
      <div className="relative z-10 flex h-full items-center justify-center px-4 sm:px-6">
        <div className="w-full max-w-[340px] sm:max-w-[430px] md:max-w-3xl lg:max-w-5xl text-center mx-auto">

          {/* Ganesha */}
          <motion.div
            initial={{ opacity: 0, scale: 0.6 }}
            animate={{
              opacity: 1,
              scale: 1,
              y: [0, -8, 0],
            }}
            transition={{
              opacity: { duration: 1.2 },
              scale: { duration: 1.2 },
              y: {
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut",
              },
            }}
            className="flex justify-center mb-8"
          >
            <img
              src={ganesha}
              alt="Lord Ganesha"
              className="w-28 h-28 sm:w-36 sm:h-36 md:w-52 md:h-52 lg:w-64 lg:h-64 object-contain drop-shadow-[0_0_30px_rgba(212,175,55,0.7)]"
            />
          </motion.div>

          {/* Invitation */}
          <motion.p
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            style={{ fontFamily: "Cinzel" }}
            className="uppercase tracking-[4px] sm:tracking-[8px] text-[10px] sm:text-sm md:text-lg text-white"
          >
            Wedding Invitation
          </motion.p>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            style={{ fontFamily: "Cormorant Garamond" }}
            className="mt-6 text-xl md:text-3xl text-white"
          >
            Together with their families
          </motion.p>

          {/* Groom */}
          <motion.h1
            initial={{ opacity: 0, x: -60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.8 }}
            style={{ fontFamily: "Great Vibes" }}
            className="
mt-4
text-[2.6rem]
sm:text-5xl
md:text-7xl
lg:text-8xl
leading-none
text-white
drop-shadow-lg
px-2
break-words
"
          >
            {weddingData.groom.name}
          </motion.h1>

          {/* Ornament */}
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 1.1 }}
            className="my-5 flex justify-center"
          >
            <div className="text-4xl text-[#D4AF37]">
              &
            </div>
          </motion.div>

          {/* Bride */}
          <motion.h1
            initial={{ opacity: 0, x: 60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 1.3 }}
            style={{ fontFamily: "Great Vibes" }}
            className="
text-[2.6rem]
sm:text-5xl
md:text-7xl
lg:text-8xl
leading-none
text-white
drop-shadow-lg
px-2
break-words
"
          >
            {weddingData.bride.name}
          </motion.h1>

          {/* Date */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.6 }}
            style={{ fontFamily: "Cormorant Garamond" }}
            className="mt-8 text-2xl md:text-4xl text-white"
          >
            {weddingData.wedding.date}
          </motion.p>

          {/* Venue */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.8 }}
            style={{ fontFamily: "Cormorant Garamond" }}
            className="
mt-3
text-base
sm:text-xl
md:text-3xl
text-[#F6D87A]
px-4
"
          >
            {weddingData.wedding.venue}
          </motion.p>

        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{
          duration: 2,
          repeat: Infinity,
        }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center"
      >
        <p
          style={{ fontFamily: "Cormorant Garamond" }}
          className="tracking-[4px] text-white text-lg"
        >
          SCROLL
        </p>

        <div className="mt-2 text-3xl text-[#D4AF37]">
          ↓
        </div>
      </motion.div>
    </section>
  );
}