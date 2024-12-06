import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import About from './components/About';
import ChatAssist from './components/ChatAssist';
import VoiceAssist from './components/VoiceAssist';
import Body from './components/Body';
import App from './App';

// const 
// return (<div className='flex'>
//   <SideBar />
//   <Header />
//   <div className="mt-[80px]">
//     <Outlet />
//   </div>
// </div>)
const appRouter = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '/',
        element: <Body />
      },
      {
        path: '/about',
        element: <About />
      },
      {
        path: '/chat',
        element: <ChatAssist />
      }, {
        path: '/voice',
        element: <VoiceAssist />
      },
    ]
  },
]
)
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={appRouter} />
  </React.StrictMode>
);
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
