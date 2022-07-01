const Details = ({appName,title,descp,link}) => (
    <div className="">
        <p className="text-[#F18CAA] text-[12px] uppercase">{appName}</p>
        <h1 className="font-bold text-[28px]">{title}</h1>
        <p className="my-[20px] text-[#656565] text-[12px]">{descp}</p>
        <a className="inline-block text-white px-[30px] font-bold text-[14px] py-[19px] rounded-[15px] bg-[#219E9F]" href={link}>View Project</a>
    </div>

)


export default Details;

