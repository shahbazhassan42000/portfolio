import blueLeaf from '../../assets/images/Blue-leaf.png'
import profileImg from '../../assets/images/profile-illustration.svg'
import upwork from '../../assets/images/upwork-icon.svg'
import linkedin from '../../assets/images/linkedin-icon-white.svg'
import Msg from "./Msg";

const About = () => (
    <div id="about" className="relative px-32 flex flex-col mt-[151px]">
        <img className="absolute h-[150px] -z-10 left-0" src={blueLeaf} alt="Blue Leaf"/>
        <h1 className="font-bold text-[46px] mt-[80px] relative">About me
            <span className="pl-[10px] leading-8 absolute text-[96px] text-[#69C7C8]">.</span>
        </h1>
        <div className="flex my-[80px] justify-between items-center space-x-[30px]">
            <div>
                <p className="text-[#656565] text-[12px] mb-[40px]">
                    Hi! I’m Maham.
                    I come from an <span className="text-[#38ADAE]">ENGINEERING</span> and <span className="text-[#38ADAE]">ARTS</span> background
                    Lörem ipsum lyräsm ren i mide fast vigeliga. Båliga megalig, är eliga. Sharenting deska ohyna.
                    eliga. Sharenting deska ohyna.  bcshcbkwjwlnxldw
                </p>
                <div>
                    <a className="inline-block bg-[#F07197] h-[54px] w-[54px] rounded-[50%] p-[10px] mr-[25px]" href="#">
                        <img src={upwork} alt="upwork button" />
                    </a>
                    <a className="inline-block bg-[#F07197] h-[54px] w-[54px] rounded-[50%] p-[15px]" href="#">
                        <img src={linkedin} alt="linkedin button" />
                    </a>
                </div>
            </div>
            <img className="w-[50%]" src={profileImg} alt="about me picture"/>
        </div>
        <Msg/>
    </div>
)


export default About;

