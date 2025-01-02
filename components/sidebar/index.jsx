"use client";
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

export const Sidebar = () => {
  const [selectedName, setSelectedName] = useState("Home");

  useEffect(() => {
    setSelectedName(
      sidebarLinks.find((link) => link.href === window.location.pathname).name
    );
  }, []);

  return (
    <div
      className="fixed left-4 top-[50%] translate-y-[-50%] z-50 group flex flex-col lg:py-2 transition-all duration-300 hover:w-52 lg:w-16"
      style={{
        borderRadius: "2rem",
        background: "rgba(34, 34, 34, 0.50)",
        boxShadow: "0px 0px 80px 0px rgba(0, 0, 0, 0.15)",
        backdropFilter: "blur(20px)",
      }}
    >
      <div className="flex flex-col gap-4 my-2 lg:my-4 hover:items-start pl-1 lg:pl-2 text-supporting-darkGray">
        {sidebarLinks.map((link) => (
          <a
            key={link.name}
            href={link.href}
            className={`flex items-center space-x-4 text-lg p-2 w-12 group-hover:w-44 rounded-[2.5rem] h-10 xl:h-12 hover:shadow-[0_4px_40px_rgba(0,0,0,0.10)] hover:backdrop-blur-[20px] hover:bg-[#4E2529] hover:text-white hover:pl-3 ${
              selectedName === link.name ? "text-white" : ""
            }`}
          >
            {link.icon}
            <span className=" hidden group-hover:inline">{link.name}</span>
          </a>
        ))}
      </div>
    </div>
  );
};
