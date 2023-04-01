import React from 'react';

export default function ParalexScrol() {

  return (
    <>
      <div className="flex relative overflow-hidden">
     <div className='video-container'>
     <video className=''
      src="/Videos/volVideo.mp4"
      loop={true}
      autoPlay={true}
      muted={true}
      // controls={true}
    />
     </div>
        <div className="absolute w-full flex">
          <div className=" w-1/12 paraCol h-0">
          </div>
          <div className="flex justify-between	flex-1">
            <div className="paraCol flex-1 h-3 lg:h-6">
            </div>
            <div className="paraCol flex-1 h-6 lg:h-12">
            </div>
            <div className="paraCol flex-1 h-9 lg:h-20">
            </div>
            <div className="paraCol flex-1 h-12 lg:h-28">
            </div>
          </div>
          <div className="w-1/12 paraCol h-16 lg:h-36">
          </div></div>
       <div className="bottom-0 absolute	w-full flex items-end">
        <div className=" w-1/12  h-16 lg:h-36 paraCol"> </div>
        <div  className="flex justify-between	flex-1 items-end">
        <div className=" flex-1 h-12 lg:h-28 paraCol"></div>
        <div className=" flex-1 h-9 lg:h-20 paraCol"></div>
        <div className=" flex-1 h-6 lg:h-12 paraCol"></div>
        <div className=" flex-1 h-3 lg:h-6 paraCol"></div>
        </div>
        <div className="w-1/12 h-0 paraCol"></div>
        </div>
        </div>
            </>
  );
}

