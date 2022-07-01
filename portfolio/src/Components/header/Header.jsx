import Nav from "./Nav";
import scroll from '../../assets/images/scroll.svg'
import leaves from '../../assets/images/hero-design.svg'

const Header = () => (
    <div className="relative px-32 flex flex-col h-[100vh]">
        <Nav/>
        <div className="headerBox absolute top-0 left-0 h-[100vh] w-[70%] -z-10">
            <img className="relative left-[82%] top-[40vh] h-[380px]" src={leaves} alt={'leaves picture'}/>
        </div>
        <h1 className="font-bold text-white text-[46px]">
            Web-crafting<br/>Memorable<br/>Experiences
        </h1>
        <h2 className="title mt-[40px]  text-[#B42D55]">
            Meet Maham Zahid
        </h2>
        <a href="#" className="mt-[96px]">
            <img src={scroll} alt="scroll icon"/>
        </a>
    </div>
)


export default Header;

