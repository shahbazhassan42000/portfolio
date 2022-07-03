import Nav from "./Nav";
import scroll from '../../assets/images/scroll.svg'
import leaves from '../../assets/images/hero-design.svg'

const Header = () => {

    return (
        <div className="relative  sm:px-[12%] flex flex-col sm:h-[100vh]">
            <Nav/>
            <div className="headerBox absolute top-0 left-0 h-[60vh] sm:h-[100vh] w-full sm:w-[70%] -z-10">
                <img className="hidden sm:block relative left-[60vw] top-[40vh] h-[29.5vw]" src={leaves} alt={'leaves picture'}/>
            </div>
            <h1 className="mt-[20px] sm:mt-[0px] text-center sm:text-left self-center sm:self-start font-bold text-white text-[2.2rem] sm:text-[4vw]">
                Web-crafting<br/>Memorable<br/>Experiences
            </h1>
            <h2 className="self-center sm:self-start title mt-[40px] sm:mt-[3.62rem] text-[1rem] sm:text-[1.5vw] text-[#B42D55]">
                Meet Maham Zahid
            </h2>
            <a href="#" className="self-center sm:self-start mt-[40px] sm:mt-[5rem]">
                <img src={scroll} alt="scroll icon"/>
            </a>
        </div>
    )
}


export default Header;

