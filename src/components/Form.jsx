import React from 'react'
import { useNavigate } from "react-router-dom";

import toast, { Toaster } from 'react-hot-toast';

import { useState } from "react";

const Form = () => {

    const navigate = useNavigate();

    const[text,setText]=useState('')
    const[isValid,setIsValid]=useState(true);
  
    const SubmitHandler=(e)=>{
      e.preventDefault();
  
      const rollNumberPattern = /^\d{4}-\d{2}-\d{3}-\d{3}$/;
  
      // Check if the entered text matches the roll number pattern
      if (!rollNumberPattern.test(text.trim().replace(/\s+/g, ''))) {
        setIsValid(false);
        // alert("Invalid Roll Number")
        toast.error('Please enter a valid roll number (2451-XX-XXX-XXX)');
        // toast.error("Roll Number not found");
        
        return;
      }
      navigate(`/${text.replace(/\s+/g, '')}`)

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
        
          <input type="submit" className="text-gray-200 bg-gray-900 w-fit px-3 py-1 rounded-md"/>
        
        </form>
       <Toaster/>
    </>
  )
}

export default Form