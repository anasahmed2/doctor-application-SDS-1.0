import React from 'react'
import "./styles.css"
import Doctor from "../../assets/doctor.png"
function PorDec() {
  return (
    <> 
    <div className='proMain'>
    <div className='prodiv'>
        <div className='prodivider'>
            <div className='proheading'>
                <h1 className='doctorName'>
                    Jenna<span className='font-light text-[#272727] '> Berg</span>
                </h1>
                <p className='text-[#0078aa]'>
                 PROFESSIONAL DENTIST
                 </p>
            </div>
            <div className='w-full  pt-[50px]'>
                <p className='prodetail text'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus orci ex, pulvinar nec finibus ut, cursus eget libero. In dictum sem</p>
            <p className='prodetail mt-[20px] font-light'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus orci ex, pulvinar nec finibus ut, cursus eget libero. In dictum sem non sapien condimentum aliquet. Nulla facilisi. Mauris efficitur dolor dolor, id porta nulla interdum vitae.</p>
            </div>
        </div>
        <div className='prodivider'>
            <div className='w-full h-full bgDoctor'>
                <img src={Doctor} alt="" />
            </div>
        </div>
    </div>
    </div>
    </>
  )
}

export default PorDec