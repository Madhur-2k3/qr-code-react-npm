import logo from './logo.svg';
import './App.css';

import toast, { Toaster } from 'react-hot-toast';
import QRCode from 'qrcode'
import { useState } from "react";


function App() {
  let url='';
  
  const[text,setText]=useState('')
  const[isValid,setIsValid]=useState(true);

  const SubmitHandler=(e)=>{
    e.preventDefault();

    const rollNumberPattern = /^\d{4}-\d{2}-\d{3}-\d{3}$/;

    // Check if the entered text matches the roll number pattern
    if (!rollNumberPattern.test(text)) {
      setIsValid(false);
      // alert("Invalid Roll Number")
      toast.error('Please enter a valid roll number (2451-XX-XXX-XXX)');
      return;
    }

    // If the entered text is a valid roll number, generate QR code and update text
    QRCode.toDataURL(text)
      .then(url => {
        const image=document.getElementById('image');
        image.src=url;
        setIsValid(true);
      })
      .catch(err => {
        console.error(err);
      });
    document.getElementById('h1').innerHTML=text;
  }

  return (
    <div className='h-[100vh] bg-blue-100'>
      <div className=' bg-slate-500 text-center h-12 flex justify-center items-center font-semibold text-lg'>QR Generator</div>

      <div className=' '>
        <form onSubmit={SubmitHandler} className="flex justify-center gap-8 py-10">
          <input
            type="text"
            placeholder='Enter Roll Number'
            required
            autoComplete='true'
            className={`border ${isValid ? 'border-black' : 'border-red-500'} rounded-md`}
            onChange={(e)=>{setText(e.target.value); setIsValid(true);}}
          />
          <input type="submit" className="bg-blue-400 w-fit px-2 py-1 rounded-md"/>
        </form>
      
        <img id="image" className="h-72 w-72 mx-auto  "
          //  src={''|| url}
          src='data:image/gif;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs='
        />
        
        <h1 id="h1" className="text-2xl text-center py-3"></h1>
        <Toaster position="top-center" reverseOrder={true}/>
      </div>

      
    </div>
  );
}

export default App;
