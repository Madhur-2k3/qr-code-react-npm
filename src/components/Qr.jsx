import React from 'react'

const Qr = ({url,text}) => {
  return (
    <>
    <img id="image" className="h-72 w-72 mx-auto  "
          //  src={''|| url}
          src={url}
        />
        
        <h1 id="h1" className="text-2xl text-center py-3"></h1>
    </>
  )
}

export default Qr