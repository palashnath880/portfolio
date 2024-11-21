"use client";

import React, { useState } from "react";
import {
  FaEnvelope,
  FaFacebookF,
  FaGithub,
  FaGlobe,
  FaInstagram,
  FaLinkedin,
  FaPhone,
} from "react-icons/fa6";
import { toast } from "react-toastify";
import { motion } from "framer-motion";
import SectionHead from "./SectionHead";

type InputProps = {
  type: "email" | "text" | "textarea";
  value: string;
  onChange: (val: string) => void;
  placeholder: string;
};

const Input = ({ type, onChange, value, placeholder }: InputProps) => {
  if (type === "textarea") {
    return (
      <textarea
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        required
        className="bg-transparent text-sm border-primary border outline-none rounded-xl px-4 py-3 text-primary font-medium h-52 resize-none"
      ></textarea>
    );
  }

  return (
    <input
      onChange={(e) => onChange(e.target.value)}
      value={value}
      placeholder={placeholder}
      type={type}
      required
      className="bg-transparent border-primary text-sm border outline-none rounded-full px-4 py-3 text-primary font-medium"
    />
  );
};

const Contact = () => {
  // states
  const [inputData, setInputData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [submitting, setSubmitting] = useState(false);

  // get in touch links
  const links = [
    {
      title: "Get In Touch",
      links: [
        {
          Icon: FaEnvelope,
          link: "mailto:palashnath880@gmail.com",
          label: "palashnath880@gmail.com",
        },
        {
          Icon: FaPhone,
          link: "tel:+8801304780828",
          label: "+8801304780828",
        },
        {
          Icon: FaGlobe,
          link: "",
          label: "Chittagong, Bangladesh",
        },
      ],
    },
    {
      title: "Connect with me",
      links: [
        {
          Icon: FaLinkedin,
          link: "https://www.linkedin.com/in/palashnath880/",
          label: "Linkedin",
        },
        {
          Icon: FaGithub,
          link: "https://github.com/palashnath880/",
          label: "GitHub",
        },
        {
          Icon: FaFacebookF,
          link: "https://www.facebook.com/palashnath880",
          label: "Facebook",
        },
        {
          Icon: FaInstagram,
          link: "https://www.instagram.com/palashnath880",
          label: "Instagram",
        },
      ],
    },
  ];

  // framer motion animation
  const animate = {
    initial: { opacity: 0, transform: "translateY(10%)" },
    whileInView: { opacity: 1, transform: "translateY(0%)" },
  };

  // send query
  const sendQuery = async (e) => {
    e.preventDefault();

    const toastId = toast.loading("Sending...", {
      className: "!bg-primary !text-sm !text-secondary !font-light",
      theme: "dark",
    });

    try {
      setSubmitting(true);

      const res = await fetch("/api/contact-query", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(inputData),
      });

      if (res.ok) {
        await res.json();
        setInputData({ name: "", email: "", subject: "", message: "" });
        toast.success("Your query sent successfully. I'll contact you soon", {
          icon: false,
          className: "!bg-primary !text-sm !text-secondary !font-light",
          theme: "dark",
        });
      }
    } catch (err) {
      console.error(err);
    } finally {
      toast.dismiss(toastId); // close pending toast
      setSubmitting(false);
      toast.error("Sorry! Your query couldn't be sent successfully.", {
        icon: false,
        className: "!bg-primary !text-sm !text-secondary !font-light",
        theme: "dark",
      });
    }
  };

  return (
    <section id="contact">
      <div className="container mx-auto px-5 py-20">
        <SectionHead
          title="Contact Me"
          subtitle="Let’s build something amazing together! Feel free to reach out if you have a question, want to discuss a project, or want to say hello. I’d love to hear from you."
        />
        <div className="flex max-md:flex-col gap-10 md:justify-around mt-10">
          {/* get in touch */}
          <div className="flex flex-col gap-5 items-start">
            {links.map(({ links: items, title }, index) => (
              <div key={index}>
                <h4 className="text-xl text-primary">{title}</h4>
                <ul className="pl-4 mt-4 space-y-3">
                  {items.map(({ Icon, link, label }, subIndex) => (
                    <li
                      key={subIndex}
                      className="flex gap-2 items-center text-sm text-primary text-opacity-65 hover:text-opacity-100 duration-200"
                    >
                      <span className="w-5">
                        <Icon className="h-4 w-4" />
                      </span>
                      <a href={link} target="_blank">
                        {label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* contact form */}
          <div className="w-full md:w-1/3">
            <div className="rounded-lg">
              <form onSubmit={sendQuery}>
                <div className="flex flex-col gap-6">
                  <h3 className="text-lg">Send a message</h3>
                  <motion.div {...animate} className="flex flex-col gap-3">
                    <Input
                      placeholder="Your Name"
                      type="text"
                      value={inputData.name}
                      onChange={(e) =>
                        setInputData({
                          ...inputData,
                          name: e,
                        })
                      }
                    />
                  </motion.div>
                  <motion.div
                    {...animate}
                    transition={{ delay: 0.2 }}
                    className="flex flex-col gap-3"
                  >
                    <Input
                      placeholder="Your Email"
                      type="email"
                      value={inputData.email}
                      onChange={(e) =>
                        setInputData({
                          ...inputData,
                          email: e,
                        })
                      }
                    />
                  </motion.div>
                  <motion.div
                    {...animate}
                    transition={{ delay: 0.2 }}
                    className="flex flex-col gap-3"
                  >
                    <Input
                      placeholder="Subject"
                      type="text"
                      value={inputData.subject}
                      onChange={(e) =>
                        setInputData({
                          ...inputData,
                          subject: e,
                        })
                      }
                    />
                  </motion.div>
                  <motion.div
                    {...animate}
                    transition={{ delay: 0.2 }}
                    className="flex flex-col gap-3"
                  >
                    <Input
                      placeholder="Message"
                      type="textarea"
                      value={inputData.message}
                      onChange={(e) =>
                        setInputData({
                          ...inputData,
                          message: e,
                        })
                      }
                    />
                  </motion.div>
                  <motion.div {...animate} transition={{ delay: 0.2 }}>
                    <button
                      disabled={submitting}
                      type="submit"
                      className="rounded-full text-sm w-full outline-none px-10 py-3 border-2 border-primary text-primary font-medium disabled:opacity-60"
                    >
                      {submitting ? "Sending ..." : "Send"}
                    </button>
                  </motion.div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
