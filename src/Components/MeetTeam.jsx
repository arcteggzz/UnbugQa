import TeamMember from "./TeamMember";
import TeamMembersData from "../Data/TeamMembers.js";
function MeetTeam() {

  const imageData = [
    "url(https://bafybeiaihi3zlsfoa4x6rqhtunypiq2ccft7pmwhop6agxxvcnqhhvsdmm.ipfs.infura-ipfs.io/)",
    "url(https://bafybeihyhc5sn4xhx42zncllyqa6hzmwptjl4xhpeejkruoxhehkbkcjei.ipfs.infura-ipfs.io/)",
    "url(https://bafybeibogwxdvohmomdaajlfs6h7dps4s3vtciemyvww2mcubvu7d2vnlu.ipfs.infura-ipfs.io/)",
    "url(https://bafybeifu4nyzw6uxaae4rk2vxoq7psjxefjpwmeiitmsknmh7svwjwlevu.ipfs.infura-ipfs.io/)",
    "url(https://bafybeid3egcozej4h33theryvia27hrzhhyiurozwjekdaztokefqq44r4.ipfs.infura-ipfs.io/)",
    "url(https://bafybeihv7ijy6jniaszyqz26vyev2qbr3wldczj5ih5tio2hohh3n5kxca.ipfs.infura-ipfs.io/)"
  ]

  return (
    <div className="md:py-[96px] sm:py-[64px] md:px-[112px] sm:px-[16px]">
      <h1 className="text-[36px] font-[700] text-[#101828] sm:px-[16px] md:leading-[60px] sm:leading-[44px] text-center">Meet our team</h1>
      <p className="text-[20px] font-[400] text-[#667085] md:mt-[20px] sm:mt-[16px] md:leading-[30px] sm:leading-[28px] md:px-[336px] sm:px-[16px] text-center">
          Our philosophy is simple — hire a team of diverse, passionate people and foster a culture that empowers you to do you best work.
      </p>
      <div className="flex md:flex-row sm:flex-col-reverse md:justify-center md:mt-[40px] sm:mt-[32px] text-center">
          <button className="text-[#344054] font-500 text-[16px] bg-none rounded-[8px] md:px-[20px] py-[12px] border-[1px] md:mr-[12px] border-[#D0D5DD] shadow-[0_1px_2px_rgba(16,24,40,0.05)]">Read our principles</button>
          <button className="text-white font-500 text-[16px] bg-[#7F56D9] rounded-[8px] md:px-[20px] py-[12px] sm:mb-[12px] md:mb-0">We’re hiring!</button>
      </div>
      <div className="md:grid md:grid-cols-3 sm:flex sm:flex-col sm:items-center md:gap-x-[32px] md:gap-y-[64px] sm:gap-y-[24px] md:pt-[64px] sm:pt-[48px]">
        {TeamMembersData.map((member, index)=>{
          return (
            <TeamMember
              key={index}
              name = {member.Name}
              position = {member.Position}
              roles = {member.Roles}
              image= {imageData[index]}
            />
          )
        })}
      </div>
      
    </div>
  );
}
  
  export default MeetTeam;