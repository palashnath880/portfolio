"use client";

import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { IoMdHome } from "react-icons/io";
import { FaBriefcase, FaUser, FaStar } from "react-icons/fa6";
import { IoCall } from "react-icons/io5";
import Link from "next/link";
import Image from "next/image";

const Path = (props) => (
  <motion.path
    fill="transparent"
    strokeWidth="3"
    stroke="hsl(0, 0%, 18%)"
    strokeLinecap="round"
    {...props}
  />
);

const Header = () => {
  // states
  const [isOpen, setIsOpen] = useState(false);
  const headerRef = useRef();

  // animation for button
  const buttonVariants = {
    open: {
      top: "2rem",
      left: "2rem",
    },
    closed: {
      top: "2rem",
      left: "2rem",
    },
  };

  // animation for header
  const variants = {
    open: {
      top: "0rem",
      left: "0rem",
      height: "100vh",
      width: "300px",
      borderRadius: "0px",
      overflow: "auto",
    },
    closed: {
      top: "2rem",
      left: "2rem",
      borderRadius: "999px",
      height: "48px",
      width: "48px",
      overflow: "hidden",
    },
  };

  const menus = [
    {
      label: "Home",
      id: "#home",
      icon: <IoMdHome className="w-5 h-5" />,
    },
    {
      label: "About",
      id: "#about",
      icon: <FaUser className="w-5 h-5" />,
    },
    {
      label: "Expertise",
      id: "#expertise",
      icon: <FaStar className="w-5 h-5" />,
    },
    {
      label: "Project",
      id: "#project",
      icon: <FaBriefcase className="w-5 h-5" />,
    },
    {
      label: "Contact",
      id: "#contact",
      icon: <IoCall className="w-5 h-5" />,
    },
  ];

  useEffect(() => {
    const header: any = headerRef.current;
    const afterLoad = () => {
      if (header) {
        setTimeout(() => header.classList.remove("hidden"), 500);
      }
    };

    if (document.readyState === "complete") {
      afterLoad();
    } else {
      window.addEventListener("load", afterLoad);
    }

    return () => window.removeEventListener("load", afterLoad);
  }, []);

  return (
    <header ref={headerRef} className="z-[10000] hidden">
      <motion.button
        onClick={() => setIsOpen(!isOpen)}
        variants={buttonVariants}
        animate={isOpen ? "open" : "closed"}
        transition={{ duration: 0.3 }}
        className="w-[48px] aspect-square rounded-full bg-secondary fixed grid place-items-center z-[100000]"
      >
        <svg width="23" height="23" viewBox="0 0 23 23">
          <Path
            variants={{
              closed: { d: "M 2 2.5 L 20 2.5" },
              open: { d: "M 3 16.5 L 17 2.5" },
            }}
            transition={{ duration: 0.1 }}
          />
          <Path
            d="M 2 9.423 L 20 9.423"
            variants={{
              closed: { opacity: 1 },
              open: { opacity: 0 },
            }}
            transition={{ duration: 0.1 }}
          />
          <Path
            variants={{
              closed: { d: "M 2 16.346 L 20 16.346" },
              open: { d: "M 3 2.5 L 17 16.346" },
            }}
            transition={{ duration: 0.1 }}
          />
        </svg>
      </motion.button>

      {/* variants={variants} animate={isOpen ? 'open' : 'closed'} */}
      <motion.div
        animate={isOpen ? "open" : "closed"}
        variants={variants}
        transition={{ duration: 0.2 }}
        className="bg-secondary fixed z-[10000]"
      >
        <motion.div>
          <ul className="mt-36 px-4 space-y-5 w-full">
            <motion.li
              className="mb-10"
              variants={{
                open: { opacity: 1 },
                closed: { opacity: 0 },
              }}
              transition={{ duration: 0.3 }}
            >
              <Image
                src="/images/logo.webp"
                width={300}
                height={120}
                alt="Logo"
                className="w-2/3 h-auto mx-auto"
              />
            </motion.li>
            {menus.map(({ icon, id, label }, index) => (
              <motion.li
                variants={{
                  open: { transform: "translateY(0%)", opacity: 1 },
                  closed: { transform: "translateY(-50%)", opacity: 0 },
                }}
                key={index}
                transition={{ duration: 0.2, delay: 0.4 + index / 10 }}
                id={id}
                onClick={() => setIsOpen(false)}
              >
                <Link
                  href={id}
                  className="flex items-center py-1.5 px-3 cursor-pointer gap-5 text-primary rounded-md border border-primary hover:bg-primary hover:text-secondary duration-300"
                >
                  {icon}
                  <span className="font-semibold">{label}</span>
                </Link>
              </motion.li>
            ))}
          </ul>
        </motion.div>
      </motion.div>
    </header>
  );
};

export default Header;
