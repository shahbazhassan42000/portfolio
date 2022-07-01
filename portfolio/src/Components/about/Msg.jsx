import '@fortawesome/fontawesome-free/css/all.min.css';

const Msg = ({img,lbl,descp}) => (
    <div className="flex justify-evenly items-center self-center p-[40px] w-[70%] text-center shadow-[0_0_70px_-15px_rgba(0,0,0,0.25)] rounded-[15px]  h-[204px]">

        <div className="text-[#656565]">Drop a message here <i className="text-[#219E9F] fas fa-hand-point-right"></i></div>
        <a className="bg-[#F18CAA] px-[24px] text-white py-[14px] rounded-[50px]" href="#">Say Hello</a>
    </div>
)


export default Msg;

