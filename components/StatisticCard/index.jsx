export default function StatisticCard({ number, label, description }) {
  return (
    <div className="flex flex-col items-center gap-4">
      <p
        className="font-medium text-[3rem] md:text-[4rem] leading-[3rem]"
        style={{
          background:
            "linear-gradient(80deg, #D06D30 6.67%, #FFD887 28.13%, #FFDCAD 64.87%, #FAB858 95.66%)",
          backgroundClip: "text",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
        }}
      >
        {number}
      </p>
      <div className="flex flex-col items-center gap-1">
        <p className="text-[#F5F0D8] font-medium text-[1.5rem] md:text-[1.875rem]">
          {label}
        </p>
        <p
          className="text-[#D1CAC7] font-normal text-center text-[1rem] 
            md:text-[1.125rem]"
        >
          {description}
        </p>
      </div>
    </div>
  );
}
