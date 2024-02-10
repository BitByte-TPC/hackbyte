import React from "react";
import dynamic from "next/dynamic";
import Loading from "@/components/Loader";

const Home = dynamic(() => import("../app/Home"), {
  loading: () => <Loading />,
  ssr: false,
});
const HomePage = () => {
  return <Home />;
};

export default HomePage;