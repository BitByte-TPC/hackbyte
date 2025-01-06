"use client";
import { useAnimate } from "framer-motion";
import closesidebar from "@/public/closesidebar.svg";
import opensidebar from "@/public/opensidebar.svg";
import {
  Calendar,
  Handshake,
  House,
  Trophy,
  Users,
  Info,
  Image as Gallery,
  Phone,
} from "lucide-react";
import Image from "next/image";
import { useState, useEffect } from "react";
const sidebarLinks = [
  { name: "Home", icon: <House />, href: "/" },
  { name: "Gallery", icon: <Gallery />, href: "/gallery" },
  { name: "Partners", icon: <Handshake />, href: "/partners" },
  { name: "Prizes", icon: <Trophy />, href: "/prizes" },
  { name: "Schedule", icon: <Calendar />, href: "/schedule" },
  { name: "Humans", icon: <Users />, href: "/humans" },
  { name: "FAQs", icon: <Info />, href: "/faq" },
  { name: "Contact", icon: <Phone />, href: "/contact" },
];

const MobileSidebar = () => {
  const [selectedName, setSelectedName] = useState("Home");
  const [fullyopen, setFullyopen] = useState(false);
  const [open, setOpen] = useState(false);
  const [scope, animate] = useAnimate();

  useEffect(() => {
    setSelectedName(
      sidebarLinks.find((link) => link.href === window.location.pathname).name
    );
    console.log(selectedName);
  }, []);

  useEffect(() => {
    const animateSidebar = async () => {
      if (open) {
        await animate(
          scope.current,
          { height: "400px", width: "65px", borderRadius: "32px" },
          { duration: 0.3 }
        );
        await animate(
          scope.current,
          { width: "170px", borderRadius: "32px" },
          { delay: 0.3 }
        );
        setFullyopen(true);
      } else {
        await animate(
          scope.current,
          { height: "46px", width: "46px", borderRadius: "32px" },
          {
            type: "spring",
            stiffness: 90,
            damping: 15,
          }
        );
        setFullyopen(false);
      }
    };

    animateSidebar();
  }, [open, animate, scope]);

  return (
    <>
      <div
        ref={scope}
        className="backdrop-blur-xl bg-[#222222]   h-[46px] w-[46px] top-14 left-3 fixed rounded-[32px] z-10"
      >
        {open ? (
          <Image
            alt="opensidebar"
            onClick={() => setOpen(!open)}
            src={opensidebar}
            className="absolute right-3 top-3"
          />
        ) : (
          <Image alt="closesidebar" onClick={() => setOpen(!open)} src={closesidebar} />
        )}
        {open && (
          <div className="flex-col justify-between h-full p-5 pt-14 flex overflow-hidden">
            {sidebarLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className={`flex gap-5  ${
                  selectedName === link.name ? "text-white" : "text-white/40"
                }`}
              >
                {link.icon}
                {fullyopen && <span className="">{link.name}</span>}
              </a>
            ))}
          </div>
        )}
      </div>
    </>
  );
};

export default MobileSidebar;