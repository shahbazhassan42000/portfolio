import pinkLeaf from '../../assets/images/Pink-leaf.png'
import Details from "./Details";
import project from '../../assets/images/project-image.png'

const Project = () => (
    <div id="projects" className="relative flex flex-col mt-[151px]">
        <img className="absolute h-[9.375rem] -z-10 left-0" src={pinkLeaf} alt="Blue Leaf"/>
        <h1 className="pl-[12%] font-bold text-[2.875rem] mt-[5rem] relative">My Projects
            <span className="pl-[10px] leading-8 absolute text-[6rem] text-[#F18CAA]">.</span>
        </h1>
        <div className="pl-[12%] flex mt-[5rem] justify-between items-center space-x-[3.125rem]">
            {<Details appName="Inventory management system app" title="inventory.com" descp="Lörem ipsum lyräsm ren i mide fast vigeliga. Båliga megalig, är eliga. Sharenting deska ohyna. Epibeng nysått. Besopp nid pon. Du kan vara drabbad." link="#" />}
            <img className="w-[50%] rounded-[50px_0_0_50px]" src={project} alt="project picture"/>
        </div>
        <div className="pr-[12%] flex mt-[5rem] justify-between items-center space-x-[3.125rem]">
            <img className="w-[50%] rounded-[0_50px_50px_0]" src={project} alt="project picture"/>
            {<Details appName="Inventory management system app" title="inventory.com" descp="Lörem ipsum lyräsm ren i mide fast vigeliga. Båliga megalig, är eliga. Sharenting deska ohyna. Epibeng nysått. Besopp nid pon. Du kan vara drabbad." link="#" />}
        </div>
        <div className="pl-[12%] flex mt-[5rem] justify-between items-center space-x-[3.125rem]">
            {<Details appName="Inventory management system app" title="inventory.com" descp="Lörem ipsum lyräsm ren i mide fast vigeliga. Båliga megalig, är eliga. Sharenting deska ohyna. Epibeng nysått. Besopp nid pon. Du kan vara drabbad." link="#" />}
            <img className="w-[50%] rounded-[50px_0_0_50px]" src={project} alt="project picture"/>
        </div>
        <a className="self-center mt-[60px] font-bold text-[#219E9F] text-[1.2rem]" href="#">View All Projects</a>

    </div>

)


export default Project;

