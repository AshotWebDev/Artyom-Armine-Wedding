import React from 'react'
import footerImg from '/images/IMG_8196.jpg'

function Footer() {
  return (
    <div style={{backgroundImage: `url(${footerImg})`}} className='w-[80%] md:w-[50%] h-[500px] bg-cover bg-no-repeat mx-auto relative my-10'>
        <div className="absolute inset-0 bg-black/30 flex flex-col items-center justify-end text-center pb-30 px-4 gap-7">
            <p className='text-white font-light text-2xl w-[200px]'>Սիրով Կսպասենք Ձեզ</p>
        </div>
    </div>
  )
}

export default Footer