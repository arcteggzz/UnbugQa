

function FooterObjects(props) {
    return (
        <div className="flex flex-col text-white gap-y-[12px] sm:mb-[32px]">
            <h1 className="font-[600] text-[14px] leading-[20px] text-[#98A2B3] mb-[16px]">{props.header}</h1>
            <p className={pStyle}>{props.text1}</p>
            <p className={pStyle}>{props.text2}</p>
            <div className="flex">
                <p className={pStyle}>{props.text3}</p>
                <p className={`${(props.new === "false" ? "hidden" : "block")} text-center text-[12px] font-[500] text-[#FFFFFF] leading-[18px] py-[2px] px-[8px] bg-white opacity-30 rounded-[16px] ml-[8px] border-[rgba(255, 255, 255, 0.3)] border-[1px]`}>
                    New
                </p>
            </div>
            <p className={pStyle}>{props.text4}</p>
            <p className={pStyle}>{props.text5}</p>
            <p className={pStyle}>{props.text6}</p>
        </div>
    );
}

const pStyle = `font-[500] text-[16px] leading-[24px] text-[#EAECF0]`


export default FooterObjects;