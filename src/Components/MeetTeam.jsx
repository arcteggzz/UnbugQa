import TeamMembers from "./TeamMembers";
function MeetTeam() {

    return (
      <div className="md:py-[96px] sm:py-[64px] text-center sm:px-[16px]">
        <h1 className="text-[36px] font-[700] text-[#101828] sm:px-[16px] md:leading-[60px] sm:leading-[44px]">Meet our team</h1>
        <p className="text-[20px] font-[400] text-[#667085] md:mt-[20px] sm:mt-[16px] md:leading-[30px] sm:leading-[28px] md:px-[336px] sm:px-[16px]">
            Our philosophy is simple — hire a team of diverse, passionate people and foster a culture that empowers you to do you best work.
        </p>
        <div className="flex md:flex-row sm:flex-col-reverse md:justify-center md:mt-[40px] sm:mt-[32px]">
            <button className="text-[#344054] font-500 text-[16px] bg-none rounded-[8px] md:px-[20px] py-[12px] border-[1px] md:mr-[12px] border-[#D0D5DD] shadow-[0_1px_2px_rgba(16,24,40,0.05)]">Read our principles</button>
            <button className="text-white font-500 text-[16px] bg-[#7F56D9] rounded-[8px] md:px-[20px] py-[12px] sm:mb-[12px] md:mb-0">We’re hiring!</button>
        </div>
        <TeamMembers />
      </div>
    );
  }
  
  export default MeetTeam;