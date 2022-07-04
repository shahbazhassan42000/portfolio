import upwork from '../../assets/images/upwork.svg';
import linkedin from '../../assets/images/linkedin-icon.svg';
import logo from '../../assets/images/LOGO.svg'

const nav = () =>{
    return (
        <div className="flex flex-initial  justify-evenly sm:justify-between my-[4%] sm:w-full sm:mx-auto">
            <a className="" href="#root"><img className="w-[30px] h-[21px] sm:h-[31px] sm:w-[49px]" src={logo} alt="Logo"/></a>
            <div className="flex space-x-[1rem] sm:space-x-[5rem] sm:text-[1.3rem] text-white">
                <a href="#about" className="">About</a>
                <a href="#projects" className="">My Works</a>
                <a href="#footer" className="">Contact</a>
            </div>
            <div className="hidden sm:flex space-x-[3rem]">
                <a href="#"><img className="relative mt-[0.4rem]" src={upwork} alt='upworkImg'/></a>
                <a href="#"><img className="mt-[0.2rem]" src={linkedin} alt='linkedinImg'/></a>
            </div>

        </div>
    )
}


export default nav;

