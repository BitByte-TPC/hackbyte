import Navbar from "@/components/Navbar";
import ComingSoon from "@/components/ComingSoon";

export const metadata = {
  title: "Schedule | HackByte",
};

export default function Schedule() {
  return (
    <div
      className="flex flex-col min-h-screen md:min-h-fit
        bg-cover p-4 md:px-12 md:pt-8"
      style={{
        backgroundColor: "#000",
        backgroundImage: "url(/background.png)",
        backgroundAttachment: "fixed",
      }}
    >
      <Navbar />
      <ComingSoon />
    </div>
  );
}
