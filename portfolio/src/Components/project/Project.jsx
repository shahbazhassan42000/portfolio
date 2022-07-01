import pinkLeaf from '../../assets/images/Pink-leaf.png'
import Details from "./Details";
import project from '../../assets/images/project-image.png'

const Project = () => (
    <div id="projects" className="relative flex flex-col mt-[151px]">
        <img className="absolute h-[150px] -z-10 left-0" src={pinkLeaf} alt="Blue Leaf"/>
        <h1 className="pl-32 font-bold text-[46px] mt-[80px] relative">My Projects
            <span className="pl-[10px] leading-8 absolute text-[96px] text-[#F18CAA]">.</span>
        </h1>
        <div className="pl-32 flex mt-[80px] justify-between items-center space-x-[50px]">
            {<Details appName="Inventory management system app" title="inventory.com" descp="Lörem ipsum lyräsm ren i mide fast vigeliga. Båliga megalig, är eliga. Sharenting deska ohyna. Epibeng nysått. Besopp nid pon. Du kan vara drabbad." link="#" />}
            <img className="w-[50%] rounded-[50px_0_0_50px]" src={project} alt="project picture"/>
        </div>
        <div className="pr-32 flex mt-[80px] justify-between items-center space-x-[50px]">
            <img className="w-[50%] rounded-[0_50px_50px_0]" src={project} alt="project picture"/>
            {<Details appName="Inventory management system app" title="inventory.com" descp="Lörem ipsum lyräsm ren i mide fast vigeliga. Båliga megalig, är eliga. Sharenting deska ohyna. Epibeng nysått. Besopp nid pon. Du kan vara drabbad." link="#" />}
        </div>
        <div className="pl-32 flex mt-[80px] justify-between items-center space-x-[50px]">
            {<Details appName="Inventory management system app" title="inventory.com" descp="Lörem ipsum lyräsm ren i mide fast vigeliga. Båliga megalig, är eliga. Sharenting deska ohyna. Epibeng nysått. Besopp nid pon. Du kan vara drabbad." link="#" />}
            <img className="w-[50%] rounded-[50px_0_0_50px]" src={project} alt="project picture"/>
        </div>
        <a className="self-center mt-[60px] font-bold text-[#219E9F] font-[12px]" href="#">View All Projects</a>

    </div>

)


export default Project;

