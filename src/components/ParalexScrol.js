import $ from "jquery";
import React from "react";

export default function ParalexScrol() {

  $(document).ready(function () {
    var containers = $(".container");

    if (containers.length) {
      containers.each(function () {
        var container = $(this);

        // Support small text - copy to fill screen width
        if (
          container.find(".scrolling-text").outerWidth() < $(window).width()
        ) {
          var windowToScrolltextRatio = Math.round(
            $(window).width() / container.find(".scrolling-text").outerWidth()
          ),
            scrollTextContent = container
              .find(".scrolling-text .scrolling-text-content")
              .text(),
            newScrollText = "";
          for (var i = 0; i < windowToScrolltextRatio; i++) {
            newScrollText += " " + scrollTextContent;
          }
          container
            .find(".scrolling-text .scrolling-text-content")
            .text(newScrollText);
        }

        // Init variables and config
        var scrollingText = container.find(".scrolling-text"),
        scrollingTextWidth = scrollingText.outerWidth(),
        scrollingTextHeight = scrollingText.outerHeight(true),
        startLetterIndent = parseInt(scrollingText.find(".scrolling-text-content").css("font-size"), 10) / 4.8,
        // startLetterIndentRounded = Math.round(startLetterIndent),
        scrollAmountBoundary = Math.abs($(window).width() - scrollingTextWidth),
        transformAmount = 0,
        leftBound = 0,
        rightBound = scrollAmountBoundary,
        transformDirection = container.hasClass("left-to-right") ? -1 : 1,
        transformSpeed = 6;

        // Read transform speed
        if (container.attr("speed")) {
          transformSpeed = container.attr("speed");
        }

        // Make scrolling text copy for scrolling infinity
        container.append(scrollingText.clone().addClass("scrolling-text-copy"));
        container
          .find(".scrolling-text")
          .css({ position: "absolute", left: 0 });
        container.css("height", scrollingTextHeight);

        var getActiveScrollingText = function (direction) {
          var firstScrollingText = container.find(
            ".scrolling-text:nth-child(1)"
          );
          var secondScrollingText = container.find(
            ".scrolling-text:nth-child(2)"
          );

          var firstScrollingTextLeft = parseInt(
            container.find(".scrolling-text:nth-child(1)").css("left"),
            10
          );
          var secondScrollingTextLeft = parseInt(
            container.find(".scrolling-text:nth-child(2)").css("left"),
            10
          );

          if (direction === "left") {
            return firstScrollingTextLeft < secondScrollingTextLeft
              ? secondScrollingText
              : firstScrollingText;
          } else if (direction === "right") {
            return firstScrollingTextLeft > secondScrollingTextLeft
              ? secondScrollingText
              : firstScrollingText;
          }
        };

        $(window).on("wheel", function (e) {
          var delta = e.originalEvent.deltaY;

          if (delta > 0) {
            // going down
            transformAmount += transformSpeed * transformDirection;
            container
              .find(".scrolling-text .scrolling-text-content")
              .css("transform", "skewX(10deg)");
          } else {
            transformAmount -= transformSpeed * transformDirection;
            container
              .find(".scrolling-text .scrolling-text-content")
              .css("transform", "skewX(-10deg)");
          }
          setTimeout(function () {
            container
              .find(".scrolling-text")
              .css(
                "transform",
                "translate3d(" + transformAmount * -1 + "px, 0, 0)"
              );
          }, 100);
          setTimeout(function () {
            container
              .find(".scrolling-text .scrolling-text-content")
              .css("transform", "skewX(0)");
          }, 500);

          // Boundaries
          if (transformAmount < leftBound) {
            var activeText = getActiveScrollingText("left");
            activeText.css({
              left:
                Math.round(leftBound - scrollingTextWidth - startLetterIndent) +
                "px",
            });
            leftBound = parseInt(activeText.css("left"), 10);
            rightBound =
              leftBound +
              scrollingTextWidth +
              scrollAmountBoundary +
              startLetterIndent;
          } else if (transformAmount > rightBound) {
            let activeText = getActiveScrollingText("right");
            activeText.css({
              left:
                Math.round(
                  rightBound +
                  scrollingTextWidth -
                  scrollAmountBoundary +
                  startLetterIndent
                ) + "px",
            });
            rightBound += scrollingTextWidth + startLetterIndent;
            leftBound =
              rightBound -
              scrollingTextWidth -
              scrollAmountBoundary -
              startLetterIndent;
          }
        });
        $(document.body).on("touchmove", function (e) {
          var delta = e.originalEvent.deltaY;

          if (delta > 0) {
            // going down
            transformAmount += transformSpeed * transformDirection;
            container
              .find(".scrolling-text .scrolling-text-content")
              .css("transform", "skewX(10deg)");
          } else {
            transformAmount -= transformSpeed * transformDirection;
            container
              .find(".scrolling-text .scrolling-text-content")
              .css("transform", "skewX(-10deg)");
          }
          setTimeout(function () {
            container
              .find(".scrolling-text")
              .css(
                "transform",
                "translate3d(" + transformAmount * -1 + "px, 0, 0)"
              );
          }, 100);
          setTimeout(function () {
            container
              .find(".scrolling-text .scrolling-text-content")
              .css("transform", "skewX(0)");
          }, 500);

          // Boundaries
          if (transformAmount < leftBound) {
            var activeText = getActiveScrollingText("left");
            activeText.css({
              left:
                Math.round(leftBound - scrollingTextWidth - startLetterIndent) +
                "px",
            });
            leftBound = parseInt(activeText.css("left"), 10);
            rightBound =
              leftBound +
              scrollingTextWidth +
              scrollAmountBoundary +
              startLetterIndent;
          } else if (transformAmount > rightBound) {
            let activeText = getActiveScrollingText("right");
            activeText.css({
              left:
                Math.round(
                  rightBound +
                  scrollingTextWidth -
                  scrollAmountBoundary +
                  startLetterIndent
                ) + "px",
            });
            rightBound += scrollingTextWidth + startLetterIndent;
            leftBound =
              rightBound -
              scrollingTextWidth -
              scrollAmountBoundary -
              startLetterIndent;
          }
        });
      });
    }
  });
  const styles = [
    "container relative w-screen overflow-visible",
    "container relative w-screen overflow-visible left-to-right",
    "container relative w-screen overflow-visible",
    "container relative w-screen overflow-visible left-to-right",
    "container relative w-screen overflow-visible",
    "container relative w-screen overflow-visible left-to-right",
    "container relative w-screen overflow-visible",
    "container relative w-screen overflow-visible left-to-right",
    "container relative w-screen overflow-visible",
    "container relative w-screen overflow-visible left-to-right"
  ];

  return (
    <>
      <div className="w-full h-80 lg:h-screen xl:h-100 2xl:h-110 xxl:h-120 flex relative overflow-hidden">
        <div className="para-scroll w-1/12 mb-16 lg:mb-36 xl:mb-36">
        </div>
        <div  className="flex-1 flex">
        <div className="para-scroll flex-1   mt-3 lg:mt-6 xl:mt-6 mb-12 lg:mb-28 xl:mb-28">
        </div>
        <div className="para-scroll flex-1  mt-6 lg:mt-12 xl:mt-12 mb-9 lg:mb-20 xl:mb-20">
        </div>
        <div className="para-scroll flex-1  mt-9 lg:mt-20 xl:mt-20 mb-6 lg:mb-12 xl:mb-12">
        </div>
        <div className="para-scroll flex-1 mt-12 lg:mt-28 xl:mt-28 mb-3 lg:mb-6 xl:mb-6">
        </div>
        </div>
        <div className="para-scroll w-1/12 mt-16 lg:mt-36 xl:mt-36">
        </div>
        
        <div className=" mt-0 w-full absolute">
          {styles.map((i) => (
            <div key={i} className={`${i}`}>
              <div className="scrolling-text inline-block  will-change-transform  backface-invisible"> 
              <span className="text-6xl lg:text-8xl xl:text-8xl 2xl:text-10xl xxl:text-11xl scrolling-text-content whitespace-nowrap leading-none text-border"> VOLCOIN
              <span className="text-normal"> ↂ</span> </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}




// import React from 'react';


// export default function ParalexScrol() {
  
//   return (
//     <>
//       <div className="flex relative overflow-hidden">
//      <div className='video-container'>
//     <video className=''
//       src="/Videos/ParScrVid1.mp4"
//       loop={true}
//       autoPlay={true}
//       muted={true} />
    
//      </div>
//         <div className="absolute w-full flex">
//           <div className=" w-1/12 paraCol h-0">
//           </div>
//           <div className="flex justify-between	flex-1">
//             <div className="paraCol flex-1 h-3 lg:h-6">
//             </div>
//             <div className="paraCol flex-1 h-6 lg:h-12">
//             </div>
//             <div className="paraCol flex-1 h-9 lg:h-20">
//             </div>
//             <div className="paraCol flex-1 h-12 lg:h-28">
//             </div>
//           </div>
//           <div className="w-1/12 paraCol h-16 lg:h-36">
//           </div></div>
//        <div className="bottom-0 absolute	w-full flex items-end">
//         <div className=" w-1/12  h-16 lg:h-36 paraCol"> </div>
//         <div  className="flex justify-between	flex-1 items-end">
//         <div className=" flex-1 h-12 lg:h-28 paraCol"></div>
//         <div className=" flex-1 h-9 lg:h-20 paraCol"></div>
//         <div className=" flex-1 h-6 lg:h-12 paraCol"></div>
//         <div className=" flex-1 h-3 lg:h-6 paraCol"></div>
//         </div>
//         <div className="w-1/12 h-0 paraCol"></div>
//         </div>
//         </div>
//             </>
//   );
// }

