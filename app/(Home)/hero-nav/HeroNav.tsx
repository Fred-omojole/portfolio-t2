import Link from "next/link";
import React from "react";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";

const HeroNav = () => {
  interface SocialProps {
    link: string;
    label: string;
    icon: React.FC<{ className?: string }>;
  }

  const socials: SocialProps[] = [
    {
      link: "https://www.linkedin.com/in/omojole/",
      label: "linkedin",
      icon: FaLinkedin,
    },

    {
      link: "https://github.com/Fred-omojole/",
      label: "github",
      icon: FaGithub,
    },

    {
      link: "https://www.instagram.com/yele_calls/",
      label: "instagram",
      icon: FaInstagram,
    },
  ];

  return (
    <nav className=" text-dark-grey py-10  flex items-center justify-between w-full px-4 ">
      <h3 className="underline underline-offset-8 -rotate-2 px-1 font-bold hover:no-underline hover:scale-125">Freddy</h3>
      <div className="flex items-center gap-3">
        {socials.map((social, index) => {
          const Icon = social.icon;
          return (
            <Link key={index} href={social.link} target="blank">
              <Icon className="w-8 h-8  hover:scale-125 transition -all" />
            </Link>
          );
        })}
      </div>
    </nav>
  );
};

export default HeroNav;
