import React from 'react'

export default function Navbar() {
  return (
    <nav className='flex flex-1 justify-between	pt-5 mx-1'>
      <section className='flex flex-1 px-4 lg:px-12 xl:px-12'>
        <img className='h-7 px-2' src="/Photos/logo.png" alt="Logo" />
        <span className='invisible lg:visible xl:visible text-white'>VOLCOIN</span>
      </section>
      <section className='flex flex-1 lg:flex-none xl:flex-none pr-4 lg:pr-16 xl:pr-16'>
        <button className='invisible lg:visible xl:visible rounded text-gray-400 px-3 mx-0 lg:mx-2 xl:mx-2 '> WHITEPAPER </button>
        <button className='border border-gray-400 rounded mx-0 lg:mx-2 xl:mx-2 px-1 lg:px-2 xl:px-3 text-xs text-gray-400'> PURCHASE VOLCOIN </button>
      </section>
    </nav>
  )
}
