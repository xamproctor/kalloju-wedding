import { motion } from "framer-motion";

interface InvitationCoverProps {
  onOpen: () => void;
}

export default function InvitationCover({
  onOpen,
}: InvitationCoverProps) {
  return (
    <section className="relative min-h-screen overflow-hidden bg-[#1b0b0b] flex items-center justify-center">

      {/* Background Glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,#6d1f1f_0%,#1b0b0b_70%)]" />

      {/* Decorative Border */}
      <div className="absolute inset-6 border border-yellow-500/30 rounded-3xl" />

      {/* Content */}
      <motion.div
        initial={{ opacity: 0, y: 80 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.4 }}
        className="relative text-center z-10"
      >
        <p
          style={{ fontFamily: "Cinzel" }}
          className="tracking-[8px] text-yellow-300 text-xl"
        >
          WEDDING INVITATION
        </p>

        <h1
          style={{ fontFamily: "Great Vibes" }}
          className="text-[90px] mt-8 text-yellow-400"
        >
          Bride
        </h1>

        <p className="text-white text-4xl my-4">&</p>

        <h1
          style={{ fontFamily: "Great Vibes" }}
          className="text-[90px] text-yellow-400"
        >
          Groom
        </h1>

        <p
          style={{ fontFamily: "Cormorant Garamond" }}
          className="text-white text-3xl mt-10"
        >
          Request the honour of your presence
        </p>

        <motion.button
          whileHover={{ scale: 1.08 }}
          whileTap={{ scale: 0.95 }}
          onClick={onOpen}
          className="mt-12 px-10 py-4 rounded-full bg-yellow-500 text-black font-semibold shadow-xl"
        >
          Open Invitation
        </motion.button>
      </motion.div>
    </section>
  );
}