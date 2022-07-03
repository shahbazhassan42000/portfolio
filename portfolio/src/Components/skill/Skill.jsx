import blueLeaf from '../../assets/images/Blue-leaf.png'
import frontEnd from '../../assets/images/frontend-icon.svg'
import graphic from '../../assets/images/web-design-icon.svg'
import responsive from '../../assets/images/responsive-design-icon.svg'
import Card from "./Card";

const Skill = () => (
    <div className="relative px-[12%] flex flex-col mt-[151px]">
        <img className="absolute h-[7rem]  sm:h-[9.375rem] -z-10 left-0" src={blueLeaf} alt="Blue Leaf"/>
        <h1 className="self-center sm:self-start font-bold text-[1.9rem] sm:text-[2.875rem] mt-12 sm:mt-[5rem] relative">My Skills
            <span className="pl-[10px] leading-6 sm:leading-8 absolute text-[4rem] sm:text-[6rem] text-[#69C7C8]">.</span>
        </h1>
        <div className="flex space-y-16 sm:space-y-0 flex-col  sm:flex-row mt-[7rem] sm:mt-[5rem] sm:justify-between">
            {<Card img={frontEnd} lbl="WEB DESIGN"
                   descp="Lörem ipsum lyräsm ren i mide fast vigeliga. Båliga megalig, är eliga. Sharenting deska ohyna. Epibeng nysått. Besopp nid pon."/>}
            {<Card img={graphic} lbl="GRAPHIC DESIGN"
                   descp="Lörem ipsum lyräsm ren i mide fast vigeliga. Båliga megalig, är eliga. Sharenting deska ohyna. Epibeng nysått. Besopp nid pon. Epibeng nysått. Besopp nid pon."/>}
            {<Card img={responsive} lbl="UI UX DESIGN"
                   descp="Lörem ipsum lyräsm ren i mide fast vigeliga. Båliga megalig, är eliga. Sharenting deska ohyna. Epibeng nysått. "/>}
        </div>
    </div>
)


export default Skill;

