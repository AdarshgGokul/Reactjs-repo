import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Card from './DAY1/Congrats_Card';
import 'bootstrap/dist/css/bootstrap.css'


import reportWebVitals from './reportWebVitals';
import App, { Ad, Hello } from './App';
import Card1 from './DAY1/Congrats_Card';
import Sol from './task3/sol';
import SocialButton from './task4/SocialButtons.css';
import Notification from './task5/Notification';
import Login from './task6/Loginpage';
import Cards from './task7/Card';
import NavScroll from './task8/nav';
import Hooks, { changeColor } from './hooks';
import Hook2 from './hook2';
import Hooks1 from './task10/hooks1';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <App/> */}
    {/* <Hello/> */}
    {/* <Ad/>  */}
    {/* <Card1/> */}
    {/* <Items/> */}
    {/* <Sol/> */}
    {/* <SocialButton/> */}
    {/* <Notification/> */}
    {/* <Login/> */}
    {/* <Cards/> */}
    {/* <NavScroll/> */}
    {/* <Hooks/> */}
    <Hooks1/>
    {/* <Hook2/> */}

    
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
