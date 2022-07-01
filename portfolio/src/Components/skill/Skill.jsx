import blueLeaf from '../../assets/images/Blue-leaf.png'
import frontEnd from '../../assets/images/frontend-icon.svg'
import graphic from '../../assets/images/web-design-icon.svg'
import responsive from '../../assets/images/responsive-design-icon.svg'
import Card from "./Card";

const Skill = () => (
    <div className="relative px-32 flex flex-col mt-[151px]">
        <img className="absolute h-[150px] -z-10 left-0" src={blueLeaf} alt="Blue Leaf"/>
        <h1 className="font-bold text-[46px] mt-[80px] relative">My Skills
            <span className="pl-[10px] leading-8 absolute text-[96px] text-[#69C7C8]">.</span>
        </h1>
        <div className="flex mt-[80px] justify-between">
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

