import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import { styles } from "../styles";
import { navLinks } from "../constants";
import { logo, menu, close } from "../assets";

const Navbar = () => {
  const [active, setActive] = useState("");
  const [toggle, setToggle] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      if (scrollTop > 100) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`${
        styles.paddingX
      } w-full flex items-center py-5 fixed top-0 z-20 ${
        scrolled ? "bg-primary" : "bg-transparent"
      }`}
    >
      <div className='w-full flex justify-between items-center max-w-7xl mx-auto'>
        <Link
          to='/'
          className='flex items-center gap-2'
          onClick={() => {
            setActive("");
            window.scrollTo(0, 0);
          }}
        >
          <img src={logo} alt='logo' className='w-9 h-9 object-contain' />
          <p className='text-[#ffffnt-bold text-[20px] cursor-pointer flex '>
            Abdiladev &nbsp;
            <span className='sm:block hidden'></span>
          </p>
        </Link>

        <ul className='list-none hidden sm:flex flex-row gap-4'>
          {navLinks.map((nav) => {
            const isActive = active === nav.title;

            return (
              <li key={nav.id} onClick={() => setActive(nav.title)}>
                <a
                  href={`#${nav.id}`}
                  className={`${
                    isActive ? "text-white" : "text-secondary"
                  } group relative inline-flex items-center rounded-full px-4 py-2 text-[18px] font-medium transition-all duration-300 hover:-translate-y-0.5 hover:bg-white/10 hover:text-white`}
                >
                  <span className='relative z-10'>{nav.title}</span>
                  <span
                    className={`${
                      isActive ? "scale-x-100" : "scale-x-0"
                    } absolute inset-x-4 -bottom-0.5 h-px origin-left bg-[#ffff] transition-transform duration-300 group-hover:scale-x-100`}
                  />
                </a>
              </li>
            );
          })}
        </ul>

        <div className='sm:hidden flex flex-1 justify-end items-center'>
          <img
            src={toggle ? close : menu}
            alt='menu'
            className='w-[28px] h-[28px] object-contain'
            onClick={() => setToggle(!toggle)}
          />

          <div
            className={`${
              !toggle ? "hidden" : "flex"
            } p-6 black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] z-10 rounded-xl`}
          >
            <ul className='list-none flex justify-end items-start flex-1 flex-col gap-2'>
              {navLinks.map((nav) => {
                const isActive = active === nav.title;

                return (
                  <li key={nav.id} className='w-full'>
                    <a
                      href={`#${nav.id}`}
                      onClick={() => {
                        setToggle(false);
                        setActive(nav.title);
                      }}
                      className={`${
                        isActive ? "text-white bg-white/10" : "text-secondary"
                      } block w-full rounded-xl px-4 py-2 font-poppins font-medium text-[16px] transition-all duration-300 hover:text-white hover:bg-white/10 hover:translate-x-1`}
                    >
                      {nav.title}
                    </a>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
