import React, { useState } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import { FaGithub, FaLinkedin, FaWhatsapp, FaTelegram } from "react-icons/fa";

import { styles } from "../styles";
import { EarthCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { slideIn } from "../utils/motion";

const RECIPIENT_EMAIL = "abdilathifnasri@gmail.com";
const EMAILJS_SERVICE_ID =
  import.meta.env.VITE_EMAILJS_SERVICE_ID ||
  import.meta.env.VITE_APP_EMAILJS_SERVICE_ID;
const EMAILJS_TEMPLATE_ID =
  import.meta.env.VITE_EMAILJS_TEMPLATE_ID ||
  import.meta.env.VITE_APP_EMAILJS_TEMPLATE_ID;
const EMAILJS_PUBLIC_KEY =
  import.meta.env.VITE_EMAILJS_PUBLIC_KEY ||
  import.meta.env.VITE_APP_EMAILJS_PUBLIC_KEY;

const Contact = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState({ type: "", text: "" });

  const handleChange = (e) => {
    const { target } = e;
    const { name, value } = target;

    setForm({
      ...form,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    setStatus({ type: "", text: "" });

    const hasEmailJSConfig =
      EMAILJS_SERVICE_ID && EMAILJS_TEMPLATE_ID && EMAILJS_PUBLIC_KEY;

    if (!hasEmailJSConfig) {
      setLoading(false);
      setStatus({
        type: "error",
        text: "Email service is not configured yet. Add your EmailJS keys to the .env file.",
      });
      return;
    }

    const templateParams = {
      from_name: form.name,
      name: form.name,
      user_name: form.name,
      from_email: form.email,
      email: form.email,
      user_email: form.email,
      reply_to: form.email,
      to_name: "Abdiladif",
      to_email: RECIPIENT_EMAIL,
      recipient: RECIPIENT_EMAIL,
      message: form.message,
    };

    emailjs
      .send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        templateParams,
        EMAILJS_PUBLIC_KEY
      )
      .then(() => {
        setLoading(false);
        setStatus({
          type: "success",
          text: "Message sent successfully.",
        });

        setForm({
          name: "",
          email: "",
          message: "",
        });
      })
      .catch((error) => {
        setLoading(false);
        console.error(error);
        setStatus({
          type: "error",
          text: "Could not send the message. Please try again.",
        });
      });
  };

  // Social media links
  const socialLinks = [
    {
      icon: <FaGithub />,
      url: "https://github.com/abdiladifrazaam",
      name: "GitHub"
    },
    
    {
      icon: <FaWhatsapp />,
      url: "https://wa.me/+252906444290",
      name: "WhatsApp"
    },
    {
      icon: <FaTelegram />,
      url: "https://t.me/+251905143856",
      name: "Telegram"
    },
{ icon: <FaLinkedin />, url: "in/abdiladif-mohamoud-33882a365", name: "LinkedIn" },
  ];

  return (
    <div
      className={`xl:mt-12 flex xl:flex-row flex-col-reverse gap-10 overflow-hidden`}
    >
      <motion.div
        variants={slideIn("left", "tween", 0.2, 1)}
        className='flex-[0.75] bg-black-100 p-8 rounded-2xl'
      >
        <p className={styles.sectionSubText}>Get in touch</p>
        <h3 className={styles.sectionHeadText}>Contact.</h3>

        <form
          onSubmit={handleSubmit}
          className='mt-12 flex flex-col gap-8'
        >
          <label className='flex flex-col'>
            <span className='text-white font-medium mb-4'>Your Name</span>
            <input
              type='text'
              name='name'
              value={form.name}
              onChange={handleChange}
              placeholder="What's your good name?"
              required
              className='bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium'
            />
          </label>
          <label className='flex flex-col'>
            <span className='text-white font-medium mb-4'>Your email</span>
            <input
              type='email'
              name='email'
              value={form.email}
              onChange={handleChange}
              placeholder="What's your email address?"
              required
              className='bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium'
            />
          </label>
          <label className='flex flex-col'>
            <span className='text-white font-medium mb-4'>Your Message</span>
            <textarea
              rows={7}
              name='message'
              value={form.message}
              onChange={handleChange}
              placeholder='What you want to say?'
              required
              className='bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium'
            />
          </label>

          <button
            type='submit'
            className='bg-tertiary py-3 px-8 rounded-xl outline-none w-fit text-white font-bold shadow-md shadow-primary'
          >
            {loading ? "Sending..." : "Send"}
          </button>

          {status.text && (
            <p
              className={`text-sm font-medium ${
                status.type === "success" ? "text-green-400" : "text-red-400"
              }`}
            >
              {status.text}
            </p>
          )}
        </form>

        {/* Social Media Icons Section */}
        <div className="mt-8">
          <p className="text-white font-medium mb-4">connect with me on:</p>
          <div className="flex flex-wrap gap-4">
            {socialLinks.map((social, index) => (
              <a
                key={index}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-white text-3xl hover:text-blue-500 duration-300"
                aria-label={social.name}
              >
                {social.icon}
              </a>
            ))}
          </div>
        </div>
      </motion.div>

      <motion.div
        variants={slideIn("right", "tween", 0.2, 1)}
        className='xl:flex-1 xl:h-auto md:h-[550px] h-[350px]'
      >
        <EarthCanvas />
      </motion.div>
    </div>
  );
};

export default SectionWrapper(Contact, "contact");