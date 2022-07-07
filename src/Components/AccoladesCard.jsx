
function AccoladesCard(props) {
    return (
      <div className="py-[32px] px-[24px] border-[1px] border-[rgba(255,255,255,0.5)] md:w-[341px] md:h-[233px] sm:w-[295px] sm:h-[220px] bg-[rgba(255,255,255,0.3) backdrop-blur-[24px]">
        <h1 className="md:text-[60px] sm:text-[48px] font-[600] text-[#FFFFFF] md:leading-[72px] sm:leading-[60px]">
          {props.main}
        </h1>
        <h3 className="md:text-[18px] font-[600] text-[#FFFFFF] md:leading-[28px] mt-[12px]">
          {props.sub1}
        </h3>
        <p className="md:text-[16px] font-[400] text-[#FFFFFF] leading-[24px] mt-[8px]">
          {props.sub2}
        </p>
      </div>
    );
  }
  
  export default AccoladesCard;
  