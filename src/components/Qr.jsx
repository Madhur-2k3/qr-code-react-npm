import React from 'react'
import { useSearchParams } from 'react-router-dom'

const Qr = ({url,text,}) => {
  return (
    <>
    <img id="image" className="h-72 w-72 mx-auto  "
          //  src={''|| url}
          src={url}
        />
        
        <h1 id="h1" className="text-2xl text-center py-3"></h1>
        {/* <h2>Qr page</h2> */}
    </>
  )
}

export default Qr