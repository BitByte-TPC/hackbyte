const Loading = () => {
  const elements = ["N", "I", "D", "A", "O", "L"];
  return (
    <div className="relative bg-black h-screen ">
      <div className=" fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 ">
        <div className=" absolute w-[600px] h-[36px] left-1/2 top-[40%] -ml-[300px] overflow-visible select-none cursor-default ">
          {elements.map((element, index) => (
            <div
              key={index}
              className=" absolute w-[48px] h-[56px] opacity-0 font-semibold animate-move rotate-180 text-[#006eff] font-sans "
              style={{
                animationDelay: `${200 * index}ms`,
              }}
            >
              {element}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
export default Loading;
