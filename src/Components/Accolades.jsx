import AccoladesCard from "./AccoladesCard";
import AccoladesData from "../Data/AccoladesData";

function Accolades() {
  return (
    <div className="text-center md:py-[96px] sm:py-[64px] flex flex-col items-center">
        <h2 className="text-center text-[14px] font-[500] text-[#6941C6] mb-[12px] md:leading-[24px] sm:leading-[20px] md:py-[4px] sm:py-[2px] md:px-[12px] sm:px-[10px] bg-[#F9F5FF] rounded-[16px] md:w-[116px]">
            Launch faster
        </h2>
        <h1 className="text-[36px] font-[700] text-[#101828] sm:px-[16px] md:leading-[60px] sm:leading-[44px] md:mt-[20px] sm:mt-[18px]">
            We're only just getting started on our journey
        </h1>
        <p className="text-[20px] font-[400] text-[#667085] md:mt-[20px] sm:mt-[16px] md:leading-[30px] sm:leading-[28px] md:px-[336px] sm:px-[16px]">
            Everything you need to build modern UI and great products. 
        </p>
        <div className="md:grid md:grid-cols-3 sm:flex sm:flex-col sm:items-center md:gap-x-[32px] sm:gap-y-[32px] md:mt-[64px] sm:mt-[48px] bg-[url(https://bafybeie52vtktfoewerrr3l6smiwu5vrkletgren65bhp66admmypgjhz4.ipfs.infura-ipfs.io/)] md:h-[360px] sm:h-[788px] md:w-[1216px] sm:w-[343px] md:p-[64px] sm:py-[32px] sm:px-[24px]">
            {AccoladesData.map((acccolade, index) => {
                return (
                    <AccoladesCard
                        key={index}
                        main = {acccolade.main}
                        sub1 = {acccolade.sub1}
                        sub2 = {acccolade.sub2}
                    />
                )
            })}
        </div>
    </div>
  );
}
export default Accolades;
