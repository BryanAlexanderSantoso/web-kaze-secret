import React, { useState, useEffect } from "react";
import { Star } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useInView } from "react-intersection-observer";

const Collaborations: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const collaborations = [
    {
      name: "Ace Anthem",
      role: "Streamer & Content Creator",
      image:
        "https://i.pinimg.com/736x/d0/d8/cb/d0d8cb80bdf6ddddec926e7eda3c4b9a.jpg",
      testimonial:
        "Seru banget berkolaborasi dengan Kaze Serenity! Eventnya selalu menarik dan komunitasnya sangat suportif.",
      highlight: "Chill Podcast",
    },
    {
      name: "Wielino",
      role: "Streamer & Content Creator",
      image:
        "https://i.pinimg.com/736x/56/db/0d/56db0d4aef30da75f3cc7acb1f759d7d.jpg",
      testimonial: "10/10 ga sih sekali event podcast ada giveawaynya!",
      highlight: "Chill Podcast",
    },
  ];

  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  // Auto-slide every 5 seconds unless paused
  useEffect(() => {
    if (isPaused) return;

    const interval = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % collaborations.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [collaborations.length, isPaused]);

  const slideVariants = {
    enter: { opacity: 0 },
    center: { opacity: 1 },
    exit: { opacity: 0 },
  };

  return (
    <section
      ref={ref}
      id="collaborations"
      className="py-16 md:py-24 bg-gradient-to-b from-white to-indigo-50 dark:from-gray-900 dark:to-gray-800"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Kolaborasi Eksklusif
          </h2>
          <motion.div
            initial={{ width: 0 }}
            animate={inView ? { width: "5rem" } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="h-1.5 bg-indigo-600 mx-auto mb-8 rounded-full"
          />
          <p className="max-w-3xl mx-auto text-lg text-gray-600 dark:text-gray-300">
            Kami telah bermitra dengan beberapa pembuat konten paling menarik
            untuk menghadirkan pengalaman unik bagi komunitas kami.
          </p>
        </motion.div>

        <div
          className="relative"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          <AnimatePresence initial={false} mode="wait">
            <motion.div
              key={activeIndex}
              variants={slideVariants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ duration: 0.6 }}
              className="relative overflow-hidden rounded-2xl shadow-lg"
            >
              <div className="md:flex bg-white dark:bg-gray-800 rounded-2xl overflow-hidden">
                <motion.div
                  initial={{ scale: 0.8, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 0.5 }}
                  className="md:w-2/5 relative h-64 md:h-[450px]"
                >
                  <img
                    src={collaborations[activeIndex].image}
                    alt={collaborations[activeIndex].name}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
                    <motion.div
                      animate={{ rotate: [0, 360] }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        ease: "linear",
                      }}
                      className="flex items-center"
                    >
                      <Star className="text-yellow-400 w-5 h-5 mr-1" />
                    </motion.div>
                  </div>
                </motion.div>
                <motion.div
                  initial={{ x: 50, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  className="md:w-3/5 p-6 md:p-8 flex flex-col justify-between"
                >
                  <div>
                    <motion.div
                      whileHover={{ scale: 1.05 }}
                      className="bg-indigo-100 dark:bg-indigo-900/50 text-indigo-800 dark:text-indigo-300 inline-block px-3 py-1 rounded-full text-sm font-medium mb-4"
                    >
                      {collaborations[activeIndex].highlight}
                    </motion.div>
                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                      {collaborations[activeIndex].name}
                    </h3>
                    <p className="text-indigo-600 dark:text-indigo-400 mb-4">
                      {collaborations[activeIndex].role}
                    </p>
                    <blockquote className="italic text-gray-600 dark:text-gray-300 border-l-4 border-indigo-300 dark:border-indigo-600 pl-4 mb-6">
                      "{collaborations[activeIndex].testimonial}"
                    </blockquote>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Manual Navigation Buttons */}
          <div className="flex justify-center gap-4 mt-6">
            <button
              onClick={() =>
                setActiveIndex((prevIndex) =>
                  prevIndex === 0
                    ? collaborations.length - 1
                    : prevIndex - 1
                )
              }
              className="bg-indigo-500 hover:bg-indigo-600 text-white px-4 py-2 rounded-md transition"
            >
              previous
            </button>
            <button
              onClick={() =>
                setActiveIndex((prevIndex) => (prevIndex + 1) % collaborations.length)
              }
              className="bg-indigo-500 hover:bg-indigo-600 text-white px-4 py-2 rounded-md transition"
            >
              next
            </button>
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-16 text-center"
        >
          <p className="text-lg text-gray-700 dark:text-gray-300 mb-6">
            Tertarik berkolaborasi dengan Kaze Serenity?
          </p>
          <motion.a
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            href="https://forms.gle/7Zhwg7WpSAEgP8xP7"
            className="inline-block bg-indigo-600 text-white hover:bg-indigo-700 px-6 py-3 rounded-lg transition-colors duration-200"
          >
            Ajukan Permohonan Kerjasama
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default Collaborations;
