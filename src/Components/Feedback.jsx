import maggi from "../Data/maggi.jpg"
import { FaStar } from "react-icons/fa"

function Feedback() {
    return (
      <div className="md:py-[96px] sm:py-[64px] md:px-[208px] sm:px-[16px] text-center">
        <h1 className="md:text-[36px] sm:text-[30px] font-[500] text-[#101828] sm:px-[16px] md:leading-[60px] sm:leading-[30px]">
          Love the simplicity of the service and the prompt customer support. We can’t imagine working without it.
        </h1>
        <div className="flex flex-col items-center mt-[32px]">
          <img src={maggi} alt="avatar" className="w-[64px] h-[64px] rounded-full" />
          <h2 className="text-[18px] font-[500] text-[#101828] sm:px-[16px] leading-[28px] md:mt-[16px] text-center">Kelly Williams</h2>
          <h2 className="text-[16px] font-[400] text-[#101828] sm:px-[16px] leading-[24px] md:mt-[4px] text-center">Head of Design, Layers</h2>
        </div>
        <div className="flex justify-center gap-x-[4px] mt-[16.5px]">
          <FaStar className={iconstyle} />
          <FaStar className={iconstyle} />
          <FaStar className={iconstyle} />
          <FaStar className={iconstyle} />
          <FaStar className={iconstyle} />
        </div>
        <div className="flex justify-center gap-x-[16px] mt-[39.5px]">
          <div className="w-[10px] aspect-square rounded-full bg-[#6941C6]"></div>
          <div className="w-[10px] aspect-square rounded-full bg-[#F2F4F7]"></div>
          <div className="w-[10px] aspect-square rounded-full bg-[#F2F4F7]"></div>
        </div>
      </div>
    );
  }
  const iconstyle = `text-[#FEC84B] text-[20px]`
  
  export default Feedback;
  