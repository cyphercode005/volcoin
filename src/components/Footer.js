import React from 'react'

export default function Footer() {
  return (

<footer className="pl-12 pr-12 mt-16 pb-16 p-4 shadow bg-black">
    <div className="sm:flex sm:items-center sm:justify-between">
        <a href="/" className="flex items-center mb-4 sm:mb-0">
            <img src="logo.png" className="h-8 mr-3" alt="Flowbite Logo" />
            <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">VOLCOIN</span>
        </a>
        <ul className="flex flex-wrap items-center mb-6 text-sm text-gray-500 sm:mb-0 dark:text-gray-400">
            <li>
                <a href="/" className="mr-4 hover:underline md:mr-6 ">WHITEPAPER</a>
            </li>
            <li>
                <a href="/" className="mr-4 hover:underline md:mr-6">EMAIL US</a>
            </li>
            <li>
                <a href="/" className="mr-4 hover:underline md:mr-6 ">TWITTER</a>
            </li>
            <li>
                <a href="/" className="mr-4 hover:underline">PRIVACY</a>
            </li>
            <li>
                <a href="/" className="mr-4 hover:underline">T&C</a>
            </li>
            <li>
            <button className='border border-gray-400 rounded mx-0 lg:mx-2 xl:mx-2 py-1 px-1 lg:px-2 xl:px-3 text-xs text-gray-400'> PURCHASE VOLCOIN </button>
            </li>
        </ul>
    </div>
</footer>
  )
}
