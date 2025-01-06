"use client";
import Image from "next/image";
import HB3Logo from "@/public/HomePageLogo/HB3Logo.svg";
import { useState } from "react";
import axios from "axios";
import { useToast } from "@/hooks/use-toast";

export default function Newsletter() {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);

  const host = process.env.NEXT_PUBLIC_HOST;
  const { toast } = useToast();

  const handleSubmit = async (e) => {
    e.preventDefault();

    setLoading(true);
    try {
      const res = await axios.post(`${host}/api/subscribe`, { email });

      const data = res.data;
      console.log(data);
      

      if (data.success) {
        setEmail("");
        toast({
          title: "Subscription successful!",
          description: "You have successfully subscribed to our mailing list.",
        });
      } else {
      }
    } catch (error) {
      console.error(error);
      toast({
        title: "Subscription failed!",
        description: "Your email is Invalid -_- Please try again.",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="w-full flex flex-col justify-center items-center gap-16 relative">
      <div className=" bg-[#FF3044] rounded-[32px] w-[80%] h-[368px] md:h-[500px] lg:h-[550px] transform rotate-3 -z-10"></div>
      <div className="bg-white rounded-[32px] absolute top-0 w-[80%] md:h-[500px] lg:h-[550px] -rotate-[5deg] flex flex-col gap-2 md:gap-8 px-4 md:px-8 lg:px-12 py-4 lg:py-8">
        <div className="text-2xl md:text-4xl min-[1540px]:text-6xl xl:text-5xl font-bold mb-2">
          Join our mailing list!
        </div>
        <p className="text-[#161616] mb-4 text-base md:text-xl lg:text-2xl min-[1540px]:text-3xl font-normal max-w-full md:max-w-[90%] leading-[140%]">
          To stay up-to-date with{" "}
          <span className="font-bold ">HackByte 3.0</span>, consider subscribing
          to our mailing list. Helps us share important updates right away with
          hackers and enthusiasts alike!
        </p>
        <div className="flex justify-between items-start">
          <ul className="space-y-2 md:space-y-8 text-[#FF3044] font-bold text-base md:text-lg min-[1540px]:text-2xl xl:text-xl leading-[140%]">
            <li className="flex items-center">
              <span className="mr-2 text-xl text-black">O</span> Be the first
              ones to register for HackByte 3.0
            </li>
            <li className="flex items-center">
              <span className="mr-2 text-xl text-black">O</span> Get updates
              about your application status
            </li>
            <li className="flex items-center">
              <span className="mr-2 text-xl text-black">O</span> Get notified
              for exciting events!
            </li>
          </ul>

          <Image
            src={HB3Logo}
            alt="HackByte 3.0 Logo"
            className="mt-12 lg:mt-16 min-[1540px]:mt-0 xl:mt-20 md:w-40 lg:w-48 min-[1540px]:w-72 xl:w-64 hidden md:block"
          />
        </div>
      </div>

      <form
        onSubmit={handleSubmit}
        className="w-[90%] md:w-[80%] my-4 md:my-16 pl-4 md:pl-8 pr-2 md:pr-4 py-2 md:py-4 bg-white rounded-[32px] justify-between items-center inline-flex md:flex-row flex-col gap-4 md:gap-0"
      >
        <input
          className="text-supporting-mediumGray bg-supporting-lightGray md:bg-white rounded-[32px] px-4 md:px-2 text-base md:text-2xl font-normal leading-[33px] w-full mr-4 focus:outline-none ml-4 md:ml-0 mt-2 md:mt-2 py-1 md:py-0"
          type="text"
          placeholder="Enter your email here"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <button
          type="submit"
          disabled={loading}
          className="text-white w-full md:w-auto text-lg md:text-2xl font-bold leading-[33px] px-4 md:px-8 py-1 md:py-[12px] bg-[#ff3044] rounded-3xl"
        >
          {loading ? "Subscribing..." : "Subscribe"}
        </button>
      </form>
    </div>
  );
}
