import { motion } from "framer-motion";
import { styles } from "../styles";
import { useState } from "react";

const Hero = () => {
  const [open, setOpen] = useState(false);
  return (
    <>
    {open && (
  <div className="fixed inset-0 z-50 flex items-center justify-center">
    
    {/* BLUR BACKDROP */}
    <div
      className="absolute inset-0 bg-black/50 backdrop-blur-md"
      onClick={() => setOpen(false)}
    />

    {/* MODAL */}
    <motion.div
      initial={{ scale: 0.8, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ duration: 0.3 }}
      className="
        relative bg-[#1f1f1f]
        rounded-2xl p-6
        w-[90%] max-w-[320px]
        text-center z-50
      "
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

      {/* TELEGRAM */}
      <a
        href="https://t.me/razam4"
        target="_blank"
        rel="noopener noreferrer"
        className="
          flex items-center justify-center gap-3
          mb-4 px-4 py-3 rounded-full
          bg-[#229ED9] text-white
          hover:bg-[#1c8bc0] transition
        "
      >
       
        Telegram
      </a>

      {/* WHATSAPP */}
      <a
        href="https://wa.me/+2520906444290"
        target="_blank"
        rel="noopener noreferrer"
        className="

          flex items-center justify-center gap-3
          px-4 py-3 rounded-full
          bg-green-500 text-white
          hover:bg-green-600 transition
        "
      >   
    
        WhatsApp
      </a>
    </motion.div>
  </div>
)}

    <section className={`relative w-full h-screen mx-auto`}>
      <div
        className={`absolute inset-0 top-[120px]  max-w-7xl mx-auto ${styles.paddingX} flex flex-row items-start gap-5 z-20`}
      >
        <div className='flex flex-col justify-center items-center mt-5'>
          <div className='w-5 h-5 rounded-full bg-[#915EFF]' />
          <div className='w-1 sm:h-80 h-40 violet-gradient' />
        </div>

        <div>
          <h1 className={`${styles.heroHeadText} text-white`}>
            Hi, I'm <span className='text-[#915EFF]'>Abdiladif</span>
          </h1>
          <p className={`${styles.heroSubText} mt-2 text-white-100`}>
            Web Developer,React Native Mobile developer, FreeLancer <br className='sm:block hidden' />
            From byte to site | with JS might, your Web ignites.
          </p>
        </div>
      </div>
<div className="absolute inset-0 flex justify-center z-10 pointer-events-none">
  <motion.img
    src="/heroImage.jpg"
    alt="hero image"
    className="
      w-[160px] sm:w-[200px] md:w-[240px]
      rounded-[45%]
      object-cover
      drop-shadow-[0_0_40px_rgba(145,94,255,0.6)]
    "
    style={{ marginTop: "400px" }} 
    animate={{ y: [0, -8, 0] }}
    transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
  />
</div>

  <div className="absolute bottom-10 w-full flex flex-row justify-center align-center items-center gap-4 z-20">
  <a
    href="/Abdiladif-CV.pdf"
    target="_blank"
    rel="noopener noreferrer"
    className="px-6 py-3 bg-[#915EFF] rounded-full text-white font-bold hover:bg-[#7a4de0] transition"
  >
    Download CV
  </a>

  <button
    onClick={() => setOpen(true)}
    className="px-6 py-3 bg-[#915EFF] rounded-full text-white font-bold hover:bg-[#7a4de0] transition"
  >
    Get in touch
  </button>
</div>
    </section>
    </>
  );
};

export default Hero;
