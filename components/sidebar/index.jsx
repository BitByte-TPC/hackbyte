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
import Link from "next/link";
import { usePathname } from "next/navigation";

const sidebarLinks = [
  { name: "Home", icon: <House className="w-auto h-auto monitor:w-8 monitor:h-8" />, href: "/" },
  { name: "Gallery", icon: <Gallery className="w-auto h-auto monitor:w-8 monitor:h-8" />, href: "/gallery" },
  { name: "Partners", icon: <Handshake className="w-auto h-auto monitor:w-8 monitor:h-8" />, href: "/partners" },
  //{ name: "Prizes", icon: <Trophy className="w-auto h-auto monitor:w-8 monitor:h-8" />, href: "/prizes" },
  //{ name: "Schedule", icon: <Calendar className="w-auto h-auto monitor:w-8 monitor:h-8" />, href: "/schedule" },
  { name: "Humans", icon: <Users className="w-auto h-auto monitor:w-8 monitor:h-8" />, href: "/humans" },
  { name: "FAQs", icon: <Info className="w-auto h-auto monitor:w-8 monitor:h-8" />, href: "/faq" },
  { name: "Contact", icon: <Phone className="w-auto h-auto monitor:w-8 monitor:h-8" />, href: "/contact" },
];

export const Sidebar = () => {
  const pathname = usePathname();

  return (
    <div
      className="fixed md:left-2 lg:left-4 top-[50%] translate-y-[-50%] z-50 group flex flex-col lg:py-2 transition-all ease-in-out duration-300 hover:w-52 lg:w-16"
      style={{
        borderRadius: "2rem",
        background: "rgba(34, 34, 34, 0.50)",
        boxShadow: "0px 0px 80px 0px rgba(0, 0, 0, 0.15)",
        backdropFilter: "blur(20px)",
      }}
    >
      <div className="flex flex-col gap-4 xl:gap-4 monitor:gap-6 my-2 lg:my-4 hover:items-start pl-1 lg:pl-2 text-supporting-darkGray">
        {sidebarLinks.map((link) => (
          <Link
            key={link.name}
            href={link.href}
            className={`flex items-center space-x-4 text-lg p-2 w-12 group-hover:w-44 rounded-[2.5rem] h-10 xl:h-12 hover:shadow-[0_4px_40px_rgba(0,0,0,0.10)] hover:backdrop-blur-[20px] hover:bg-[#4E2529] hover:text-white hover:pl-3 hover:scale-105 transition duration-300 ease-in-out ${
              pathname === link.href ? "text-white font-bold" : ""
            }`}
          >
            {link.icon}
            <span className=" hidden group-hover:inline">{link.name}</span>
          </Link>
        ))}
      </div>
    </div>
  );
};
