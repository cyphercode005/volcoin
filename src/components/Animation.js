// import React, { useEffect } from 'react';

// export default function Animation() {

//     const MyComponent = () => {
//         useEffect(() => {
//             // window.addEventListener("wheel", handleWheel);
//           const containers = document.querySelectorAll('.container');
      
//           if (containers.length) {
//             containers.forEach((container) => {
//                 if (container) {
//                     const scrollingText = container.querySelector('.scrolling-text');
//                     const scrollingTextContent = container.querySelector('.scrolling-text .scrolling-text-content').textContent;
//                     const windowToScrollTextRatio = Math.round(window.innerWidth / scrollingText.offsetWidth);
//                     let newScrollText = '';
              
//                     if (scrollingText.offsetWidth < window.innerWidth) {
//                       for (let i = 0; i < windowToScrollTextRatio; i++) {
//                         newScrollText += ` ${scrollingTextContent}`;
//                       }
              
//                       container.querySelector('.scrolling-text .scrolling-text-content').textContent = newScrollText;
//                     }}
//                     if (container) {
//                         const scrollingText = container.querySelector('.scrolling-text');
//                         const scrollingTextContent = scrollingText.querySelector('.scrolling-text-content');
//                         const scrollingTextWidth = scrollingText.offsetWidth;
//                         const scrollingTextHeight = scrollingText.offsetHeight;
//                         const startLetterIndent = parseInt(window.getComputedStyle(scrollingTextContent).fontSize, 10) / 4.8;
//                         const startLetterIndentRounded = Math.round(startLetterIndent);
//                         const scrollAmountBoundary = Math.abs(window.innerWidth - scrollingTextWidth);
//                         let transformAmount = 0;
//                         let leftBound = 0;
//                         let rightBound = scrollAmountBoundary;
//                         const transformDirection = container.classList.contains('left-to-right') ? -1 : 1;
//                         const transformSpeed = 6;
//                         if (container.getAttribute('speed')) {
//                             transformSpeed = container.getAttribute('speed');
//                           }
                    
//                         // Add your logic here
//                       }
//                       if (container.getAttribute('speed')) {
//                         transformSpeed = container.getAttribute('speed');
//                       }
                
//                       const scrollingTextCopy = scrollingText.cloneNode(true);
//                       scrollingTextCopy.classList.add('scrolling-text-copy');
//                       container.appendChild(scrollingTextCopy);
//                       container.style.height = scrollingTextHeight + 'px';
                
//                       const getActiveScrollingText = (direction) => {
//                         const firstScrollingText = container.querySelector('.scrolling-text:nth-child(1)');
//                         const secondScrollingText = container.querySelector('.scrolling-text:nth-child(2)');
                
//                         const firstScrollingTextLeft = parseInt(container.querySelector('.scrolling-text:nth-child(1)').style.left, 10);
//                         const secondScrollingTextLeft = parseInt(container.querySelector('.scrolling-text:nth-child(2)').style.left, 10);
                
//                         if (direction === 'left') {
//                           return firstScrollingTextLeft < secondScrollingTextLeft ? secondScrollingText : firstScrollingText;
//                         } else if (direction === 'right') {
//                           return firstScrollingTextLeft > secondScrollingTextLeft ? secondScrollingText : firstScrollingText;
//                         }
//                       };
//                       const handleWheel = (e) => {
//                         const delta = e.deltaY;
                    
//                         if (delta > 0) {
//                           // going down
//                           transformAmount += transformSpeed * transformDirection;
//                           containerRef.current.querySelector(".scrolling-text .scrolling-text-content").style.transform = "skewX(10deg)";
//                         } else {
//                           transformAmount -= transformSpeed * transformDirection;
//                           containerRef.current.querySelector(".scrolling-text .scrolling-text-content").style.transform = "skewX(-10deg)";
//                         }
//                         setTimeout(() => {
//                           containerRef.current.querySelector(".scrolling-text").style.transform = `translate3d(${transformAmount * -1}px, 0, 0)`;
//                         }, 100);
//                         setTimeout(() => {
//                           containerRef.current.querySelector(".scrolling-text .scrolling-text-content").style.transform = "skewX(0)";
//                         }, 500);
                    
//                         // Boundaries
//                         if (transformAmount < leftBound) {
//                           const activeText = getActiveScrollingText("left");
//                           activeText.style.left = `${Math.round(
//                             leftBound - scrollingTextWidth - startLetterIndent
//                           )}px`;
//                           leftBound = parseInt(activeText.style.left, 10);
//                           rightBound =
//                             leftBound + scrollingTextWidth + scrollAmountBoundary + startLetterIndent;
//                         } else if (transformAmount > rightBound) {
//                           const activeText = getActiveScrollingText("right");
//                           activeText.style.left = `${Math.round(
//                             rightBound +
//                               scrollingTextWidth -
//                               scrollAmountBoundary +
//                               startLetterIndent
//                           )}px`;
//                           rightBound += scrollingTextWidth + startLetterIndent;
//                           leftBound =
//                             rightBound - scrollingTextWidth - scrollAmountBoundary - startLetterIndent;
//                         }
//                       };
                




//             });
//             return () => {
//                 window.removeEventListener("wheel", handleWheel);
//               };
//           }
//         }, []);
//     }
//     const styles = [
//     "container relative w-screen overflow-visible",
//     "container relative w-screen overflow-visible left-to-right",
//     "container relative w-screen overflow-visible",
//     "container relative w-screen overflow-visible left-to-right",
//     "container relative w-screen overflow-visible",
//     "container relative w-screen overflow-visible left-to-right",
//     "container relative w-screen overflow-visible",
//     "container relative w-screen overflow-visible left-to-right",
//     "container relative w-screen overflow-visible",
//     "container relative w-screen overflow-visible left-to-right"
//   ];

//   return (
//     <>
//       <div className="w-full h-80 lg:h-screen xl:h-100 2xl:h-110 xxl:h-120 flex relative overflow-hidden">
//         <div className="para-scroll w-1/12 mb-16 lg:mb-36 xl:mb-36">
//         </div>
//         <div  className="flex-1 flex">
//         <div className="para-scroll flex-1   mt-3 lg:mt-6 xl:mt-6 mb-12 lg:mb-28 xl:mb-28">
//         </div>
//         <div className="para-scroll flex-1  mt-6 lg:mt-12 xl:mt-12 mb-9 lg:mb-20 xl:mb-20">
//         </div>
//         <div className="para-scroll flex-1  mt-9 lg:mt-20 xl:mt-20 mb-6 lg:mb-12 xl:mb-12">
//         </div>
//         <div className="para-scroll flex-1 mt-12 lg:mt-28 xl:mt-28 mb-3 lg:mb-6 xl:mb-6">
//         </div>
//         </div>
//         <div className="para-scroll w-1/12 mt-16 lg:mt-36 xl:mt-36">
//         </div>
        
//         <div className=" mt-0 w-full absolute">
//           {styles.map((i) => (
//             <div key={i} className={`${i}`}>
//               <div className="scrolling-text inline-block  will-change-transform  backface-invisible"> 
//               <span className="text-6xl lg:text-8xl xl:text-8xl 2xl:text-10xl xxl:text-11xl scrolling-text-content whitespace-nowrap text-border leading-none"> VOLCOIN ↂ</span>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </>
//   );
// }




// // import React from 'react';


// // export default function ParalexScrol() {
  
// //   return (
// //     <>
// //       <div className="flex relative overflow-hidden">
// //      <div className='video-container'>
// //     <video className=''
// //       src="/Videos/ParScrVid1.mp4"
// //       loop={true}
// //       autoPlay={true}
// //       muted={true} />
    
// //      </div>
// //         <div className="absolute w-full flex">
// //           <div className=" w-1/12 paraCol h-0">
// //           </div>
// //           <div className="flex justify-between	flex-1">
// //             <div className="paraCol flex-1 h-3 lg:h-6">
// //             </div>
// //             <div className="paraCol flex-1 h-6 lg:h-12">
// //             </div>
// //             <div className="paraCol flex-1 h-9 lg:h-20">
// //             </div>
// //             <div className="paraCol flex-1 h-12 lg:h-28">
// //             </div>
// //           </div>
// //           <div className="w-1/12 paraCol h-16 lg:h-36">
// //           </div></div>
// //        <div className="bottom-0 absolute	w-full flex items-end">
// //         <div className=" w-1/12  h-16 lg:h-36 paraCol"> </div>
// //         <div  className="flex justify-between	flex-1 items-end">
// //         <div className=" flex-1 h-12 lg:h-28 paraCol"></div>
// //         <div className=" flex-1 h-9 lg:h-20 paraCol"></div>
// //         <div className=" flex-1 h-6 lg:h-12 paraCol"></div>
// //         <div className=" flex-1 h-3 lg:h-6 paraCol"></div>
// //         </div>
// //         <div className="w-1/12 h-0 paraCol"></div>
// //         </div>
// //         </div>
// //             </>
// //   );
// // }

