import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHouse, faAddressCard, faComments, faMicrophone } from '@fortawesome/free-solid-svg-icons';
import { useNavigate, useLocation } from 'react-router-dom';
import { companyLogo } from '../utils/contants';
const SideBar = () => {
    const location = useLocation();
    const { pathname } = location;
    const navigate = useNavigate();
    return (<div className="h-[100vh] w-[250px] fixed top-0 left-0 bg-white z-50 shadow-md">
        <div className="flex items-center justify-center w-full h-[80px] px-4 bg-slate-100">
            <img className="w-64 px-3 py-4" src={companyLogo} alt="logo" />
        </div>
        <div className="w-full flex flex-col  px-8 ">
            {/* <p className="text-gray-500 text-md font-bold px-2 pt-3 pb-1 " >Menu</p>
            <h1 className={`text-lg  font-semibold  py-2 my-1 px-4 hover:bg-gray-300  rounded-md cursor-pointer ${(pathname === '/' ||
                pathname.includes('home')) &&
                'bg-gray-300'
                }`}
                onClick={() => {
                      navigate('/')
                }}
                style={{
                    color: '#002c5f'
                }}><FontAwesomeIcon icon={faHouse} /> <span className='ml-2'>Home</span></h1>
            <h1 className={`text-lg  text-zinc-700 font-semibold  py-2 my-1 px-4 hover:bg-gray-300  rounded-md cursor-pointer ${(pathname.includes('about')) &&
                'bg-gray-300'
                }`} onClick={() => {
                    navigate('/about')
                }}
                style={{
                    color: '#002c5f'
                }}><FontAwesomeIcon icon={faAddressCard} /> <span className='ml-2'>About</span></h1> */}
            <p className="text-gray-500 text-md font-bold py-2 pt-3 px-2 ">Assistance</p>
            <h1 className={`text-lg  text-zinc-700 font-semibold  py-2 my-1 px-4 hover:bg-gray-300  rounded-md cursor-pointer ${(pathname.includes('chat')) &&
                'bg-gray-300'
                }`}
                onClick={() => {
                    navigate('/chat')
                }}
                style={{
                    color: '#002c5f'
                }}><FontAwesomeIcon icon={faComments} /> <span className='ml-2'>Chat Assist</span></h1>
            {/* <h1 className={`text-lg  text-zinc-700 font-semibold  py-2 my-1 px-4 hover:bg-gray-300  rounded-md cursor-pointer ${(pathname.includes('voice')) &&
                'bg-gray-300'
                }`}
                onClick={() => {
                    navigate('/voice')
                }}><FontAwesomeIcon icon={faMicrophone} /> <span className='ml-2'>Voice Assist</span></h1> */}
        </div>
    </div>)
}
export default SideBar