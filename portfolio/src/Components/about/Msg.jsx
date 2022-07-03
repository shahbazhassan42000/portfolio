import '@fortawesome/fontawesome-free/css/all.min.css';

const Msg = ({img,lbl,descp}) => (
    <div className="flex justify-evenly items-center self-center px-[10px] py-[30px] sm:p-[40px] w-full sm:w-[70%] text-center shadow-[0_0_70px_-15px_rgba(0,0,0,0.25)] rounded-[15px]">

        <div className="text-[#656565] text-[0.9rem] sm:text-[1.4rem]">Drop a message here <i className="text-[#219E9F] fas fa-hand-point-right"></i></div>
        <a className="bg-[#F18CAA] text-[0.9rem] sm:text-[1.4rem] px-[7px] sm:px-[32px] text-white py-[4px] sm:py-[8px] rounded-[50px]" href="#">Say Hello</a>
    </div>
)


export default Msg;

