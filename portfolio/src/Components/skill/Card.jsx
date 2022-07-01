
const Card = ({img,lbl,descp}) => (
    <div className="p-[40px] w-[230px] text-center shadow-[0_0_70px_-15px_rgba(0,0,0,0.25)] rounded-[10px]  h-[490px] overflow-hidden">
        <img className="h-[140px] mb-[30px] w-[90px] mx-auto" src={img} alt="card picture"/>
        <h2 className="font-bold text-[14px] mb-[30px]">{lbl}s</h2>
        <p className="text-[#656565] text-[12px]">{descp}</p>
    </div>
)


export default Card;

