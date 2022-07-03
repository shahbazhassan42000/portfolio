import blueLeaf from '../../assets/images/Blue-leaf.png'
import profileImg from '../../assets/images/profile-illustration.svg'
import upwork from '../../assets/images/upwork-icon.svg'
import linkedin from '../../assets/images/linkedin-icon-white.svg'
import Msg from "./Msg";

const About = () => (
    <div id="about" className="relative px-[12%] flex flex-col mt-[151px]">
        <img className="absolute h-[7rem]  sm:h-[9.375rem] -z-10 left-0" src={blueLeaf} alt="Blue Leaf"/>
        <h1 className="self-center sm:self-start font-bold text-[1.9rem] sm:text-[2.875rem] mt-12 sm:mt-[5rem] relative">About me
            <span className="pl-[10px] leading-6 sm:leading-8 absolute text-[4rem] sm:text-[6rem] text-[#69C7C8]">.</span>
        </h1>
        <div className="space-y-16 sm:space-y-0 text-center sm:text-left flex flex-col  sm:flex-row mt-[7rem] mb-[5rem] sm:my-[5rem] sm:justify-between sm:items-center sm:space-x-[30px]">
            <div>
                <p className="text-[#656565] text-[1rem] mb-[40px]">
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
            <img className="sm:w-[50%]" src={profileImg} alt="about me picture"/>
        </div>
        <Msg/>
    </div>
)


export default About;

