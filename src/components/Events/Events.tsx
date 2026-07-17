import { motion } from "framer-motion";
import { weddingData } from "../../data/weddingData";

export default function Events() {
  return (
    <section
      id="events"
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
          Wedding Events
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-10 mt-16">

          {weddingData.events.map((event, index) => (

            <motion.div
              key={index}
              initial={{ opacity: 0, y: 80 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              viewport={{ once: true }}
              className="rounded-3xl bg-white p-10 shadow-xl border border-[#E9D8A6]"
            >

              <div className="text-5xl">
                {event.icon}
              </div>

              <h3
                className="mt-6 text-4xl text-[#B8860B]"
                style={{ fontFamily: "Great Vibes" }}
              >
                {event.title}
              </h3>

              <p className="mt-6 text-lg">
                📅 {event.date}
              </p>

              <p className="mt-3 text-lg">
                🕘 {event.time}
              </p>

              <p className="mt-3 text-lg">
                📍 {event.location}
              </p>

            </motion.div>

          ))}

        </div>

      </div>
    </section>
  );
}