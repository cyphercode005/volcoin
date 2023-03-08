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
          startLetterIndent =
            parseInt(
              scrollingText.find(".scrolling-text-content").css("font-size"),
              10
            ) / 4.8,
          startLetterIndent = Math.round(startLetterIndent),
          scrollAmountBoundary = Math.abs(
            $(window).width() - scrollingTextWidth
          ),
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
      });
    }
  });
  const divContent = [
    <div className="container relative w-screen overflow-visible">
      <div className="py-1 lg:py-2 xl:py-2 scrolling-text inline-block will-change-transform backface-invisible">
        <span className="text-3xl lg:text-7xl xl:text-7xl 2xl:text-9xl scrolling-text-content text-black whitespace-nowrap ">
          VOLCOIN
        </span>
      </div>
    </div>,
    <div className="container relative w-screen overflow-visible left-to-right">
      <div className="py-1 lg:py-3 xl:py-3  scrolling-text inline-block	will-change-transform	backface-invisible">
        <span className="text-3xl lg:text-7xl xl:text-7xl 2xl:text-9xl scrolling-text-content text-black whitespace-nowrap ">
          VOLCOIN
        </span>
      </div>
    </div>,
    <div className="container relative w-screen overflow-visible">
      <div className="py-1 lg:py-3 xl:py-3 scrolling-text inline-block  will-change-transform	backface-invisible">
        <span className=" text-3xl lg:text-7xl xl:text-7xl 2xl:text-9xl scrolling-text-content text-black whitespace-nowrap	">
          VOLCOIN
        </span>
      </div>
    </div>,
    <div className="container relative w-screen overflow-visible left-to-right">
      <div className="py-1 lg:py-3 xl:py-3 scrolling-text inline-block  will-change-transform	backface-invisible">
        <span className="  text-3xl lg:text-7xl xl:text-7xl 2xl:text-9xl scrolling-text-content text-black whitespace-nowrap	">
          VOLCOIN
        </span>
      </div>
    </div>,
    <div className="container relative w-screen overflow-visible">
      <div className="py-1 lg:py-3 xl:py-3 scrolling-text inline-block  will-change-transform	backface-invisible">
        <span className=" text-3xl lg:text-7xl xl:text-7xl 2xl:text-9xl scrolling-text-content text-black whitespace-nowrap	">
          VOLCOIN
        </span>
      </div>
    </div>,
    <div className="container relative w-screen overflow-visible left-to-right">
      <div className=" py-1 lg:py-3 xl:py-3 scrolling-text inline-block  will-change-transform	backface-invisible">
        <span className="  text-3xl lg:text-7xl xl:text-7xl 2xl:text-9xl scrolling-text-content text-black whitespace-nowrap	">
          VOLCOIN
        </span>
      </div>
    </div>,
    <div className="container relative w-screen overflow-visible">
      <div className="py-1 lg:py-3 xl:py-3 scrolling-text inline-block  will-change-transform	backface-invisible">
        <span className=" text-3xl lg:text-7xl xl:text-7xl 2xl:text-9xl scrolling-text-content text-black whitespace-nowrap	">
          VOLCOIN
        </span>
      </div>
    </div>,
    <div className="container relative w-screen overflow-visible left-to-right">
      <div className=" py-1 lg:py-3 xl:py-3 scrolling-text inline-block  will-change-transform	backface-invisible">
        <span className="  text-3xl lg:text-7xl xl:text-7xl 2xl:text-9xl scrolling-text-content text-black whitespace-nowrap	">
          VOLCOIN
        </span>
      </div>
    </div>,
    <div className="container relative w-screen overflow-visible">
      <div className="py-1 lg:py-3 xl:py-3 scrolling-text inline-block  will-change-transform	backface-invisible">
        <span className=" text-3xl lg:text-7xl xl:text-7xl 2xl:text-9xl scrolling-text-content text-black whitespace-nowrap	">
          VOLCOIN
        </span>
      </div>
    </div>
  ];
  return (
    <>
      <div className="w-full h-80 lg:h-screen xl:h-screen flex my-5 relative overflow-hidden">
        <div className="text-black para-scroll w-32 mb-16 lg:mb-36 xl:mb-36">
        </div>
        <div className="text-black para-scroll w-1/5	mt-3 lg:mt-6 xl:mt-6 mb-12 lg:mb-28 xl:mb-28">
        </div>
        <div className="text-black para-scroll w-1/5	mt-6 lg:mt-12 xl:mt-12 mb-9 lg:mb-20 xl:mb-20">
        </div>
        <div className="text-black para-scroll w-1/5	mt-9 lg:mt-20 xl:mt-20 mb-6 lg:mb-12 xl:mb-12">
        </div>
        <div className="text-black para-scroll w-1/5	mt-12 lg:mt-28 xl:mt-28 mb-3 lg:mb-6 xl:mb-6">
        </div>
        <div className="text-black para-scroll w-36	mt-16 lg:mt-36 xl:mt-36">
        </div>
        <div className=" mt-0 w-full absolute">
          {divContent.map((content, i) => (
            <div key={i}>{content}</div>
          ))}
        </div>
      </div>
    </>
  );
}
