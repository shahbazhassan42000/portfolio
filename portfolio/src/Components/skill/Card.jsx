
const Card = ({img,lbl,descp}) => (
    <div className=" h-[26rem] p-[2.5rem] sm:w-[30%] sm:h-[30rem] text-center shadow-[0_0_70px_-15px_rgba(0,0,0,0.25)] rounded-[10px] overflow-hidden">
        <img className="h-[9rem] mb-[2rem] w-[8rem] mx-auto" src={img} alt="card picture"/>
        <h2 className="font-bold text-[1rem] mb-[2rem]">{lbl}s</h2>
        <p className="text-[#656565] text-[0.8rem]">{descp}</p>
    </div>
)


export default Card;

