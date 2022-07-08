
function Logo() {

  return (
    <div className="flex items-center cursor-pointer">
        <div className="relative flex justify-center items-center aspect-square w-[32px] border-[0.2px] border-[#D0D5DD] bg-gradient-to-b from-[#FFFFFF] to-[#D0D5DD] rounded-[8px]">
            <div className="absolute top-[16px] w-[32px] h-[16px] rounded-b-[8px] backdrop-blur-[5px] bg-gray-100 opacity-50 shadow-[0_1px_3px_rgba(16,24,40,0.1)_0_1px_2px_rgba(16,24,40,0.06)]"></div>
            <div className="flex justify-center items-center aspect-sqare w-[28.08px] rounded-[50%] bg-[#D0D5DD] border-[0.1px]">
                <div className="aspect-square w-[16px] rounded-[50%] bg-gradient-to-b from-[#53389E] to-[#6941C6]"></div>
            </div>
        </div>
        <h1 className="ml-[9.83px] font-inter font-semibold text-[16px]">Untitled UI</h1>
    </div>
  );
}

export default Logo;