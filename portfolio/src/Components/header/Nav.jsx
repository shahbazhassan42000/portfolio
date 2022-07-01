import upwork from '../../assets/images/upwork.svg';
import linkedin from '../../assets/images/linkedin-icon.svg';
import logo from '../../assets/images/LOGO.svg'

const nav = () => (
    <div className="navBar  flex flex-initial justify-between my-[45px] w-full mx-auto">
        <a href="#root"><img src={logo} alt="Logo"/></a>
        <div className="flex space-x-[45px] text-white">
            <a href="#about" className="">About</a>
            <a href="#projects" className="">My Works</a>
            <a href="#footer" className="">Contact</a>
        </div>
        <div className="flex space-x-10">
            <a href="#"><img className="relative mt-[2px] top-1" src={upwork} alt='upworkImg'/></a>
            <a href="#"><img src={linkedin} alt='linkedinImg'/></a>
        </div>

    </div>
)


export default nav;

