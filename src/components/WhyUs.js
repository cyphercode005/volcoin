import React from 'react'

export default function WhyUs() {
  const data = [
    {
      id: 1,
      imageSrc: '/Photos/whyus3.png',
      imageAlt: 'Image whyus3',
      title: 'Secure',
      description: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes,'
    },
    {
      id: 2,
      imageSrc: '/Photos/whyus3.png',
      imageAlt: 'Image whyus3',
      title: 'Scale',
      description: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes,'
    },
    {
      id: 3,
      imageSrc: '/Photos/whyus3.png',
      imageAlt: 'Image whyus3',
      title: 'Something Else',
      description: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes,'
    },
    {
      id: 4,
      imageSrc: '/Photos/whyus3.png',
      imageAlt: 'Image whyus3',
      title: 'Something Else',
      description: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes,'
    }
  ];
  return (
    <div className='volmed mt-20 lg:mt-24 xl:mt-32 2xl:mt-36 xxl:mt-48 ml-4 lg:ml-16'>
      <div className='justify-between flex'>
        <div className='w-full lg:w-2/3 pt-20 2xl:pt-28'> 
        <img className='h-20 lg:h-28 2xl:h-40' src="/Photos/whyus1.png" alt='' /> 
        <div className='pt-12 2xl:pt-20 text-white text-xl lg:text-4xl 2xl:text-6xl w-full'> Why trust/use us etc etc lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes,</div>
        </div>
        <div className=''> <img className='h-72 lg:h-96 xxl:h-auto' src="/Photos/whyus2.png" alt="" /> </div>
      </div>
      <div className='pr-4 lg:pr-16 pt-16 lg:pt-24 2xl:pt-32 flex flex-col lg:flex-row'>
  {data.map(item => (
    <div key={item.id} className='w-full pr-8 lg:pr-12 2xl:pr-20 text-white text-lg flex flex-row lg:flex-col'>
      <img className='h-6 lg:h-10 2xl:h-16 w-10 2xl:w-16' src={item.imageSrc} alt={item.imageAlt} />
      <section className='pt-0 lg:pt-5 pl-4 lg:pl-0'>
        <h3 className='2xl:text-4xl'>{item.title}</h3>
        <p className='text-sm pt-2 pb-8 lg:border-b-2 2xl:text-xl'>{item.description}</p>
      </section>
    </div>
  ))}
</div>

    </div>
  )
}
