import logo from '../../assets/images/LOGO.svg'

const FooterNav = () => (
    <div className="navBar  flex flex-initial justify-between my-[45px] w-[70%] mx-auto">
        <a href="#root"><img src={logo} alt="Logo"/></a>
        <div className="flex space-x-[45px] text-white">
            <a href="#about" className="">About</a>
            <a href="#projects" className="">My Works</a>
            <a href="#footer" className="">Contact</a>
        </div>
    </div>
)


export default FooterNav;

