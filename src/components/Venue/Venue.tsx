import { motion } from "framer-motion";
import { weddingData } from "../../data/weddingData";

export default function Venue() {
  return (
    <section
      id="venue"
      className="bg-[#FFF8F0] py-24 px-6"
    >
      <div className="max-w-6xl mx-auto">

        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center text-6xl text-[#9A6B00]"
          style={{ fontFamily: "Great Vibes" }}
        >
          Venue
        </motion.h2>

        <div className="mt-16 grid lg:grid-cols-2 gap-12 items-center">

          {/* Venue Details */}
          <div className="bg-white rounded-3xl shadow-xl p-10">

            <h3
              className="text-4xl text-[#B8860B]"
              style={{ fontFamily: "Great Vibes" }}
            >
              {weddingData.venue.name}
            </h3>

            <p className="mt-6 text-lg leading-8 text-gray-700">
              📍 {weddingData.venue.address}
            </p>

            <a
              href={weddingData.venue.mapLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block mt-8 rounded-full bg-[#C89B3C] px-8 py-4 text-white font-semibold hover:bg-[#B8860B] transition"
            >
              Get Directions
            </a>

          </div>

          {/* Google Map */}
          <div className="overflow-hidden rounded-3xl shadow-xl">

            <iframe
              title="Wedding Venue"
              src="https://www.google.com/maps?q=Somishetty+Tanish+Convention+Kurnool&output=embed"
              width="100%"
              height="450"
              loading="lazy"
              className="border-0"
            ></iframe>

          </div>

        </div>

      </div>
    </section>
  );
}