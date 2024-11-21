import React from "react";
import {
  FaFacebookF,
  FaGithub,
  FaInstagram,
  FaLinkedin,
  FaWhatsapp,
} from "react-icons/fa6";
import Image from "next/image";

const Hero = () => {
  const links = [
    {
      Icon: FaFacebookF,
      link: "https://www.facebook.com/palashnath880",
    },
    {
      Icon: FaLinkedin,
      link: "https://www.linkedin.com/in/palashnath880/",
    },
    {
      Icon: FaInstagram,
      link: "https://www.instagram.com/palashnath880/",
    },
    {
      Icon: FaGithub,
      link: "https://www.github.com/palashnath880/",
    },
  ];

  return (
    <>
      <section className="max-lg:h-[80vh] h-screen w-full relative">
        <style>
          {`
          @media not all and (min-width: 1024px){
            .mobile_clip{
              clip-path: polygon(0% 25%, 100% 0%, 100% 100%, 0% 100%);
            }
          }
        `}
        </style>
        <div
          className="bg-primary absolute w-full h-full top-0 left-0 hidden lg:block -z-10"
          style={{
            clipPath: `polygon(55% 0%, 100% 0%, 100% 100%, 45% 100%)`,
          }}
        ></div>
        <div className="max-lg:h-[80vh] h-screen w-full lg:grid lg:place-items-center">
          <div className="max-lg:w-full lg:container h-full lg:px-5 mx-auto flex max-lg:flex-col-reverse items-center">
            <div className="w-full lg:w-1/2 px-5 py-5 mobile_clip max-lg:bg-primary max-lg:bg-opacity-85 max-sm:pt-[25%] max-lg:pt-[15%] max-lg:absolute max-lg:bottom-0 max-lg:left-0">
              <div className="flex flex-col ">
                <p className="font-medium text-lg max-lg:text-secondary">Hi,</p>
                <div className="flex flex-col my-6">
                  <h1 className="text-primary text-4xl font-bold max-lg:text-secondary">
                    Palash Nath
                  </h1>
                  <p className="text-primary max-lg:text-secondary text-base">
                    Front-end Developer
                  </p>
                </div>
                <div className="flex items-center">
                  {links.map((link, index) => (
                    <a
                      key={index}
                      className="grid place-items-center cursor-pointer w-10 h-10 rounded-full bg-primary max-lg:text-secondary bg-opacity-0 hover:bg-opacity-10 transition duration-200"
                    >
                      <link.Icon className="w-6 h-6" />
                    </a>
                  ))}
                  <a className="text-secondary max-sm:hidden bg-[#25D366] rounded-full py-2 px-3 flex items-center gap-2 cursor-pointer ml-2">
                    <FaWhatsapp className="w-6 h-6" />
                    <span className="text-sm font-medium">
                      Connect on Whatsapp
                    </span>
                  </a>
                </div>
              </div>
            </div>
            <div className="w-full lg:w-1/2 lg:px-5 h-full">
              <div className="flex h-full flex-col justify-end max-lg:pt-10">
                <Image
                  src={"/images/hero.png"}
                  alt="Hero Thumbnail"
                  width={400}
                  height={400}
                  className="mx-auto h-full lg:h-3/4 w-auto object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
