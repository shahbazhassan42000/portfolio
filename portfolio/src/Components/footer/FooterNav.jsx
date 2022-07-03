import logo from '../../assets/images/LOGO.svg'

const FooterNav = () => (
    <div className="navBar  flex flex-initial justify-between my-[6%] sm:my-[4%] sm:w-[70%] sm:mx-auto">
        <a href="#root" className="w-[30px] h-[21px] sm:h-[31px] sm:w-[49px]"><img src={logo} alt="Logo"/></a>
        <div className="flex space-x-[1rem] sm:space-x-[5rem] sm:text-[1.3rem] text-white">
            <a href="#about" className="">About</a>
            <a href="#projects" className="">My Works</a>
            <a href="#footer" className="">Contact</a>
        </div>
    </div>
)


export default FooterNav;

