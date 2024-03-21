import React from 'react'
import Button from './Button'
import Link from 'next/link'



const carddata = [
    {
        candidate: "priyanka",
        id:390
    },
      {
        candidate: "shreya",
        id:454
    },
        {
        candidate: "roshni",
        id:384
    },
          {
        candidate: "pooja",
        id:404
    },
]
const Mapsec = () => {
    const data = carddata.map((carddata, i) => (
         <div key={i} className=' w-[25%] px-3'>
                  <div className="cards bg-white border-white border-solid px-4 py-4">
                <p className='text-black text-center'>{carddata.candidate }</p>
                      <p className='text-black text-center'>{carddata.id}</p>
                  </div>
              </div>
    ))
  return (
      <div>
          <div className='flex gap-2'>
          <Link href="./about"><Button text="About" /></Link>  
          </div>
          <div className='flex pt-4 flex-wrap -mx-3'>
              {data}
            
          </div>
          
    </div>
  )
}

export default Mapsec
