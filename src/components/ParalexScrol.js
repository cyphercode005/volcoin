import $ from "jquery";
import React from "react";

export default function ParalexScrol() {

  $(document).ready(function () {
    var containers = $(".container");
    // var containers = document.getElementsByClassName("container"); 

    if (containers.length) {
      containers.each(function () {
        var container = $(this);

        // Support small text - copy to fill screen width
        // if (
        //   container.find(".scrolling-text").outerWidth() < $(window).width()
        // ) {
        //   var windowToScrolltextRatio = Math.round(
        //     $(window).width() / container.find(".scrolling-text").outerWidth()
        //   ),
        //     scrollTextContent = container
        //       .find(".scrolling-text .scrolling-text-content")
        //       .text(),
        //     newScrollText = "";
        //   for (var i = 0; i < windowToScrolltextRatio; i++) {
        //     newScrollText += " " + scrollTextContent;
        //   }
        //   container
        //     .find(".scrolling-text .scrolling-text-content")
        //     .text(newScrollText);
        // }

        // Init variables and config
        var scrollingText = container.find(".scrolling-text"),
          scrollingTextWidth = scrollingText.outerWidth(),
          scrollingTextHeight = scrollingText.outerHeight(true),
          startLetterIndent = parseInt(scrollingText.find(".scrolling-text-content").css("font-size"), 10) / 4.8,
          startLetterIndent = Math.round(startLetterIndent),
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
            var activeText = getActiveScrollingText("right");
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
            var activeText = getActiveScrollingText("right");
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
        $(window).on("scroll", function (e) {
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
            var activeText = getActiveScrollingText("right");
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
        <div className="para-scroll-one w-1/12 mb-16 lg:mb-36 xl:mb-36">
        </div>
        <div className="flex-1 flex">
          <div className="para-scroll-two flex-1   mt-3 lg:mt-6 xl:mt-6 mb-12 lg:mb-28 xl:mb-28">
          </div>
          <div className="para-scroll-three flex-1  mt-6 lg:mt-12 xl:mt-12 mb-9 lg:mb-20 xl:mb-20">
          </div>
          <div className="para-scroll-four flex-1  mt-9 lg:mt-20 xl:mt-20 mb-6 lg:mb-12 xl:mb-12">
          </div>
          <div className="para-scroll-five flex-1 mt-12 lg:mt-28 xl:mt-28 mb-3 lg:mb-6 xl:mb-6">
          </div>
        </div>
        <div className="para-scroll-six w-1/12 mt-16 lg:mt-36 xl:mt-36">
        </div>

        <div className=" mt-0 w-full absolute">
          {styles.map((i) => (
            <div key={i} className={`${i}`}>
              <div className="scrolling-text inline-block  whitespace-nowrap overflow-hidden will-change-transform  backface-invisible">
                <span className="volmed h-8 scrolling-text-content whitespace-nowrap leading-none overflow-hidden">
                  <span className="text-6xl lg:text-8xl xl:text-10xl 2xl:text-11xl xxl:text-12xl text-border "> &nbsp;VOLCOIN&nbsp;</span>
                  <span class="inline-block align-middle mb-0 lg:mb-4">
                    <svg className="top-1/2 transform -translate-y-1/2 h-8 lg:h-16" width="136" height="76" viewBox="0 0 136 76" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M134.667 38.0189C134.667 58.2061 104.819 74.571 68 74.571M134.667 38.0189C134.667 17.8317 104.819 1.4668 68 1.4668M134.667 38.0189H1.33331M68 74.571C31.181 74.571 1.33331 58.2061 1.33331 38.0189M68 74.571V1.4668M68 74.571C85.8835 74.571 97.5921 58.2061 97.5921 38.0189C97.5921 17.8317 85.8835 1.4668 68 1.4668M68 74.571C50.1165 74.571 38.4079 58.2061 38.4079 38.0189C38.4079 17.8317 50.1165 1.4668 68 1.4668M68 74.571C85.8835 74.571 119.391 58.2061 119.391 38.0189C119.391 17.8317 85.8835 1.4668 68 1.4668M68 74.571C50.1165 74.571 17.6999 58.2061 17.6999 38.0189C17.6999 17.8317 50.1165 1.4668 68 1.4668M68 74.571C74.6889 74.571 80.1113 58.2061 80.1113 38.0189C80.1113 17.8317 74.6889 1.4668 68 1.4668M68 74.571C61.3111 74.571 55.8887 58.2061 55.8887 38.0189C55.8887 17.8317 61.3111 1.4668 68 1.4668M1.33331 38.0189C1.33331 17.8317 31.181 1.4668 68 1.4668" stroke="#141414" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                    </svg>
                  </span>
                  <span className="text-6xl lg:text-8xl xl:text-10xl 2xl:text-11xl xxl:text-12xl text-border ">&nbsp;VOLCOIN&nbsp;
                  </span>
                  <span class="inline-block align-middle mb-0 lg:mb-4">
                    <svg className="top-1/2 transform -translate-y-1/2 h-8 lg:h-16" width="136" height="76" viewBox="0 0 136 76" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M134.667 38.0189C134.667 58.2061 104.819 74.571 68 74.571M134.667 38.0189C134.667 17.8317 104.819 1.4668 68 1.4668M134.667 38.0189H1.33331M68 74.571C31.181 74.571 1.33331 58.2061 1.33331 38.0189M68 74.571V1.4668M68 74.571C85.8835 74.571 97.5921 58.2061 97.5921 38.0189C97.5921 17.8317 85.8835 1.4668 68 1.4668M68 74.571C50.1165 74.571 38.4079 58.2061 38.4079 38.0189C38.4079 17.8317 50.1165 1.4668 68 1.4668M68 74.571C85.8835 74.571 119.391 58.2061 119.391 38.0189C119.391 17.8317 85.8835 1.4668 68 1.4668M68 74.571C50.1165 74.571 17.6999 58.2061 17.6999 38.0189C17.6999 17.8317 50.1165 1.4668 68 1.4668M68 74.571C74.6889 74.571 80.1113 58.2061 80.1113 38.0189C80.1113 17.8317 74.6889 1.4668 68 1.4668M68 74.571C61.3111 74.571 55.8887 58.2061 55.8887 38.0189C55.8887 17.8317 61.3111 1.4668 68 1.4668M1.33331 38.0189C1.33331 17.8317 31.181 1.4668 68 1.4668" stroke="#141414" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                    </svg>
                  </span>
                  <span className="text-6xl lg:text-8xl xl:text-10xl 2xl:text-11xl xxl:text-12xl text-border ">&nbsp;VOLCOIN&nbsp;
                  </span>
                  <span class="inline-block align-middle mb-0 lg:mb-4">
                    <svg className="top-1/2 transform -translate-y-1/2 h-8 lg:h-16" width="136" height="76" viewBox="0 0 136 76" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M134.667 38.0189C134.667 58.2061 104.819 74.571 68 74.571M134.667 38.0189C134.667 17.8317 104.819 1.4668 68 1.4668M134.667 38.0189H1.33331M68 74.571C31.181 74.571 1.33331 58.2061 1.33331 38.0189M68 74.571V1.4668M68 74.571C85.8835 74.571 97.5921 58.2061 97.5921 38.0189C97.5921 17.8317 85.8835 1.4668 68 1.4668M68 74.571C50.1165 74.571 38.4079 58.2061 38.4079 38.0189C38.4079 17.8317 50.1165 1.4668 68 1.4668M68 74.571C85.8835 74.571 119.391 58.2061 119.391 38.0189C119.391 17.8317 85.8835 1.4668 68 1.4668M68 74.571C50.1165 74.571 17.6999 58.2061 17.6999 38.0189C17.6999 17.8317 50.1165 1.4668 68 1.4668M68 74.571C74.6889 74.571 80.1113 58.2061 80.1113 38.0189C80.1113 17.8317 74.6889 1.4668 68 1.4668M68 74.571C61.3111 74.571 55.8887 58.2061 55.8887 38.0189C55.8887 17.8317 61.3111 1.4668 68 1.4668M1.33331 38.0189C1.33331 17.8317 31.181 1.4668 68 1.4668" stroke="#141414" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                    </svg>
                  </span>
                  <span className="text-6xl lg:text-8xl xl:text-10xl 2xl:text-11xl xxl:text-12xl text-border ">&nbsp;VOLCOIN&nbsp;
                  </span>
                  <span class="inline-block align-middle mb-0 lg:mb-4">
                    <svg className="top-1/2 transform -translate-y-1/2 h-8 lg:h-16" width="136" height="76" viewBox="0 0 136 76" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M134.667 38.0189C134.667 58.2061 104.819 74.571 68 74.571M134.667 38.0189C134.667 17.8317 104.819 1.4668 68 1.4668M134.667 38.0189H1.33331M68 74.571C31.181 74.571 1.33331 58.2061 1.33331 38.0189M68 74.571V1.4668M68 74.571C85.8835 74.571 97.5921 58.2061 97.5921 38.0189C97.5921 17.8317 85.8835 1.4668 68 1.4668M68 74.571C50.1165 74.571 38.4079 58.2061 38.4079 38.0189C38.4079 17.8317 50.1165 1.4668 68 1.4668M68 74.571C85.8835 74.571 119.391 58.2061 119.391 38.0189C119.391 17.8317 85.8835 1.4668 68 1.4668M68 74.571C50.1165 74.571 17.6999 58.2061 17.6999 38.0189C17.6999 17.8317 50.1165 1.4668 68 1.4668M68 74.571C74.6889 74.571 80.1113 58.2061 80.1113 38.0189C80.1113 17.8317 74.6889 1.4668 68 1.4668M68 74.571C61.3111 74.571 55.8887 58.2061 55.8887 38.0189C55.8887 17.8317 61.3111 1.4668 68 1.4668M1.33331 38.0189C1.33331 17.8317 31.181 1.4668 68 1.4668" stroke="#141414" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                    </svg>
                  </span>
                  <span className="text-6xl lg:text-8xl xl:text-10xl 2xl:text-11xl xxl:text-12xl text-border ">&nbsp;VOLCOIN&nbsp;
                  </span>
                  <span class="inline-block align-middle mb-0 lg:mb-4">
                    <svg className="top-1/2 transform -translate-y-1/2 h-8 lg:h-16" width="136" height="76" viewBox="0 0 136 76" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M134.667 38.0189C134.667 58.2061 104.819 74.571 68 74.571M134.667 38.0189C134.667 17.8317 104.819 1.4668 68 1.4668M134.667 38.0189H1.33331M68 74.571C31.181 74.571 1.33331 58.2061 1.33331 38.0189M68 74.571V1.4668M68 74.571C85.8835 74.571 97.5921 58.2061 97.5921 38.0189C97.5921 17.8317 85.8835 1.4668 68 1.4668M68 74.571C50.1165 74.571 38.4079 58.2061 38.4079 38.0189C38.4079 17.8317 50.1165 1.4668 68 1.4668M68 74.571C85.8835 74.571 119.391 58.2061 119.391 38.0189C119.391 17.8317 85.8835 1.4668 68 1.4668M68 74.571C50.1165 74.571 17.6999 58.2061 17.6999 38.0189C17.6999 17.8317 50.1165 1.4668 68 1.4668M68 74.571C74.6889 74.571 80.1113 58.2061 80.1113 38.0189C80.1113 17.8317 74.6889 1.4668 68 1.4668M68 74.571C61.3111 74.571 55.8887 58.2061 55.8887 38.0189C55.8887 17.8317 61.3111 1.4668 68 1.4668M1.33331 38.0189C1.33331 17.8317 31.181 1.4668 68 1.4668" stroke="#141414" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                    </svg>
                  </span>
                  <span className="text-6xl lg:text-8xl xl:text-10xl 2xl:text-11xl xxl:text-12xl text-border ">&nbsp;VOLCOIN&nbsp;
                  </span>
                  <span class="inline-block align-middle mb-0 lg:mb-4">
                    <svg className="top-1/2 transform -translate-y-1/2 h-8 lg:h-16" width="136" height="76" viewBox="0 0 136 76" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M134.667 38.0189C134.667 58.2061 104.819 74.571 68 74.571M134.667 38.0189C134.667 17.8317 104.819 1.4668 68 1.4668M134.667 38.0189H1.33331M68 74.571C31.181 74.571 1.33331 58.2061 1.33331 38.0189M68 74.571V1.4668M68 74.571C85.8835 74.571 97.5921 58.2061 97.5921 38.0189C97.5921 17.8317 85.8835 1.4668 68 1.4668M68 74.571C50.1165 74.571 38.4079 58.2061 38.4079 38.0189C38.4079 17.8317 50.1165 1.4668 68 1.4668M68 74.571C85.8835 74.571 119.391 58.2061 119.391 38.0189C119.391 17.8317 85.8835 1.4668 68 1.4668M68 74.571C50.1165 74.571 17.6999 58.2061 17.6999 38.0189C17.6999 17.8317 50.1165 1.4668 68 1.4668M68 74.571C74.6889 74.571 80.1113 58.2061 80.1113 38.0189C80.1113 17.8317 74.6889 1.4668 68 1.4668M68 74.571C61.3111 74.571 55.8887 58.2061 55.8887 38.0189C55.8887 17.8317 61.3111 1.4668 68 1.4668M1.33331 38.0189C1.33331 17.8317 31.181 1.4668 68 1.4668" stroke="#141414" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                    </svg>
                  </span>
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

// &nbsp;
//      <div className='video-container'>
//     <video className=''
//       src="/Videos/ParScrVid1.mp4"
//       loop={true}
//       autoPlay={true}
//       muted={true} />
//      </div>