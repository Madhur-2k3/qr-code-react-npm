import React from 'react'
// import './App.css';
import { useNavigate } from "react-router-dom";

import toast, { Toaster } from 'react-hot-toast';
import QRCode from 'qrcode'
import { useState } from "react";
import Qr from './Qr';
import { Link } from 'react-router-dom';
// import Header from './components/Header';/


const Form = () => {

    // const navigate = useNavigate();

    const[text,setText]=useState('')
    const[isValid,setIsValid]=useState(true);
    const[url,setUrl]=useState('data:image/gif;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs=')
  
    const SubmitHandler=(e)=>{
      e.preventDefault();
  
      const rollNumberPattern = /^\d{4}-\d{2}-\d{3}-\d{3}$/;
  
      // Check if the entered text matches the roll number pattern
      if (!rollNumberPattern.test(text.trim().replace(/\s+/g, ''))) {
        setIsValid(false);
        // alert("Invalid Roll Number")
        toast.error('Please enter a valid roll number (2451-XX-XXX-XXX)');
        return;
      }
  
      // If the entered text is a valid roll number, generate QR code and update text
      QRCode.toDataURL(text.replace(/\s+/g, '')
        // .replaceAll(' ','')
        ,{ errorCorrectionLevel: 'H' })
        .then(url => {
          // const image=document.getElementById('image');
          // image.src=url;
          console.log(text)
          setUrl(url);
          setIsValid(true);
        })
        .catch(err => {
          console.error(err);
        });
        // navigate(`/${text}`)
        
      document.getElementById('h1').innerHTML=text.replace(/\s+/g, '');
    }  
  return (
    <>
    <form onSubmit={SubmitHandler} className="flex justify-center gap-8 py-10">
          <input
            type="text"
            placeholder='Enter Roll Number'
            required
            autoComplete='true'
            inputMode='numeric'
            className={`border px-2 ${isValid ? 'border-black' : 'border-red-500'} rounded-md`}
            onChange={(e)=>{setText(e.target.value); setIsValid(true);}}
          />
          {/* <Link to={`/${text}`}> */}
          <input type="submit" className="text-gray-200 bg-gray-900 w-fit px-3 py-1 rounded-md"/>
          {/* </Link> */}
        </form>
        <Qr url={url} text={text}/>
    </>
  )
}

export default Form