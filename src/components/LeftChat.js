import { leftIcon } from "../utils/contants"
const LeftChat = ({ text }) => {
    return (<div className="flex self-end my-2  ">

        <div className="bg-slate-100 w-fit h-fit px-3 py-2 rounded-2xl rounded-b-[0] rounded-l-2xl mr-2">
            <h1 style={{
                color: '#002c5f'
            }}>{text}</h1>
        </div>
        <img className="w-9 ml-1 mt-[15px] h-9 rounded-2xl self-end" src={leftIcon} alt="menu" />

    </div>)
}
export default LeftChat