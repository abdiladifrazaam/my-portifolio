import { motion } from "framer-motion";
import { styles } from "../styles";
import { useState, useEffect } from "react";
import { FaTelegramPlane, FaWhatsapp } from "react-icons/fa";

/* TITLES */
const titles = [
  "Abdiladif",
  "Freelancer",
  "Software Engineer",
  "Web Developer",
  "UI Enthusiast",
  "Mobile App Developer",
  "MERN stack developer",
];

const cvFile = "/Abdiladif-CV.pdf";

const Hero = () => {
  const [open, setOpen] = useState(false);

  /* TYPING STATES */
  const [titleIndex, setTitleIndex] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [charIndex, setCharIndex] = useState(0);

  /* TYPING EFFECT */
  useEffect(() => {
    if (charIndex < titles[titleIndex].length) {
      const timeout = setTimeout(() => {
        setDisplayText((prev) => prev + titles[titleIndex][charIndex]);
        setCharIndex((prev) => prev + 1);
      }, 70);

      return () => clearTimeout(timeout);
    }

    const pause = setTimeout(() => {
      setDisplayText("");
      setCharIndex(0);
      setTitleIndex((prev) => (prev + 1) % titles.length);
    }, 2000);

    return () => clearTimeout(pause);
  }, [charIndex, titleIndex]);

  return (
    <>
      {/* ================= MODAL ================= */}
      {open && (
        <div className="fixed inset-0 z-50 flex items-center justify-center">
          <div
            className="absolute inset-0 bg-black/50 backdrop-blur-md"
            onClick={() => setOpen(false)}
          />

          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.3 }}
            className="relative bg-[#1f1f1f] rounded-2xl p-6 w-[90%] max-w-[320px] text-center z-50"
          >
            <button
              onClick={() => setOpen(false)}
              className="absolute top-3 right-4 text-white text-xl"
            >
              ✕
            </button>

            <h2 className="text-white text-xl font-bold mb-6">
              Get in Touch
            </h2>

            <a
              href="https://t.me/razam4"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-3 mb-4 px-4 py-3 rounded-full bg-[#229ED9] text-white hover:bg-[#1c8bc0] transition"
            >
              <FaTelegramPlane size={20} />
              Telegram
            </a>

            <a
              href="https://wa.me/2520906444290"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-3 px-4 py-3 rounded-full bg-green-500 text-white hover:bg-green-600 transition"
            >
              <FaWhatsapp size={20} />
              WhatsApp
            </a>
          </motion.div>
        </div>
      )}
      {/* ================= HERO ================= */}
      <section className="relative w-full min-h-screen mx-auto overflow-hidden">
        <div className="absolute inset-0 bg-[#050816]/70" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(145,94,255,0.26),_transparent_32%),radial-gradient(circle_at_right,_rgba(14,165,233,0.16),_transparent_28%)]" />

        <div className="relative max-w-[1600px] mx-auto min-h-screen px-6 sm:px-16 pt-28 pb-16 flex items-center">
          <div className="grid w-full grid-cols-1 lg:grid-cols-[1.45fr_0.55fr] gap-8 items-center">
            <div className="relative z-20">
              <div className="flex items-start gap-5">
                <div className="flex flex-col items-center mt-2">
                  <div className="w-5 h-5 rounded-full bg-[#ffff] shadow-[0_0_20px_rgba(145,94,255,0.9)]" />
                  <div className="w-1 h-72 sm:h-80 violet-gradient" />
                </div>

                <div className="max-w-4xl lg:pr-8">
                  <h1 className="mt-6 text-white font-black leading-[1.05] tracking-tight text-[clamp(1.3rem,3.2vw,3.4rem)] whitespace-nowrap">
                    Hi, I’m  <span className="text-[#915EFF] border-r-2 border-[#88809a] pr-1 animate-pulse">{displayText}</span>
                  </h1>

                  <p className={`${styles.heroSubText} mt-6 max-w-xl`}>
I design and build full-stack web and mobile applications using React and React Native, focusing on clean architecture, smooth interactions, and practical user experiences.                  </p>

                  <div className="flex flex-wrap gap-4 mt-8">
                    <a
                      href={cvFile}
                      download="Abdiladif-CV.pdf"
                      className="px-6 py-3 rounded-full  text-white font-bold border border-white/15 bg-white/5 hover:bg-[#7a4de0] transition shadow-[0_10px_30px_rgba(145,94,255,0.35)]"
                    >
                      Download CV
                    </a>

                    <button
                      onClick={() => setOpen(true)}
                      className="px-6 py-3 rounded-full  text-white font-bold border border-white/15 bg-white/5 hover:bg-[#7a4de0] transition shadow-[0_10px_30px_rgba(145,94,255,0.35)]"
                    >
                       Get in touch
                    </button>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative z-20 flex justify-center lg:justify-end lg:justify-self-end lg:ml-auto">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, ease: "easeOut" }}
                className="relative w-full max-w-[380px] lg:max-w-[420px] lg:mr-0"
              >
                <div className="absolute inset-6 rounded-[2rem] bg-[#ffff]/30 blur-3xl" />
                <div className="relative rounded-[2rem] border border-white/10 bg-white/5 p-4 backdrop-blur-xl shadow-[0_25px_80px_rgba(0,0,0,0.45)]">
                  <div className="overflow-hidden rounded-[1.5rem] border border-white/10 bg-[#090325]">
                    <motion.img
                      src="/profileImage.jpg"
                      alt="Abdiladif portrait"
                      className="w-full aspect-[4/5] object-cover object-center"
                      animate={{ y: [0, -10, 0] }}
                      transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                    />
                  </div>
                  <div className="mt-4 flex items-center justify-between gap-4 px-1 pb-1">
                    <div>
                      <p className="text-white font-semibold">Abdiladif</p>
                      <p className="text-secondary text-sm">MERN stack Developer • mobile App Developer</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
