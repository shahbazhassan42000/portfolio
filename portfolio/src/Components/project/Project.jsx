import pinkLeaf from '../../assets/images/Pink-leaf.png'
import Details from "./Details";
import project from '../../assets/images/project-image.png'

const Project = () => (
    <div id="projects" className="px-[12%] sm:px-0 relative flex flex-col mt-[151px]">
        <img className="absolute h-[7rem]  sm:h-[9.375rem] -z-10 left-0" src={pinkLeaf} alt="Blue Leaf"/>
        <h1 className="pl-[12%] self-center sm:self-start font-bold text-[1.9rem] sm:text-[2.875rem] mt-12 sm:mt-[5rem] relative">My Projects
            <span className="pl-[10px] leading-6 sm:leading-8 absolute text-[4rem] sm:text-[6rem] text-[#F18CAA]">.</span>
        </h1>
        <div className=" sm:pl-[12%] flex flex-col sm:flex-row  mt-[7rem] sm:mt-[5rem] text-center sm:text-left  sm:justify-between sm:items-center space-y-16 sm:space-y-0 sm:space-x-[3.125rem]">
            {<Details appName="Inventory management system app" title="inventory.com" descp="Lörem ipsum lyräsm ren i mide fast vigeliga. Båliga megalig, är eliga. Sharenting deska ohyna. Epibeng nysått. Besopp nid pon. Du kan vara drabbad." link="#" />}
            <img className=" sm:p-0 sm:w-[50%] rounded-[20px] sm:rounded-[50px_0_0_50px]" src={project} alt="project picture"/>
        </div>
        <div className="hidden pr-[12%] sm:flex mt-[5rem] justify-between items-center space-x-[3.125rem]">
            <img className="w-[50%] rounded-[0_50px_50px_0]" src={project} alt="project picture"/>
            {<Details appName="Inventory management system app" title="inventory.com" descp="Lörem ipsum lyräsm ren i mide fast vigeliga. Båliga megalig, är eliga. Sharenting deska ohyna. Epibeng nysått. Besopp nid pon. Du kan vara drabbad." link="#" />}
        </div>
        <div className="hidden pl-[12%] sm:flex mt-[5rem] justify-between items-center space-x-[3.125rem]">
            {<Details appName="Inventory management system app" title="inventory.com" descp="Lörem ipsum lyräsm ren i mide fast vigeliga. Båliga megalig, är eliga. Sharenting deska ohyna. Epibeng nysått. Besopp nid pon. Du kan vara drabbad." link="#" />}
            <img className="w-[50%] rounded-[50px_0_0_50px]" src={project} alt="project picture"/>
        </div>
        <a className="self-center mt-[60px] font-bold text-[#219E9F] text-[1rem] sm:text-[1.2rem]" href="#">View All Projects</a>

    </div>

)


export default Project;

