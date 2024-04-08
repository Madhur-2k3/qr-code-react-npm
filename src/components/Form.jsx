import React from 'react'
// import './App.css';

import toast, { Toaster } from 'react-hot-toast';
import QRCode from 'qrcode'
import { useState } from "react";
import Qr from './Qr';
// import Header from './components/Header';/


const Form = () => {

    const[text,setText]=useState('')
    const[isValid,setIsValid]=useState(true);
    const[url,setUrl]=useState('data:image/gif;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs=')
  
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
          // const image=document.getElementById('image');
          // image.src=url;
          setUrl(url);
          setIsValid(true);
        })
        .catch(err => {
          console.error(err);
        });
      document.getElementById('h1').innerHTML=text;
    }  
  return (
    <>
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
        <Qr url={url} text={text}/>
    </>
  )
}

export default Form