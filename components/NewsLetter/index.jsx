"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { db } from "@/app/firebase/config";
import { collection, addDoc, getDocs, query, where } from "firebase/firestore";
import { ToastContainer, toast } from "react-toastify";

export default function NewsLetter() {
  const [email, setEmail] = useState("");
  const dbInstance = collection(db, "subscribers");

  function notify(message) {
    toast(message, {
      position: "bottom-right",
      autoClose: 3000,
      hideProgressBar: false,
      progress: undefined,
    });
  }

  const handleSubscribe = async (e) => {
    e.preventDefault();

    if (!email) {
      notify("Please enter your email address");
      return;
    }

    // Email format validation using regex
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      notify("Please enter a valid email address");
      return;
    }

    try {
      // Check if the email already exists in the database
      const querySnapshot = await getDocs(
        query(dbInstance, where("email", "==", email))
      );

      if (!querySnapshot.empty) {
        notify("Email already subscribed");
        return;
      }

      // If the email doesn't exist, add it to the database
      await addDoc(dbInstance, {
        email,
        timestamp: new Date(),
      });

      notify("Subscribed successfully!");
      setEmail("");
    } catch (error) {
      console.error("Error subscribing:", error.message);
      notify("An error occurred. Please try again later.");
    }
  };

  return (
    <>
      <ToastContainer />
      <div className="absolute top-[-9rem] sm:top-[-6rem] w-full flex justify-center">
        <div
          className="w-full flex flex-col justify-between items-start gap-8 
            sm:w-[80%] mx-4 px-3 py-10 md:p-10 lg:p-16 bg-gray-50 rounded-2xl 
            shadow md:flex-row"
        >
          <div className="max-w-xl flex-col justify-start items-start gap-3 inline-flex">
            <div
              className="self-stretch text-gray-900 text-3xl md:text-2xl lg:text-3xl 
                font-medium leading-8"
            >
              Join our newsletter
            </div>
            <div
              className="self-stretch text-slate-600 text-lg md:text-base lg:text-xl 
                font-normal leading-[1.75rem]"
            >
              Sign up to receive updates on our latest events.
            </div>
          </div>

          <div className="flex flex-col justify-start items-start gap-4 lg:flex-row w-full xl:max-w-md">
            <div className="w-full md:max-w-lg flex-col justify-start items-start gap-1.5 inline-flex">
              <input
                type="text"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full py-3 px-3.5 bg-[#ffffff] rounded-lg text-gray-500 
                    border-2 border-[#D0D5DD] focus:outline-purple-300 focus:text-gray-900"
              />
            </div>
            <motion.button
              className="w-full lg:w-32 flex justify-center items-center bg-black 
                text-white text-[1.125rem] font-medium px-8 py-3 rounded-none 
                hover:bg-black hover:text-white"
              style={{
                boxShadow:
                  "0px 1px 1px 0px rgba(0, 0, 0, 0.12), 0px 0px 0px 1px rgba(103, 110, 118, 0.16), 0px 2px 5px 0px rgba(103, 110, 118, 0.08)",
              }}
              whileTap={{ scale: 0.85 }}
              onClick={handleSubscribe}
            >
              Subscribe
            </motion.button>
          </div>
        </div>
      </div>
    </>
  );
}
