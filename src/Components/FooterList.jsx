import FooterData from "../Data/FooterData";
import FooterObjects from "./FooterObjects";

function FooterList() {
    return (
        <div className="md:flex md:justify-between sm:grid sm:grid-cols-2 sm:">
            {FooterData.map((data, index) => {
                return (
                    <FooterObjects 
                        key={index}
                        header={data.header}
                        text1={data.text1}
                        text2={data.text2}
                        text3={data.text3}
                        text4={data.text4}
                        text5={data.text5}
                        text6={data.text6}
                        new={data.new}
                    />
                )
            })}
        </div>
    );
}

export default FooterList;