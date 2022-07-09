import FooterList from "./FooterList"

function Footer() {
    return (
        <div className="bg-[#1D2939] md:px-[112px] sm:px-[16px] pb-[48px] md:pt-[64px] sm:pt-[48px]">
            <FooterList />
            {/* FooterBase start */}
            <div className="flex md:justify-between md:items-center md:flex-row sm:flex-col md:pt-[32px] sm:pt-[32px] md:px-[112px] sm:px-[16px] border-t-[0.5px] border-t-[#3f4859]">
                <div className="flex items-center cursor-pointer">
                    <div className="relative flex justify-center items-center aspect-square w-[32px] border-[0.2px] border-[#D0D5DD] bg-gradient-to-b from-[#FFFFFF] to-[#D0D5DD] rounded-[8px]">
                        <div className="absolute top-[16px] w-[32px] h-[16px] rounded-b-[8px] backdrop-blur-[5px] bg-gray-100 opacity-50 shadow-[0_1px_3px_rgba(16,24,40,0.1)_0_1px_2px_rgba(16,24,40,0.06)]"></div>
                        <div className="flex justify-center items-center aspect-sqare w-[28.08px] rounded-[50%] bg-[#D0D5DD] border-[0.1px]">
                            <div className="aspect-square w-[16px] rounded-[50%] bg-gradient-to-b from-[#53389E] to-[#6941C6]"></div>
                        </div>
                    </div>
                    <h1 className="ml-[9.83px] font-inter text-white font-semibold text-[16px]">Untitled UI</h1>
                </div>
                <h1 className="font-inter text-[#98A2B3] font-[400] text-[16px] leading-[24px] sm:mt-[24px]">
                    © 2077 Untitled UI. All rights reserved.
                </h1>
            </div>
            {/* FooterBase end */}
        </div>
    );
}

export default Footer;