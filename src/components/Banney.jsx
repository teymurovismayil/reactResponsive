import React from 'react'

export const Banney = () => {
  return (

    <div className='container mt-5'>

       <div className="row">
        <div className="col-lg-6 col-xs-12 left-side">
            <p className='text-success'>Speak Hope for the Homeless</p>
            <h1>Donate to children & senior citizens</h1>
            <p>Involves donating one's body after death for medical research, education, or anatomical dissection. Body donation plays a crucial role in advancing medical science</p>
            <div>
            <button className='btn  btn-outline-success donate_Btn'>Donate Now</button>
            <button className='btn  btn-outline-dark donate_Btn'>Donate Now</button>
            </div>
        </div>
        <div className="col-lg-6 col-xs-12 right-side">
            <img src="https://charitfix.vercel.app/theme/assets/images/hero/hero-1.png" alt="" />
            <div className='boxes'>
            <div className='box'>
                <h4>12+</h4>
                <p>Years of Experience</p>
            </div>
            <div className='box'>
                <h4>140+</h4>
                <p>Thousands volunteers</p>
            </div>
            <div className='box'></div>
            </div>
        </div>
       </div>

    </div>

  )
}
