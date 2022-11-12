import FooterLinks from "./FooterLinks"
import FooterSocials from "./FooterSocials"

function FooterIdris() {
    return (
        <footer className="flex justify-between bg-[#1D1D1E] w-full md:pl-[112px] md:pr-[200px] sm:px-[16px] md:pt-[60px] sm:pt-[48px] pb-[40px]">
            <FooterSocials />
            <FooterLinks />
        </footer>
    );
}

export default FooterIdris;