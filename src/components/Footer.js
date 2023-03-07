import React from 'react'

export default function Footer() {
    return (

        <footer className="pl-4 lg:pl-12 xl:pl-12 pr-4 lg:pr-12 xl:pr-12  pt-4 lg:pt-6 xl:pt-6 mt-6 lg:mt-0 xl:mt-0 pb-4 lg:pb-8 xl:pb-8 shadow bg-black">
            <div className="flex items-center justify-between">
                <a href="/" className="flex items-center">
                    <img src="/Photos/logo.png" className="h-6 lg:h-8 xl:h-8 mr-3" alt="Flowbite Logo" />
                    <span className=" self-center text-lg lg:text-2xl xl:text-2xl font-semibold whitespace-nowrap dark:text-white">VOLCOIN</span>
                </a>
                <ul className="flex flex-wrap items-center text-xs xl:text-sm lg:text-sm text-gray-500 sm:mb-0 dark:text-gray-400">
                    <li>
                        <a href="/" className=" hidden lg:block xl:block mr-2 lg:mr-6 xl:mr-6 hover:underline ">WHITEPAPER</a>
                    </li>
                    <li>
                        <a href="/" className="mr-2 lg:mr-6 xl:mr-6 hover:underline">EMAIL US</a>
                    </li>
                    <li>
                        <a href="/" className="hidden lg:block xl:block mr-2 lg:mr-6 xl:mr-6 hover:underline">TWITTER</a>
                    </li>
                    <li>
                        <a href="/" className="mr-2 lg:mr-6 xl:mr-6 hover:underline">PRIVACY</a>
                    </li>
                    <li>
                        <a href="/" className="mr-2 lg:mr-6 xl:mr-6 hover:underline">T&C</a>
                    </li>
                    <li>
                        <button className='hidden lg:block xl:block border border-gray-400 rounded mx-0 lg:mx-2 xl:mx-2 py-1 px-1 lg:px-2 xl:px-3 text-xs text-gray-400'> PURCHASE VOLCOIN </button>
                    </li>
                </ul>
            </div>
        </footer>
    )
}
