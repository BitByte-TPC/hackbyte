import ComingSoon from "@/components/ComingSoon";

export const metadata = {
  title: "Humans | HackByte",
};

export default function Team() {
  return (
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
  );
}
