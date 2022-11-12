import FooterData from "./FooterData"

function FooterLinks() {
    return (
        <div className="flex justify-between gap-x-[200px]">
            {FooterData.map((link, index) => {
                return (
                    <div key={index} className="">
                        <p className="font-['Red_Rose'] text-[18px] font-[700] text-[#F7F7F7] leading-[22px] mb-[24px]">{link.header}</p>
                        <a href="#" className={aStyle}>{link.text1}</a>
                        <a href="#" className={aStyle}>{link.text2}</a>
                        <a href="#" className={aStyle}>{link.text3}</a>
                        <a href="#" className={aStyle}>{link.text4}</a>
                    </div>
                )
            })}
        </div>
    );
}

const aStyle = `block font-['Red_Rose'] text-[14px] font-[400] text-[#F1F3F9] leading-[35px] mb-[12px] cursor-pointer`


export default FooterLinks;