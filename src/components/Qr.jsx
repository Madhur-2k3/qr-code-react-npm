import React from 'react'
import { useParams } from 'react-router-dom'
import QRCode from 'qrcode'
import { useState } from 'react'

const Qr = ({}) => {
  const {rollno}=useParams();
  const[url,setUrl]=useState('')

  QRCode.toDataURL(rollno.replace(/\s+/g, '')
        // .replaceAll(' ','')
        ,{ errorCorrectionLevel: 'H' })
        .then(url => {
          setUrl(url);
        })
        .catch(err => {
          console.error(err);
        });

  return (
    <>
      <img id="image" className="h-72 w-72 mx-auto" src={url}/>
        
      <h1 id="h1" className="text-2xl text-center py-3">{rollno}</h1>
        
    </>
  )
}

export default Qr