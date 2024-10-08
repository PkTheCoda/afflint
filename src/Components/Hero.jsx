import React from 'react'

const Hero = () => {
  return (
    <>

      <div className='bg-main font-outfit py-10'>

        <div className='max-w-4xl mx-auto flex gap-x-8 items-center justify-center font-light text-lg'>
          <a href="" className="transition300scale">Home</a>
          <a href="" className="transition300scale">Contact</a>
          <a href="" className="transition300scale">Docs</a>
          <a href="" className="transition300scale">Guides</a>
        </div>

        <div className='max-w-[85rem] mx-auto p-6 flex flex-col gap-y-4 items-center py-20'>
          <h1 className='max-w-4xl eight-title text-center font-medium tracking-tight'>
            Investing for those <br /> <span className="text-secondary">with volatility</span>
          </h1>
          <p className='max-w-lg text-lg text-slate-600 text-center'>
            Explore your data, build your dashboard, bring your team together in a matter of moments.
          </p>
          <button className='button-main px-12 py-2 text-white rounded-md shadow-lg transition300scale'>
            Sign Up
          </button>
        </div>
      </div>
    </>
  )
}

export default Hero