import CountAnimation from "../CountAnimation";

export default function StatisticCard({ number, label, description }) {
  return (
    <div className="flex flex-col items-center gap-4">
      <CountAnimation targetValue={number} />
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
