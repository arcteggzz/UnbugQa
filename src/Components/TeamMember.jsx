import { FiArrowUpRight } from "react-icons/fi";
import { FaTwitter, FaLinkedin } from "react-icons/fa";
import { BsGlobe2 } from "react-icons/bs";

function TeamMembers(props) {

  const imageStyle = `flex items-end md:h-[480px] md:w-[384px] sm:h-[432px] sm:w-[343px] bg-no-repeat bg-cover bg-center md:p-[24px] sm:p-[16px]`
  const imageExtraStyle = {
      backgroundImage: `${props.image}`
  }
  const iconStyle = `text-[#FFFFFF] text-[20px] cursor-pointer`

  return (
    <div className={imageStyle} style={imageExtraStyle}>
      <div className="py-[24px] md:px-[20px] sm:px-[16px] border-[1px] border-[rgba(255,255,255,0.5)] md:w-[336px] md:h-[238px] sm:w-[311px] sm:h-[204px] bg-[rgba(255,255,255,0.3) backdrop-blur-[24px]">
        <div className="flex justify-between items-center sm:mb-[12px]">
          <h1 className="md:text-[30px] sm:text-[24px] font-[600] text-[#FFFFFF] md:leading-[38px] sm:leading-[32px]">{props.name}</h1>
          <FiArrowUpRight className="text-[#FFFFFF] text-[20px] cursor-pointer"/>
        </div>
        <h2 className="md:text-[18px] sm:text-[16px] font-[600] text-[#FFFFFF] md:leading-[28px] sm:leading-[24px] mb-[4px]">{props.position}</h2>
        <p className="md:text-[16px] sm:text-[14px] font-[400] text-[#FFFFFF] md:leading-[24px] sm:leading-[20px] md:mb-[32px] sm:mb-[24px]">{props.roles}</p>
        <div className="flex md:space-x-[20px] sm:space-x-0 items-center">
          <FaTwitter className={iconStyle}/>
          <FaLinkedin className={iconStyle}/>
          <BsGlobe2 className={iconStyle}/>
        </div>
      </div>
    </div>
  );
}
  
export default TeamMembers;