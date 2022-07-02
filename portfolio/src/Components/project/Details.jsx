const Details = ({appName,title,descp,link}) => (
    <div className="">
        <p className="text-[#F18CAA] text-[0.9rem] uppercase">{appName}</p>
        <h1 className="font-bold text-[2rem]">{title}</h1>
        <p className="my-[20px] text-[#656565] text-[1=0.9rem]">{descp}</p>
        <a className="inline-block text-white px-[1.6rem] font-bold text-[1rem] py-[1rem] rounded-[15px] bg-[#219E9F]" href={link}>View Project</a>
    </div>

)


export default Details;

