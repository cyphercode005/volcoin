import React from 'react'
// import { ReactComponent as footerIcon } from './footer-icon.svg';

export default function Footer() {
    return (

        <footer className="volmed ml-4 lg:ml-12 mr-4 lg:mr-12 mt-28 pb-8 lg:pb-12 2xl:pb-16 shadow">
            <div className="flex lg:items-center justify-between">
                <ul className='flex flex-col justify-between'>
                <li href="/" className="flex items-center">
                    <img src="/Photos/logo.png" className="h-6 lg:h-8 mr-3" alt="Flowbite Logo" />
                    <span className="self-center text-base lg:text-lg 2xl:text-xl xxl:text-2xl whitespace-nowrap text-white ">VOLCOIN</span>
                </li>
                <li>
                        <button className='block lg:hidden border btn-simple text-sm lg:text-lg xl:text-sm 2xl:text-xl xxl:text-2xl rounded mx-0 lg:mx-2 py-1 px-2 lg:px-2 xl:px-3 text-color'> PURCHASE VOLCOIN </button>
                    </li>
                </ul>
                <ul className="flex flex-col lg:flex-row flex-wrap text-sm lg:text-sm xl:text-sm 2xl:text-xl xxl:text-2xl text-color lg:items-center">
                    <li className='flex justify-end mr-2 xl:mr-3 xxl:mr-4 my-1 lg:my-0'>
                        <img className='h-5 2xl:h-7 xxl:h-8 px-2' src="/SVGs/footer-icon.svg" alt="" /><a href="/" className="">WHITEPAPER</a>
                    </li>
                    <li className='flex justify-end mr-2 lg:mr-3 xxl:mr-4 my-1 lg:my-0'>
                        <img className='h-5 2xl:h-7 xxl:h-8 px-2' src="/SVGs/footer-icon.svg" alt="" /><a href="/" className="">EMAIL US</a>
                    </li>
                    <li className='flex justify-end mr-2 xl:mr-3 xxl:mr-4 my-1 lg:my-0'>
                        <img className='h-5 2xl:h-7 xxl:h-8 px-2' src="/SVGs/footer-icon.svg" alt="" /><a href="/" className="">TWITTER</a>
                    </li>
                    <li className='flex justify-end mr-2 xl:mr-3 xxl:mr-4 my-1 lg:my-0'>
                        <img className='h-5 2xl:h-7 xxl:h-8 px-2' src="/SVGs/footer-icon.svg" alt="" /><a href="/" className="">PRIVACY</a>
                    </li>
                    <li className='flex justify-end mr-2 xl:mr-3 xxl:mr-4 my-1 lg:my-0'>
                        <img className='h-5 2xl:h-7 xxl:h-8 px-2' src="/SVGs/footer-icon.svg" alt="" /><a href="/" className="">T & C</a>
                    </li>
                    <li>
                        <button className='text-sm lg:text-base 2xl:text-xl xxl:text-2xl hidden lg:block border btn-simple rounded mx-0 lg:mx-2 py-1 px-1 lg:px-3 text-color'> PURCHASE VOLCOIN </button>
                    </li>
                </ul>
            </div>
        </footer>
    )
}
