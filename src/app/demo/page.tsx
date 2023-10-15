'use client'
import Footer from '@/components/Footer'
import Header from '@/components/Header'
import Hero from '@/components/Hero'
import Card1 from '@/components/cards/Card1'
import React from 'react'

const page = () => {
  return (
    // <div>this is demo page</div>
    <>
    <div className='md:mx-[200px] mx-[20px]'>
    <Header/>
    <Hero/>
    <Card1/>
    <Footer/>
    </div>
    </>
  )
}

export default page