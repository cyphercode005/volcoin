import React, { useState } from 'react';

export default function Navbar() {
  const [showModal, setShowModal] = useState(false);

  const handleOpenModal = () => {
    setShowModal(true);
    document.body.style.overflow = 'hidden';
  };

  const handleCloseModal = () => {
    setShowModal(false);
    document.body.style.overflow = 'auto';
  };

  return (
    <nav className='volmed items-center flex flex-1 justify-between pt-5 lg:pt-8 2xl:pt-10 mx-1'>
      <section className='flex flex-1 px-2 lg:px-12'>
        <img className='h-6 2xl:h-8 xxl:h-9 px-2' src="/Photos/logo.png" alt="Logo" />
        <span className='invisible lg:visible text-white text-xs lg:text-lg 2xl:text-xl'>VOLCOIN</span>
      </section>  
      <section className='flex pr-4 lg:pr-16'>
        <button className='hidden lg:block rounded text-white
px-3 mx-0 lg:mx-2 text-xs lg:text-base 2xl:text-2xl' onClick={handleOpenModal}> WHITEPAPER </button>
        <button className='border btn-simple rounded mx-0 lg:mx-2 py-1 px-2 lg:px-3 text-color text-xs lg:text-base 2xl:text-2xl'> PURCHASE VOLCOIN </button>  
      </section>
      {showModal && (
        <div className='fixed inset-0 bg-black bg-opacity-70 flex justify-center items-center'>
          <div className=''>
            <div className='flex justify-end'>
              <button className=' text-gray-900 bg-gradient-to-r from-lime-200 via-lime-400 to-lime-500 hover:bg-gradient-to-br focus:ring-2 focus:outline-none focus:ring-lime-300 dark:focus:ring-lime-800 shadow-md shadow-lime-500/50 dark:shadow-lg dark:shadow-lime-800/80 font-medium rounded-lg text-sm px-4 py-1 text-center' onClick={handleCloseModal}>Close WhitePaper</button>
            </div>
            <div className='mt-2'>
              <iframe src='/Files/VolCoin.pdf' className='' style={{ height: '90vh', width: '60vw' }} title='Whitepaper' />
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
