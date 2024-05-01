import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './index.css';
import Qr from './components/Qr';
import reportWebVitals from './reportWebVitals';
import Layout from './Layout';


const router=createBrowserRouter([
  {
    path:'/',
    element: <Layout/>,
    children:[
      {
        path:'/:rollno',
        element:<Qr/>,
      },
      
    ],
  },
])



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
