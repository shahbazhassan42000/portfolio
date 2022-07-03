import FooterNav from "./FooterNav";
import leaves from "../../assets/images/hero-design.svg";

const Footer = () => (
    <div id="footer" className="footer relative px-[12%] flex flex-col mt-[151px]">
        <FooterNav/>
        <img className="hidden sm:block absolute left-[-67px] top-[-75px] h-[380px]" src={leaves} alt={'leaves picture'}/>
        <p className="self-center text-[0.6rem] sm:text-[16px] text-white mb-[20px] mt-[90px] sm:mt-[150px]">Copyright © 2021 Maham Zahid All Rights Reserved</p>
    </div>
)


export default Footer;

