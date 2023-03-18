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
    <nav className='volmed items-center flex flex-1 justify-between pt-5 2xl:pt-9 xxl:pt-10 mx-1'>
      <section className='flex flex-1 px-2 lg:px-12 xl:px-12 2xl:px-12 xxl:px-12'>
        <img className='h-6 lg:h-6 xl:h-6 2xl:h-8 xxl:h-9 px-2' src="/Photos/logo.png" alt="Logo" />
        <span className='invisible lg:visible xl:visible 2xl:visible xxl:visible text-white  text-xs lg:text-base xl:text-base 2xl:text-lg xxl:text-2xl'>VOLCOIN</span>
      </section>  
      <section className='flex flex-none lg:flex-none xl:flex-none 2xl:flex-none xxl:flex-none pr-4 lg:pr-16 xl:pr-16'>
        <button className='hidden lg:block xl:block 2xl:block xxl:block rounded text-gray-400 px-3 mx-0 lg:mx-2 xl:mx-2 text-xs lg:text-base xl:text-base 2xl:text-xl xxl:text-2xl' onClick={handleOpenModal}> WHITEPAPER </button>
        <button className='border border-gray-400 rounded mx-0 lg:mx-2 xl:mx-2 py-1 px-2 lg:px-2 xl:px-3  text-gray-400 text-xs lg:text-base xl:text-base 2xl:text-xl xxl:text-2xl'> PURCHASE VOLCOIN </button>
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
