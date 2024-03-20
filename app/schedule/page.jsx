import ComingSoon from "@/components/ComingSoon";
import Navbar from "@/components/Navbar";

export const metadata = {
  title: "Schedule | HackByte",
};

export default function Schedule() {
  return (
    <>
      <Navbar />
      <div
        className="flex flex-col min-h-screen bg-cover p-4 md:px-12 md:pt-24 pt-16"
        style={{
          backgroundColor: "#000",
          backgroundImage: "url(/background.png)",
          backgroundAttachment: "fixed",
        }}
      >
        <ComingSoon />
      </div>
    </>
  );
}
