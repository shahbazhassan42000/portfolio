const Details = ({appName,title,descp,link}) => (
    <div className="">
        <p className="text-[#F18CAA] text-[0.9rem] uppercase">{appName}</p>
        <h1 className="font-bold text-[2rem]">{title}</h1>
        <p className="my-[20px] text-[#656565] text-[0.9rem] sm:text-[1rem]">{descp}</p>
        <a className="inline-block text-white px-[1.2rem] sm:px-[1.6rem] font-bold text-[0.9rem] sm:text-[1rem] py-[0.8rem] sm:py-[1rem] rounded-[15px] bg-[#219E9F]" href={link}>View Project</a>
    </div>

)


export default Details;

