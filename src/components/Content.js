import React from 'react'

export default function Content() {
  
  return (
    <div className='volmed mt-10 lg:mt-0 ml-4 lg:ml-16'>
      <div className='justify-between flex'>
        <div className='w-full lg:w-2/3 pt-4 lg:pt-20'> 
         <img className='h-20 lg:h-32 2xl:h-40' src="/Photos/content1.png" alt='' /> 
        <div className=' pt-4 lg:pt-12 2xl:pt-20 text-white text-xl lg:text-4xl 2xl:text-6xl w-full'>
        With volatility a constant threat to any crypto currency trader, we are offering the first ever coin which will allow you to hedge against against the unpredictable swings in the market.
      </div>
        </div>
        <div className='pt-0'> <img className='h-72 lg:h-96 xxl:h-auto' src="Photos/content2.png" alt=""/> </div>
      </div>
      <div className='mt-16 lg:mt-28 flex flex-col lg:flex-row pr-4 lg:pr-16'>
  {Array.from({ length: 4 }, (_, index) => (
    <div
      key={index}
      className={`pl-6 lg:pl-0 lg:pr-12 2xl:pr-20 ${
        index < 3 ? 'border-l-2 lg:border-l-0' : ''
      } ${index < 3 ? 'lg:border-t-2' : ''} text-white text-lg pr-8 pb-6 lg:pb-0 lg:pt-6 2xl:pt-8`}
    >
      <span className='2xl:text-xl'>{`0${index + 1}.`}</span>
      <h3 className='pt-2 2xl:text-4xl'>
        {index === 0 ? 'Notice Trend' : index === 1 ? 'Purchase' : index === 2 ? 'Hold' : 'Sell'}
      </h3>
      <p className='text-sm pt-2 2xl:text-xl'>
        Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget
        dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes,
      </p>
    </div>
  ))}
</div>


    </div>
  )
}
