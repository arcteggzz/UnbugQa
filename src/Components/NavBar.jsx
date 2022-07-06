import Logo from "./Logo";
import { RiArrowDownSLine } from "react-icons/ri";
import { GiHamburgerMenu } from "react-icons/gi";



function NavBar() {

  return (
    <nav className="flex items-center justify-between md:h-[80px] sm:h-[72px] border-b-[1px] border-b-[#F2F4F7] md:px-[112px] sm:pl-[20px] sm:pr-[23px]">
        <div className="flex items-center">
            <Logo/>
            <div className="md:flex sm:hidden font-inter space-x-[32px] ml-[40.73px]">
                <a href="/" className={aStyle}>Home</a>
                <div className="flex items-center cursor-pointer">
                    <a href="/" className={aStyle}>Resources</a>
                    < RiArrowDownSLine className="ml-[13px] text-[#667085] text-[20px]"/>
                </div>
                <div className="flex items-center cursor-pointer">
                    <a href="/" className={aStyle}>Resources</a>
                    < RiArrowDownSLine className="ml-[13px] text-[#667085] text-[20px]"/>
                </div>
                <a href="/" className={aStyle}>Pricing</a>
            </div>
        </div>
        <div className=" md:flex sm:hidden flex items-center">
            <a href="/" className={aStyle}>Log in</a>
            <button className="ml-[30px] text-white font-500 text-[16px] bg-[#7F56D9] rounded-[8px] px-[18px] py-[10px]">Sign up</button>
        </div>
        <GiHamburgerMenu className="md:hidden sm:block text-[#667085] text-[35px] hover:text-[#7F56D9]"/>
    </nav>
  );
}
const aStyle = `text-[16px] font-[500] text-[#667085]`

export default NavBar;