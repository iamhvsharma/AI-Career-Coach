import { Button } from '@/components/ui/button'
import React from 'react'

const WelcomeBanner = () => {
  return (
    <div className='p-8 bg-gradient-to-tr from-[#BE575F] via-[#A338E3] to-[#AC76D6] text-white rounded-2xl'>
        <h2 className='font-bold text-2xl'>AI Career Coach - Helping you in your Career</h2>
        <p>Get AI Power in your hands! Get real time advice, market insights and roadmap using AI.</p>
        <Button className='mt-3 text-black' variant={'outline'}>Get Started</Button>
    </div>
  )
}

export default WelcomeBanner