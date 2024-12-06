// import logo from './logo.svg';
import './App.css';
import SideBar from './components/SideBar';
import Header from './components/Header';
import { Outlet } from 'react-router-dom';


function App() {
  return (<div >
    <SideBar />
    <Header />
    <div className="pt-[80px] pl-[250px] relative h-screen ">
      <Outlet />
    </div>
  </div>);
}

export default App;
