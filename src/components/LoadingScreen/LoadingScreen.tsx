import { motion } from "framer-motion";

export default function LoadingScreen() {
  return (
    <motion.div
      className="fixed inset-0 bg-[#2B0A0A] flex flex-col justify-center items-center z-50"
      initial={{ opacity: 1 }}
      animate={{ opacity: 1 }}
    >
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ duration: 1 }}
      >
        <h1
          style={{ fontFamily: "Cinzel" }}
          className="text-7xl text-yellow-400"
        >
          🕉
        </h1>
      </motion.div>

      <motion.p
        style={{ fontFamily: "Cormorant Garamond" }}
        className="text-white text-3xl mt-8"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
      >
        With the Blessings of Lord Ganesha
      </motion.p>
    </motion.div>
  );
}