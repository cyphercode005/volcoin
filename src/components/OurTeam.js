import React from 'react'

export default function OurTeam() {
    const teamMembers = [
        {
          name: 'Kieran Parker',
          role: 'CHIEF DESIGN OFFICER // PARTNER',
          imageSrc: '/Photos/ourteam3.png',
          socialMedia: [
            { name: 'TWITTER', link: 'https://twitter.com/' },
            { name: 'LINKEDIN', link: 'https://linkedin.com/' }
          ]
        },
        {
          name: 'Kieran Parker',
          role: 'CHIEF DESIGN OFFICER // PARTNER',
          imageSrc: '/Photos/ourteam3.png',
          socialMedia: [
            { name: 'TWITTER', link: 'https://twitter.com/' },
            { name: 'LINKEDIN', link: 'https://linkedin.com/' }
          ]
        },
        {
          name: 'Kieran Parker',
          role: 'CHIEF DESIGN OFFICER // PARTNER',
          imageSrc: '/Photos/ourteam3.png',
          socialMedia: [
            { name: 'TWITTER', link: 'https://twitter.com/' },
            { name: 'LINKEDIN', link: 'https://linkedin.com/' }
          ]
        },
        {
          name: 'Kieran Parker',
          role: 'CHIEF DESIGN OFFICER // PARTNER',
          imageSrc: '/Photos/ourteam3.png',
          socialMedia: [
            { name: 'TWITTER', link: 'https://twitter.com/' },
            { name: 'LINKEDIN', link: 'https://linkedin.com/' }
          ]
        },
      ];
    return (
        <div className='volmed mt-12 lg:mt-32 2xl:mt-36 xxl:mt-48 ml-4 lg:ml-16 mb-10 lg:mb-32 2xl:mb-36 xxl:mb-48'>
            <div className='flex justify-between '>
                <div className='w-full lg:w-2/3 pt-16 lg:pt-20 2xl:pt-28'> 
                <img className='h-24 lg:h-32 2xl:h-40' src="/Photos/ourteam1.png" alt=''/> 
                <div className='pt-6 lg:pt-12 2xl:pt-20 text-white text-xl lg:text-4xl 2xl:text-6xl w-full'>Our team etc etc lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes,</div>
                </div>
                <div className=''> <img className='h-72 lg:h-96 xxl:h-auto' src="/Photos/ourteam2.png" alt="" /> </div>
            </div>
            <div className='pr-4 lg:pr-16 mt-16 lg:flex lg:justify-between grid grid-rows-2 grid-flow-col'>
  {teamMembers.map((member, index) => (
    <div key={index} className={`flex flex-col mt-${index === 0 ? '0' : '1'} lg:mt-0`}>
      <img className='w-36 lg:w-72 xxl:w-96' src={member.imageSrc} alt='' />
      <span className='pt-2 text-sm lg:text-lg 2xl:text-3xl text-white'>{member.name}</span>
      <span className='text-xs lg:text-md 2xl:text-xl text-color pr-4 pt-1'>{member.role}</span>
      <span>
        {member.socialMedia.map((social, index) => (
          <button key={index} className='rounded text-xs lg:text-md 2xl:text-xl text-color pr-2 lg:pr-3'>
            {social.name}
          </button>
        ))}
      </span>
    </div>
  ))}
</div>

        </div>)
}
